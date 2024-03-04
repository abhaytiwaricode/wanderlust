const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const path = require('path');

const flash = require('connect-flash');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Session middleware setup
const sessionOptions = {
  secret: 'mysupersecretcode',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash('success');
  res.locals.errorMsg = req.flash('error');
  next();
});

// Route to register with query parameter
app.get('/register', (req, res) => {
  let { name = 'anonymous' } = req.query;
  req.session.name = name;
  console.log(req.session.name);
  if (name === 'anonymous') {
    req.flash('error', 'user not registered!');
  } else {
    req.flash('success', 'user registered successfully!');
  }
  res.redirect('/hello');
});

app.get('/hello', (req, res) => {
  res.render('page.ejs', { name: req.session.name });
});

// Server listening
app.listen(port, () => {
  console.log(`app is listening in port : ${port}`);
});
