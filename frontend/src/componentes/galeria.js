import React from 'react';
import imagen1 from './assets/imagen/gal-imagen1.jpg';
import imagen2 from './assets/imagen/gal-imagen2.jpg';
import imagen3 from './assets/imagen/gal-imagen3.jpg';
import imagen4 from './assets/imagen/gal-imagen4.jpg';
import './style/Galeria.css';

function Galeria() {
    return (
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src={imagen1} className="card-img-top" alt="Imagen 1" />
                        <div className="card-body">
                            <h5 className="card-title">Competencia Deportiva</h5>
                            <p className="card-text">Partido entre profesores y alumnos.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={imagen2} className="card-img-top" alt="Imagen 2" />
                        <div className="card-body">
                            <h5 className="card-title">Fútbol Sala</h5>
                            <p className="card-text">Juega, sueña, diviértete, aprende, siéntete orgulloso de jugar este deporte.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={imagen3} className="card-img-top" alt="Imagen 3" />
                        <div className="card-body">
                            <h5 className="card-title">Ataque en Equipo</h5>
                            <p className="card-text">Primer gol de los profesores.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <img src={imagen4} className="card-img-top" alt="Imagen 4" />
                        <div className="card-body">
                            <h5 className="card-title">Tarde Deportiva</h5>
                            <p className="card-text">Qué partidazo de los profesores con los alumnos.</p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card video">
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/xW1qwTbHlSs" title="Video Microfútbol" allowFullScreen></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Microfútbol - Col. General Santander</h5>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card video">
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/ywMk1g5IzoQ" title="Video ajedrez" allowFullScreen></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Ajedrez - Col. General Santander</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Galeria;
