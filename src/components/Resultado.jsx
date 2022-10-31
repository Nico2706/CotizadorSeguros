import useCotizador from "../../hooks/useCotizador"
import { MARCAS, PLANES } from "../constants"
import { useCallback, useRef } from "react"


const Resultado = () => {

    

    const {resultado, datos} = useCotizador()

    const{marca, plan, year} = datos

    const yearReaf = useRef(year)

    const [nombreMarca] = useCallback( MARCAS.filter(m => m.id === Number(marca)),[resultado])
    const [nombrePlan] = useCallback( PLANES.filter(p => p.id === Number(plan)),[resultado])

    if(resultado === 0) return null

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
        <h2 className="text-gray-600 font-black text-3xl">Cotizacion</h2>
        <p className="my-2 text-xl">Marca: <span className="font-bold text-2xl">{nombreMarca.nombre}</span></p>
        <p className="my-2 text-xl">Plan Seleccionado: <span className="font-bold text-2xl">{nombrePlan.nombre}</span></p>
        <p className="my-2 text-xl">Año: <span className="font-bold text-2xl">{yearReaf.current}</span></p>
        <p className="my-2 text-4xl font-bold">Precio Total: <span className="font-bold text-4xl">{resultado}</span></p>
        
        
    </div>
  )
}

export default Resultado