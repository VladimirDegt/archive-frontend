import * as React from 'react';
import { Container } from '@mui/system';
import {
  IconButton,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Collapse,
  Box,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { selectToken } from 'redux/users/selectors';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Main = ({ data, error, isLoading }) => {
  const [openStates, setOpenStates] = useState(data?.map(() => false) || []);
  const { token } = useSelector(selectToken);

  const updateResponce = data?.map(item => {
    const newPDF = item.fileURLPDF.indexOf('_');
    const newZIP = item.fileURLZIP.indexOf('_');
    const newActs = item.acts.map(item => {
      const newActPDF = item.fileURLPDF.indexOf('_');
      const newActZIP = item.fileURLZIP.indexOf('_');
      return {
        ...item,
        shortNameActPDF: item.fileURLPDF.slice(newActPDF + 1),
        shortNameActZIP: item.fileURLZIP.slice(newActZIP + 1),
      };
    });
    console.log(newActs);
    return {
      ...item,
      acts: newActs,
      shortNamePDF: item.fileURLPDF.slice(newPDF + 1),
      shortNameZIP: item.fileURLZIP.slice(newZIP + 1),
    };
  });

  const handleOpenPDF = (fileURL, typeDocument) => {
    const pathFile = `http://localhost:3001/${fileURL}`;
    window.open(pathFile, '_blank', `title=${typeDocument}`);
  };
  const handleOpenZIP = (fileURL, typeDocument) => {
    const pathFile = `http://localhost:3001/${fileURL}`;
    window.open(pathFile, '_blank', `title=${typeDocument}`);
  };

  const handleOpenToggle = index => {
    setOpenStates(prevOpenStates => {
      const newOpenStates = [...prevOpenStates];
      newOpenStates[index] = !newOpenStates[index];
      return newOpenStates;
    });
  };

  return (
    <main style={{ flexGrow: 1 }}>
      {token && (
        <section>
          <Container maxWidth="xl" sx={{ paddingTop: 10 }}>
            {isLoading && <Typography>Loading contacts...</Typography>}
            {error && (
              <Typography paragraph>
                Упс, щось пішло не так. Спробуйте перезавантажити сторінку
              </Typography>
            )}
            <TableContainer component={Paper}>
              <Table aria-label="collapsible table" sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell />
                    <TableCell style={{ fontWeight: 'bold', fontSize: '20px' }}>
                      Замовник
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
                      Номер
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontWeight: 'bold', fontSize: '20px' }}
                    >
                      Назва файлу
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ fontWeight: 'bold', fontSize: '20px' }}
                    >
                      Zip архів
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  {updateResponce?.map(
                    (
                      {
                        nameCustomer,
                        numberDocument,
                        typeDocument,
                        owner,
                        fileURLPDF,
                        fileURLZIP,
                        _id: id,
                        shortNamePDF,
                        shortNameZIP,
                        acts,
                      },
                      index
                    ) => (
                      <React.Fragment key={id}>
                        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                          <TableCell>
                            <IconButton
                              aria-label="expand row"
                              size="small"
                              onClick={() => handleOpenToggle(index)}
                            >
                              {openStates[index] ? (
                                <KeyboardArrowUpIcon />
                              ) : (
                                <KeyboardArrowDownIcon />
                              )}
                            </IconButton>
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {nameCustomer}
                          </TableCell>
                          <TableCell align="left">{typeDocument}</TableCell>
                          <TableCell align="left">{numberDocument}</TableCell>
                          <TableCell align="left">{shortNamePDF}</TableCell>
                          <TableCell align="left">{shortNameZIP}</TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="secondary"
                              onClick={() =>
                                handleOpenPDF(fileURLPDF, typeDocument)
                              }
                            >
                              <VisibilityIcon />
                            </IconButton>
                          </TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="secondary"
                              onClick={() =>
                                handleOpenZIP(fileURLZIP, typeDocument)
                              }
                            >
                              <FileDownloadIcon />
                            </IconButton>
                          </TableCell>
                          <TableCell align="left">{owner.name}</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell
                            style={{
                              paddingBottom: 0,
                              paddingTop: 0,
                            }}
                            colSpan={6}
                          >
                            <Collapse
                              in={openStates[index]}
                              timeout="auto"
                              unmountOnExit
                            >
                              <Box sx={{ margin: 1 }}>
                                <Typography
                                  variant="h6"
                                  gutterBottom
                                  component="div"
                                >
                                  Пов'язані документи:
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>Тип документа</TableCell>
                                      <TableCell>Місяць</TableCell>
                                      <TableCell align="right">PDF</TableCell>
                                      <TableCell align="right">ZIP</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {acts?.map(
                                      ({
                                        _id: id,
                                        typeDocument,
                                        nameMonth,
                                        shortNameActPDF,
                                        shortNameActZIP,
                                      }) => (
                                        <TableRow key={id}>
                                          <TableCell component="th" scope="row">
                                            {typeDocument}
                                          </TableCell>
                                          <TableCell>{nameMonth}</TableCell>
                                          <TableCell align="right">
                                            {shortNameActPDF}
                                          </TableCell>
                                          <TableCell align="right">
                                            {shortNameActZIP}
                                          </TableCell>
                                        </TableRow>
                                      )
                                    )}
                                  </TableBody>
                                </Table>
                              </Box>
                            </Collapse>
                          </TableCell>
                        </TableRow>
                      </React.Fragment>
                    )
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </section>
      )}
    </main>
  );
};
