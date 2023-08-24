import React from 'react';
import "./MiOrg.css";

const MiOrg = (props) => {
  
  // const [nombreVariable, funcionQueActualiza] = useState(valorInicial)

  // const [mostrar, actualizarEstado] = useState(true);

  // const manejarClick = () => {
  //   props.cambiarMostrar()
  // }

  return (
    <section className="orgSection">
        <h3 className='title'>Mi organización</h3>
        <img height={74} width={74} src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
    </section>
  )
}

export default MiOrg
