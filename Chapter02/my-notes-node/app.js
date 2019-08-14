console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

console.log(_.isString(true));
console.log(_.isString('david'));

process.exit(0);
const user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, (err) => {
  if (err) {
    console.error('Unable to write into greetings.txt', err);
  }
});
