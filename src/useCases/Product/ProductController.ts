import { Request, Response } from "express";
import { IProductUseCase } from "./ProductUseCase";

export class ProductController {
  constructor(
    private productUseCase: IProductUseCase,
  ) {}

  async select(request: Request, response: Response): Promise<Response> {
    try {
        await this.productUseCase.selectAll();
    
        return response.status(201).send();  
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