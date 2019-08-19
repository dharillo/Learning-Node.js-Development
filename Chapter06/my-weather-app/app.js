const request = require('request');
const yargs = require('yargs');

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
/**
 * Gets the info of the given address from the Google Geocode API.
 *
 * @param {string} address Address to query
 * @param {(err: Error, data: any) => void} callback Callback to process the result.
 * The data parameter will contain the response from the server if no error is detected
 */
function getAddressData(address, callback) {
  request.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.WEATHER_API_TOKEN}`,
    { json: true },
    (err, res, body) => {
      if (err) {
        callback(err);
      } else if (res.statusCode !== 200) {
        callback(new Error(`Unsuccessful request. Status code: ${res.statusCode}`));
      } else if (body.status !== 'OK') {
        callback(new Error(`Rejected request. Status: ${body.status}`));
      } else {
        callback(null, body);
      }
    },
  );
}

getAddressData(argv.address, (err, data) => {
  if (err) {
    console.error('Unable to get the requested address', err);
  } else {
    const result = data.results[0];
    console.log(`Address: ${result.formatted_address}`);
    console.log(`Latitude : ${result.geometry.location.lat}`);
    console.log(`Longitude: ${result.geometry.location.lng}`);
  }
});
