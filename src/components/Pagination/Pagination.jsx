import { Box, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useGetAllDocumentsMutation } from 'utils/RTK-Query';

export const PaginationPage = ({ getDocumentCurrentPage, isFilterOn }) => {
  const limit = 10;
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [allDocuments, setallDocuments] = useState([]);
  const [totalDocuments, setTotalDocuments] = useState('');
  const [isError, setIsError] = useState(false);
  const [getAllDocuments] = useGetAllDocumentsMutation();

  useEffect(() => {
    if (totalDocuments) {
      setMaxPage(Math.ceil(totalDocuments / limit));
    }
  }, [totalDocuments]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getAllDocuments(page, limit);
        setIsError(false)
        setallDocuments(response.data.getFiles);
        setTotalDocuments(response.data.total)
      } catch (error) {
        setIsError(true)
      }
    }
    fetchData();
  }, [page, getAllDocuments]);

  useEffect(() => {
    getDocumentCurrentPage(allDocuments)
  }, [allDocuments, getDocumentCurrentPage]);

  useEffect(()=>{
    if(isFilterOn){
      setMaxPage(1)
    }
  },[isFilterOn])

  const handleChange =  async (_, value) => {
    setPage(value);
  };

  return (
    <section>
      {isError && (
        <Typography paragraph align="center" sx={{ color: red[500] }}>
          Уупс, щось пішло не так. Спробуйте перезавантажити сторінку
        </Typography>
      )}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stack
          spacing={2}
          sx={{
            marginTop: 3,
            marginBottom: 3,
          }}
        >
          <Pagination
            count={maxPage}
            color="primary"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Box>
    </section>
  );
};
