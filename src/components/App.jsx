import { Box } from '@mui/material';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Archive } from 'pages/Archive/Archive';
import { NotFound } from 'pages/NotFound/NotFound';

export const App = () => {
  const [countDocumentDB, setCountDocumentDB] = useState();

  const countDocument = count => {
    setCountDocumentDB(count);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '100vh',
      }}
    >
      <Routes>
        <Route path="/frontend-backend" element={<Home />} />
        <Route path="/frontend-backend/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Header countDocument={countDocument}/>
      <Main countDocumentDB={countDocumentDB}/>
      <Footer /> */}
    </Box>
  );
};
