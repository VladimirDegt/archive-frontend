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
  const [nameFile, setNameFile] = useState('');
  const [loadFile] = useLoadFileMutation();

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    setSelectedFile(file);
  };

  const handleNameFile = ({target}) => {
    setNameFile(target.value)
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
    formData.append('dogovor', selectedFile);
    formData.append('name', nameFile);

    setSelectedFile('');
    handleClose();

    try {
      const response = await loadFile(formData);
      const fileURL = `http://localhost:3001/${response.data}`;
      console.log(fileURL);
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
              autoFocus
              margin="dense"
              name="name"
              label="Name"
              type="text"
              fullWidth
              onChange={handleNameFile}
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