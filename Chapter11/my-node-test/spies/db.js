/**
 * Stores a new user in the system dabase
 *
 * @param {{email: string, password: string}} user User to store in the system
 * database
 */
function saveUser(user) {
  console.log('Saving the user', user);
}

module.exports = {
  saveUser,
};
