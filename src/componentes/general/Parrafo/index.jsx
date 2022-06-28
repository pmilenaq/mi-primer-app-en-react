function Parrafo(props) {
    let mensaje;
    if(props.contenido) {
      mensaje = props.contenido
    } else {
      mensaje = 'Hola Mundo'
    }
  
    return(
      <p> {mensaje} </p>
    )
}

export default Parrafo;
  