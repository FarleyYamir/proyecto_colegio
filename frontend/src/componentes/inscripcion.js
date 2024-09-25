import React from "react";
import logo3 from './assets/imagen/logo_colegio.jpg';
import './style/Inscripcion.css'; // Asegúrate de importar el CSS

function Inscripcion () {
    return(
        <div className="inscripcion-container">
            <img className="logo_inscripcion" src={logo3} alt="logo_colegio" />
            <div className="titulo_inscripcion">
                <h1 className="dep_titulo">Deporte</h1>
                <h1 className="dep_subtitulo">FORMULARIO DE INSCRIPCIÓN</h1>
            </div>
            <h1 className="parrafo_inscripcion">
                ¡Tu opinión cuenta! <br /><br />
                Bienvenido/a al formulario de inscripción para participar en las actividades deportivas organizadas por el Colegio General Santander. Aquí podrás inscribirte para participar en deportes como microfútbol, baloncesto, voleibol y ajedrez. Podrás interactuar fácilmente en las deliberaciones que se convoquen y tomar decisiones sobre temas relevantes para ti y para el colegio. Además, queremos mantenerte informado/a de los eventos deportivos.
                <br /><br /> Des click en el botón para iniciar tu inscripción.
            </h1>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc0P6secRgB0u0CRKwNNOi0f_aECGF0NKAj07fO9l1QDLBT0g/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-outline-primary">INSCRIBIRME</button>
            </a>
        </div>
    )
}

export default Inscripcion;
