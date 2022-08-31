import { createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useState } from "react";

type Tema = 'dark' | ''

interface AppContextProps {
  tema: Tema
  alternarTema: () => void
}

const AppContext = createContext<AppContextProps>({
  tema: '',
  alternarTema: () => { },
})

export function AppProvider(props: { children: any }) {
  const [tema, setTema] = useState<Tema>('dark')

  function alternarTema() {
    setTema(tema === '' ? 'dark' : '')
  }

  return (
    <AppContext.Provider value={{
      tema: tema,
      alternarTema
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext