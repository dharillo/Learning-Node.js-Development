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

function printNote(header, note, error) {
  if (note) {
    console.log(`${header}:\n${notes.formatNote(note)}`);
  } else {
    console.log(error);
  }
}

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  printNote('Note created', note, 'Note title already in use');
} else if (command === 'list') {
  const storedNotes = notes.getAll();
  if (storedNotes.length === 0) {
    console.log('No stored notes');
  } else {
    console.log('List of stored notes:');
    storedNotes.forEach((note) => {
      console.log(notes.formatNote(note));
    });
  }
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  printNote('Note requested:', note, `Note with title '${argv.title}' not found`);
} else if (command === 'remove') {
  const note = notes.removeNote(argv.title);
  printNote('Note removed', note, `Note with title '${argv.title}' not found`);
} else {
  console.error('Unknown command');
}
