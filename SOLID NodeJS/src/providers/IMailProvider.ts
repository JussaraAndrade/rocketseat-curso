// Contrato que defini o envio do e-mail
interface IAddress {
    email: string;
    name: string;
}

export interface IMessage {
    to: IAddress;
    from: IAddress;
    subject: string;
    body: string;
}
export interface IMailProvider {
    // método assicrono ele retorna uma promise, void pq ele não tem retorno nenhum lá dentro 
    sendMail(message: IMessage): Promise<void>;
}