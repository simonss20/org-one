import React from 'react';
import "./ListaOpciones.css"

const ListaOpciones = (props) => {

   

    /*  Para recorrer arreglos usar map, no forEach. map => arreglo.map( (equipo,index) => {
        return <option>{equipo}</option>
    }) */

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return (
        <div className="listaOpciones">
            <label>Equipo</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Selecionar equipo</option>
                {props.equipos.map( (equipo,index) => <option key={index} value={equipo}>{equipo}</option> )}
            </select>
        </div>
    )
}

export default ListaOpciones