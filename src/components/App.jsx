import { Box } from '@mui/material';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { useState } from 'react';

export const App = () => {
  const [countDocumentDB, setCountDocumentDB] = useState();

  const countDocument = (count) => {
    setCountDocumentDB(count);
  }

  return (
    <Box sx={{
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "space-between", 
      minHeight: "100vh"
      }}>
      <Header countDocument={countDocument}/>
      <Main countDocumentDB={countDocumentDB}/>
      <Footer />
    </Box>
  );
};
