import Link from "next/link";
import router, { useRouter } from "next/router";

export default function rotas() {
  function navegacaoSimples(url) {
    router.push(url)
  }

  function navegacaoComParams() {
    router.push({
      pathname: 'rotas/params',
      query: {
        id: 123,
        nome: 'Diego'
      }
    })
  }

  return (
    <div>
      Rotas
      <ul>
        <Link href='/rotas/params?id=12&nome=Diego'>
          <li>Params</li>
        </Link>
        <Link href='/rotas/123/buscar'>
          <li>Buscar na rota 123</li>
        </Link>
        <Link href='/rotas/123/Diego'>
          <li>Diego na rota 123</li>
        </Link>
      </ul>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <button onClick={() => navegacaoComParams()}>
          Buscar na rota com params
        </button>
        <button onClick={() => router.push('/rotas/123/buscar')}>
          Buscar na rota 123
        </button>
        <button onClick={() => navegacaoSimples('/rotas/123/Daniel')}>
          Buscar na rota Daniel
        </button>
      </div>
    </div>
  )
}