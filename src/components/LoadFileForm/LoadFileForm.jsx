import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useLoadFileMutation } from 'utils/RTK-Query';

export const LoadFileForm = ({isOpen, handleClose}) => {
  const [selectedFile, setSelectedFile] = useState('');
  const [nameCustomer, setNameCustomer] = useState('');
  const [typeDocument, setTypeDocument] = useState('');
  const [numberDocument, setNumberDocument] = useState('');
  const [loadFile] = useLoadFileMutation();

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    setSelectedFile(file);
  };

  const handleNameCustomer = ({target}) => {
    setNameCustomer(target.value)
  }

  const handleTypeDocument = ({target}) => {
    setTypeDocument(target.value)
  }
  
  const handleNumberDocument = ({target}) => {
    setNumberDocument(target.value)
  }

  const handleSubmit = async (e) => {
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
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="loadFile">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
          <DialogTitle id="loadFile" sx={{ textAlign: 'center' }}>
            Load file
          </DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              name="customer"
              label="Власник"
              type="text"
              fullWidth
              onChange={handleNameCustomer}
            />
            <TextField
              margin="dense"
              name="typeDocument"
              label="Тип документа"
              type="text"
              fullWidth
              onChange={handleTypeDocument}
            />
            <TextField
              margin="dense"
              name="number"
              label="Номер"
              type="text"
              fullWidth
              onChange={handleNumberDocument}
            />
              <TextField
                name='loadFile'
                type='file'
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
            <Button type="submit">Load</Button>
          </DialogActions>
        </form>
    </Dialog>
  );
}