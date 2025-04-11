import { Prisma, PrismaClient } from "../generated/prisma";
import usuarioReq from '../Dto/use.Dto';
import { create } from "domain";

export default class  BancoDeDados {
    private prisma = new PrismaClient();

    createUser = async (data: usuarioReq) => {
        const novoUsuario = await this.prisma.usuario.create({
            data: {
                nome: data.nome,
                email: data.email,
                senha: data.senha
            }
        })
        return novoUsuario
    }
    readUser = async () => {
        const todosUsuarios = await this.prisma.usuario.findMany()
        return todosUsuarios
    }
    updateUseer = async () => {
        const updateNome = async (nomeQueEstaNoBanco: string, nomeAtualizado: string) => {
            const nomeUpdate = await this.prisma.usuario.updateMany({
                where: { nome: nomeQueEstaNoBanco },
                data: { nome: nomeAtualizado }
            })
        }
        const updateEmail = async (emailQueEstaNoBanco:string,emailAtualizado:string) =>{
            const emailUpdate = await this.prisma.usuario.updateMany({
                where: { email: emailQueEstaNoBanco },
                data: { email: emailAtualizado }
            })
            return emailUpdate
        }
        const updateSenha = async (senhaQueEstaNoBanco:number,senhaAtualizado:number) =>{
            const senhaAtualizada = await this.prisma.usuario.updateMany({
                where: { senha: senhaQueEstaNoBanco },
                data: { senha: senhaAtualizado }
            })
            return senhaAtualizada
        }


    }
    deletaUsuario = async (nomeUsuarioDeletar: string) => {
        const usuarioDeletado = await this.prisma.usuario.deleteMany(
            { where: { nome: nomeUsuarioDeletar } }
        )
        return usuarioDeletado
    }
}

 