console.info('Starting app');

setTimeout(() => console.log('Inside of callback'), 2000);
setTimeout(() => console.log('Second timeout'), 0);

console.info('Finishing up');
