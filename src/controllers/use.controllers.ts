import UsuarioService from '../services/use.services'
import { Request, Response } from 'express';
import UsuarioReq from "../Dto/use.Dto";
const servico = new UsuarioService();

export default class controller {
    postCreate = async (req: Request, res: Response) => {
        try {
            const newUser = await  servico.createUser(req.body)
             res.status(201).json('Usuario Criado Com Sucesso')
        } catch (error: any) {
            res.status(400).json({ erro: error.message });
        }
    }
    getUser = async  (req:Request, res:Response) => {
        const todoUsuario = await servico.readUser();
        res.status(200).json(todoUsuario)
    }
}




