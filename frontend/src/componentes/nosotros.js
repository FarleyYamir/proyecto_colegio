import React from 'react';
import nosimagen1 from './assets/imagen/nos_imagen1.jpg';
import nosimagen2 from './assets/imagen/nos_imagen2.jpg';
import nosimagen3 from './assets/imagen/nos_imagen3.jpg';
import './style/Eventos.css';
import './style/Resultados.css';

function Nosotros() {
    return (
        <div>
            <br />
            <br />
            <div><h1 className="resultados-title"><b>NOSOTROS</b></h1></div>

            <br></br>
            <br></br>

            <div className="row row-cols-1 row-cols-md-2 g-4"> 
                <div className="col">
                    <div className="card">
                        <div className="imag-even1">
                            <img src={nosimagen1} alt="Microfútbol" />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="card-body">
                            <h5 className="card-title"><b>María Angélica Arciniegas Acevedo</b></h5>
                            <p className="card-text"><b>Estudiante 11°</b></p>
                           
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="imag-even1">
                            <img src={nosimagen2} alt="Baloncesto" />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="card-body">
                            <h5 className="card-title"><b>Astrid Eliana Estupiñan Mejía</b></h5>
                            <p className="card-text"><b>Estudiante 11°</b></p>                          
                            </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card">
                        <div className="imag-even1">
                            <img src={nosimagen3} alt="Baloncesto" />
                        </div>
                        <br></br>
                        <br></br>
                        <div className="card-body">
                            <h5 className="card-title"><b>Meylin Dayana Blanco Mejía</b></h5>
                            <p className="card-text"><b>Estudiante 11°</b></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Nosotros;
