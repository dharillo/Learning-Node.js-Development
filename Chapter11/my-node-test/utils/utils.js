function add(a, b) {
  if (a === undefined || b === undefined
    || a === null || b === null
    || Number.isNaN(a) || Number.isNaN(b)) {
    throw new Error('Paramaters must be numbers');
  }
  return a + b;
}

module.exports.add = add;
module.exports.addAsync = async (a, b) => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve(add(a, b));
    } catch (e) {
      reject(e);
    }
  });
});
module.exports.square = (x) => x * x;
module.exports.setName = (user, fullName) => {
  const [firstName, lastName] = fullName.split(' ');
  const resultUser = user;
  resultUser.firstName = firstName;
  resultUser.lastName = lastName;
  return resultUser;
};
