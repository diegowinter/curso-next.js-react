import { useState } from "react"

export default function mouse() {
  // // Chama-se o useState com o valor inical de zero. É retornado um array.
  // const arrayX = useState(0)
  // // A primeira posição do array retorna o valor do estado.
  // let x = arrayX[0]
  // // A segunda posição do array retorna a função a ser chamada para atualizar
  // // o valor do estado
  // const alterarX = arrayX[1]

  // const arrayY = useState(0)
  // let y = arrayY[0]
  // const alterarY = arrayY[1]

  // A mesma forma anterior, só que usando destructuring
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const estilo = {
    backgroundColor: '#222',
    color: '#fff',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  }

  function quandoMover(ev) {
    // alterarX(ev.clientX)
    // alterarY(ev.clientY)

    setX(ev.clientX)
    setY(ev.clientY)
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  )
}