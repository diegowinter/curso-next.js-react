import { useState } from "react"

export default function contador() {
  const [count, setCount] = useState(0);

  const incrementar = () => setCount(count + 1);
  const decrementar = () => count > 0 ? setCount(count - 1) : setCount(count);

  return (
    <div style={{
      backgroundColor: '#333',
      color: '#fff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <span style={{ fontSize: 40 }}>Contador</span>
      <span>Utilize os botões para incrementar ou decrementar o contador</span>
      <span style={{ fontSize: 30 }}>{count}</span>
      <div>
        <button onClick={decrementar}>-</button>
        <button onClick={incrementar}>+</button>
      </div>
    </div>
  );
}