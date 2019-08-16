const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
  json: true,
}, (error, response, body) => {
  if (error) {
    console.error('Unexpected error', error);
  } else if (response.statusCode !== 200) {
    console.warn('Rejected request', body);
  } else if (body.status === 'REQUEST_DENIED') {
    console.error(body.error_message);
  } else {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
  }
});
