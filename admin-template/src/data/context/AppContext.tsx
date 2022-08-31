import { createContext, JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";

const AppContext = createContext({
  nome: ''
})

export function AppProvider(props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) {
  return (
    <AppContext.Provider value={{
      nome: 'Teste Context API'
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContext