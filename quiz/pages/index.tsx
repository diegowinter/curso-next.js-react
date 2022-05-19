import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

export default function Home() {
  const questaoTeste = new QuestaoModel(1, 'A', [
    RespostaModel.errada('B'),
    RespostaModel.certa('A')
  ])

  return (
    <Questao valor={questaoTeste} />
  )
}
