import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
} from '@mui/material';
import { SkeletonAuth } from 'components/Skeletons/SkeletonAuth';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useLoadFileCSVMutation } from 'utils/RTK-Query';

export const LoadFileCSV = ({ isOpen, handleClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const [loadFileCSV] = useLoadFileCSVMutation();

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    if (!file.name.endsWith('.csv')) {
      Notify.warning('Вибрати файл з розширенням .csv', {
        position: 'center-top',
        distance: '10px',
      });
      return;
    }
    setSelectedFile(file);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!selectedFile) {
      Notify.warning('Please choose a file', {
        position: 'center-top',
        distance: '10px',
      });
      return;
    }

    const formData = new FormData();

    formData.append('csv', selectedFile);

    try {
      setIsLoading(true);
      const response = await loadFileCSV(formData);
      setIsLoading(false);

      if (response.error) {
        Notify.failure(response.error.data.message, {
          position: 'center-top',
          distance: '10px',
        });
        return;
      }
    } catch (error) {
      console.log('error', error.message);
    } finally {
      setSelectedFile('');
      handleClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="registration">
      {isLoading ? (
        <SkeletonAuth totalRow={1} />
      ) : (
        <form onSubmit={handleSubmit}>
          <DialogTitle id="registration" sx={{ textAlign: 'center' }}>
            Завантажити файл .csv
          </DialogTitle>
          <DialogContent>
            <InputLabel htmlFor="file-upload">Вибірить файл .csv</InputLabel>
            <TextField
              autoFocus
              margin="dense"
              name="file"
              id="file-upload"
              type="file"
              fullWidth
              onChange={handleFileChange}
            />
          </DialogContent>
          <DialogActions
            sx={{
              paddingRight: 3,
              paddingLeft: 3,
              justifyContent: 'center',
            }}
          >
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Відправити</Button>
          </DialogActions>
        </form>
      )}
    </Dialog>
  );
};
