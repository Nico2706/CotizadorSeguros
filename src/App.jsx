import React from 'react'
import AppSeguro from './components/AppSeguro'
import { CotizadorProvider } from './context/cotizadorProvider'

const App = () => {
  return (
    <CotizadorProvider>
    <AppSeguro/>
    </CotizadorProvider>
  )
}

export default App
