import expess from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

const app = expess();
app.use(cors());
app.use(morgan('short'));
app.use(expess.json());
app.use(expess.urlencoded({ extended: false }));
app.use(cookieParser());

export default app;