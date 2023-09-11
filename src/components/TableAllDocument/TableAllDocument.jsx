import { Container } from '@mui/system';
import {
  IconButton,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { useEffect, useState } from 'react';
import { useGetAllDocumentsMutation, useGetLoadFileMutation } from 'utils/RTK-Query';

export const TableAllDocument = ({ countDocumentDB, searchDocumentDB }) => {
  const [allDocuments, setallDocuments] = useState([]);
  const [isRerender, setIsRerender] = useState(false);
  const [getAllDocuments] = useGetAllDocumentsMutation();
  const [getLoadFile] = useGetLoadFileMutation();

  useEffect(() => {
    async function fetchData() {
      const response = await getAllDocuments();
      setallDocuments(response.data);
    }
    fetchData();
  }, [getAllDocuments]);

  useEffect(()=>{},[isRerender])

  const handleOpenFile = (fileURL, typeDocument) => {
    // const pathFile = `${fileURL}`;
    // window.open(pathFile, '_blank', `title=${typeDocument}`);
  };

  const handleLoadFile = async (idDocument)=> {
    await getLoadFile(idDocument)
    setIsRerender((prevState)=>!prevState)
  }

  return (
    <main style={{ flexGrow: 1 }}>
      <section>
        <Container maxWidth="xl" sx={{ paddingTop: 10 }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Замовник
                  </TableCell>
                  <TableCell style={{ fontWeight: 'bold', fontSize: '20px' }}>
                    Email
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontWeight: 'bold', fontSize: '20px' }}
                  >
                    Тип документа
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontWeight: 'bold', fontSize: '20px' }}
                  >
                    Ім'я документа
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontWeight: 'bold', fontSize: '20px' }}
                  >
                    Дата створення
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: 'bold', fontSize: '20px' }}
                  >
                    Переглянути PDF
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{ fontWeight: 'bold', fontSize: '20px' }}
                  >
                    Завантажити ZIP
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontWeight: 'bold', fontSize: '20px' }}
                  >
                    Автор
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ fontWeight: 'bold', fontSize: '20px' }}
                  >
                    Завантажити
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allDocuments?.map(
                  ({
                    idDocument,
                    dateCreate,
                    nameDocument,
                    typeDocument,
                    emailCustomer,
                    nameCustomer,
                    fileURLPDF,
                    fileURLZIP,
                    owner,
                  }) => {
                    return (
                      <TableRow
                        key={idDocument}
                        sx={{ '& > *': { borderBottom: 'unset' } }}
                      >
                        <TableCell component="th" scope="row">
                          {nameCustomer}
                        </TableCell>
                        <TableCell align="left">{emailCustomer}</TableCell>
                        <TableCell align="left">{typeDocument}</TableCell>
                        <TableCell align="left">{nameDocument}</TableCell>
                        <TableCell align="left">{dateCreate}</TableCell>
                        <TableCell align="center">
                          {' '}
                          <IconButton
                            color={fileURLPDF === '' ? '#e8eaf6': "secondary"}
                            onClick={() =>
                              handleOpenFile(fileURLPDF, typeDocument)
                            }
                          >
                            <VisibilityIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell align="center">
                          {' '}
                          <IconButton
                            color={fileURLZIP === '' ? '#e8eaf6': "secondary"}
                            onClick={() =>
                              handleOpenFile(fileURLZIP, typeDocument)
                            }
                          >
                            <FileDownloadIcon />
                          </IconButton>
                        </TableCell>
                        <TableCell align="left">{owner.name}</TableCell>
                        <TableCell align="center">
                          {' '}
                          <IconButton
                            color={fileURLZIP === '' ? "secondary" : '#e8eaf6'}
                            disabled = {fileURLZIP !== ''}
                            onClick={()=>handleLoadFile(idDocument)}
                          >
                            <RadioButtonCheckedIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </section>
    </main>
  );
};
