const fs = require('fs');

const sampleNote = {
  title: 'sample',
  body: 'This is a sample note to test the filesystem write function',
};
const filename = 'sample.json';

function writeNote(callback) {
  console.log('Writing sample object');
  fs.writeFile(filename, JSON.stringify(sampleNote), (err) => {
    if (err) {
      console.error('Unable to write sample object', err);
    } else {
      console.info('Sample object writed successfuly');
    }
    callback();
  });
}

function readNote(callback) {
  console.log('Reading sample.json');
  fs.readFile(filename, (err, data) => {
    if (err) {
      console.error('Unable to read sample file');
      callback();
    } else {
      const note = JSON.parse(data);
      callback(note);
    }
  });
}

writeNote(() => readNote(console.log));
