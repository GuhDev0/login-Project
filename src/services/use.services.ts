import BancoDeDados from "../repository/use.repository";
import UsuarioReq from "../Dto/use.Dto";
import ValidarUsuarios from "../validador/use.validador";
const db = new BancoDeDados();


export default class UsuarioService{
    private validador = new ValidarUsuarios();

    createUser = async (data:UsuarioReq)  =>{
        this.validador.validarUsuario(data)
     const criarNovoUsuario =  await db.createUser(data)
     return criarNovoUsuario  
     
    } 
    readUser = async() =>{
        const readUser = await db.readUser();
        return readUser
    }
}

