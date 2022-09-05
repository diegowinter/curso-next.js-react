import router from 'next/router'
import { createContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'
import Cookies from 'js-cookie'

interface AuthContextProps {
  usuario?: Usuario
  loginGoogle?: () => Promise<void>
  logout?: () => Promise<void>
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
    try {
      setCarregando(true)
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      await configurarSessao(resp.user!)
      router.push('/')
    } finally {
      setCarregando(false)
    }
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

  async function logout() {
    try {
      setCarregando(true)
      await firebase.auth().signOut()
      await configurarSessao(null)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-cod3r-auth')) {
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
      return () => cancelar()
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      usuario,
      loginGoogle,
      logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext