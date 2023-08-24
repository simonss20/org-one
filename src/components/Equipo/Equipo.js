import React from 'react'
import "./Equipo.css"
import Colaborador from '../Colaborador/Colaborador';
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    // Destructuracion

    const { titulo, colorPrimario, id } = props.datos;
    const colorSecundario = hexToRgba(colorPrimario,0.6);
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props



    const estiloSeccion = {backgroundColor : colorSecundario};
    const estiloTitulo = {borderColor : colorPrimario };


  return <>{ colaboradores.length > 0 && (
      <section className='equipo' style={estiloSeccion}>
        <input 
        type='color'
        className='input-color'
        value={colorPrimario}
        onChange={(event) => {
        actualizarColor(event.target.value, id);
        }}
        ></input>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className='colaboradores'>
          {
            colaboradores.map((colaborador, index) => <Colaborador 
              datos={colaborador}
              key={index}
              colorPrimario={colorPrimario}
              eliminarColaborador={eliminarColaborador}
              like={like}>
            </Colaborador>)
          }
        </div>
      </section>
  )}
  </>;
    
}

export default Equipo
