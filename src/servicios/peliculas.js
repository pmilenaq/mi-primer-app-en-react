import { API_KEY, OMDB_API_HOST } from "./constantes";


export const getPeliculas = async (criterioBusqueda = '', pagina = 1) => {
    try {
        const respusta = await fetch( `${OMDB_API_HOST}?s=${criterioBusqueda}&apikey=${API_KEY}&page=${pagina} `);
        return respusta.json();
    } catch (error) {
        return { isError: true };
    }
};

export const getPelicula = async (idPelicula = 0) => {
    try {
        const respusta = await fetch( `${OMDB_API_HOST}?i=${idPelicula}&apikey=${API_KEY} `);
        return respusta.json();
    } catch (error) {
        return { isError: true };
    }
};
