import { createContext, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

interface AuthContextProps {
  usuario?: Usuario
  loginGoogle?: () => Promise<void>

}

const AuthContext = createContext<AuthContextProps>({})

async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken()

  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName ?? 'No name',
    email: usuarioFirebase.email ?? 'No email',
    token,
    provedor: usuarioFirebase.providerData[0]?.providerId ?? "No provider",
    imagemUrl: usuarioFirebase.photoURL ?? "No image"
  }
}

export function AuthProvider(props: any) {
  const [usuario, setUsuario] = useState<Usuario>()

  async function loginGoogle() {

  }

  return (
    <AuthContext.Provider value={{
      usuario,
      loginGoogle
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext