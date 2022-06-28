import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ListaProductosPagina from './paginas/ListaProductosPagina';
import BuscarPeliculasPagina from './paginas/BuscarPeliculasPagina';
import PeliculaPagina from './paginas/PeliculaPagina';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="productos" element={<ListaProductosPagina />} />
        <Route path="peliculas" element={<BuscarPeliculasPagina />} />
        <Route path="peliculas/:idPelicula" element={<PeliculaPagina />} />
        <Route path="*" element={<div> 404 </div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
