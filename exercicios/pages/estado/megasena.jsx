import { useState, useEffect } from 'react';
import NumeroDisplay from '../../components/NumeroDisplay';
import { mega } from '../../functions/mega';

export default function megasena() {
  const [quantidade, setQuantidade] = useState(6);
  const [numeros, setNumeros] = useState(mega([]));

  useEffect(() => {
    setNumeros(mega())
  }, []);

  function renderNumeros() {
    return numeros.map(n => <NumeroDisplay numero={n} />)
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <h1>
        Mega Sena
      </h1>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {renderNumeros()}
      </div>
      <div>
        <input
          type="number"
          min={6}
          max={60}
          value={quantidade}
          onChange={e => setQuantidade(e.target.value)} />
        <button onClick={() => setNumeros(mega(quantidade))}>
          Gerar Aposta
        </button>
      </div>
    </div>
  )
}