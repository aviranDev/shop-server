import {Router} from 'express';
import dailySum from '../controllers/orders/orders.js';
const router = Router();

router.get('/daily-sum', dailySum);

export default router;
