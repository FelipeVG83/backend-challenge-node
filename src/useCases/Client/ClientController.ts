import { Request, Response } from "express";
import { ICreateClientUseCase } from "./ClientUseCase";

export class CreateClientController {
  constructor(
    private createClientUseCase: ICreateClientUseCase,
  ) {}

  async select(request: Request, response: Response): Promise<Response> {
    try {
        await this.createClientUseCase.selectAll();
    
        return response.status(201).send();  
      } catch (err) {
        return response.status(400).json({
          message: err.message || 'Unexpected error.'
        })
      }
  } 

  async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, birthDate, active } = request.body;

    try {
      await this.createClientUseCase.create({
        name,
        cpf, 
        birthDate, 
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