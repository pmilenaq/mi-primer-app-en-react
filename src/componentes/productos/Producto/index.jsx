import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material';
import './Producto.css';

function Producto({ producto }) {
    const { name, price } = producto;
    return (
        <Card sx={{ maxWidth: 150 }} className='producto'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://detallesorballo.com/wp-content/uploads/2020/09/imagen-de-prueba-320x240-1.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                { name }
            </Typography>
            <Typography variant="body2" color="text.secondary">
                $ { price }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}

export default Producto;
