import { Container } from '@mui/system';
import { Notify } from 'notiflix';
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
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { useEffect, useState } from 'react';
import { useGetAllDocumentsMutation, useGetLoadFileMutation } from 'utils/RTK-Query';
import { SkeletonAuth } from 'components/Skeletons/SkeletonAuth';
import { CopyURLFile } from 'components/formCopyURLFile/formCopyURLFile';

export const TableAllDocument = ({ searchDocumentDB, pageContent }) => {
  const [allDocuments, setallDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewURLFile, setViewURLFile] = useState('');
  const [isOpenCopyURL, setIsOpenCopyURL] = useState(false);
  const [getLoadFile] = useGetLoadFileMutation();
  const [getAllDocuments] = useGetAllDocumentsMutation();


  useEffect(() => {
    if (pageContent.length !== 0) {
      setallDocuments(pageContent);
    }
  }, [pageContent]);

  useEffect(()=>{
    if(!searchDocumentDB){
      return
    }
    setallDocuments(searchDocumentDB)
  }, [searchDocumentDB])

  const handleOpenFile = (fileURL, typeDocument) => {
    // const pathFile = `${fileURL}`;
    // window.open(pathFile, '_blank', `title=${typeDocument}`);
    setViewURLFile(fileURL);
    if(!fileURL){
      return
    }
    setIsOpenCopyURL(true)
  };

  const handleLoadFile = async idDocument => {
    setIsLoading(true);
    await getLoadFile(idDocument);
    setIsLoading(false);
    Notify.success("Файлы завантажені у базу", {
      position: 'center-top',
      distance: '10px',
    });
    const response = await getAllDocuments(1);
    setallDocuments(response.data.getFiles)
  };

  const handleClose = () => {
    setIsOpenCopyURL(false)
  };

  return (
    <main style={{ flexGrow: 1 }}>
      <section>
      {isLoading ? (
                <SkeletonAuth totalRow={10} />
              ) : (        <Container maxWidth="xl" sx={{ paddingTop: 10, minWidth:"100%" }}>
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
                              <TableCell align="center"><IconButton
                                  color={
                                    fileURLPDF === '' ? 'disabled' : 'secondary'
                                  }
                                  onClick={() =>
                                    handleOpenFile(fileURLPDF, typeDocument)
                                  }
                                >
                                  <VisibilityIcon />
                                </IconButton>
                              </TableCell>
                              <TableCell align="center">
                                <IconButton
                                  color={
                                    fileURLZIP === '' ? 'disabled' : 'secondary'
                                  }
                                  onClick={() =>
                                    handleOpenFile(fileURLZIP, typeDocument)
                                  }
                                >
                                  <FileDownloadIcon />
                                </IconButton>
                              </TableCell>
                              <TableCell align="left">{owner.name}</TableCell>
                              <TableCell align="center"><IconButton
                                  color={fileURLPDF === '' ? 'primary' : 'disabled'}
                                  disabled={fileURLPDF !== ''}
                                  onClick={() => handleLoadFile(idDocument)}
                                >
                                  <CloudDownloadIcon />
                                </IconButton>
                              </TableCell>
                            </TableRow>
                          );
                        }
                      )}
                    </TableBody>
                  
                </Table>
              </TableContainer>
            </Container>)}

      </section>
      {isOpenCopyURL && (
        <CopyURLFile handleClose={handleClose} isOpen={isOpenCopyURL} viewURLFile={viewURLFile}/>
      )}
    </main>
  );
};
