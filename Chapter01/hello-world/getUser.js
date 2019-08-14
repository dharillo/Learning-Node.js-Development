function getUser(userId, callback) {
  setTimeout(() => {
    callback({ userId, name: `User ${userId}` });
  }, Math.random() * 1000);
}

module.exports = getUser;
