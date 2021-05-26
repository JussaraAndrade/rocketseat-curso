import { User } from '../entities/User';

/*
    Repositories - são classes especificas entre as funcionalidades da
    aplicação com o banco de dados, com a estrutura que irá armazena
    os dados.

    * Operações do banco da tabela dos usuários
*/

// Interface é um contrato que define quais são os métodos
export interface IUsersRepository {

    // Métodos que existe dentro da interface

    // busca pela e-mail
    findByEmail(email: string): Promise<User>;
    // Salvar o usuário no banco
    save(user: User): Promise<void>;
}