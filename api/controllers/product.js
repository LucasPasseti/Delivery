import Product from "../models/Product.js";
import Service from "../models/Service.js";
import { createError } from "../utils/error.js";

export const createProduct = async (req, res, next) => {
    const serviceId = req.params.serviceid;
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      try {
        await Service.findByIdAndUpdate(serviceId, {
          $push: { products: savedProduct._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedProduct);
    } catch (err) {
      next(err);
    }
  };

export const updateProduct = async (req, res, next) => {

    try{
        const updateProduct = await Product.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body},
             {new:true}
              );

        res.status(200).json(updateProduct);
    }catch(err) {
        next(err);
    } 
}


  export const deleteProduct = async (req, res, next) => {
    const serviceId = req.params.serviceid;
    try {
      await Product.findByIdAndDelete(req.params.id);
        try {
          await Service.findByIdAndUpdate(serviceId, {
            $pull: { products: req.params.id },
          });
        } catch (err) {
          next(err);
        }
      res.status(200).json("Produto foi deletado.");
    } catch (err) {
      next(err);
    }
  };

export const getProduct = async (req, res, next) => {

    try{
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    }catch(err) {
        next(err);
    } 
}

export const getAllProduct = async (req, res, next) => {

    try{
        const products = await Product.find();

        res.status(200).json(products);
    }catch(err) {
        next(err);
    } 
}