import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config/config.js';
import mongoDb from './db/db.js';
import {portMessage} from './utils/utils.js';
import error from './middlewares/errorsHandler.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import adminRoutes from './routes/admin.js';
import cartRoutes from './routes/carts.js';
import productRoutes from './routes/products.js';
import ordersRoutes from './routes/orders.js';
import salesRoutes from './routes/sales.js';

mongoDb();
const app = express();
app.use(express.json());
app.use(morgan('dev'));
const corsOptions = {
	origin: [process.env.LOCAL_PORT],
	credentials: true,
	exposedHeaders: ['set-cookie'],
};
app.use(cors(corsOptions));
app.use(
	'/api',
	session({
		name: 'SessionCookie',
		secret: process.env.SECRET_KEY,
		resave: false,
		saveUninitialized: false,
		store: MongoStore.create({mongoUrl: config.mongo.url}),
		cookie: {httpOnly: true, maxAge: 180 * 60 * 1000},
	}),
	adminRoutes
);

app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/sales', salesRoutes);
app.use(error.internalError, error.handler);

const port = process.env.PORT || config.server.port;
app.listen(port, portMessage(port));
