import { Typography, Button, Box, Modal } from '@mui/material';
import { useState } from 'react';
import WeatherWidget from 'components/WeatherWidget/WeatherWidget';

export const CurrentWeather = ({ currentWeather }) => {
  const [isWidgetWeather, setIsWidgetWeather] = useState(false);

  const handleClickWeather = () => {
    setIsWidgetWeather(true);
  };

  const handleClose = () => {
    setIsWidgetWeather(false);
  };

  return (
    <>
      <Button onClick={handleClickWeather}>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            gap: 1,
            color: '#FAFAFA',
          }}
        >
          <Box>
            <img
              src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt="weather"
              width="30"
              height="30"
            />
          </Box>
          <Box align="left">
            <Typography sx={{ fontSize: '20px' }}>
              {Math.floor(currentWeather.main.temp)}{'\u00B0'}
            </Typography>       
           <Typography>{currentWeather.name}</Typography>
          </Box>
        </Box>
      </Button>
       <Modal
        open={isWidgetWeather}
        onClose={handleClose}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            borderRadius: 4,
            boxShadow: 24,
            p: 2,
          }}
        >
          <WeatherWidget />
        </Box>
      </Modal>
    </>
  );
};
