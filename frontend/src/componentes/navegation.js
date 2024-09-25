import React from "react";
import './style/Navegation.css'; // Asegúrate de tener este archivo CSS

class Navegation extends React.Component {
    navigateTo = (path) => {
        window.location = path;
    }

    render() {
        return ( 
            <nav className="nav-container">
                <ul className="nav-list">
                    <li className="nav-item">
                        <button className="nav-btn" onClick={() => this.navigateTo("/")}>Inicio</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-btn" onClick={() => this.navigateTo("/eventos_page")}>Eventos</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-btn" onClick={() => this.navigateTo("/reglas_page")}>Reglas</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-btn" onClick={() => this.navigateTo("/inscripcion_page")}>Inscripción</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-btn" onClick={() => this.navigateTo("/resultados_page")}>Resultados</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-btn" onClick={() => this.navigateTo("/galeria_page")}>Galería</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-btn" onClick={() => this.navigateTo("/nosotros_page")}>Nosotros</button>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navegation;