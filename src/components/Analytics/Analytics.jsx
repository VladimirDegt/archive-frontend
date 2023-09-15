import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Divider,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useCountAllDocumentsMutation } from 'utils/RTK-Query';

export const Analytics = ({ handleClose, isOpen }) => {
  const [countTypeDocument, setCountTypeDocument] = useState([]);
  const [totalDocument, setTotalDocument] = useState('');
  const [countAllDocuments] = useCountAllDocumentsMutation();

  const handleSubmit = async () => {
    const response = await countAllDocuments();
    setCountTypeDocument(response.data);
    const total = response.data.reduce((acc, item) => acc + item.count, 0);
    setTotalDocument(total)
  };

  const handleCloseForm = () => {
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="copyURL">
      <DialogContent
        id="registration"
        sx={{ textAlign: 'center', minWidth: 400 }}
      >
        <Container sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" align="center" sx={{ marginBottom: 2 }}>
            Статистика документів
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <Typography variant="h6">Загальна кількість:</Typography>
            <Typography variant="h6" color="secondary">
              {totalDocument}
            </Typography>
          </Box>
          <Divider sx={{marginBottom:1}}/>
          {countTypeDocument.map(item => {
            return (
              <Box
                sx={{ display: 'flex', justifyContent: 'space-between' }}
                key={item._id}
              >
                <Typography variant="h6">{item._id || 'Тип документа не вказано'}</Typography>
                <Typography variant="h6" color="secondary">
                  {item.count}
                </Typography>
              </Box>
            );
          })}
        </Container>
        <Button onClick={handleCloseForm} sx={{ marginTop: 2 }}>
          Cancel
        </Button>
        <Button onClick={handleSubmit} sx={{ marginTop: 2 }}>
          Отримати
        </Button>
      </DialogContent>
    </Dialog>
  );
};
