const express = require('express');
const { spawn } = require('child_process');
const { join } = require('path');
const hbs = require('hbs');

const SERVER_PORT = 3000;

const app = express();

hbs.registerPartials(join(__dirname, 'views', 'partials'));
app.set('view engine', 'hbs');
app.use(express.static(join(__dirname, 'public')));

/**
 * Gets the current year
 *
 * @returns {number} Current year
 */
function getCurrentYear() {
  return new Date().getFullYear();
}

app
  .get('/', (_, res) => {
    res.render('home.hbs', {
      pageTitle: 'Home page',
      currentYear: getCurrentYear(),
      welcomeMessage: 'Welcome to the Learning Node.js Development homepage',
    });
  })
  .get('/about', (_, res) => {
    res.render('about.hbs', {
      pageTitle: 'About Page',
      currentYear: getCurrentYear(),
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
