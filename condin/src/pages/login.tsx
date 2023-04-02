import Input from "@/components/input/Input";
import styles from "../styles/Login.module.css";
import LoginCard from "@/components/loginCard/loginCard";
import Button from "@/components/button/Button";
import Link from "next/link";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";

export default function Login() {

  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })


  const handlerForm = (e: ChangeEvent<HTMLInputElement>)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const handlerSubmit= async (e: SyntheticEvent)=>{
    
    try {
      e.preventDefault();
      const response = await fetch('./api/user/login',{
        method: 'POST',
        body: JSON.stringify(formData)
      })

      const json = await response.json()
      if(response.status !== 200) throw new Error(json)

      setCookie('authorization', json)
      router.push('/')

    } catch (error) {
      if(error instanceof Error)
      console.log(error.message)
    }


  }

  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua Conta">
        <form className={styles.form} onSubmit={handlerSubmit}>
 
          <Input place="Digite seu Email" tipo="email" name='email' required value={formData.email}  onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            handlerForm(e)
          }}/>
          <Input place="Digite sua Senha" tipo="password" name='password' required value={formData.password} onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            handlerForm(e)
          }}/>

          <Button>Entrar</Button>
          <Link href="./cadastro">Ainda não possui conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
