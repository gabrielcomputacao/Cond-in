import Input from "@/components/input/Input";
import LoginCard from "@/components/loginCard/loginCard";
import styles from "../styles/Login.module.css";
import Button from "@/components/button/Button";
import Link from "next/link";

export default function Cadastro() {
  return (
    <div className={styles.background}>
      <LoginCard title="Faça seu Cadastro">
        <form className={styles.form} action="">
          <Input place="Digite seu Nome" tipo="text" />
          <Input place="Digite seu Email" tipo="email" />
          <Input place="Digite sua Senha" tipo="password" />

          <Button>Cadastrar</Button>
          <Link href="./login">Já possui uma conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
