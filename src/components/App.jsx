import { Box } from '@mui/material';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';

export const App = () => {

  return (
    <Box sx={{
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "space-between", 
      minHeight: "100vh"
      }}>
      <Header />
      <Main />
      <Footer/>
    </Box>
  );
};
