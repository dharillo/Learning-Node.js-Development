console.log('Starting app...');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

const command = process.argv.length > 2 ? process.argv[2] : null;

console.log('Command:', command);

if (command === 'add') {
  console.log('Adding new note');
} else if (command === 'list') {
  console.log('Listing all notes');
} else if (command === 'read') {
  console.log('Reading note');
} else if (command === 'remove') {
  console.log('Removing note');
} else {
  console.error('Unknown command');
}
