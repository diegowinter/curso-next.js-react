import QuestaoModel from '../model/questao'
import styles from '../styles/Questao.module.css'
import Enunciado from './Enunciado';

interface QuestaoProps {
  valor: QuestaoModel
}

const Questao = (props: QuestaoProps) => {
  const questao = props.valor

  return (
    <div className={styles.questao}>
      <Enunciado texto={questao.enunciado} />
    </div>
  );
}

export default Questao;