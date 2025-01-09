import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel, MenuItem, Select,
  TextField,
} from '@mui/material';
import { SkeletonAuth } from 'components/Skeletons/SkeletonAuth';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useLoadFilePDFMutation } from 'utils/RTK-Query';

export const LoadFilePDF = ({
  isOpen,
  handleClose,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState('');
  const [nomenclature, setNomenclature] = useState('');
  const [loadFilePDF] = useLoadFilePDFMutation();

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    if (!file.name.endsWith('.pdf')) {
      Notify.warning('Вибрати файл з розширенням .pdf', {
        position: 'center-top',
        distance: '10px',
      });
      return;
    }
    setSelectedFile(file);
  };

  const handleFieldStatus = ({ target }) => {
    setNomenclature(target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!selectedFile || !nomenclature) {
      Notify.warning('Виберіть файл та номер по номенклатурі', {
        position: 'center-top',
        distance: '10px',
      });
      return;
    }

    const formData = new FormData();

    formData.append('pdf', selectedFile);
    formData.append('nomenclature', nomenclature)

    try {
      setIsLoading(true);
      const response = await loadFilePDF(formData);
      setIsLoading(false);

      if (response.error) {
        Notify.failure(response.error.data.message, {
          position: 'center-top',
          distance: '10px',
        });
        return;
      }
      Notify.success('Дані з файлу .pdf додані до БД', {
        position: 'center-top',
        distance: '10px',
      });

    } catch (error) {
      console.log('error', error);
    } finally {
      setSelectedFile('');
      handleClose();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="registration"
      sx={{
        position: 'absolute',
        top: '-50%',
      }}
    >
      {isLoading ? (
        <SkeletonAuth totalRow={1} />
      ) : (
        <form onSubmit={handleSubmit}>
          <DialogTitle id="registration" sx={{ textAlign: 'center' }}>
            Завантажити файл .pdf
          </DialogTitle>
          <DialogContent>
            <InputLabel htmlFor="file-upload">Виберіть файл .pdf</InputLabel>
            <TextField
              autoFocus
              margin="dense"
              name="file"
              id="file-upload"
              type="file"
              fullWidth
              onChange={handleFileChange}
              sx={{marginBottom: 2}}
            />
            <InputLabel htmlFor="invNumber">Виберіть номер номенклатури</InputLabel>
            <Select
              id="invNumber"
              value={nomenclature}
              margin="dense"
              name="fieldStatus"
              type="text"
              fullWidth
              onChange={handleFieldStatus}
              required
            >
              <MenuItem value="10.1-01">10.1-01 (договірний відділ до 01.06.24)</MenuItem>
              <MenuItem value="E09.1-01">E09.1-01 (договірний відділ)</MenuItem>
              <MenuItem value="E08-29">E08-29 (бухгалтерія до 01.06.24)</MenuItem>
              <MenuItem value="E07-21">E07-21 (бухгалтерія)</MenuItem>
            </Select>
          </DialogContent>
          <DialogActions
            sx={{
              paddingRight: 3,
              paddingLeft: 3,
              justifyContent: 'center',
            }}
          >
            <Button onClick={handleClose}>Відмінити</Button>
            <Button type="submit">Відправити</Button>
          </DialogActions>
        </form>
      )}
    </Dialog>
  );
};
