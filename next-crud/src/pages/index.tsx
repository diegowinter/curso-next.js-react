import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'

const Home: NextPage = () => {
  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Ana', 34, '1'),
    new Cliente('Ana', 34, '1'),
    new Cliente('Ana', 34, '1'),
  ]


  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log('Excluir', cliente.nome)
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro simples">
        <Tabela clientes={clientes} clienteSelecionado={clienteSelecionado} clienteExcluido={clienteExcluido} />
      </Layout>
    </div>
  )
}

export default Home
