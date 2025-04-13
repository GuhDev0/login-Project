import UsuarioReq from "../Dto/use.Dto"


export default class ValidarUsuarios{
    validarEmail(email:string){
        if(!email.includes('@')){
            throw new Error('Voce deve incluir o @ no Email')
        }else if(email == undefined){
            throw new Error('Campo Vazio, por favor digite um email valido')
        }
    }
    validarNome(nome:string){
        if(!nome || nome.trim() === " "){
            throw new Error('Campo Vazio, por favor digite seu nome ')
        } if (!isNaN(Number(nome))){
             throw new Error('Nome nao pode conter Numero')      
        }if(nome.length < 3){
            throw new Error('Nome deve ter pelo menos 3 caracteres') 
        } 
    }
    validarSenha(senha:string){
       if(senha.length < 8){
        throw new Error('Senha deve ter pelo menos 8 caracteres')
       } 
    }
    validarUsuario(data?:UsuarioReq){
     if(!data){
        throw new Error("Os dados do usuário são obrigatórios.")
     } 
     const {nome,email,senha} = data
      this.validarEmail(email)
      this.validarNome(nome)
      this.validarSenha(senha)  
    } 
}