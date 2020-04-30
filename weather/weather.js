


  const axios = require("axios");
  const readLineSync = require("readline-sync");
  var cityname = readLineSync.question("Enter the Name of your Place:");
  const apikey = "91765e1e1c71235d44afb05881b68537";

    axios
  .get(
    `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}`
  )
  .then((response) => {
    const longitude = response.data.coord.lon;
    const latitude = response.data.coord.lat;
    const humidity = response.data.main.humidity;
    let temperature = response.data.main.temp;
    cityname = cityname.toUpperCase();
    temperature = (temperature - 273.15).toFixed();
    console.log(cityname);
    console.log("Latitude:" + latitude + "; Longitude:" + longitude);
    console.log("Temperature :" + temperature);
    console.log("Humidity :" + humidity);
  })
  .catch((err) => {
    console.log("Enter the correct location name");
   
  });
