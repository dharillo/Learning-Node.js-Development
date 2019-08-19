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

geocode.geocodeAddress(argv.address)
  .then((data) => {
    geocode.printAddress(data, argv.coordinates);
    return forecast.forecastLocation(data.latitude, data.longitude);
  })
  .then((data) => {
    console.log(`It's currently ${data.temperature}ºC. It feels like ${data.apparentTemperature}ºC`);
  })
  .catch((err) => {
    console.error(err.message);
  });
