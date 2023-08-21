import { Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useGetFilesQuery } from 'utils/RTK-Query';

export const PaginationPage = ({ getDocuments, countDocumentDB }) => {
  const limit = 3;
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const { data, error, isLoading } = useGetFilesQuery({ page, limit });

  useEffect(() => {
    if (data) {
      getDocuments(data, error, isLoading);
    }
  }, [data, getDocuments, error, isLoading]);

  useEffect(() => {
    if (countDocumentDB) {
      setMaxPage(Math.ceil(countDocumentDB.count / limit));
    }
  }, [countDocumentDB]);

  const handleChange = (e, value) => {
    setPage(value);
  };

  return (
    <>
      {isLoading && <Typography>Loading documents...</Typography>}
      {error && (
        <Typography paragraph align="center">
          Уупс, щось пішло не так. Спробуйте перезавантажити сторінку
        </Typography>
      )}
      <Stack
        spacing={2}
        sx={{
          width: 350,
          marginLeft: 'auto',
          marginRight: 'auto',
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
    </>
  );
};
