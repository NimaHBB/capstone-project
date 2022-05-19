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

const settingsSchema = mongoose.Schema({
  APIKEY: { type: String, required: true },
  AUTHNAME: { type: String, required: true },
  DATABASEURL: { type: String, required: true },
  PROJECTID: { type: String, required: true },
  STORAGEBUCKET: { type: String, required: true },
  MESSAGINGSENDERID: { type: String, required: true },
  APPID: { type: String, required: true },
  MEASUREMENTID: { type: String, required: true },
});

const usersSchema = mongoose.Schema({
  userID: { type: String, required: true },
  userFullName: { type: String, required: true },
  userEmail: { type: String, required: true },
  userMobile: { type: String, required: true },
});

const Products = mongoose.model("products", productsSchema);
const Product_Categories = mongoose.model("product_categories", categorySchema);
const Settings = mongoose.model("settings", settingsSchema);
const Users = mongoose.model("users", usersSchema);

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

router.get("/settings", (req, res, next) => {
  Settings.find({}).then((sett) => res.status(200).json(sett));
});

router.get("/users/:id", (req, res, next) => {
  Users.findOne({ userID: req.params.id }).then((userDetails) => {
    res.status(200).json(userDetails);
    console.log(userDetails);
  });
});

export default router;
