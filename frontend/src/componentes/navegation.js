/*import React from "react";
class Navegation extends React.Component {
    render() {

        function home_view() {
            window.location = "/"
        }

        function eventos_view() {
            window.location = "/eventos_page"
        }

        function reglas_view() {
            window.location = "/reglas_page"
        }

        function inscripcion_view() {
            window.location = "/inscripcion_page"
        }

        function resultados_view() {
            window.location = "/resultados_page"
        }

        function galeria_view() {
            window.location = "/galeria_page"
        }


    return ( 
            <div id="block-nav">
                <li className="items-nav">
                    <button className="btn-nav" onClick={home_view}><a id="let-reg">Home</a></button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={eventos_view}><a id="let-reg">Eventos</a></button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={reglas_view}><a id="let-reg">Reglas</a></button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={inscripcion_view}><a id="let-reg">Inscripción</a></button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={resultados_view}><a id="let-reg">Resultados</a></button>
                </li>
                <li className="items-nav">
                    <button className="btn-nav" onClick={galeria_view}><a id="let-reg">Galería</a></button>
                </li>

            </div>
        )    
    }
}

export default Navegation

*/

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
                        <button className="nav-btn" onClick={() => this.navigateTo("/")}>Home</button>
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
                </ul>
            </nav>
        );
    }
}

export default Navegation;