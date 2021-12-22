import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const  { user_id }  = request.headers;

    try{
      const users = this.listAllUsersUseCase.execute({user_id: user_id.toString()});
      return response.status(201).json(users);
      
    }catch(e){
      return response.status(400).json({error: "user's list not found"});
    }
  }
}

export { ListAllUsersController };
