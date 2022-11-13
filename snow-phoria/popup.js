async function fetchData() {
  const apiKey = '5a93b1b61cmshdabcc6e5056f1cfp13faf3jsn018b95b2dd7a';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'foreca-weather.p.rapidapi.com'
    }
  };

 const response = await fetch('https://foreca-weather.p.rapidapi.com/observation/latest/103054643?lang=en', options)
 const record = await response.json();

  document.getElementById('loader').remove();
  document.getElementById('concerts').innerHTML =
   record.observations
     .map(observation => `<li>${observation.station}: ${observation.temperature}°C</li>`)
     .join('')
}
fetchData();
