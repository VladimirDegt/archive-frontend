import { Container, Skeleton } from '@mui/material';

export const SkeletonTable = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 2,
      }}
    >
      {[...Array(10)].map((_, index) => (
        <Skeleton
          animation="wave"
          sx={{ width: '100%' }}
          height={73}
          key={index}
        />
      ))}
    </Container>
  );
};
