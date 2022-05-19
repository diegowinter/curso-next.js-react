import questoes from '../bancoDeQuestoes'

export default function handler(req: any, res: any) {
  res.status(200).json(questoes[0])
}
