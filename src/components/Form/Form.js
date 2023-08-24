import React from 'react';
import "./Form.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"
import { useState } from 'react';

const Form = (props) => {

    const [nombre,actualizarNombre] = useState("");
    const [puesto,actualizarPuesto] = useState("");
    const [foto,actualizarFoto] = useState("");
    const [equipo,actualizarEquipo] = useState("");
    const [titulo,actualizarTitulo] = useState("");
    const [color,actualizarColor] = useState("");


    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (evento) => {
        evento.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        registrarColaborador(datosAEnviar);
    }

    const manejarNuevoEquipo = (evento) => {
        evento.preventDefault();
        crearEquipo({titulo, colorPrimario : color})
    }

    return (
        <section className="formulario">
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear un colaborador</h2>
                <Campo 
                titulo="Nombre" 
                placeholder="Ingrese el nombre" 
                required 
                valor={nombre} 
                actualizarValor={actualizarNombre}></Campo>
                <Campo 
                titulo="Puesto" 
                placeholder="Ingrese el nombre del puesto" required valor={puesto} 
                actualizarValor={actualizarPuesto}></Campo>
                <Campo 
                titulo="Foto" 
                placeholder="Ingrese el enlace de la foto" required 
                valor={foto} 
                actualizarValor={actualizarFoto}></Campo>
                <ListaOpciones 
                valor={equipo} 
                actualizarValor={actualizarEquipo}
                equipos={props.equipos}></ListaOpciones>
                <Boton>Crear colaborador</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el equipo</h2>
                <Campo 
                titulo="Titulo" 
                placeholder="Ingrese el titulo" 
                required 
                valor={titulo} 
                actualizarValor={actualizarTitulo}></Campo>

                <Campo 
                type="color"
                titulo="Color" 
                required valor={color} 
                actualizarValor={actualizarColor}></Campo>
                <Boton>Registrar equipo</Boton>
            </form>
        </section>
    )
}

export default Form