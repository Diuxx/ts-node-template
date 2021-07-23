import express from 'express';
import * as dotenv from 'dotenv';
import middlewares from './middlewares';
import routing from './routing';

dotenv.config();
const app = express();
app.use(middlewares);
app.use(routing);

app.listen(process.env.PORT, () => {
    console.log(`> server node-js is running on port ${process.env.PORT}`);
});