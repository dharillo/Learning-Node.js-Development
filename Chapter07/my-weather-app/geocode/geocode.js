const request = require('request');
/**
 * Gets the info of the given address from the Google Geocode API.
 *
 * @param {string} address Address to query
 * @param {(err: Error, data: {
 *  address: string,
 *  latitude: number,
 *  longitude: number
 * }) => void} callback Callback to process the result.
 * The data parameter will contain the response from the server if no error is detected
 */
function geocodeAddress(address, callback) {
  request.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.WEATHER_API_TOKEN}`,
    { json: true, timeout: 10000 },
    (err, res, body) => {
      if (err) {
        callback(new Error(`Unable to reach Google servers. ${err}`));
      } else if (res.statusCode !== 200) {
        callback(new Error(`Rejected request. Status code: ${res.statusCode}`));
      } else if (body.status !== 'OK') {
        callback(new Error(`Unsuccessful request. Status: ${body.status}`));
      } else {
        const result = body.results[0];
        callback(null, {
          address: result.formatted_address,
          latitude: result.geometry.location.lat,
          longitude: result.geometry.location.lng,
        });
      }
    },
  );
}

/**
 * Prints the address stored in the data returned from the Google® Geocode API
 *
 * @param {{
 *  address: string,
 *  latitude: number,
 *  longitude: number
 * }} addressInfo Response body of a geocode request
 * @param {boolean} showCoordinates Indicates if the address coordinates must be
 * printed also
 */
function printAddress(addressInfo, showCoordinates) {
  console.log(`Address: ${addressInfo.address}`);
  if (showCoordinates) {
    console.log(`Latitude : ${addressInfo.latitude}`);
    console.log(`Longitude: ${addressInfo.longitude}`);
  }
}

module.exports = {
  geocodeAddress,
  printAddress,
};
