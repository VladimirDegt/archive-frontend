import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { NotFound } from 'pages/NotFound/NotFound';
import { Archive } from 'pages/Archive/Archive';

export const App = () => {

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
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};
