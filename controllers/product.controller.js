const res = require("express/lib/response");
const ProductService = require("../services/product.service");
// rate Update
const express = require("express");
const product =require("../models/Products.model")

const convert = require("xml-js");
var cron = require('node-cron');
const router = express.Router();
const axios = require("axios")
const app = express();
cron.schedule(' 1 * * * * *', () => {
  console.log('running a task every minute');

const fetchBags = async() => {
    try {
        const data = await axios.get(
            `https://live.dawoodonline.pk/services.asmx/PriceChange`
        );

        console.log(data.data)

        const products = convert.xml2js(data.data);
        console.log(JSON.stringify(products))
        let productsDetails = [];

        for (let i = 1; i < products.elements[0].elements.length; i++) {
            productsDetails.push({
                barCode: products.elements[0].elements[i].elements[0].elements[0].text,
                price: products.elements[0].elements[i].elements[1].elements[0].text,
            });
        }	
        console.log(productsDetails.length)
        for (let i = 0; i < productsDetails.length; i++) {
            console.log(productsDetails[i].barCode + "   " + productsDetails[i].price)
          await product.update({price:productsDetails[i].price},{
               where: {
                Bar_code:productsDetails[i].barCode

               }
           })
           
            
        }

    } catch (error) {
        console.log("Error is" + error)
    }
};
fetchBags()
}); 
// 

class ProductController {
	onGetAll = async (req, res) => {
		// console.log(req)
		const query = req.query.query ||""
		const products = await ProductService.getAll(query);

		res.status(200).json({
			success: true,
			data: products,
		});
	};
	onGetById = async (req, res) => {
		const product = await ProductService.getById(req.params.id);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
onGetCategoryId=async (req,res) => {
	const product=await ProductService.GetCategoryId(req.params.CategoryId);

	res.status(200).json({
		success:true,
		data:product,
	})

}
	onCreate = async (req, res) => {
		const product = await ProductService.create(req.body);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
	ondelete= async (req, res) => {
		const product = await ProductService.delete(req.params.id);

		res.status(200).json({
			success: true,
			data: product,
		});
	};
	onupdate= async (req, res) => {
		const product = await ProductService.update({title:req.body.title,
			Department:req.body.Department,
			Brand_Name:req.body.Brand_Name,
			Main_Category:req.body.Main_Category,
			Sub_Cat:req.body.Sub_Cat,
			Bar_code:req.body.Bar_code,
			price:req.body.price,
			imgUrl:req.body.imgUrl,
			weight:req.body.weight},{where:{id:req.param.id}});

		res.status(200).json({
			success: true,
			data: product,
		});
	};
	

}


module.exports = new ProductController();
