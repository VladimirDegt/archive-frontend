import { Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useEffect, useMemo, useState } from 'react';
import { Notify } from 'notiflix';

export const Calendar = ({getRangeDate}) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  const customMinDate = dayjs('2021-01-01');
  const customMaxDate = dayjs('2031-01-01');

  useEffect(()=>{
    if((startDate === 'invalidDate' || startDate === '') || (endDate === 'invalidDate' || endDate === '')){
      return;
    }
    if (startDate > endDate) {
      Notify.failure('Перша дата має бути менше другої', {
        position: 'center-right',
        distance: '10px',
      });
      return;
    }
    
    getRangeDate({
      startDate,
      endDate
    })
  }, [startDate, endDate, getRangeDate])

  const errorMessage = useMemo(() => {
    if (error === "invalidDate") {
      return 'Введіть дату з 01.01.2021  по 01.01.2031';
    }

  }, [error]);

  const handleStartDate = date => {
    setStartDate(date.$d);
  };
  const handleEndDate = date => {
    setEndDate(date.$d);
  };

  return (
    <Box sx={{display: "flex", gap: 2, marginTop: 3 }}>
    <DatePicker
      value={startDate}
      minDate={customMinDate}
      maxDate={customMaxDate}
      onChange={date => handleStartDate(date)}
      onError={(newError) => setError(newError)}
      slotProps={{
        textField: {
          helperText: errorMessage,
        },
      }}
/>
  
    <DatePicker
      value={endDate}
      minDate={customMinDate}
      maxDate={customMaxDate}
      onChange={date => handleEndDate(date)}
      onError={(newError) => setError(newError)}
      slotProps={{
        textField: {
          helperText: errorMessage,
        },
      }}
    />
  </Box>
  )
}