import express from 'express';
import mongoose from 'mongoose';
import path from "path";
import productRoutes from './routes/product.route.js'

const PORT= process.env.PORT||5000;
const app= express();

// dotenv.config();
// require('dotenv').config();

const __dirname=path.resolve();

app.use(express.json());

app.use("/api/products",productRoutes)

if(process.env.NODE_ENV==='production'){
	app.use(express.static(path.join(__dirname,'/frontend/dist')))
	
	app.get("*",(req,res)=>{
		res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
	});
}

mongoose.connect('mongodb://localhost:27017/Product')
	.then(
		() => {
			console.log('MongoDB connected...')
			app.listen(PORT, () => {
				console.log("Server started at port 5000")
			});
		})
	.catch((err) => {
		console.log(err)
});