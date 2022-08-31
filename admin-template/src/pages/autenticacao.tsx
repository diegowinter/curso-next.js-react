import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";

export default function Autenticacao() {
  const [modo, setModo] = useState<'login' | 'cadastro'>('login')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <div>
      <h1>Autenticação</h1>
      <AuthInput
        label="E-mail"
        valor={email}
        tipo='email'
        valorMudou={setEmail}
        obrigatorio
      />
      <AuthInput
        label="Senha"
        valor={senha}
        tipo='password'
        valorMudou={setSenha}
        obrigatorio
      />
    </div>
  )
}