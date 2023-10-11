import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export const CurrentWeather = ({ currentWeather }) => {
  
  return (
    <Box sx={{ position: 'relative', display: "flex", gap: 1 }}>
      <Box>
      <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="weather" width="30" height="30" />
      </Box>
      <Box>
      <Typography sx={{ fontSize: '20px' }}>
        {Math.floor(currentWeather.main.temp)}
      </Typography>
      <Box
        sx={{
          position: 'absolute',
          top: 7,
          left: 62,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          border: '2px solid',
        }}
      ></Box>
      <Typography>{currentWeather.name}</Typography>
      </Box>
    </Box>
  );
};


