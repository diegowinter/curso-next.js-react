import Titulo from "../../components/Titulo"

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal='Página de cadastro grande'
        secundario='Incluir, alterar e excluir coisas...'
      />
      <Titulo
        principal='Página de cadastro pequena'
        secundario='Incluir, alterar e excluir coisas...'
        pequeno={true} // ou só o nome pequeno, pois a existencia do parâmetro já é true
      />
    </div>
  )
}