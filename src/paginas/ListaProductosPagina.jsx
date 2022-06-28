import React, { useEffect, useState } from "react";
import BotonListar from "../componentes/productos/BotonListar";
import ListaProductos from "../componentes/productos/ListaProductos";
import Titulo from "../componentes/general/Titulo";
import { buscarProductos } from '../servicios/productos'


const ListaProductosPagina = (props) => {
    const [productos, setProducto] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleBotonListar = async () => {
        setLoading(true);
        const productos = await buscarProductos();
        setProducto(productos);
        setLoading(false);
    }
    
    useEffect(() => {
        if(!productos.length) {
            handleBotonListar();
        }
    }, [productos]);

    
    if (loading) return <div> Cargando Productos...</div>;
    
    const miComponente = productos.length > 0
        ? <ListaProductos productos={productos} />
        : <p> Click en buscar </p>;

    return (
        <section>
            <BotonListar onClick={handleBotonListar}/>
            <Titulo />
            { miComponente }
        </section>
    );
}

export default ListaProductosPagina;
