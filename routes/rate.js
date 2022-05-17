var cron = require('node-cron');
var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b8d3d65ff6a1f7',
    password: '706cce50',
    database: 'heroku_6ebe1a057a88886'
});
const convert = require("xml-js");
const express = require("express");
const axios = require("axios")
const app = express();
cron.schedule(' 5 * * * * *', () => {
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
        for (let i = 0; i < productsDetails.length; i++) {
            console.log(productsDetails[i].barCode + "   " + productsDetails[i].price)
            var sql = `UPDATE products set products.price = ${productsDetails[i].price} where products.Bar_code = ${productsDetails[i].barCode};`;
            await con.query(sql, (error, results, fields) => {
                if (error) {
                    return console.error(error.message);
                }
                console.log('Rows affected:', results.affectedRows);
            });
            // con.end()
        }

    } catch (error) {
        console.log("Error" + error)
    }
};
fetchBags()
});  
