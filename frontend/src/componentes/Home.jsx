import React from 'react';
import imagen1 from './assets/imagen/home1.jpg';
import './style/Home.css'; // Importa el archivo CSS específico

function Home() {
    return (
        <div className="media-container">
            <img id="imagen-home" src={imagen1} alt="imagen-home1" />
            <div className="text-content">
                <p id="parrafo-home">¡Bienvenidos a la página oficial de los encuentros deportivos de nuestra institución educativa General Santander! Aquí encontrarás todo lo que necesitas saber sobre nuestros emocionantes eventos deportivos, donde nuestros estudiantes muestran su talento y pasión por el deporte. Desde competiciones vibrantes hasta momentos de camaradería, nuestra página te mantendrá al tanto de cada detalle, resultados y próximos encuentros. Únete a nosotros mientras celebramos el espíritu deportivo y el compromiso con la excelencia atlética, creando un espacio donde los estudiantes demostrarán sus habilidades deportivas. <br /><br />¡Prepárate para vivir la emoción de nuestros encuentros deportivos y ser parte de nuestra comunidad deportiva!</p>
            </div>
        </div>
    );
}

export default Home;
