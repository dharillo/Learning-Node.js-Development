const yargs = require('yargs');

const forecast = require('./forecast/forecast');
const geocode = require('./geocode/geocode');

const { argv } = yargs
  .options({
    a: {
      alias: 'address',
      demand: true,
      describe: 'Address to fetch weather for',
      string: true,
    },
    c: {
      alias: 'coordinates',
      type: 'boolean',
      default: false,
    },
  })
  .help()
  .alias('help', 'h');

geocode.geocodeAddress(argv.address, (err, data) => {
  if (err) {
    console.error('Unable to get the requested address', err.message);
  } else {
    geocode.printAddress(data, argv.coordinates);
    forecast.forecastLocation(data.latitude, data.longitude, (forecastErr, forecastData) => {
      if (forecastErr) {
        console.error(forecastErr.message);
      } else {
        console.log(`It's currently ${forecastData.temperature}ºC. It feels like ${forecastData.apparentTemperature}ºC`);
      }
    });
  }
});
