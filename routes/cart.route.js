import express, { application } from 'express';
import { addToCart, cartItem, loadData } from '../controller/cart.controller.js';
const router  = express.Router();
router.get("/add-to-cart/:productId",addToCart);

router.get("/cart-item",cartItem);
router.get("/load-data",loadData);

export default router;