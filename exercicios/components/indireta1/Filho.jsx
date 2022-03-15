export default function Filho(props) {
  console.log(props)

  return (
    <div>
      <button onClick={props.funcao}>Falar com o pai 1</button>
      <button onClick={() => props.funcao('Oiii')}>Falar com o pai 2</button>
    </div>
  )
}
// No primeiro caso só chegará para o pai o evento de clique
// No segundo caso chegará para o pai a mensagem Oiii