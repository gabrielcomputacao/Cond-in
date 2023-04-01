import Input from "@/components/input/Input";
import LoginCard from "@/components/loginCard/loginCard";
import styles from "../styles/Login.module.css";
import Button from "@/components/button/Button";
import Link from "next/link";
import { ChangeEvent, HtmlHTMLAttributes, SyntheticEvent, useState } from "react";

export default function Cadastro() {

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

  const handleFormSubmit = (event: SyntheticEvent)=>{
    try {
      event.preventDefault()
    } catch (error) {
      
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
