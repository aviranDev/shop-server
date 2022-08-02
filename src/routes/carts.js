import {Router} from 'express';
import addToCart from '../controllers/Cart/create.js';
import displayCart from '../controllers/Cart/read.js';
import checkout from '../controllers/Cart/checkout.js';
import dailySum from '../controllers/orders/orders.js';

const router = Router();

router.get('/add-to-cart/:id', addToCart);

router.get('/display-cart', displayCart);

router.get('/checkout', checkout, dailySum);

export default router;
