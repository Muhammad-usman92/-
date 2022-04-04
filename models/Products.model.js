
const Sequelize = require("sequelize");
const { connection } = require("../config/db");
// const productController = require("../controllers/product.controller");
const Category=require("./CategoryModal")

const Product = connection.define("product", {
	title:{
		type:Sequelize.STRING
	},
	Department: {
		type: Sequelize.STRING,
	},
	Brand_Name :{
		type: Sequelize.STRING,
	},
	Main_Category: {
		type: Sequelize.STRING,
	},
	Sub_Cat: {
		type: Sequelize.STRING,
	},
	Bar_code:{
		type:Sequelize.STRING,
	},

	price:{
		type:Sequelize.INTEGER
	}
	,
	createdAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('NOW()')
	  },
	  updatedAt: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.literal('NOW()')
	  },
	  imgurl:{
		  type:Sequelize.STRING,
		  default:null,
	  }
	  ,
	  weight:{
		type:Sequelize.INTEGER,
		default:null
		  },	
		 
});


Product.belongsTo(Category)
Category.hasMany(Product)
module.exports = Product;

// const Sequelize = require("sequelize");
// const { connection } = require("../config/db");
// // const productController = require("../controllers/product.controller");
// const Category=require("./CategoryModal")

// const Product = connection.define("product", {
// 	title: {
// 		type: Sequelize.STRING,
// 	},
// 	imgUrl: {
// 		type: Sequelize.STRING,
// 	},
// 	price: {
// 		type: Sequelize.INTEGER,
// 	},
// 	description: {
// 		type: Sequelize.STRING,
// 	},
// 	weight:{
// 		type:Sequelize.INTEGER,
// 	}
// });
// // Category.hasMany(Product)
// // Product.hasOne(Category)

// Product.belongsTo(Category)
// Category.hasMany(Product)
// module.exports = Product;
