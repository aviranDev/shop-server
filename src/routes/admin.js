import {Router} from 'express';
import adminEntery from '../controllers/Admin/admin.js';
const router = Router();

router.get('/enter-admin', adminEntery);

export default router;
