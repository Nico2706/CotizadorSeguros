import React from 'react'
import useCotizador from '../../hooks/useCotizador'

const Error = () => {

    const {error} = useCotizador()

  return (
    <div className='bg-red-500 border-red-400 animate-pulse text-center text-white uppercase font-bold'>{error}</div>
  )
}

export default Error