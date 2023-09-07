import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { SkeletonLoading } from './Skeletons/SkeletonLoading';
import { PublicRoute } from './PublicRoute/PublicRoute';

const Home = lazy(() => import('pages/Home/Home'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Archive = lazy(() => import('pages/Archive/Archive'));

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
          <Route
            path="/"
            element={
              <PublicRoute>
                <Home />
              </PublicRoute>
            }
          />
          <Route
            path="/archive"
            element={
              <PrivateRoute>
                <Archive />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Box>
  );
};
