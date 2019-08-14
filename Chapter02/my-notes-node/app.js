console.log('Starting app...');

const _ = require('lodash');

const originalArray = [1, 2, 1, 'foo', 'foo', 'bar'];
const filteredArray = _.uniq(originalArray);

console.log('Original:', originalArray);
console.log('Filtered:', filteredArray);
