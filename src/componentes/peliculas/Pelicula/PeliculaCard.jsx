import './PeliculaCard.css';

const PeliculaCard =  ({
    pelicula
}) => {
    return (
        <section className="pelicula-pagina">
            <div> 
                <img src={pelicula.Poster} />
            </div>
        <article className='pelicula-pagina-description'>
            <p> Nombre: {pelicula.Title}</p>
            <p> Año: {pelicula.Year}</p>
            <p> Genero: {pelicula.Genre}</p>
            <p> Trama: {pelicula.Plot}</p>
            <p> Reparto: {pelicula.Actors}</p>
        </article>
    </section>
    )
}

export default PeliculaCard;