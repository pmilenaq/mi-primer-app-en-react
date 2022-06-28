import Producto from "../Producto";
import './ListaProductos.css';

function ListaProductos({ productos }) {
    const listaProductos =  productos.map((producto, index) =>
        <Producto className='producto' producto={producto} key={index}/>);

    return(
        <div className="lista-productos">
            { listaProductos }
        </div>
    )
}


export default ListaProductos;