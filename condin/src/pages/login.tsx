import Input from "@/components/input/Input";
import styles from "../styles/Login.module.css";
import LoginCard from "@/components/loginCard/loginCard";
import Button from "@/components/button/Button";
import Link from "next/link";

export default function Login() {
  return (
    <div className={styles.background}>
      <LoginCard title="Crie sua Conta">
        <form className={styles.form} >

          <Input place="Digite seu Email" tipo="email" />
          <Input place="Digite sua Senha" tipo="password" />

          <Button>Entrar</Button>
          <Link href="./cadastro">Ainda não possui conta?</Link>
        </form>
      </LoginCard>
    </div>
  );
}
