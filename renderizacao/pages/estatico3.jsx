// Esse número sempre vai ser o mesmo, pois vai ser gerado só uma vez na hora
// do build.
// Nesse caso ele vai fazer uma nova geração a cada 7 segundos, devido ao
// revalidate.
export function getStaticProps() {
  return {
    revalidate: 7,
    props: {
      numero: Math.random()
    }
  }
}

const estatico3 = (props) => {
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
}

export default estatico3;