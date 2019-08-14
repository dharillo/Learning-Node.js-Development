/**
 * Sample code to simulate a long blocking work. Only for example purposes.
 * Do not use in production environments.
 * Blocks the current thread the time specified.
 *
 * @param {number} time Time in millis to wait.
 */
function sleep(time) {
  const stop = Date.now();
  while (Date.now() < stop + time) {
    // Do nothing
  }
}
function getUserSync(userId) {
  sleep(Math.random() * 1000);
  return Number(userId);
}

module.exports = getUserSync;
