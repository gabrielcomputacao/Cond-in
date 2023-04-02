
import jwt, {GetPublicKeyOrSecret, Secret} from "jsonwebtoken";

let users: Array<dadosUser> = [];

export type dadosUser = {
    nome?:string,
    email: string,
    password: string,
}

const SECRET: Secret | undefined  = process.env.JWT_SECRET;

function createToken(user: dadosUser){
    if(SECRET){
        return jwt.sign({email: user.email , nome: user.nome, password: user.password}, SECRET)

    }
}


function readToken(token: string){
    try {

        if(SECRET !== undefined){

            return jwt.verify(token, SECRET)
        }

    } catch (error) {
        if(error instanceof Error){
            throw new Error('Token Inválido')
        }
    }
}

export function verificaToken(token: string){
    return readToken(token)
}



export function cadastro(body:dadosUser){
    /* find encontra algo dentro do array
    nesse caso se email for igual ao email passado pelo objeto que veio na functio nele retorna true
    */
    const user = users.find(({email}) => email == body.email);
    if(user) throw new Error('Usuário já cadastrado');

    users.push(body);
    
    const token = createToken(body)
    return token

}

export function login(body:dadosUser){
    const user = users.find(({email})=> email == body.email);
    if(!user) throw new Error('Não existe usuário');
    if(user.password !== body.password) throw new Error('Senha Incorreta')

    const token = createToken(body)
    return token

}


