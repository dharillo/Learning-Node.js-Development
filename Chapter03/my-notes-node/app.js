console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const { argv } = yargs;
const command = argv._.length > 0 ? argv._[0] : null;

console.log('Command:', command);
console.log('Process:', process.argv);
console.log('Yargs:', argv);

if (command === 'add') {
  notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.readNote(argv.title);
} else if (command === 'remove') {
  notes.removeNote(argv.title);
} else {
  console.error('Unknown command');
}
