const yargs = require('yargs');

const geocode = require('./geocode/geocode');

const { argv } = yargs
  .options({
    a: {
      alias: 'address',
      demand: true,
      describe: 'Address to fetch weather for',
      string: true,
    },
  })
  .help()
  .alias('help', 'h');

geocode.geocodeAddress(argv.address, (err, data) => {
  if (err) {
    console.error('Unable to get the requested address', err);
  } else {
    geocode.printAddress(data);
  }
});
