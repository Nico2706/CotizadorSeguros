import { Fragment } from 'react'
import {MARCAS, PLANES, YEARS} from "../constants/index"
import useCotizador from '../../hooks/useCotizador'
import { useState } from 'react'
import Error from './Error'



const Formulario = () => {

const {datos, handleChangeDatos,error, setError, cotizarSeguro } = useCotizador()




const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(datos).includes("")){
        setError("falta rellenar un campo ")
        return
    }
    setError("")
    cotizarSeguro()
}


  return (
    <>
    {error && <Error/>}
    <form onSubmit={handleSubmit}>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-400 uppercase'>
                Marca
            </label>
            <select className='w-full bg-white border border-gray-200' name='marca' onChange={e => handleChangeDatos(e)} value={datos.marca}>
                <option value="">Seleccione Marca</option>
                {MARCAS.map(marca =>(
                    <option key={marca.id}
                    value={marca.id}
                    >
                    {marca.nombre}
                    </option>
                ))}
            </select>
        </div>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-400 uppercase'>
                Año
            </label>
            <select className='w-full bg-white border border-gray-200' name='year' onChange={e => handleChangeDatos(e)} value={datos.year}>
                <option value="">Seleccione el Año de su Vehiculo</option>
                {YEARS.map(year =>(
                    <option key={year}
                    value={year}
                    >
                    {year}
                    </option>
                ))}
            </select>
        </div>
        <div className='my-5'>
            <label className='block mb-3 font-bold text-gray-400 uppercase items-center'>
                Planes
            </label>
            <div className='flex gap-3'>
                {PLANES.map(plan =>(
                    <Fragment key={plan.id}>
                        <label>{plan.nombre}</label>
                        <input type="radio"
                        name="plan"
                        value={plan.id}
                        onChange={e => handleChangeDatos(e)}
                        />
                    </Fragment>
                ))}
            </div>
        </div>
        <input type="submit"
        className='w-full bg-indigo-800 hover:bg-indigo-600 transition-color rounded-lg text-xl text-white font-bold uppercase cursor-pointer'
        value="cotizar"
        />

    </form>
    
    </>
  )
}

export default Formulario