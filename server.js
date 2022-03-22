require("dotenv").config("../");
const express = require("express");
const { connection } = require("./config/db");
const routes = require("./routes");
const router=require("./routes/order.route")
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", routes);
app.use("/api/v1",router)

const PORT =  8080;

app.listen(process.env.PORT || PORT, async () => {
	await connection.authenticate();
	// connection.sync({ alter: true });
	console.log("listening on PORT: " + PORT);
	// console.log("hello world")
});
