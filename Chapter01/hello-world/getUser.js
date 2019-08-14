function getUser(userId, callback) {
  setTimeout(() => {
    callback(Number(userId));
  }, Math.random() * 1000);
}

module.exports = getUser;
