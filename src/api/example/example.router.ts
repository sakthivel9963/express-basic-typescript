import express, { Router } from 'express';

const router: Router = express.Router();

const ExampleController = require('./example.contoller');

router.get('/', ExampleController.save);

module.exports = router;
