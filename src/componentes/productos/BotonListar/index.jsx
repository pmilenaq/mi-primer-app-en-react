import Button from '@mui/material/Button';

function BotonListar(props) {
    return (
        <Button variant="outlined" size="large" onClick={props.onClick}>
            Listar
        </Button>
    )
}

export default BotonListar;
