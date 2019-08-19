const request = require('request');

/**
 * Gets the weather forecast for the location indicated
 *
 * @param {number} latitude Location latitude
 * @param {number} longitude Location longitude
 * @returns {Promise<{temperature: number, apparentTemperature: number}>} Resolves
 * with the temperature information for the location indicated.
 */
function forecastLocation(latitude, longitude) {
  return new Promise((resolve, reject) => {
    request.get(
      `https://api.forecast.io/forecast/${process.env.DARK_SKY_API_TOKEN}/${latitude},${longitude}?units=si`,
      { json: true, timeout: 10000 },
      (err, res, body) => {
        if (err) {
          reject(new Error('Unable to reach Forecast.io', err));
        } else if (res.statusCode !== 200) {
          reject(new Error('Request failed with status', res.statusCode));
        } else {
          resolve({
            temperature: body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature,
          });
        }
      },
    );
  });
}

module.exports = {
  forecastLocation,
};
