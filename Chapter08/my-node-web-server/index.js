const express = require('express');
const { spawn } = require('child_process');
const { join } = require('path');
const hbs = require('hbs');

const SERVER_PORT = 3000;

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(join(__dirname, 'public')));

app
  .get('/', (_, res) => {
    res.json({
      name: 'David',
      likes: ['Videogames', 'Computers'],
    });
  })
  .get('/about', (_, res) => {
    res.render('about.hbs', {
      pageTitle: 'About Page',
      currentYear: new Date().getFullYear(),
    });
  })
  .get('/bad', (_, res) => {
    res.json({ errorMessage: 'Unable to handle request' });
  });

app.listen(SERVER_PORT, () => {
  const serverUrl = `http://localhost:${SERVER_PORT}`;
  console.log(`Server running at ${serverUrl}`);
  spawn('open', [serverUrl]);
});
