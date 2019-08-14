console.log('Starting app...');

const fs = require('fs');
const os = require('os');

const user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}!`, (err) => {
  if (err) {
    console.error('Unable to write into greetings.txt', err);
  }
});
