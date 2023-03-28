import { Request, Response } from "express";
import { IOrderUseCase } from "./OrderUseCase";

export class OrderController {
  constructor(
    private orderUseCase: IOrderUseCase,
  ) {}

  async select(request: Request, response: Response): Promise<Response> {
    try {
        const result = await this.orderUseCase.selectAll();
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
    const { clientId, productId, buyingValue, buyingQtd } = request.body;

    try {
      await this.orderUseCase.create({
        clientId, productId, buyingValue, buyingQtd
      });
  
      return response.status(201).send();  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}