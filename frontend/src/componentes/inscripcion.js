import React from "react";
import logo3 from './assets/imagen/logo_colegio.jpg';

function Inscripcion () {
    return(
        <div>
            <br /> <br /> <br />
            <img className="logo_inscripcion" src={logo3} alt="logo_colegio" /> <br />
            <div className="titulo_inscripcion">
                <h1 className="dep_titulo">Deporte</h1> <br />
                <h1 className="dep_subtitulo">FORMULARIO DE INSCRIPCIÓN</h1>
                </div>
            <br /><br /> <br /> <br />
            <div>
                <h1 className="parrafo_inscripcion"> ¡Tu opinión cuenta! </h1> <br /> <br />
                <h1 className="parrafo_inscripcion"> Bienvenido/a al formulario de inscripción para participar en las actividades deportivas organizadas por el Colegio General Santander. Aquí podrás inscribirte para participar en deportes como microfútbol, baloncesto, voleibol y ajedrez. Podrás interactuar fácilmente en las deliberaciones que se convoquen y tomar decisiones sobre temas relevantes para ti y para el colegio. Además, queremos mantenerte informado/a de los eventos deportivos. 
                    <br /><br /> Des click en el botón para iniciar tu inscripción.
                </h1>
                <br /><br/> <br /><br/>
                <a href="https://forms.gle/SjqhfA2vzSVtJkLc6" target="_blank" rel="noopener noreferrer" > <button type="button" class="btn btn-outline-primary">INSCRIBIRME</button> </a>
                <br /><br /><br />
            </div>
        </div>
    )
}

export default Inscripcion