async function fetchData() {
  const apiKey = 'API_KEY';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
    }
  };

 const response = await fetch('https://foreca-weather.p.rapidapi.com/observation/latest/103054643?lang=en', options)
 const record = await response.json();

 document.getElementById('concerts').innerHTML =
   record.observations
     .map(observation => `<li>${observation.station}: ${observation.temperature}°C</li>`)
     .join('');
}
fetchData();
