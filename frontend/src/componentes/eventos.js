import React from 'react';

import evenimagen1 from './assets/imagen/even-imagen1.jpg';
import evenimagen2 from './assets/imagen/even-imagen2.jpg';
import evenimagen3 from './assets/imagen/even-imagen3.jpg';
import evenimagen4 from './assets/imagen/even-imagen4.jpg';


function Eventos () {
    return (
        <div>
        <br />
        <div><h1>Eventos Destacados</h1></div>
        
            <div class="row row-cols-1 row-cols-md-2 g-4"> 
                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>MICROFÚTBOL (FÚTBOL DE SALÓN)</b> </h5> <br />
                        <p class="card-text"><b>Adaptación en la institución educativa:</b>.</p>
                        <p class="card-text">El fútbol sala es un deporte de colaboración-oposición. Participan dos equipos compuestos por cinco personas, de las cuales, una ocupa la posición de portero/a. Se juega en una superficie rectangular de 40×20 metros, con una duración de 2 tiempos de 20 minutos a reloj parado. Es el deporte más practicado en la jornada de la tarde en nuestra institución educativa, siendo incluso el más practicado a nivel mundial después del futbol11, es un deporte lleno de adrenalina por la intensidad con la que se juega, la institución educativa, más que todo en la jornada de la tarde, ha tenido grandes participaciones a nivel departamental y nacional en diferentes categorías.</p>
                        <br />
                    </div>
                    <div className='imag-even'><img src= {evenimagen1} class="card-img-top" alt="..."/></div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>BALONCESTO</b></h5> <br />
                        <p class="card-text"><b>Adaptación en la institución educativa:</b>.</p>
                        <p class="card-text">El baloncesto es un deporte de equipo en el que se enfrentan dos grupos de cinco jugadores cada uno. El objetivo del juego consiste en anotar puntos al embocar el balón en un aro que está ubicado a unos tres metros de altura, es el deporte que más se practica en nuestra institución educativa en la jornada de la mañana, ya que se cuenta con grandes profesionales en la materia y siempre dejan en alto el nombre de nuestra institución en este deporte tanto a nivel departamental e incluso nacional.</p>
                        <br /><br /><br />
                    </div>
                    <div className='imag-even'><img src= {evenimagen2} class="card-img-top" alt="..."/></div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>VOLEIBOL</b></h5> <br />
                        <p class="card-text"><b>Adaptación en la institución educativa:</b>.</p>
                        <p class="card-text">El voleibol es uno de los deportes  más practicados en nuestra institución educativa por la facilidad que se da el entenderlo y el practicarlo, la mayoría de los estudiantes reciben de una manera aceptable este deporte ya que se siente el gusto y la lúdica que se genera al practicarlo. La suavidad que posee el balón y las reglas tan fáciles de entender hacen que el voleibol sea agradable tanto para estudiantes hombres y mujeres, es un deporte en el que se juega en igualdad de condiciones y genera gusto el practicarlo.</p>
                        <br />
                    </div>
                    <div className='imag-even'><img src= {evenimagen3} class="card-img-top" alt="..."/></div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                    <div class="card-body">
                    <h5 class="card-title"><b>AJEDREZ</b></h5> <br />
                    <p class="card-text"><b>Adaptación en la institución educativa:</b>.</p>
                    <p class="card-text">El ajedrez es un deporte que no maneja una gran cantidad de reglas, más que todo se maneja una forma específica de mover y cumplir una función con las diferentes piezas que tienes para jugar. El objetivo de ambos jugadores es el mismo y el reglamento no tiene cambios.</p>
                    <br /><br /><br /><br />
                    </div>
                    <div className='imag-even'><img src= {evenimagen4} class="card-img-top" alt="..."/></div>
                    </div>
                </div>

                
                
            
            </div>
    
        </div>
    )
}

export default Eventos