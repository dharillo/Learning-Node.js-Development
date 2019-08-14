console.log('Starting app...');

const fs = require('fs');

fs.appendFile('greetings.txt', 'Hello World!', (err) => {
  if (err) {
    console.error('Unable to write into greetings.txt', err);
  }
});
