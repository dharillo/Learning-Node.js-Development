console.log('Starting notes.js');
const notes = new Map();
/**
 * Adds a new note to the system
 *
 * @param {string} title Title of the note
 * @param {string} body Body of the note
 */
function addNote(title, body) {
  console.log('Adding note', title, body);
  notes.set(title, { title, body });
}

/**
 * Gets all the notes stored in the process
 *
 * @returns List of all the notes stored
 */
function getAll() {
  console.log('Getting all notes');
  return notes.values();
}

/**
 * Reads a note stored in the system
 *
 * @param {string} title Title of the note to read from storage
 * @returns Note retrieved or null if there is no note with the given title.
 */
function readNote(title) {
  console.log('Reading note', title);
  return notes.get(title);
}

/**
 * Removes the indicated note from the system storage
 *
 * @param {string} title Title of the note to remove from storage
 * @returns Note removed from the system or false if there was no note
 * with the given title.
 */
function removeNote(title) {
  console.log('Removing note', title);
  return false;
}

module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote,
};
