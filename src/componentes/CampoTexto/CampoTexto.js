import { useState } from "react";
import "./CampoTexto.css"

const Campo = (props)=>{
    const [valor, actualizarValor] = useState ("")
    /* console.log("Datos: ", props); */

const {type = "text"} = props

    const manejarCambio = (e) => {
        /* console.log("Cambio", e.target.value) */
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
        
    </div>
}

export default Campo;