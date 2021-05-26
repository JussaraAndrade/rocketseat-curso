import { Request, Response, response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

/* 
    Controller na criação do usuário
    
    - Aquele que receber request e devolve uma resposta
    - Padrão de projeto - package feature estrutura as pastas da aplicação
    por funcionalidades.
*/

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ){}
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try{
            await this.createUserUseCase.execute({
                name, 
                email,
                password
            })
            // Se foi com sucesso, retorna a resposta.
        // Status 201 - Criação
        return response.status(201).send();
    
        } catch (err){
            // Caso exista o erro
            // Status 400 - Erro
            return response.status(400).json({
            //Caso exista o erro, se não existir retornar um Unexpected error
            message: err.message || 'Unexpected error.'
            })
        }
    }
}