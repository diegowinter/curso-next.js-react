export function getServerSideProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}

const dinamico1 = (props) => {
  return (
    <div>
      <h1>Dinâmico #01</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}

export default dinamico1;