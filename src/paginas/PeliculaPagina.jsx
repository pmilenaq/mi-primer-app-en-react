import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../componentes/general/Loading';
import PeliculaCard from '../componentes/peliculas/Pelicula/PeliculaCard';
import { getPelicula } from '../servicios/peliculas';

const PeliculaPagina = () => {
    const { idPelicula } = useParams();
    const [pelicula, setPelicula] = useState();
    const [loading, setLoading] = useState(false); 

    const getPeliculasDesdeServicio = async () => {
        setLoading(true);
        const respuesta = await getPelicula(idPelicula);
        setPelicula(respuesta);
        setLoading(false);

    }
    useEffect(() => {
        if(!pelicula) {
            getPeliculasDesdeServicio();
        }
    }, [pelicula])

    if(loading) {
        return <Loading/> ;
    }

    if(!pelicula) return null;

    return (
       <PeliculaCard pelicula={pelicula} />
    );
}

export default PeliculaPagina;