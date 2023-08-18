import { Box } from '@mui/material';
import { Header } from './Header/Header';
import { Main } from './Main/Main';
import { Footer } from './Footer/Footer';
import { useGetFilesQuery } from 'utils/RTK-Query';

export const App = () => {
  const {data, error, isLoading} = useGetFilesQuery();

  return (
    <Box sx={{
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "space-between", 
      minHeight: "100vh"
      }}>
      <Header data={data}/>
      <Main data={data} error= {error} isLoading= {isLoading} />
      <Footer/>
    </Box>
  );
};
