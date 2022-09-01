import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Perfil() {
  const dados = useAppData()

  return (
    <Layout titulo="Perfil do Usuário" subtitulo="Aqui você confere o perfil do usuário" >
      <h3>Perfil do usuário</h3>
    </Layout>
  )
}