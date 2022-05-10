export function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}

const Estatico = (props) => {
  return (
    <div>
      <span>Aleatório: {props.numero}</span>
    </div>
  );
}

export default Estatico;