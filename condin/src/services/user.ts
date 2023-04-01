
let users: Array<dadosUser> = [];

export type dadosUser = {
    nome?:string,
    email: string,
    password: string,
}


export function cadastro(body:dadosUser){
    /* find encontra algo dentro do array
    nesse caso se email for igual ao email passado pelo objeto que veio na functio nele retorna true
    */
    const user = users.find(({email}) => email == body.email);
    if(user) throw new Error('Usuário já cadastrado');

    users.push(body);
    return body;

}

export function login(body:dadosUser){
    const user = users.find(({email})=> email == body.email);
    if(!user) throw new Error('Não existe usuário');
    if(user.password !== body.password) throw new Error('Senha Incorreta')

    return user;

}


