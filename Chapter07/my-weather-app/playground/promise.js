const samplePromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 2500, 'Hey. It worked!');
  setTimeout(reject, 100, new Error('Unable to fullfill promise'));
});

samplePromise
  .then((msg) => console.log('Success:', msg))
  .catch((err) => console.error(err));

function add(a, b) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        res(a + b);
      } else {
        rej(new Error('Arguments must be numbers'));
      }
    }, 1500);
  });
}

add(3, 5)
  .then((result) => add(result, 20))
  .then((result) => console.log('Result:', result))
  .catch((err) => console.error(err));
