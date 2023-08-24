import {
  Autocomplete,
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
import { contacts } from 'db/contacts';
import { numberDogovir } from 'db/number-dogovir';
import { Notify } from 'notiflix';
import { useState } from 'react';
import { useLoadFileMutation } from 'utils/RTK-Query';

export const LoadFileForm = ({ isOpen, handleClose, getAllNumberDocument }) => {
  const [selectedFile, setSelectedFile] = useState('');
  const [selectedFileZip, setSelectedFileZip] = useState('');
  const [nameCustomer, setNameCustomer] = useState('');
  const [typeDocument, setTypeDocument] = useState("Договір");
  const [idDogovir, setNumberDogovir] = useState('');
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

  const handleNameCustomer = (_, newValue) => {
    if (newValue) {
      setNameCustomer(newValue);
    }
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
    formData.append('idDogovir', idDogovir);
    formData.append('fileURL', selectedFile);
    formData.append('fileURLZip', selectedFileZip);

    setSelectedFile('');
    setSelectedFileZip('');
    setNameCustomer('');
    setTypeDocument('');
    setNumberDocument('');
    handleClose();

    await loadFile(formData);
    Notify.success('File is loaded', {
      position: 'center-top',
      distance: '10px',
    });
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
            <MenuItem value="Акт наданих послуг">Акт наданих послуг</MenuItem>
            <MenuItem value="Рахунок">Рахунок</MenuItem>
          </Select>
          {typeDocument === 'Акт наданих послуг' ? (
            <>
              <InputLabel id="number_dogovir">Номер договора</InputLabel>
              <Select
                labelId="number_dogovir"
                value={idDogovir}
                margin="dense"
                name="numberDogovir"
                type="text"
                fullWidth
                onChange={handleSelectDogovir}
                required
              >
                {getAllNumberDocument.numberDocumentValues.map(
                  ({ id, numberDocument }) => (
                    <MenuItem value={id} key={id}>
                      {numberDocument}
                    </MenuItem>
                  )
                )}
              </Select>
              {/* <InputLabel id="month">Місяць</InputLabel>
              <Select
                labelId="month"
                value={nameMonth}
                margin="dense"
                name="month"
                type="text"
                fullWidth
                onChange={handleSelectMonth}
                required
              >
                {months.map(item => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select> */}
            </>
          ) : (
            <>
              <Autocomplete
                disablePortal
                value={nameCustomer}
                options={contacts}
                margin="dense"
                fullWidth
                renderInput={params => (
                  <TextField {...params} label="Власник" />
                )}
                onChange={handleNameCustomer}
                sx={{ marginTop: 2 }}
              />

              <InputLabel id="number">Номер</InputLabel>
              <Select
                labelId="number"
                value={numberDocument}
                margin="dense"
                name="number"
                type="text"
                fullWidth
                onChange={handleNumberDocument}
                required
              >
                {numberDogovir.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </>
          )}

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
