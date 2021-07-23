import { Router } from 'express';

const router = Router();

router.get('/', async (req, res, next) => {
    res.status(200).json({
        app: process.env.APP_NAME,
        version: process.env.APP_VER
    });
});

export default router;