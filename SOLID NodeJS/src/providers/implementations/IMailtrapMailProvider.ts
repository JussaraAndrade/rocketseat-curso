// Serviço que usa enquanto aplicação está em desenvolvimento
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

import { IMailProvider, IMessage } from '../IMailProvider';

// Biblioteca instalação para e-mail: npm i nodemailer
// Adicionando a tipagem:  npm i @types/nodemailer -D

// Crie a conta: https://mailtrap.io

// Precisa seguir um contrato, ou seja, um protocolo que é o IMailProvider
export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;
    constructor(){
        this.transporter = nodemailer.createTransport({
            //configurações
            host: 'smtp.mailtrap.io',
            port: 2525,
            auth: {
                user: 'digite o usuário sem espaços',
                pass: 'digite a senha sem espaços'
            }
        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            }, 
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body,
        })
    }

}