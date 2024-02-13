//requires for routes
const express = require('express');
const path = require('path');
const routes = require('./routes');

//requires for session and view
const session = require('express-session')
const exphbs = require('express-handlebars');

//session setup
const sequelize = require('./config/connect')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sess = {
  secret: process.env.DB_SECRET,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};
app.use(session(sess));
//end session

//setup fpr view and routes
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//uses sequelize for the session before the app.listen
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => 
  console.log(`App listening on port ${PORT}!`))
})

