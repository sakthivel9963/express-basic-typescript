import { NextFunction, Request, Response } from 'express';

class ExampleController {
  static async save(req: Request, res: Response, next: NextFunction) {
    try {
      res.json({
        status: 200,
        message: 'success',
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = ExampleController;
