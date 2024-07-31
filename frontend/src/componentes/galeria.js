import React from 'react';

import imagen1 from './assets/imagen/gal-imagen1.jpg';
import imagen2 from './assets/imagen/gal-imagen2.jpg';
import imagen3 from './assets/imagen/gal-imagen3.jpg';
import imagen4 from './assets/imagen/gal-imagen4.jpg';


function Galeria () {
    return (
        
        <div class="row row-cols-1 row-cols-md-2 g-4">

            <div class="col">
                <div class="card">
                <img src= {imagen1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Imagen 1</h5> <br />
                    <p class="card-text">Partido entre profesores y alumnos.</p>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                <img src= {imagen2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Imagen 2</h5> <br />
                    <p class="card-text">Juega, sueña, diviertete, aprende, sientete orgulloso del jugar este deporte.</p>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                <img src= {imagen3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Imagen 3</h5> <br />
                    <p class="card-text">Primer gol de los profesores.</p>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                <img src= {imagen4} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Imagen 4</h5> <br />
                    <p class="card-text">Que partidazo de los profesores con los alumnos.</p>
                </div>
                </div>
            </div>

            <div class="col">
                <div class="video">
                <iframe width="848" height="480" src="https://www.youtube.com/embed/xW1qwTbHlSs" title="Video Microfútbol" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="card-body">
                    <h5 class="card-title">Microfútbol - Col. General Santander</h5> <br />

                </div>
                </div>
            </div>

            <div class="col">
                <div class="video">
                <iframe width="337" height="599" src="https://www.youtube.com/embed/ywMk1g5IzoQ" title="Video ajedrez" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div class="card-body">
                    <h5 class="card-title">Ajedrez - Col. General Santander</h5> <br />
                    
                </div>
                </div>
            </div>

             
            
           
        </div>
    )
}

export default Galeria