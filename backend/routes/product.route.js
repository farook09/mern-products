import express from "express";
import { Product } from "../models/product.model.js";
import mongoose from "mongoose";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();

// Get All products list
router.get('/', getProducts);

// Pust and Edit for Products

router.put('/:id', updateProduct);

// Post Request to add products

router.post('/', createProduct);

// Delete Request to delet products

router.delete('/:id', deleteProduct);

export default router;