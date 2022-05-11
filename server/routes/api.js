import express, { json } from "express";
const router = express.Router();
import mongoose from "mongoose";
import "dotenv/config";

const categorySchema = mongoose.Schema({
  catName: { type: String, required: true },
  bgColor: { type: String, default: false },
  imageUrl: { type: String, required: true },
});
const productsSchema = mongoose.Schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  mark: { type: String, require: false },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Object, required: false },
});
const Products = mongoose.model("products", productsSchema);
const Product_Categories = mongoose.model("product_categories", categorySchema);

const { MONGODB_URL } = process.env;
mongoose.connect(MONGODB_URL).then(() => {
  console.log("connected to Database");
});

router.get("/", (req, res, next) => {
  Product_Categories.find({}).then((cat) => res.status(200).json(cat));
});

router.get("/products", (req, res, next) => {
  Products.find({}).then((products_data) => {
    res.status(200).json(products_data);
  });
});

router.get("/product/:id", (req, res, next) => {
  Products.findOne({ id: req.params.id }).then((prDetails) => {
    res.status(200).json(prDetails);
  });
});

export default router;
