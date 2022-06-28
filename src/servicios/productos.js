// Defino en una constante la url del servicio, donde voy a consultar por
// el listado de productos
const PRODUCTOS_URL = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';

// Function para buscar los productos en un servicio
export const buscarProductos = async () => {
    // Llamo con el metodo del navegador fetch
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    const productos = await fetch(PRODUCTOS_URL);
    // Retorno en formato json la respusta del servicio
    return productos.json();
};
