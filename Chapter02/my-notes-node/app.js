console.log('Starting app...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

console.log(notes.add(9, -2));
process.exit(0);
const user = os.userInfo();

fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, (err) => {
  if (err) {
    console.error('Unable to write into greetings.txt', err);
  }
});
