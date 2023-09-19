export async function fetchCurrentWeather (){
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=kharkiv&appid=a323d6674456ccaaf9a7dc4a714c315f&units=metric')
    const weather = await response.json();
    return weather
  } catch (error) {
    console.log(error.message);
  }
};