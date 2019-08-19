const request = require('request');

function getAddressData(address, callback) {
  request.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.WEATHER_API_TOKEN}`,
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

getAddressData('1301 lombard street philadelphia', (err, data) => {
  if (err) {
    console.error('Unable to get the requested address', err);
  } else {
    console.log(`Address: ${data.results[0].formatted_address}`);
  }
});
