import express, { json } from "express";
const router2 = express.Router();
import mongoose from "mongoose";
import "dotenv/config";

const productsSchema = mongoose.Schema({
  title: { type: String, required: true },
  mark: { type: String, require: false },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Object, required: false },
});
const Products = mongoose.model("products", productsSchema);

const { MONGODB_URL } = process.env;
mongoose.connect(MONGODB_URL).then(() => {});

router2.get("/products", (req, res, next) => {
  Products.find({}).then((products_data) => {
    res.status(200).json(products_data);
    alert("now runs products API");
    console.log(products_data);
  });
});

/*router2.get('/products/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    name: 'something',
  });
});*/

export default router2;
