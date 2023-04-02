import Input from "@/components/input/Input";
import LoginCard from "@/components/loginCard/loginCard";
import styles from "../styles/Login.module.css";
import Button from "@/components/button/Button";
import Link from "next/link";
import { ChangeEvent, HtmlHTMLAttributes, SyntheticEvent, useState } from "react";
/* biblioteca para armazenar nos cookies do navegador */
import { setCookie } from "cookies-next";
/* biblioteca para redirecionamento de pagina */
import { useRouter } from "next/router";

export default function Cadastro() {

  const router = useRouter()

  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    password: '',
  })

  const handleFormEdit = (event:ChangeEvent<HTMLInputElement>) =>{
      setFormData({
        ...formData,
        [event.target.name]: event.target.value
      })
  }

  const handleFormSubmit = async (event: SyntheticEvent)=>{
    try {
      event.preventDefault()
      const response = await fetch('./api/user/cadastro', {
          method: 'POST',
          body: JSON.stringify(formData)
      })

      const json = await response.json()
      
      if (response.status !== 201) throw new Error(json)

      setCookie('authorization',json)
      router.push('/')

    } catch (error) {

      if(error instanceof Error){
        console.log(error.message)
      }


    }


  }


  return (
    <div className={styles.background}>
      <LoginCard title="Faça seu Cadastro">
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <Input place="Digite seu Nome" tipo="text" name="nome" required value={formData.nome} onChange={(e: ChangeEvent<HTMLInputElement>)=>{
                handleFormEdit(e)
          }}/>
          <Input place="Digite seu Email" tipo="email" name="email" required value={formData.email} onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            handleFormEdit(e)
          }}/>
          <Input place="Digite sua Senha" tipo="password" name="password" required value={formData.password} onChange={(e: ChangeEvent<HTMLInputElement>)=>{
            handleFormEdit(e)
          }}/>

          <Button>Cadastrar</Button>
          <Link href="./login">Já possui uma conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
