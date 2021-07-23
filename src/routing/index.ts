import { Router } from 'express';
import base from './base';

const routing = Router();

// routes
routing.use('/', base);

export default routing;