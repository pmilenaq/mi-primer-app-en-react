import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginado = ({count, page, onChange}) => {
    return (
        <Stack spacing={2}>
            <Pagination count={count} page={page} onChange={onChange} />
        </Stack>  
    );
};

export default Paginado;
