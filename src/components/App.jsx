import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { SkeletonLoading } from './Skeletons/SkeletonLoading';
// import { PublicRoute } from './PublicRoute/PublicRoute';

const Home = lazy(() => import('pages/Home/Home'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Archive = lazy(() => import('pages/Archive/Archive'));
const Admin = lazy(() => import('pages/Admin/Admin'));

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
      <Suspense
        fallback={<SkeletonLoading totalRow={10}>Loading...</SkeletonLoading>}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/archive"
            element={
              <PrivateRoute>
                <Archive />
              </PrivateRoute>
            }
          />
          <Route 
            path = "/admin"
            element={
            <PrivateRoute>
              <Admin/>
            </PrivateRoute>}
            />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Box>
  );
};
