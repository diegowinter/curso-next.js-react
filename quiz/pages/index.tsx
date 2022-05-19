import { useEffect, useRef, useState } from "react";
import Botao from "../components/Botao";
import Questao from "../components/Questao";
import QuestaoModel from "../model/questao";
import RespostaModel from "../model/resposta";

const questaoMock = new QuestaoModel(1, 'A', [
  RespostaModel.errada('B'),
  RespostaModel.errada('C'),
  RespostaModel.errada('D'),
  RespostaModel.certa('A')
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock)
  const questaoRef = useRef<QuestaoModel>()

  useEffect(() => {
    questaoRef.current = questao
  }, [questao])

  function respostaFornecida(indice: number) {
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado() {
    if (questaoRef.current.naoRespondida) {
      setQuestao(questaoRef.current.responderCom(-1))
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Questao valor={questao}
        respostaFornecida={respostaFornecida}
        tempoPraResposta={5}
        tempoEsgotado={tempoEsgotado} />
      <Botao texto={'Próxima'} href='/resultado' />
    </div>
  )
}
