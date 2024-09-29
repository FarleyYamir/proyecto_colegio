import React from 'react';
import evenimagen1 from './assets/imagen/even-imagen1.jpg';
import evenimagen2 from './assets/imagen/even-imagen2.jpg';
import evenimagen3 from './assets/imagen/even-imagen3.jpg';
import evenimagen4 from './assets/imagen/even-imagen4.jpg';
import './style/Eventos.css';

function Eventos() {
    return (
        <div>
            <br />
            <div><h1>Eventos Destacados</h1></div>

            <br></br>
            <br></br>

            <div className="row row-cols-1 row-cols-md-2 g-4"> 
                <div className="col">
                    <div className="card">
                        <div className="imag-even">
                            <img src={evenimagen1} alt="Microfútbol" />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="card-body">
                            <h5 className="card-title"><b>MICROFÚTBOL</b></h5>
                            <p className="card-text"><b>Adaptación en la institución educativa:</b></p>
                            <p className="card-text">
                            El fútbol sala es un deporte de colaboración en el que dos equipos de cinco jugadores, incluyendo un portero, compiten en una cancha rectangular de 40×20 metros. El juego se desarrolla en dos tiempos de 20 minutos. Es el deporte más practicado en las tardes en nuestra institución educativa y, a nivel mundial, es el segundo más popular después del fútbol 11. La institución ha tenido destacadas participaciones a nivel departamental y nacional en diversas categorías, destacando la intensidad y adrenalina del juego.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="imag-even">
                            <img src={evenimagen2} alt="Baloncesto" />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="card-body">
                            <h5 className="card-title"><b>BALONCESTO</b></h5>
                            <p className="card-text"><b>Adaptación en la institución educativa:</b></p>
                            <p className="card-text">
                            El baloncesto es un deporte de equipo en el que se enfrentan dos grupos de cinco jugadores cada uno. El objetivo del juego consiste en anotar puntos al embocar el balón en un aro que está ubicado a unos tres metros de altura, es el deporte que más se practica en nuestra institución educativa en la jornada de la mañana, ya que se cuenta con grandes profesionales en la materia y siempre dejan en alto el nombre de nuestra institución en este deporte tanto a nivel departamental e incluso nacional.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="imag-even">
                            <img src={evenimagen3} alt="Voleibol" />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="card-body">
                            <h5 className="card-title"><b>VOLEIBOL</b></h5>
                            <p className="card-text"><b>Adaptación en la institución educativa:</b></p>
                            <p className="card-text">
                            El voleibol es uno de los deportes  más practicados en nuestra institución educativa por la facilidad que se da el entenderlo y el practicarlo, la mayoría de los estudiantes reciben de una manera aceptable este deporte ya que se siente el gusto y la lúdica que se genera al practicarlo. La suavidad que posee el balón y las reglas tan fáciles de entender hacen que el voleibol sea agradable tanto para estudiantes hombres y mujeres, es un deporte en el que se juega en igualdad de condiciones y genera gusto el practicarlo.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="imag-even">
                            <img src={evenimagen4} alt="Ajedrez" />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="card-body">
                            <h5 className="card-title"><b>AJEDREZ</b></h5>
                            <p className="card-text"><b>Adaptación en la institución educativa:</b></p>
                            <p className="card-text">
                            El ajedrez es un deporte estratégico que se basa en un conjunto de reglas, centrándose en el movimiento y la función de las distintas piezas en el tablero. Cada jugador tiene el mismo objetivo: capturar al rey del oponente. A lo largo del juego, las reglas son constantes, lo que permite a los jugadores desarrollar tácticas y estrategias. La simplicidad en las normas contrasta con la complejidad del juego, lo que convierte al ajedrez en un desafío intelectual fascinante que ha cautivado a personas de todas las edades en todo el mundo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventos;
