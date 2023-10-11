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
import { Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import {
  useGetActFromDBMutation,
  useGetCustomerFromDBMutation,
  useGetDocumentByDateMutation,
  useGetDogovirFromDBMutation,
  useGetNameCustomerFromDBQuery,
} from 'utils/RTK-Query';
import { SkeletonAuth } from 'components/Skeletons/SkeletonAuth';
import { Calendar } from 'components/Calendar/Calendar';

export const LoadSearchForm = ({
  isOpen,
  handleClose,
  searchDocument,
  changeMaxPageAfterFilter,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fieldSearch, setFieldSearch] = useState('');
  const [nameCustomer, setNameCustomer] = useState('');
  const [numberDocument, setNumberDocument] = useState('');
  const [isAutocompleteFocused, setIsAutocompleteFocused] = useState(false);
  const [nameCustomerFromDB, setNameCustomerFromDB] = useState('');
  const [numberDogovirFromDB, setNumberDogovirFromDB] = useState('');
  const [rangeDate, setRangeDate] = useState('');
  const [getCustomerFromDB] = useGetCustomerFromDBMutation();
  const [getDogovirFromDB] = useGetDogovirFromDBMutation();
  const [getActFromDB] = useGetActFromDBMutation();
  const [getDocumentByDate] = useGetDocumentByDateMutation();
  const { data } = useGetNameCustomerFromDBQuery();

  useEffect(() => {
    if (!data) {
      return;
    }
    setNameCustomerFromDB([...data.allNames, '']);
    const updateNumbers = [...data.allNumbers];
    const index = updateNumbers.findIndex(item => item === 'null');
    if (index !== -1) {
      updateNumbers[index] = 0;
    }
    const sortUpdateNumbers = updateNumbers
      .sort((a, b) => a - b)
      .map(number => String(number));
    setNumberDogovirFromDB([...sortUpdateNumbers, '']);
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

  const getRangeDate = (date) => {
    setRangeDate(date)
  }

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

    if (fieldSearch === 'dateDocument') {
      if(!rangeDate) {
        Notify.failure('Виберіть вірні дати', {
          position: 'center-right',
          distance: '10px',
        });
        return;
      }

      setIsLoading(true);
      const responce = await getDocumentByDate(rangeDate);
      setIsLoading(false);

      if (responce.data.length === 0) {
        Notify.failure('Документи за цей період не знайдено', {
          position: 'center-right',
          distance: '10px',
        });
      }
      searchDocument(responce.data);
    }

    setFieldSearch('');
    setNameCustomer('');
    setNumberDocument('');
    changeMaxPageAfterFilter();
    handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="search"
      sx={{
        position: 'absolute',
        top: '-50%',
      }}
    >
      {isLoading ? (
        <SkeletonAuth totalRow={2} />
      ) : (
        <form onSubmit={handleSubmit}>
          <DialogTitle id="search" sx={{ textAlign: 'center', minWidth: 380 }}>
            Пошук
          </DialogTitle>
          <DialogContent
            sx={{
              height: isAutocompleteFocused ? 400 : 'auto',
            }}
          >
            <InputLabel id="option-search">Знайти:</InputLabel>
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
              <MenuItem value="numberDog">Номер договору</MenuItem>
              <MenuItem value="numberAct">Акт до договору</MenuItem>
              <MenuItem value="dateDocument">Дату початку дії</MenuItem>
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
                ListboxProps={{
                  style: { fontSize: '14px' },
                }}
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
                ListboxProps={{
                  style: { fontSize: '14px' },
                }}
              />
            )}

            {fieldSearch === 'dateDocument' && <Calendar getRangeDate={getRangeDate}/>}
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
