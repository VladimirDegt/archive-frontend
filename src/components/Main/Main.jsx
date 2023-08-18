import { Container } from '@mui/system';
import { useGetFilesQuery } from 'utils/RTK-Query';
import { IconButton, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody,Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/users/selectors';

export const Main = ({data, error, isLoading}) => {
  // const {data, error, isLoading} = useGetFilesQuery();
  const { token } = useSelector(selectToken);
  const updateResponce = data?.map(item => {
    const newPDF = item.fileURLPDF.indexOf('_')
    const newZIP = item.fileURLZIP.indexOf('_')
    return {
      ...item,
      shortNamePDF: item.fileURLPDF.slice(newPDF + 1),
      shortNameZIP: item.fileURLZIP.slice(newZIP + 1)
    }
  })

  const handleOpenPDF = (fileURL, typeDocument) => {
    const pathFile = `http://localhost:3001/${fileURL}`;
    window.open(pathFile, '_blank', `title=${typeDocument}`);
  }
  const handleOpenZIP = (fileURL, typeDocument) => {
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
            <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '20px'}} >Zip архів</TableCell>
            <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '20px'}} >Переглянути PDF</TableCell>
            <TableCell align="center" style={{ fontWeight: 'bold', fontSize: '20px'}} >Завантажити ZIP</TableCell>
            <TableCell align="left" style={{ fontWeight: 'bold', fontSize: '20px'}} >Автор</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {updateResponce?.map(({nameCustomer, numberDocument, typeDocument, owner, fileURLPDF, fileURLZIP, _id: id, shortNamePDF, shortNameZIP }) => (
            
            <TableRow
              key={id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {nameCustomer}
              </TableCell>
              <TableCell align="left">{typeDocument}</TableCell>
              <TableCell align="left">{numberDocument}</TableCell>
              <TableCell align="left">{shortNamePDF}</TableCell>
              <TableCell align="left">{shortNameZIP}</TableCell>
              <TableCell align="center">
              <IconButton color='secondary' onClick={()=>handleOpenPDF(fileURLPDF, typeDocument)} ><VisibilityIcon/></IconButton>
              </TableCell>
              <TableCell align="center">
              <IconButton color='secondary' onClick={()=>handleOpenZIP(fileURLZIP, typeDocument)} ><FileDownloadIcon/></IconButton>
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
