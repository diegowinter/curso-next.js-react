import router from 'next/router'
import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'
import Cookies from 'js-cookie'

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
  const [carregando, setCarregando] = useState(true)
  const [usuario, setUsuario] = useState<Usuario>()

  async function configurarSessao(usuarioFirebase: firebase.User) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase)
      setUsuario(usuario)
      gerenciarCookie(true)
      setCarregando(false)

      return usuario.email
    } else {
      setUsuario(null!)
      gerenciarCookie(false)
      setCarregando(false)

      return false
    }
  }

  async function loginGoogle() {
    const resp = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )

    // if (resp.user?.email) {
    //   const usuario = await usuarioNormalizado(resp.user!)
    //   setUsuario(usuario)
    // }
    await configurarSessao(resp.user!)
    router.push('/')
  }

  function gerenciarCookie(logado: boolean) {
    if (logado) {
      Cookies.set('admin-template-cod3r-auth', logado.toString(), {
        expires: 7
      })
    } else {
      Cookies.remove('admin-template-cod3r-auth')
    }
  }

  useEffect(() => {
    const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
    return () => cancelar()
  }, [])

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