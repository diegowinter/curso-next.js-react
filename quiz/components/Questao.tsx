import QuestaoModel from '../model/questao'
import styles from '../styles/Questao.module.css'

interface QuestaoProps {
  valor: QuestaoModel
}

const Questao = (props: QuestaoProps) => {
  return (
    <div className={styles.questao}>
      Enter
    </div>
  );
}

export default Questao;