const getUserSync = require('./getUserSync');

console.log('starting user1');
const user1 = getUserSync('123');
console.log('user1', user1);

console.log('starting user2');
const user2 = getUserSync('321');
console.log('user2', user2);

const sum = 1 + 2;
console.log(`The sum is ${sum}`);
