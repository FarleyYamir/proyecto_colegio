import React from "react";
import logo1 from './assets/imagen/logo_sena.png';
import logo2 from './assets/imagen/logo_colegio.jpg';


class Titulo extends React.Component {
    render() {
    return ( 
    <div >

        <img id="imagen-logo" src={logo1} alt="logo_sena" />
        <img id="imagen-logo2" src={logo2} alt="logo_colegio" />
        <h1 className="titulo">
            <b> Encuentros Deportivos Institución Educativa  </b> <br /> General Santander <br /><br />
        </h1>
        
    </div>
    )    
}
}

export default Titulo