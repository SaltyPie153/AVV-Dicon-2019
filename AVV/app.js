const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser')
const app = express();

//const model = require("./models");

//model.sequelize.sync({force:false});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'testkey',
    resave: false,
    saveUninitialized: true
}))

app.use('/uploads',express.static('uploads'))
app.use('/user',require('./routers/user.js'));
app.use('/feed',require('./routers/feed.js'));
app.use('/thread',require('./routers/thread.js'));
app.use('/question',require('./routers/question.js'));
app.use('/choice',require('./routers/choice.js'));


app.listen(3461, () => console.log("Server is on 3461"))