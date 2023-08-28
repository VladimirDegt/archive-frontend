import { Container, Skeleton } from '@mui/material';

export const SkeletonAvatar = ({ totalRow }) => {
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
    <Skeleton variant="circular" width={55} height={55} animation="wave" />
    {[...Array(totalRow)].map((_, index) => (
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{ minWidth: 300, width: '100%' }}
        height={73}
        key={index}
      />
    ))}
  </Container>
  );
};
