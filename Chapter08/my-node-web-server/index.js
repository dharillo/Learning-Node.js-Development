const express = require('express');
const { spawn } = require('child_process');

const app = express();
const SERVER_PORT = 3000;

app
  .get('/', (_, res) => {
    res.json({
      name: 'David',
      likes: ['Videogames', 'Computers'],
    });
  })
  .get('/about', (_, res) => {
    res.send('<h1>About</h1>');
  });

app.listen(SERVER_PORT, () => {
  const serverUrl = `http://localhost:${SERVER_PORT}`;
  console.log(`Server running at ${serverUrl}`);
  spawn('open', [serverUrl]);
});
