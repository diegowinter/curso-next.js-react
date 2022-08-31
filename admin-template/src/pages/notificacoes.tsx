import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {
  const dados = useAppData()

  return (
    <Layout titulo="Notificações" subtitulo="Aqui você gerencia suas notificações" >
      <h3>{dados.tema}</h3>
    </Layout>
  )
}