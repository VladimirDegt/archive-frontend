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
// import { contacts } from 'db/contacts';
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import {
  useGetActFromDBMutation,
  useGetCustomerFromDBMutation,
  useGetDogovirFromDBMutation,
  useGetNameCustomerFromDBQuery,
  useGetSearchMutation,
} from 'utils/RTK-Query';
import { SkeletonAuth } from 'components/Skeletons/SkeletonAuth';

export const LoadSearchForm = ({ isOpen, handleClose, searchDocument }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fieldSearch, setFieldSearch] = useState('');
  const [nameCustomer, setNameCustomer] = useState('');
  const [numberDocument, setNumberDocument] = useState('');
  const [isAutocompleteFocused, setIsAutocompleteFocused] = useState(false);
  const [nameCustomerFromDB, setNameCustomerFromDB] = useState('');
  const [numberDogovirFromDB, setNumberDogovirFromDB] = useState('');
  const [getSearch] = useGetSearchMutation();
  const [getCustomerFromDB] = useGetCustomerFromDBMutation();
  const [getDogovirFromDB] = useGetDogovirFromDBMutation();
  const [getActFromDB] = useGetActFromDBMutation();
  const { data } = useGetNameCustomerFromDBQuery();

  useEffect(() => {
    if (!data) {
      return;
    }
    setNameCustomerFromDB([...data.allNames, '']);
    const updateNumbers = data.allNumbers.map(number => String(number));
    const index = updateNumbers.findIndex(item => item === "null");
    updateNumbers[index] = String(0);
    setNumberDogovirFromDB([...updateNumbers, '']);
  }, [data]);

  const handleFieldSearch = ({ target }) => {
    setFieldSearch(target.value);
  };

  const handleNameCustomer = (_, newValue) => {
    if (newValue) {
      setNameCustomer(newValue);
      setIsAutocompleteFocused(false);
    }
  };

  const handleNumberDocument = (_, newValue) => {
    if (newValue) {
      setNumberDocument(newValue);
      setIsAutocompleteFocused(false);
    }
  };

  const handleAutocompleteFocus = () => {
    setIsAutocompleteFocused(true);
  };

  const handleAutocompleteBlur = () => {
    setIsAutocompleteFocused(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (fieldSearch === 'name') {
          if (!nameCustomer) {
      Notify.failure('Виберіть замовника', {
        position: 'center-right',
        distance: '10px',
      });
      return;
    }
      setIsLoading(true);
      const responce = await getCustomerFromDB(nameCustomer);
      setIsLoading(false);
      searchDocument(responce.data);
    }
    if (fieldSearch === 'numberDog') {
      if (!numberDocument) {
        Notify.failure('Виберіть номер', {
          position: 'center-right',
          distance: '10px',
        });
        return;
      }
      setIsLoading(true);
      const responce = await getDogovirFromDB(numberDocument);
      setIsLoading(false);
      if (responce.data.length === 0) {
        Notify.failure('Договір з таким номером не знайдено', {
          position: 'center-right',
          distance: '10px',
        });
      }
      searchDocument(responce.data);
    }

    if (fieldSearch === 'numberAct') {
      if (!numberDocument) {
        Notify.failure('Виберіть номер', {
          position: 'center-right',
          distance: '10px',
        });
        return;
      }
      setIsLoading(true);
      const responce = await getActFromDB(numberDocument);
      setIsLoading(false);
      if (responce.data.length === 0) {
        Notify.failure('Акт з таким номером не знайдено', {
          position: 'center-right',
          distance: '10px',
        });
      }
      searchDocument(responce.data);
    }

    setFieldSearch('');
    setNameCustomer('');
    setNumberDocument('');
    handleClose();
  };

  // const handleSubmit = async e => {
  //   e.preventDefault();

  //   if (!nameCustomer && !numberDocument) {
  //     Notify.warning('Виберіть замовника', {
  //       position: 'center-top',
  //       distance: '10px',
  //     });
  //     return;
  //   }

  //   try {
  //     setIsLoading(true);
  //     const response = await getSearch({
  //       nameCustomer,
  //       numberDocument,
  //     });
  //     setIsLoading(false);

  //     if (response.error) {
  //       Notify.failure(response.error.data.message, {
  //         position: 'center-top',
  //         distance: '10px',
  //       });
  //       return;
  //     }

  //     searchDocument([response.data]);

  //     setFieldSearch('');
  //     setNameCustomer('');
  //     setNumberDocument('');
  //     handleClose();
  //   } catch (error) {
  //     console.log('error', error.message);
  //   }
  // };

  return (
    <Dialog open={isOpen} onClose={handleClose} aria-labelledby="search">
      {isLoading ? (
        <SkeletonAuth totalRow={2} />
      ) : (
        <form onSubmit={handleSubmit}>
          <DialogTitle id="search" sx={{ textAlign: 'center', minWidth: 380 }}>
            Пошук
          </DialogTitle>
          <DialogContent sx={{ height: isAutocompleteFocused ? 400 : 'auto' }}>
            <InputLabel id="option-search">Що шукаємо</InputLabel>
            <Select
              labelId="option-search"
              value={fieldSearch}
              margin="dense"
              name="fieldSearch"
              type="text"
              fullWidth
              onChange={handleFieldSearch}
              required
            >
              <MenuItem value="name">Замовника</MenuItem>
              <MenuItem value="numberDog">Договір</MenuItem>
              <MenuItem value="numberAct">Акт до договору</MenuItem>
            </Select>
            {fieldSearch === 'name' && (
              <Autocomplete
                disablePortal
                value={nameCustomer}
                options={nameCustomerFromDB}
                margin="dense"
                fullWidth
                renderInput={params => (
                  <TextField {...params} label="Власник" />
                )}
                onChange={handleNameCustomer}
                onFocus={handleAutocompleteFocus}
                onBlur={handleAutocompleteBlur}
                sx={{ marginTop: 3 }}
                required
              />
            )}

            {(fieldSearch === 'numberDog' || fieldSearch === 'numberAct') && (
              <Autocomplete
                disablePortal
                value={numberDocument}
                options={numberDogovirFromDB}
                margin="dense"
                fullWidth
                renderInput={params => <TextField {...params} label="Номер" />}
                onChange={handleNumberDocument}
                onFocus={handleAutocompleteFocus}
                onBlur={handleAutocompleteBlur}
                sx={{ marginTop: 3 }}
                required
              />
              // <>
              //   <InputLabel id="number" sx={{ marginTop: 3 }}>
              //     Номер
              //   </InputLabel>
              //   <Select
              //     labelId="number"
              //     value={numberDocument}
              //     margin="dense"
              //     name="number"
              //     type="text"
              //     fullWidth
              //     onChange={handleNumberDocument}
              //     required
              //   >
              //     {numberDogovir.map((item, index) => (
              //       <MenuItem value={item} key={index}>
              //         {item}
              //       </MenuItem>
              //     ))}
              //   </Select>
              // </>
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
      )}
    </Dialog>
  );
};
