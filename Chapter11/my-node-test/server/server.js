const express = require('express');

const SERVER_PORT = 3000;
const app = express();
app
  .get('/', (_, res) => {
    res.status(404).send({
      error: 'Page not found',
      name: 'Todo App v1.0',
    });
  })
  .get('/users', (req, res) => {
    res.send([{
      name: 'Mike',
      age: 27,
    }, {
      name: 'Andrew',
      age: 25,
    }, {
      name: 'Jen',
      age: 26,
    }]);
  })
  .listen(SERVER_PORT, () => {
    console.log(`Server up and running on port ${SERVER_PORT}`);
  });

module.exports.app = app;
