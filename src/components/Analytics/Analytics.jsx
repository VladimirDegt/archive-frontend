import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Divider,
  Typography,
} from '@mui/material';
import { SkeletonAuth } from 'components/Skeletons/SkeletonAuth';
import {useEffect, useState} from 'react';
import { useCountAllDocumentsMutation } from 'utils/RTK-Query';

export const Analytics = ({ handleClose, isOpen }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [countTypeDocument, setCountTypeDocument] = useState([]);
  const [totalDocument, setTotalDocument] = useState('');
  const [countAllDocuments] = useCountAllDocumentsMutation();

  useEffect(() => {

    async function fetchData() {
      setIsLoading(true);
      const response = await countAllDocuments();
      setIsLoading(false);

      setCountTypeDocument(response.data);
      const total = response.data.reduce((acc, item) => acc + item.count, 0);
      setTotalDocument(total);
    }
    fetchData();

  }, [countAllDocuments, totalDocument]);


  const handleCloseForm = () => {
    handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="copyURL"
      sx={{
        position: 'absolute',
        top: '-45%',
      }}
    >
      {isLoading ? (
        <SkeletonAuth totalRow={3} sx={{ minWidth: 400 }} />
      ) : (
        <DialogContent
          id="registration"
          sx={{ textAlign: 'center', minWidth: 400 }}
        >
          <Container sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
              Статистика документів
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6">Загальна кількість:</Typography>
              <Typography variant="h6" color="secondary">
                {totalDocument}
              </Typography>
            </Box>
            <Divider sx={{ marginBottom: 1 }} />
            {countTypeDocument.map(item => {
              return (
                <Box
                  sx={{ display: 'flex', justifyContent: 'space-between' }}
                  key={item._id}
                >
                  <Typography variant="h6">
                    {item._id || 'Тип документа не вказано'}
                  </Typography>
                  <Typography variant="h6" color="secondary">
                    {item.count}
                  </Typography>
                </Box>
              );
            })}
          </Container>
          <Button onClick={handleCloseForm} sx={{ marginTop: 2 }}>
            Закрити
          </Button>
        </DialogContent>
      )}
    </Dialog>
  );
};
