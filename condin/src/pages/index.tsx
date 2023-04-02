import Head from 'next/head'
import { getCookie } from "cookies-next"
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { verificaToken } from '@/services/user'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página de Perfil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
          <p>
            Perfil
          </p>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ( context: GetServerSidePropsContext) => {
    try {

      const {req, res} = context;
      const token = getCookie('authorization', {req, res})

      if(!token) throw new Error('Token Inválido')

      /* como a funcao verifica so aceita string precisa fazer uma verificação antes ve se o token veio como string */
      const valueString: string = typeof token === "string" ? token : "";
      verificaToken(valueString)

      return {
        props:{

        }
      }

      
    } catch (error) {
      if(error instanceof Error){
        return{
          props:{}
        }
      }else{
        return {
          /* se o verificaToken verificar e der invalida o catch dele vai jogar para cima e vai cair nesse catch que 
            precisa impedir o usuario de entrar em outras rotas sem ter o token verificado por isso usa-se o redirect
            para nao deixa o uisuario entrar na pagina de perfil se nao tiver o token correto.
          */

          redirect:{
            permanent: false,
            destination: "./login",
          },
          props:{}
        }
      }
    }
}
