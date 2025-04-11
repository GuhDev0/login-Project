import UsuarioService from '../services/use.services'
import { Request, Response } from 'express';
import UsuarioReq from "../Dto/use.Dto";
const  servico = new UsuarioService();


const postCreate = (req:Request, res:Response) =>{
    
    try{
        const newUser = servico.createUser(req.body)
        res.status(201).json('Usuario Criado Com Sucesso')
    }catch(error:any){
        return res.status(400).json({ erro: error.message });
    }
    
    
}
const getUser = async () =>{
    const todoUsuario = await servico.readUser();
}
