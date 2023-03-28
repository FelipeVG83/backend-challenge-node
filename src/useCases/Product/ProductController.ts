import { Request, Response } from "express";
import { IProductUseCase } from "./ProductUseCase";

export class ProductController {
  constructor(
    private productUseCase: IProductUseCase,
  ) {}

  async select(request: Request, response: Response): Promise<Response> {
    try {
        const result = await this.productUseCase.selectAll();
        if (!result.length) {
          return response.status(201).send();  
        }
        return response.status(200).json(result);  
      } catch (err) {
        return response.status(400).json({
          message: err.message || 'Unexpected error.'
        })
      }
  } 

  async create(request: Request, response: Response): Promise<Response> {
    const { name, active } = request.body;

    try {
      await this.productUseCase.create({
        name, 
        active
      });
  
      return response.status(201).send();  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}