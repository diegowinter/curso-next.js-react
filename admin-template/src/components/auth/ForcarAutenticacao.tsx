import Head from 'next/head'
import router from "next/router"
import useAuth from "../../data/hook/useAuth"

interface ForcarAutenticacaoProps {
  children?: any
}

export default function ForcarAutenticacao(props: ForcarAutenticacaoProps) {
  const { usuario, carregando } = useAuth()

  function renderziarConteudo() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if (!document.cookie?.includes("admin-template-cod3r-auth")) {
                  window.location.href = "/autenticacao"
                }
              `
            }}
          />
        </Head>
        {props.children}
      </>
    )
  }

  function renderizarCarregando() {
    return (
      <div className={`
        flex justify-center items-center h-screen
      `}>
        Carregando...
      </div>
    )
  }

  if (!carregando && usuario?.email) {
    return renderziarConteudo()
  } else if (carregando) {
    return renderizarCarregando()
  } else {
    router.push('/autenticacao')
    return null
  }
}