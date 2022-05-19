import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'A', [
    RespostaModel.errada('B'),
    RespostaModel.certa('A')
  ])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questaoTeste} />
    </div>
  )
}