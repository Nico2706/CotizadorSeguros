import { useContext } from "react";
import CotizadorContext from "../src/context/cotizadorProvider";

const useCotizador =()=>{

    return useContext(CotizadorContext)

}

export default useCotizador