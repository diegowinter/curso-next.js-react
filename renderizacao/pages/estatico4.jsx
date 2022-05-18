// Esse número sempre vai ser o mesmo, pois vai ser gerado só uma vez na hora
// do build.
export async function getStaticProps() {
  const resp = await fetch('http://localhost:3000/api/produtos')
  const produtos = await resp.json()

  return {
    props: {
      produtos
    }
  }
}

const estatico4 = (props) => {
  function renderizarProdutos() {
    return props.produtos.map(produto => {
      return <li key={produto.id}>{produto.nome} tem preço de R$ {produto.preco}</li>
    })
  }

  return (
    <div>
      <h1>Estático #04</h1>
      <ul>
        {renderizarProdutos()}
      </ul>
    </div>
  );
}

export default estatico4;