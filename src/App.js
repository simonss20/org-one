import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Form from './components/Form/Form.js';
import MiOrg from './components/MiOrg/MiOrg.js';
import { useState } from 'react';
import { v4 as uuidv4} from 'uuid'
import Equipo from './components/Equipo/Equipo';
import Footer from './components/Footer/Footer';

function App() {

  
  const [mostrarFormulario, actualizarMostrar] = useState(false); 
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: "Front End",
    foto: "https://github.com/simonss20.png",
    nombre: "Simón Sosa",
    puesto: "Desarrollador Front End ",
    fav: true
  }]);

  // Lista de equipos
  const [equipos, actualizarEquipos] = useState([
    {
        id: uuidv4(),
        titulo: "Programación",
        colorPrimario: "#57C278"
    },
    {
        id: uuidv4(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
    },
    {
        id: uuidv4(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
    },
    {
        id: uuidv4(), 
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
    },
    {
        id: uuidv4(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
    },
    {
        id: uuidv4(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
    },
    {
        id: uuidv4(),
        titulo: "Innovación y  Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
    }
  ]) 



  // Ternario --> condicion ? seMuestra : noSeMuestra
  // Cortocircuito --> condicion && semuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  // Registrar Colaborador 

  const registrarColaborador = (colaborador) =>{
    // Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  } 

  // Eliminar colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  // Actualizar color
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.colorPrimario = color;
      }

      return equipo;
    })

    actualizarEquipos(equiposActualizados)
  }

  // Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos,{...nuevoEquipo,id: uuidv4()}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header></Header>
      { mostrarFormulario && <Form 
      equipos={equipos.map( (equipo) => equipo.titulo )}
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}>
      </Form> }
      <MiOrg cambiarMostrar={cambiarMostrar}></MiOrg>
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.id}
        colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}></Equipo>)
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
