
import { NextApiRequest, NextApiResponse } from "next";

import { cadastro } from "@/services/user";
import { dadosUser } from "@/services/user";


export default function handler(req:NextApiRequest ,res:NextApiResponse){
    try{
        const newUser = cadastro(req.body)
        res.status(201).json(newUser);

    }catch(error){
    /* precisa garantir que sera do tipo error para mostrar a mensagem porque se nao for ele
    vai vir como qualquer tipo de dados nao tendo o atributo mensamge e assim dando erro no 
    tipo do typescript
    */
       if(error instanceof Error){
            res.status(400).json(error.message)
       }

    }
}

