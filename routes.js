const OrderRoutes = require("./routes/order.route");
const productRoutes = require("./routes/products.route");
const CategoryRout=require("./routes/CategoryRout")
const express = require("express");
const EmailRoute=require("./routes/email.route")

// rate update product

const product =require("./models/Products.model")
const { connection }= require("./config/db")
const convert = require("xml-js");
var cron = require('node-cron');
const router = express.Router();
const axios = require("axios")
const app = express();
cron.schedule(' 1 * * *', () => {
  console.log('running a task every minute');

const fetchBags = async() => {
    try {
        const data = await axios.get(
            `https://live.dawoodonline.pk/services.asmx/PriceChange`
        );

        // console.log(data.data)

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

router.use("/Category",CategoryRout)
router.use("/product", productRoutes);
router.use("/order", OrderRoutes);
router.use("/Email",EmailRoute)


module.exports = router;
