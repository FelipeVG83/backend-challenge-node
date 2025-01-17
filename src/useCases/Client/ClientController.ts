import { Request, Response } from "express";
import { IClientUseCase } from "./ClientUseCase";

export class ClientController {
  constructor(
    private clientUseCase: IClientUseCase,
  ) {}

  async select(request: Request, response: Response): Promise<Response> {
    try {
        const result = await this.clientUseCase.selectAll();
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
    const { name, cpf, birthDate, active } = request.body;

    try {
      await this.clientUseCase.create({
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