import React, { useState } from 'react';
import futbol from './assets/imagen/fut.jpg';
import baloncesto from './assets/imagen/bal.jpg';
import voleibol from './assets/imagen/vol.png';
import ajedrez from './assets/imagen/aj.jpg';
import './style/Reglas.css';

function Reglas() {
    const [modalContent, setModalContent] = useState('');
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent('');
    };

    return (
        <div className="reglamento">
            <br />
            <div>
                <h1 className="titulo-reglamento">DEPORTES PRACTICADOS DENTRO DEL ESTABLECIMIENTO EDUCATIVO</h1>
            </div>
            
            <br></br>
            <br></br>

            <div className="tarjeta">
                <img src={futbol} alt="Imagen relacionada con microfútbol" className="imagen-tarjeta" />
                <h2 className="subtitulo-tarjeta">MICROFÚTBOL</h2>
                <button onClick={() => openModal(`
                    <p>En la institución educativa se maneja el reglamento de microfútbol.</p>
                    <h3 class="subtitulo-tarjeta">Adaptación en la institución educativa</h3>
                    <p>A continuación algunas reglas del microfútbol: <br /><br /> 
                    <b>1.</b>Duración del Partido: Se juega en dos tiempos de 20 minutos cada uno, con un descanso de 10 minutos entre ambos. <br /> 
                    <b>2. </b>Número de Jugadores: Cada equipo tiene 5 jugadores en el campo, incluyendo al portero. <br /> 
                    <b>3. </b>Cambios: Se permiten cambios ilimitados y pueden hacerse en cualquier momento del partido. <br /> 
                    <b>4. </b>Terreno de Juego: El campo es más pequeño que el de fútbol tradicional, similar a una cancha de baloncesto. <br /> 
                    <b>5. </b>Faltas Acumuladas: Después de la quinta falta acumulada por equipo en cada mitad, todas las faltas posteriores resultan en un tiro libre sin barrera. <br /> 
                    <b>6. </b>Penalti: Se otorga por faltas cometidas dentro del área y se ejecuta desde una distancia de 6 metros. <br />
                    <b>7. </b>Tarjetas: Los jugadores pueden recibir tarjetas amarillas y rojas. Dos amarillas resultan en una roja. <br />
                    <b>8. </b>Regla del Portero: El portero no puede tocar el balón con las manos fuera de su área y no puede mantener el balón en sus manos más de 4 segundos. <br />
                    <b>9. </b>Reposición de Balón: Se realiza con el pie desde la línea de banda. <br />
                    <b>10. </b>Distancia en los Tiros Libres: Los jugadores defensores deben estar a una distancia mínima de 5 metros del balón.<br /></p>
                `)}>Reglamento</button>
            </div>

            <div className="tarjeta">
                <img src={baloncesto} alt="Imagen relacionada con baloncesto" className="imagen-tarjeta" />
                <h2 className="subtitulo-tarjeta">BALONCESTO</h2>
                <button onClick={() => openModal(`
                    <p>En la institución educativa se maneja el reglamento del baloncesto en su totalidad.</p>
                    <h3 class="subtitulo-tarjeta">Adaptación en la institución educativa</h3>
                    <p>A continuación algunas reglas que se manejan en la institución educativa: <br /><br />
                    <b>1. </b>El terreno de juego será una superficie plana y dura, libre de obstáculos, con unas dimensiones de veintiocho 28 * 15 metros. <br />
                    <b>2. </b>Por norma general se utilizará el balón oficial de baloncesto, tamaño 7. Excepcionalmente, en la división más baja de nivel G2, se podrá utilizar un balón del tamaño 6 si así lo acuerdan los entrenadores al comienzo del partido. <br />
                    <b>3. </b>El equipo deberá presentarse en la cancha con un número mínimo de cinco (5) jugadores y máximo de diez (10). Ningún equipo podrá inscribirse en el campeonato con un número inferior a seis (6) jugadores.<br />
                    <b>4. </b>Será causa de suspensión del partido cuando un equipo se quede con tres (3) o menos de tres (3) jugadores en el terreno de juego. <br />
                    <b>5. </b>El entrenador avisará a la mesa antes de realizar el cambio, que se debe efectuar por la línea de medio campo. Todos los jugadores inscritos en el acta del partido quedarán sometidos durante todo el partido a la autoridad y jurisdicción del árbitro. <br />
                    <b>6. </b>En las faltas el balón se concederá al equipo contrario al infractor para que realice un saque desde el punto más cercano en la banda. Un jugador no incurrirá en juego brusco o violento. <br />
                    <b>7. </b>Un jugador será descalificado y no podrá seguir jugando el partido en curso cuando cometa dos (2) faltas antideportivas o cinco (5) faltas personales. <br />
                    <b>8. </b>Todos los jugadores y técnicos deberán velar porque impere el juego limpio durante toda la competición. <br />
                     <b>9. </b>Es obligatorio que todos los jugadores del equipo lleven la misma equipación, que estará compuesta por: CAMISETA CON O SIN MANGAS, PANTALONES CORTOS del mismo color que el resto del equipo y MEDIAS O CALCETINES. <br />
                    Las camisetas deberán ir numeradas por el dorso, siendo los números claramente visibles. <br />
                    <b>10. </b>Los partidos constarán de cuatro (4) períodos de diez (10) minutos y se jugarán a reloj corrido, excepto el último minuto del segundo y del cuarto cuarto del partido que se hará a reloj parado. <br />
                    Entre períodos habrá un descanso de dos (2) minutos. Habrá un descanso en la mitad del partido de cinco (5) minutos. <br />
                    <b>11. </b>En los lanzamientos de tiro libre se parará el reloj y el jugador dispondrá de cinco (5) segundos para efectuar el tiro. <br />
                    El tiempo de posesión de cada ataque será de veinticuatro (24) segundos. <br />
                    El equipo ganador conseguirá tres (3) puntos y el no ganador uno (1). <br /></p>
                `)}>Reglamento</button>
            </div>

            <div className="tarjeta">
                <img src={voleibol} alt="Imagen relacionada con voleibol" className="imagen-tarjeta" />
                <h2 className="subtitulo-tarjeta">VOLEIBOL</h2>
                <button onClick={() => openModal(`
                    <p>En la institución educativa se maneja el reglamento del voleibol en su totalidad en cuanto a la realización del juego, más que todo en la jornada de la mañana, en la jornada de la tarde se maneja el reglamento pero se perdonan  algunas faltas leves y movimientos inválidos, más que todo por la poca práctica de este deporte en dicha jornada.</p>
                    <h3 class="subtitulo-tarjeta">Adaptación en la institución educativa</h3>
                    <p>A continuación algunas reglas importantes del voleibol:<br /> <br />
                    <b>1. </b>El área de juego incluye el campo de juego y la zona libre. Debe ser rectangular y simétrica. <br />
                    El campo de juego es un rectángulo de 18 x 9 m, rodeado por una zona libre de un mínimo de 3 m de ancho en todos sus lados. <br />
                    El espacio de juego libre es el espacio sobre el área de juego, libre de todo obstáculo. El espacio de juego libre debe medir un mínimo de 7 m de altura a partir de la superficie de juego. <br />
                    <b>2. </b>Dos líneas laterales y dos líneas finales marcan la cancha de juego. Tanto las líneas laterales como las de fondo se trazan en el interior de las dimensiones del campo de juego. <br />
                    El eje de la línea central divide la cancha de juego en dos campos iguales de 9 x 9 m cada uno. Sin embargo, se considera que el ancho total de la línea pertenece a ambos campos por igual. Esta línea se extiende debajo de la red de línea lateral a línea lateral. <br />
                    En cada campo, una línea de ataque, cuyo borde exterior se traza a 3 m del eje de la línea central, marca la zona de frente. <br />
                    <b>3. </b>En cada campo, la zona de frente está limitada por el eje de la línea central y el borde exterior de la línea de ataque. <br />
                    La zona de saque es un área de 9 m de ancho detrás de cada línea final. Lateralmente está limitada por dos líneas cortas, cada una de 15 cm de longitud, trazadas a 20 cm de la línea final, como una prolongación de las líneas laterales. Ambas líneas cortas están incluidas en el ancho de la zona de saque. <br />
                    <b>4. </b>Se prohíbe utilizar objetos que puedan causar lesiones o proveer una ventaja artificial para el jugador.  Los jugadores pueden usar anteojos o lentes a su propio riesgo. <br />
                    <b>5. </b>Cada equipo está compuesto por seis jugadores en la cancha. <br />
                    <b>6. </b>Los jugadores deben rotar en el sentido de las agujas del reloj después de ganar el servicio del equipo contrario. <br />
                    <b>7. </b>Cada equipo puede tocar el balón un máximo de tres veces antes de devolverlo al otro lado de la red. Ningún jugador puede tocar el balón dos veces consecutivas. <br />
                    <b>8. </b>El balón debe pasar por encima de la red y aterrizar dentro de los límites del área de juego del equipo contrario para anotar un punto. <br />
                    <b>9. </b>Los jugadores de la primera línea pueden bloquear y atacar el balón sobre la red. Los jugadores de la segunda línea pueden atacar solo desde detrás de la línea de ataque (línea de 3 metros). <br />
                    <b>10. </b>Se comete una falta si el balón toca el suelo fuera de los límites, si un jugador toca la red, o si el balón es golpeado cuatro veces por el mismo equipo. <br />
                    <b>11. </b>Los jugadores no pueden tocar la red mientras el balón está en juego. Hacerlo resulta en un punto para el equipo contrario. <br />
                    <b>12. </b>Los jugadores no pueden cruzar completamente la línea central que divide las dos mitades de la cancha. <br />
                    <b>13. </b>El partido se juega en sets. Generalmente, se juega al mejor de cinco sets. Los primeros cuatro sets se juegan a 25 puntos y el quinto set (si es necesario) se juega a 15 puntos. Un equipo debe ganar por una diferencia de al menos dos puntos. <br /></p>
                `)}>Reglamento</button>
            </div>

            <div className="tarjeta">
                <img src={ajedrez} alt="Imagen relacionada con ajedrez" className="imagen-tarjeta" />
                <h2 className="subtitulo-tarjeta">AJEDREZ</h2>
                <button onClick={() => openModal(`
                    <p>El ajedrez es un deporte que no maneja una gran cantidad de reglas, más que todo se maneja una forma específica de mover y cumplir una función con las diferentes piezas que tienes para jugar. El objetivo de ambos jugadores es el mismo y el reglamento no tiene cambios.
                    En la institución educativa se maneja la forma básica de jugar el ajedrez, sin contar con un límite de tiempo como se juega en los torneos de gran importancia y de un nivel mucho más avanzado, así se da más confianza y más tiempo para poder pensar los movimientos y las jugadas en un nivel básico y amateur.<br /> <br /></p>
                    <h3 class="subtitulo-tarjeta">Adaptación en la institución educativa</h3>
                    <p>A continuación, te enseñamos algunas de las reglas del ajedrez:<br /><br />
                    <b>1. </b>La partida de ajedrez es una disputa entre dos bandos,  blanco y negro. Se juega sobre un tablero y finaliza por abandono de uno de los bandos, tablas o jaque mate. <br />
                    <b>2. </b>El material mínimo para jugar una partida de ajedrez es el tablero y las piezas. Cuando hablamos de competición se tiene que añadir el reloj y las planillas para la anotación de las  partidas. <br />
                    <b>3. </b>Para comenzar una partida, cada jugador cuenta con un rey, un dama, dos torres, dos caballos, dos alfiles y ocho peones. <br />
                    <b>4. </b>Las partidas se jugarán con un reloj, el tiempo dependerá del tipo de torneo, siendo las duraciones más utilizadas  5, 10 y 15 minutos por jugador. <br />
                    <b>5. </b>Las piezas capturan al igual que se desplazan y se colocan en la casilla de la pieza capturada , excepto los peones que para capturar, cambian siempre de columna, es decir, capturan en diagonal. Recordar que nunca puede haber dos piezas a la vez en la misma casilla. <br />
                    <b>6. </b>La torre: se mueve siempre en línea recta por columnas y por filas, es decir, en vertical y horizontal. Puede ir hacia adelante o hacia atrás. Si en su camino hubiese una pieza de su mismo color, solo podría llegar hasta la casilla anterior, ya que no puede atravesarla ni capturarla. Si, la pieza que se encuentra en el camino de la torre es del adversario, está podrá capturarla, poniéndose en el mismo lugar donde estaba la pieza contraria. <br />
                    <b>7. </b>No es obligatorio capturar las piezas contrarias si no se desea. Solo es obligatorio salvar el jaque. <br />
                    <b>8. </b>El alfil: Puede ir hacia delante y hacia atrás, pero hay que tener en cuenta que al moverse en diagonal, nunca puede cambiar de color de casillas; o sea, un alfil que vaya por las diagonales blancas nunca podrá situarse en una casilla de color negro y viceversa. El resto de aspectos del alfil es igual a los dichos para la torre. <br />
                    <b>9. </b>La dama: puede moverse por columnas, filas y diagonales, su movimiento es la combinación de la torre y el alfil. La captura y demás aspectos son iguales a la torre y al alfil. <br />
                    <b>10. </b>El rey: se mueve igual que la dama, en todas direcciones (columnas, filas y diagonales), pero sólo puede ir de una en una casilla, pudiendo ir también hacia delante y hacia atrás. La captura y demás aspectos son iguales que para las otras piezas. Sin embargo, tienes que saber que el rey nunca puede mover a una casilla donde lo puedan capturar, mientras que las otras piezas sí que pueden hacerlo si lo desean. Por tanto, un rey nunca podrá ocupar una casilla contigua al otro rey. <br /></p>
                `)}>Reglamento</button>
            </div>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-contenido" onClick={e => e.stopPropagation()}>
                        <span className="cerrar" onClick={closeModal}>&times;</span>
                        <div dangerouslySetInnerHTML={{ __html: modalContent }} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default Reglas;
