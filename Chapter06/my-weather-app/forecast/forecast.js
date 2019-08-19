const request = require('request');

/**
 * Gets the weather forecast for the location indicated
 *
 * @param {number} latitude Location latitude
 * @param {number} longitude Location longitude
 * @param {(err: Error, data: {
 *   temperature: number,
 *   apparentTemperature: number
 * }) => void} callback Callback that will process the
 * result of the data retrieved from the forecast service.
 */
function forecastLocation(latitude, longitude, callback) {
  request.get(
    `https://api.forecast.io/forecast/${process.env.DARK_SKY_API_TOKEN}/${latitude},${longitude}?units=si`,
    { json: true, timeout: 10000 },
    (err, res, body) => {
      if (err) {
        callback(new Error('Unable to reach Forecast.io', err));
      } else if (res.statusCode !== 200) {
        callback(new Error('Request failed with status', res.statusCode));
      } else {
        callback(null, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature,
        });
      }
    },
  );
}

module.exports = {
  forecastLocation,
};
