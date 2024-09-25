import './App.css';
import Navegation from './componentes/navegation';
import Titulo from './componentes/titulo';
import Home from './componentes/Home';
import Eventos from './componentes/eventos';
import Reglas from './componentes/reglas';
import Inscripcion from './componentes/inscripcion';
import Resultados from './componentes/resultados';
import Galeria from './componentes/galeria';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './componentes/footer';
import Banner from './componentes/banner';
import Nosotros from './componentes/nosotros';


function App() {
  return (
    <div className="App">
      <Titulo />
      <Navegation />
      <Banner />   
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/home" element={<Home/>} />
              <Route path="/eventos_page" element={<Eventos/>} />
              <Route path="/reglas_page" element={<Reglas/>} />
              <Route path="/inscripcion_page" element={<Inscripcion/>} />
              <Route path="/resultados_page" element={<Resultados/>} />
              <Route path="/galeria_page" element={<Galeria/>} />
              <Route path="/nosotros_page" element={<Nosotros/>} />
            </Routes>
          </BrowserRouter>
      <Footer />

   </div>
  );
}

export default App;
