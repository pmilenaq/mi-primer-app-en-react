
import { useEffect, useState } from "react";
import { getPeliculas } from "../../../servicios/peliculas";
import Loading from "../../general/Loading";
import Paginado from "../../general/Paginado";
import Pelicula from "../Pelicula";
import './ListaPeliculas.css';

const Peliculas = ({peliculas}) => {
    return (
            <section className="lista-peliculas">
                {peliculas && peliculas.map((val, index) => <Pelicula key={index} {...val} />)}
            </section>    
    )
};

const ListaPeliculas = ({ busqueda }) => {
    const query = useQuery('peliculas', getPeliculas);
    //const [peliculas, setPeliculas] = useState();
    //const [loading, setLoading] = useState(false);
    //const [error, setError] = useState('');
    //const [pagina, setPagina] = useState(1); 
    //const [cantidadPaginas, setCantidadPaginas] = useState(0);
    

    const getPeliculasDesdeServicio = async (busqueda, pagina) => {
        setLoading(true);
        const respuesta = await getPeliculas(busqueda, pagina);
        setError(respuesta.Error);
        if (respuesta.Search) {
            setPeliculas(respuesta.Search);
            const totalPaginas = Math.ceil(parseInt(respuesta.totalResults)/10);
            setCantidadPaginas(totalPaginas);
        }
        setLoading(false);
    };

    const onChangePaginacion = (_evento, p) => {
        setPagina(p);
    }

    useEffect(() => {
        if(busqueda) {
            getPeliculasDesdeServicio(busqueda, pagina)
        }
    }, [busqueda, pagina]);
    //const peliculas = [1,2,3].map(val => <Pelicula />);
    if(loading) {
        return <Loading />
    }

    if (!peliculas) {
        return null;
    }

    if (error) {
        return <div> {error} </div>
    }
    
    return (
        <>
            <Peliculas peliculas={peliculas} />
            <Paginado page={pagina} count={cantidadPaginas} onChange={onChangePaginacion} />
        </>
    )
};

export default ListaPeliculas;