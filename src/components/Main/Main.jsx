import { Container } from '@mui/system';
import { useGetFilesQuery } from 'utils/RTK-Query';
import { IconButton, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody,Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/users/selectors';

export const Main = () => {
  const {data, error, isLoading} = useGetFilesQuery();
  const { token } = useSelector(selectToken);
  const updateResponce = data?.map(item => {
    const res = item.fileURL.indexOf('_')
    return {
      ...item,
      shortName: item.fileURL.slice(res + 1)
    }
  })

  const handleOpenPDF = (fileURL, typeDocument) => {
    const pathFile = `http://localhost:3001/${fileURL}`;
    window.open(pathFile, '_blank', `title=${typeDocument}`);
  }

  return (
    <main style={{flexGrow: 1}}>
      {token &&       <section>
        <Container maxWidth='xl' sx={{paddingTop: 10}}>
                    {isLoading && <Typography>Loading contacts...</Typography>}
          {error && (
          <Typography>Упс, щось пішло не так. Спробуйте перезавантажити сторінку</Typography>
        )}
        <TableContainer 
        component={Paper} 
        >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead  >
          <TableRow >
            <TableCell style={{ fontWeight: 'bold', fontSize: '20px'}} >Замовник</TableCell>
            <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '20px'}} >Тип документа</TableCell>
            <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '20px'}} >Номер</TableCell>
            <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '20px'}} >Назва файлу</TableCell>
            <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '20px'}} >Переглянути</TableCell>
            <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '20px'}} >Автор</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {updateResponce?.map(({nameCustomer, numberDocument, typeDocument, owner, fileURL, _id: id, shortName}) => (
            
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {nameCustomer}
              </TableCell>
              <TableCell align="left">{typeDocument}</TableCell>
              <TableCell align="left">{numberDocument}</TableCell>
              <TableCell align="left">{shortName}</TableCell>
              <TableCell align="left">
              <IconButton color='secondary' onClick={()=>handleOpenPDF(fileURL, typeDocument)} ><VisibilityIcon/></IconButton>
              </TableCell>
              <TableCell align="left">{owner.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </section>}

    </main>
  );
};
