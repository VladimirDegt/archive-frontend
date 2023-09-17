import { Container, Skeleton } from '@mui/material';

export const SkeletonLoading = totalRow => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
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
      {[...Array(totalRow)].map((_, index) => (
        <Skeleton
          variant="rounded"
          animation="wave"
          sx={{ minWidth: 300, width: '100%' }}
          height={53}
          key={index}
        />
      ))}
      <Skeleton
        animation="wave"
        variant="rounded"
        sx={{ minWidth: 300, width: '100%' }}
        height={30}
      />
    </Container>
  );
};
