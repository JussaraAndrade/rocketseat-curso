import { uuid } from 'uuidv4';

/*  Model - está relacionado com a tabela do banco de dados
    Diferente !=
    Entities - entidade nem sempre é o que está relacionado com a tabela do banco de dados
*/

export class User {
    //Esse id não pode ser alterado
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    /* 
     - props; propriedades do usuário
     - props: irá receber apenas o nome, email e a password.
     - id?; opcional
     - Informa ao banco de dados que já exite um id, e não precisará gerar o id do zero
     - id único e universal
     - biblioteca - npm i uuidv4
     */
    constructor(props: Omit<User, 'id'>, id?: string){
        // Irá pegar todas as propriedades do objeto props e irá passar uma por uma pra dentro de uma vez 
        Object.assign(this, props);

        // Responsabilidade do proprio código ao inves de colocar apenas a responsabilidade do banco
        if(!id){
            this.id = uuid();
        }
    }
}