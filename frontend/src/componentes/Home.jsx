import React from 'react';

import imagen1 from './assets/imagen/home1.jpg';

function Home() {
    return (
        
        <div class="row row-cols-1 row-cols-md-2 g-4">

            <div className="col">
               <article className='art-img-home'>
                <img id="imagen-home" src={imagen1} alt="imagen-home1" />
                </article>               
                

            </div>
            <div className='col'>
               <article className='art-img-home'>
               <br />
                <p id="parrafo-home">¡Bienvenidos a la página oficial de los encuentros deportivos de nuestra institución educativa General Santander! Aquí encontrarás todo lo que necesitas saber sobre nuestros emocionantes eventos deportivos, donde nuestros estudiantes muestran su talento y pasión por el deporte. Desde competiciones vibrantes hasta momentos de camaradería, nuestra página te mantendrá al tanto de cada detalle, resultados y próximos encuentros. Únete a nosotros mientras celebramos el espíritu deportivo y el compromiso con la excelencia atlética, creando un espacio donde los estudiantes demostrarán sus habilidades deportivas. <br /><br />¡Prepárate para vivir la emoción de nuestros encuentros deportivos y ser parte de nuestra comunidad deportiva!
                </p>
                 <br />
                </article>               
                
            </div>
            
            
           
        </div>
        

    );
}

export default Home;