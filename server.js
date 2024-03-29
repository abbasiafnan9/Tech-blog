const express = require('express');
const sequelize = require("./config/connection.js")
const session = require("express-session");
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3003;

const hbs = exphbs.create({
    helpers: {
        short: function (aString) {return aString.toString().slice(0,15)},
        owner: function (blogId, userId) {return blogId === userId}
    }
});


const {User,Blog,Comment} = require('./models');
const routes = require("./controllers");

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static("public"));

// app.set('view', path.join(__dirname, '../view'));

// app.use(express.cookieParser('secret'));
// app.use(express.cookieSession());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 1000 * 60 * 60 * 2
    },
     store: new SequelizeStore({
        db:sequelize
    })
}))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes)

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});