import express from 'express';
const router = express.Router();
import mongoose from "mongoose";
import 'dotenv/config';
import os from 'os';

const categorySchema = mongoose.Schema({
  catName: { type: String, required: true },
  bgColor: { type: String, default: false },
  imageUrl: { type: String, required: true },
});
const Product_Categories = mongoose.model("product_categories", categorySchema);
const {MONGODB_URL_Categories}=process.env
  mongoose.connect(MONGODB_URL_Categories).then(() => {
    console.log("connected to Database");
  });




router.get('/', (req, res, next) => {

  Product_Categories.find({}).then((data)=>{
    res.status(200).json(data)
  });
});
router.get('/api', (req, res, next) => {
  Product_Categories.find({}).then((data)=>{
    res.status(200).json(data)
  });
});
router.get('/:id', (req, res, next) => {
  const { id } = req.params;
  res.status(200).json({
    id: id,
    name: 'something',
  });
});

export default router;
