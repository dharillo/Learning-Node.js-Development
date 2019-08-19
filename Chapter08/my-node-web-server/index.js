const express = require('express');
const { spawn } = require('child_process');
const { join } = require('path');
const hbs = require('hbs');

const SERVER_PORT = 3000;

/**
 * Gets the current year
 *
 * @returns {number} Current year
 */
function getCurrentYear() {
  return new Date().getFullYear();
}

const app = express();

hbs.registerPartials(join(__dirname, 'views', 'partials'));
hbs.registerHelper('getCurrentYear', getCurrentYear);
hbs.registerHelper('upper', (text) => text.toUpperCase());
app.set('view engine', 'hbs');
app.use(express.static(join(__dirname, 'public')));


app
  .get('/', (_, res) => {
    res.render('home.hbs', {
      pageTitle: 'Home page',
      welcomeMessage: 'Welcome to the Learning Node.js Development homepage',
    });
  })
  .get('/about', (_, res) => {
    res.render('about.hbs', {
      pageTitle: 'About Page',
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
