import { Container, Skeleton } from '@mui/material';

export const SkeletonLoading = () => {
  return (
    <Container
    maxWidth="xl"
    sx={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: "center",
      gap: 2,
      marginTop: 2,
      marginBottom: 2,
    }}
  >
    <Skeleton
      animation="wave"
      variant="rounded"
      sx={{ minWidth: 300, width: '100%' }}
      height={30}
    />
        <Skeleton
      animation="wave"
      variant="rounded"
      sx={{ minWidth: 300, width: '100%' }}
      height={30}
    />
  </Container>
  );
};
