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
import { useGetSearchMutation } from 'utils/RTK-Query';

export const LoadSearchForm = ({ isOpen, handleClose }) => {
  const [fieldSearch, setFieldSearch] = useState('');
  const [nameCustomer, setNameCustomer] = useState('');
  const [numberDocument, setNumberDocument] = useState('');
  const [getSearch] = useGetSearchMutation();

  const handleFieldSearch = ({ target }) => {
    setFieldSearch(target.value);
  };

  const handleNameCustomer = (_, newValue) => {
    if (newValue) {
      setNameCustomer(newValue);
    }
  };

  const handleNumberDocument = ({ target }) => {
    setNumberDocument(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nameCustomer && !numberDocument) {
      Notify.warning('Виберіть замовника', {
        position: 'center-top',
        distance: '10px',
      });
      return;
    }

    await getSearch({
      nameCustomer,
      numberDocument
    })
  
    setFieldSearch("");
    setNameCustomer("");
    setNumberDocument("");
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="search"  >
      <form onSubmit={handleSubmit}>
        <DialogTitle
          id="search"
          sx={{ textAlign: 'center', minWidth: 380 }}
        >
          Пошук
        </DialogTitle>
        <DialogContent >
          <InputLabel id="demo-customized-select-label">Що шукаємо</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            value={fieldSearch}
            margin="dense"
            name="fieldSearch"
            type="text"
            fullWidth
            onChange={handleFieldSearch}
            required
          >
            <MenuItem value="name">Замовника</MenuItem>
            <MenuItem value="number">Номер договору</MenuItem>
          </Select>
          {fieldSearch === 'name' && (
            <Autocomplete
              disablePortal
              value={nameCustomer}
              options={contacts}
              margin="dense"
              fullWidth
              renderInput={params => <TextField {...params} label="Власник" />}
              onChange={handleNameCustomer}
              sx={{ marginTop: 3}}
              required
            />
          )}
          
          {fieldSearch === 'number' &&  (
            <>
              <InputLabel id="number" sx={{ marginTop: 3 }}>Номер</InputLabel>
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
        </DialogContent>
        <DialogActions
          sx={{
            paddingRight: 3,
            paddingLeft: 3,
            justifyContent: 'center',
          }}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Search</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
