import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { SkeletonLoading } from './Skeletons/SkeletonLoading';

const Home = lazy(()=> import('pages/Home/Home'))
const NotFound = lazy(()=> import('pages/NotFound/NotFound'))
const Archive = lazy(()=> import('pages/Archive/Archive'))

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
        <Suspense fallback={<SkeletonLoading>Loading...</SkeletonLoading>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
        </Suspense>
    </Box>
  );
};
