import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect, useState } from 'react';
import { useGetFilesQuery } from 'utils/RTK-Query';

export const PaginationPage =  ({getDocuments}) => {
  const [page, setPage] = useState(1);
  const {data, error, isLoading} = useGetFilesQuery({page, limit: 3});

  useEffect(()=>{
    if(data){
      getDocuments(data, error, isLoading)
    }
    
  },[data, getDocuments])

  const handleChange = (e, value) => {
    setPage(value)
  };

  return (
    <Stack spacing={2} sx={{width:350, marginLeft: "auto", marginRight: "auto", marginTop: 3, marginBottom: 3}}>
      <Pagination count={10} color="primary" page={page} onChange={handleChange}/>
    </Stack>
  );
};