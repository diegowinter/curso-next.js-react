// Esse número sempre vai ser o mesmo, pois vai ser gerado só uma vez na hora
// do build.
export function getStaticProps() {
  return {
    props: {
      numero: Math.random()
    }
  }
}

const estatico2 = (props) => {
  return (
    <div>
      <h1>Estático #02</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}

export default estatico2;