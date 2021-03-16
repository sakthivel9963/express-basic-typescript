import express, { Request, Response, Router } from 'express';

const router: Router = express.Router();

const exampleRouter = require('./api/example/example.router');

router.get('/ping', (req: Request, res: Response) => {
  res.json({
    status: 200,
    message: 'Success',
  });
});

router.use('/example', exampleRouter);

export = router;
