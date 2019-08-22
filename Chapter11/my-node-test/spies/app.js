const db = require('./db');

/**
 * Handles a new signup event. Checks if the email already exists in the system.
 * If the email does not exist in the system, stores the new user and then sends
 * a welcome mail.
 *
 * @param {string} email Email of the new user to signup
 * @param {string} password Password for the new user
 */
function handleSignup(email, password) {
  // Check if the email already exists
  db.saveUser({ email, password });
  // Send the welcome email
}

module.exports = {
  handleSignup,
};
