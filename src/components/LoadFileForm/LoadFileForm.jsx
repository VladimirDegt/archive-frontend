import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useLoadFileMutation } from 'utils/RTK-Query';

export const LoadFileForm = ({ isOpen, handleClose }) => {
  const [selectedFile, setSelectedFile] = useState('');
  const [nameCustomer, setNameCustomer] = useState('');
  const [typeDocument, setTypeDocument] = useState('');
  const [numberDocument, setNumberDocument] = useState('');
  const [loadFile] = useLoadFileMutation();

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    setSelectedFile(file);
  };

  const handleNameCustomer = ({ target }) => {
    setNameCustomer(target.value);
  };

  const handleTypeDocument = async ({ target }) => {
    setTypeDocument(target.value);
  };

  const handleNumberDocument = ({ target }) => {
    setNumberDocument(target.value);
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
    formData.append('nameCustomer', nameCustomer);
    formData.append('typeDocument', typeDocument);
    formData.append('numberDocument', numberDocument);
    formData.append('fileURL', selectedFile);

    setSelectedFile('');
    handleClose();

    try {
      await loadFile(formData);
      // const fileURL = `http://localhost:3001/${response.data}`;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="loadFile">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <DialogTitle id="loadFile" sx={{ textAlign: 'center' }}>
          Завантажити документ
        </DialogTitle>
        <DialogContent>
          <InputLabel id="demo-customized-select-label">
            Тип документа
          </InputLabel>
          <Select
            labelId="demo-customized-select-label"
            value={typeDocument}
            margin="dense"
            name="typeDocument"
            type="text"
            fullWidth
            onChange={handleTypeDocument}
            required
          >
            <MenuItem value="Договір">Договір</MenuItem>
            <MenuItem value="Акт">Акт</MenuItem>
            <MenuItem value="Рахунок">Рахунок</MenuItem>
          </Select>

          <TextField
            margin="dense"
            name="customer"
            label="Власник"
            type="text"
            fullWidth
            onChange={handleNameCustomer}
            required
          />
          <TextField
            margin="dense"
            name="number"
            label="Номер"
            type="text"
            fullWidth
            onChange={handleNumberDocument}
            required
          />
          <TextField
            name="loadFile"
            type="file"
            fullWidth
            onChange={handleFileChange}
            required
          />
        </DialogContent>
        <DialogActions
          sx={{
            paddingRight: 3,
            paddingLeft: 3,
            marginBottom: 2,
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ minWidth: 150, marginRight: 5 }}
          >
            Відмінити
          </Button>
          <Button type="submit" variant="contained" sx={{ minWidth: 150 }}>
            Завантажити
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
