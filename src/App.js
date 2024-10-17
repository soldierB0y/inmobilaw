import './App.css';
import { Navegador } from './componentes/navegador';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './componentes/home';
import PaginaDeBusqueda from './componentes/paginaDeBusqueda';
import Propiedad from './componentes/propiedad';
import CarruselPropiedadesDestacadas from './componentes/carruselPropiedadesDestacadas';



function App() {
  
  return (
    <div>

      <Router basename='/inmobilaw/'>
        <Navegador/>
        <Routes>
          <Route path='/' element={<Home ></Home>} />
          <Route path='/search' element={<PaginaDeBusqueda></PaginaDeBusqueda>}/>
          <Route path='/property'element={<Propiedad></Propiedad>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
