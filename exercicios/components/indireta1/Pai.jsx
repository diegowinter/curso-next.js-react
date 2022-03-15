import Filho from "./Filho";

export default function Pai(props) {

  function falarComigo(param) {
    // console.log('Alguém falou comigo!')
    console.log(param)
  }

  return (
    <div>
      <Filho funcao={falarComigo} />
    </div>
  )
}