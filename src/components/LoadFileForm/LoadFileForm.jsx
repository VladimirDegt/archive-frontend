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

export const LoadFileForm = ({ isOpen, handleClose, data }) => {
  const [selectedFile, setSelectedFile] = useState('');
  const [selectedFileZip, setSelectedFileZip] = useState('');
  const [nameCustomer, setNameCustomer] = useState('');
  const [typeDocument, setTypeDocument] = useState('');
  const [numberDogovir, setNumberDogovir] = useState('');
  const [numberDocument, setNumberDocument] = useState('');
  const [loadFile] = useLoadFileMutation();

  const handleFileChange = ({ target }) => {
    const file = target.files[0];
    setSelectedFile(file);
  };
  const handleFileZipChange = ({ target }) => {
    const file = target.files[0];
    setSelectedFileZip(file);
  };

  const handleNameCustomer = ({ target }) => {
    setNameCustomer(target.value);
  };

  const handleTypeDocument = ({ target }) => {
    setTypeDocument(target.value);
  };

  const handleNumberDocument = ({ target }) => {
    setNumberDocument(target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!selectedFile || !selectedFileZip) {
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
    formData.append('fileURLZip', selectedFileZip);

    setSelectedFile('');
    setSelectedFileZip('');
    handleClose();

    try {
      await loadFile(formData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSelectDogovir = ({ target }) => {
    setNumberDogovir(target.value);
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="loadFile">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <DialogTitle id="loadFile" sx={{ textAlign: 'center' }}>
          Вибрати документ
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
          {typeDocument === 'Акт' ? (
            <>
                      <InputLabel id="number_dogovir">
                      Номер договора
                    </InputLabel>
            <Select
              labelId="number_dogovir"
              value={numberDogovir}
              margin="dense"
              name="numberDogovir"
              type="text"
              fullWidth
              onChange={handleSelectDogovir}
              required
            >
              {data?.map(item => (
                <MenuItem value={item.numberDocument} key={item._id}>
                  {item.numberDocument}
                </MenuItem>
              ))}
            </Select>
            </>
          ) : (
            <TextField
              margin="dense"
              name="customer"
              label="Власник"
              type="text"
              fullWidth
              onChange={handleNameCustomer}
              required
            />
          )}

          <TextField
            margin="dense"
            name="number"
            label="Номер"
            type="text"
            fullWidth
            onChange={handleNumberDocument}
            required
          />
          <InputLabel id="pdf_uploads">
            вибрати файл з розширенням .pdf
          </InputLabel>
          <TextField
            id="pdf_uploads"
            name="loadFile"
            type="file"
            accept=".pdf"
            fullWidth
            onChange={handleFileChange}
            required
          />
          <InputLabel id="pdf_uploads">
            вибрати файл з розширенням .zip
          </InputLabel>
          <TextField
            id="zip_uploads"
            name="loadFileZip"
            type="file"
            accept=".zip"
            fullWidth
            onChange={handleFileZipChange}
            required
          />
        </DialogContent>
        <DialogActions
          sx={{
            paddingRight: 3,
            paddingLeft: 3,
            marginBottom: 2,
            justifyContent: 'space-around',
          }}
        >
          <Button
            onClick={handleClose}
            variant="contained"
            sx={{ minWidth: 150 }}
          >
            Cancel
          </Button>
          <Button type="submit" variant="contained" sx={{ minWidth: 150 }}>
            Відправити
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
