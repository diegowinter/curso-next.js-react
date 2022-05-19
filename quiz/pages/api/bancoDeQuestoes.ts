import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
  new QuestaoModel(200, 'Qual bicho transmite a Doença de Chagas?', [
    RespostaModel.errada('Abelha'),
    RespostaModel.errada('Barata'),
    RespostaModel.errada('Pulga'),
    RespostaModel.certa('Barbeiro'),
  ]),
  new QuestaoModel(201, 'Qual fruto é conhecido como "jerimum"?', [
    RespostaModel.errada('Caju'),
    RespostaModel.errada('Manga'),
    RespostaModel.errada('Chuchu'),
    RespostaModel.certa('Abóbora'),
  ]),
  new QuestaoModel(202, 'Qual é o coletivo de cães?', [
    RespostaModel.errada('Manada'),
    RespostaModel.errada('Alcateia'),
    RespostaModel.errada('Rebanho'),
    RespostaModel.certa('Matilha'),
  ]),
  new QuestaoModel(203, 'Qual é o triângulo que tem todos os lados diferentes?', [
    RespostaModel.errada('Equilátero'),
    RespostaModel.errada('Isósceles'),
    RespostaModel.errada('Trapézio'),
    RespostaModel.certa('Escaleno'),
  ]),
]

export default questoes