import { useState } from "react";
import { createContext } from "react";
import { ObtenerDiferenciaAño, calcularMarca, calularPlan, formatearDinero } from "../../Helpers/Index";

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) =>{

    const[error, setError] = useState("")
    const[resultado, setResultado] = useState(0)
    const [cargando, setCargando] = useState(false)

const [datos, setDatos] = useState({

    marca : "",
    year :"",
    plan:""

})

const handleChangeDatos = e =>{
    setDatos({
        ...datos,
        [e.target.name]: e.target.value
    })

}

const cotizarSeguro = () =>{
    let resultado = 2000


    const diferencia = ObtenerDiferenciaAño(datos.year)

    resultado -= ((diferencia * 3) * resultado) / 100

    resultado *= calcularMarca(datos.marca)

    resultado *= calularPlan(datos.plan)


    resultado = formatearDinero(resultado)
    setCargando(true)
    setTimeout(() =>{
        setResultado(resultado)
        setCargando(false)
    },3000)
    
 
    
}



    return(
        <CotizadorContext.Provider
        value={{
            datos,
            handleChangeDatos,
            error,
            setError,
            cotizarSeguro,
            setResultado,
            resultado,
            cargando

        }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {CotizadorProvider}

export default CotizadorContext