import express, { Router } from 'express';

const router: Router = express.Router();

import ExampleController from './example.controller';

router.get('/', ExampleController.save);

export default router;
