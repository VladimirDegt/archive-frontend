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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { PaginationPage } from 'components/Pagination/Pagination';
import { formatDateTime } from 'utils/format-date-time';
import { selectLoadingSkeleton, selectToken } from 'redux/users/selectors';
import { SkeletonTable } from 'components/Skeleton/Skeleton';
import { isLoadingSkeleton } from 'redux/users/reducer';

export const Main = ({ countDocumentDB, searchDocumentDB }) => {
  const [getAllDocuments, setGetAllDocuments] = useState([]);
  const [error, setError] = useState(false);
  const [openStates, setOpenStates] = useState(
    getAllDocuments?.map(() => false) || []
  );
  const { token } = useSelector(selectToken);
  const isLoading = useSelector(selectLoadingSkeleton);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchDocumentDB) {
      setGetAllDocuments(searchDocumentDB);
    }
  }, [searchDocumentDB]);

  useEffect(() => {
    console.log('isLoading-->', isLoading);
    if (getAllDocuments.length === 0) {
    }
    dispatch(isLoadingSkeleton(false));
    console.log('isLoading-->', isLoading);
  }, [getAllDocuments, dispatch]);

  const handleOpenPDF = (fileURL, typeDocument) => {
    // const pathFile = `http://localhost:3001/${fileURL}`;
    const pathFile = `${fileURL}`;
    window.open(pathFile, '_blank', `title=${typeDocument}`);
  };

  const handleOpenZIP = (fileURL, typeDocument) => {
    // const pathFile = `http://localhost:3001/${fileURL}`;
    const pathFile = `${fileURL}`;
    window.open(pathFile, '_blank', `title=${typeDocument}`);
  };

  const handleOpenToggle = index => {
    setOpenStates(prevOpenStates => {
      const newOpenStates = [...prevOpenStates];
      newOpenStates[index] = !newOpenStates[index];
      return newOpenStates;
    });
  };

  const handleGetDocuments = (getDocuments, error) => {
    if (!searchDocumentDB) {
      setGetAllDocuments(getDocuments);
      setError(error);
    }
  };

  return (
    <main style={{ flexGrow: 1 }}>
      {token && (
        <section>
          {isLoading && <SkeletonTable />}
          <Container maxWidth="xl" sx={{ paddingTop: 10 }}>
            {error && (
              <Typography paragraph align="center">
                Уупс, щось пішло не так. Спробуйте перезавантажити сторінку
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
                      Дата завантаження
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
                  {getAllDocuments?.map(
                    (
                      {
                        nameCustomer,
                        numberDocument,
                        typeDocument,
                        owner,
                        fileURLPDF,
                        fileURLZIP,
                        _id: id,
                        acts,
                        createdAt,
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
                          <TableCell align="left">
                            {formatDateTime(createdAt)}
                          </TableCell>
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
                            colSpan={9}
                          >
                            <Collapse
                              in={openStates[index]}
                              timeout="auto"
                              unmountOnExit
                            >
                              <Box
                                sx={{
                                  margin: 1,
                                  backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                  borderRadius: 2,
                                }}
                              >
                                <Table size="medium" aria-label="purchases">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell />
                                      <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                      >
                                        Тип документа
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                      >
                                        Місяць
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                      >
                                        Номер
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                      >
                                        Дата
                                      </TableCell>
                                      <TableCell
                                        align="left"
                                        sx={{ fontWeight: 'bold' }}
                                      >
                                        Сума
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        sx={{ fontWeight: 'bold' }}
                                      >
                                        Переглянути PDF
                                      </TableCell>
                                      <TableCell
                                        align="center"
                                        sx={{ fontWeight: 'bold' }}
                                      >
                                        Завантажити ZIP
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {acts?.map(
                                      ({
                                        _id: id,
                                        typeDocument,
                                        fileURLPDF,
                                        fileURLZIP,
                                        numberAct,
                                        price,
                                        date,
                                        month,
                                      }) => (
                                        <TableRow key={id}>
                                          <TableCell />
                                          <TableCell component="th" scope="row">
                                            {typeDocument}
                                          </TableCell>
                                          <TableCell>{month}</TableCell>
                                          <TableCell>{numberAct}</TableCell>
                                          <TableCell>{date}</TableCell>
                                          <TableCell>{price}</TableCell>

                                          <TableCell align="center">
                                            <IconButton
                                              color="secondary"
                                              onClick={() =>
                                                handleOpenPDF(
                                                  fileURLPDF,
                                                  typeDocument
                                                )
                                              }
                                            >
                                              <VisibilityIcon />
                                            </IconButton>
                                          </TableCell>
                                          <TableCell align="center">
                                            <IconButton
                                              color="secondary"
                                              onClick={() =>
                                                handleOpenZIP(
                                                  fileURLZIP,
                                                  typeDocument
                                                )
                                              }
                                            >
                                              <FileDownloadIcon />
                                            </IconButton>
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
      {token && (
        <section>
          <PaginationPage
            getDocuments={handleGetDocuments}
            countDocumentDB={countDocumentDB}
          />
        </section>
      )}
    </main>
  );
};
