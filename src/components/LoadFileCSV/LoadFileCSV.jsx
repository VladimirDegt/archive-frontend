import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
} from '@mui/material';
import { Notify } from 'notiflix';
import { useState } from 'react';
import Papa from 'papaparse';
import { useParsePDFMutation } from 'utils/RTK-Query';

export const LoadFileCSV = ({ isOpen, handleClose }) => {
  const [selectedFile, setSelectedFile] = useState('');
  const [parsePDF] = useParsePDFMutation();

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
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

    formData.append('filePDF', selectedFile);

    setSelectedFile('');
    handleClose();

    const response = await parsePDF(formData);

    // ======== парсінг csv ==========
    // const res = []

    // await Papa.parse(selectedFile, {
    //     complete: function(results) {
    //       const arrayContacts = Object.values(results.data);
    //       const set = new Set(arrayContacts.flatMap(item=> item));
    //       set.forEach(item => res.push(item))
    //       console.table(res);
    //     }
    //   });
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="registration">
      <form onSubmit={handleSubmit}>
        <DialogTitle id="registration" sx={{ textAlign: 'center' }}>
          Робота з файлом .csv
        </DialogTitle>
        <DialogContent>
          <InputLabel htmlFor="file-upload">Вибірить файл .csv</InputLabel>
          <TextField
            autoFocus
            margin="dense"
            name="csv"
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
          <Button type="submit">відправити</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
