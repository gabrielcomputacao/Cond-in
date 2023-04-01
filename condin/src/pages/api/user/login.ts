import { NextApiRequest, NextApiResponse } from "next"

import { login } from "@/services/user"

export default function handlerLogin(req: NextApiRequest , res: NextApiResponse){

    try {
        const newUser = login(req.body)
        res.status(200).json(newUser)
        
    } catch (error) {
        if(error instanceof Error){
            res.status(400).json(error.message)
            } 
        }

}
