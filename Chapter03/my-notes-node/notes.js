console.log('Starting notes.js');
const fs = require('fs');

const noteStorageFilename = 'notes-data.json';

/**
 * Tries to fetch notes from the storage file. If the storage file does not
 * exists, returns an empty storage object.
 *
 * @returns Notes fetched from the local storage.
 */
function fetchNotesSync() {
  let fetchedNotes = {};
  try {
    if (fs.existsSync(noteStorageFilename)) {
      fetchedNotes = JSON.parse(fs.readFileSync(noteStorageFilename));
    }
  } catch (err) {
    console.error('Unable to fetch notes from storage', err);
  }
  return fetchedNotes;
}

const notes = fetchNotesSync();

/**
 * Writes the current content of the storage object in the filesystem.
 */
function saveNotesSync() {
  fs.writeFileSync(noteStorageFilename, JSON.stringify(notes));
}
/**
 * Adds a new note to the system
 *
 * @param {string} title Title of the note
 * @param {string} body Body of the note
 * @returns The note stored or undefined if the note already exists
 */
function addNote(title, body) {
  let note;
  if (notes[title] === undefined) {
    note = { title, body };
    notes[title] = { title, body };
    saveNotesSync();
  }
  return note;
}

/**
 * Gets all the notes stored in the process
 *
 * @returns List of all the notes stored
 */
function getAll() {
  const storedNotes = Object.values(notes);
  return storedNotes;
}

/**
 * Reads a note stored in the system
 *
 * @param {string} title Title of the note to read from storage
 * @returns Note retrieved or null if there is no note with the given title.
 */
function getNote(title) {
  return notes[title];
}

/**
 * Removes the indicated note from the system storage
 *
 * @param {string} title Title of the note to remove from storage
 * @returns Note removed from the system or false if there was no note
 * with the given title.
 */
function removeNote(title) {
  let note = notes[title];
  if (note === undefined) {
    note = false;
  } else {
    delete notes[title];
    saveNotesSync();
  }
  return note;
}

function formatNote(note) {
  return `--\nTitle: ${note.title}\n Body: ${note.body}`;
}

module.exports = {
  addNote,
  formatNote,
  getAll,
  getNote,
  removeNote,
};
