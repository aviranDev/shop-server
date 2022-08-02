import {Router} from 'express';
import {
	top5,
	allSales,
	top5Distinct,
	dailyBasis,
} from '../controllers/Sales/sales.js';

const router = Router();

router.get('/display-top-sales', top5);

router.get('/display-distinct', top5Distinct);

router.get('/display-sales', allSales);

router.get('/daily-basis', dailyBasis);

export default router;
