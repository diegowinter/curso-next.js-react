export function getStaticPaths() {
  return {
    fallback: false, //404
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } }
    ]
  }
}

export async function getStaticProps(context) {
  const resp = await fetch(`http://localhost:3000/api/alunos/${context.params.id}`)
  const aluno = await resp.json()

  return {
    props: {
      aluno
    }
  }
}

const aluno = (props) => {
  const { aluno } = props

  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      <ul>
        <li>{aluno.id}</li>
        <li>{aluno.nome}</li>
        <li>{aluno.email}</li>
      </ul>
    </div>
  );
}

export default aluno;