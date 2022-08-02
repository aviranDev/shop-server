import {Router} from 'express';
import create from '../controllers/products/create.js';
import read from '../controllers/products/read.js';
import update from '../controllers/products/update.js';
import deleted from '../controllers/products/delete.js';

const router = Router();

router.post('/create', create);

router.put('/update/:id', update);

router.get('/display-all', read.displayAll);

router.get('/display-top-5', read.displayTop5);

router.get('/display-product/:id', read.displayById);

router.delete('/delete-product/:id', deleted);

export default router;
