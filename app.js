const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const layout = require("./views/layout");
const { db } = require('./models');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res, send)=> {
    res.send(layout(''))
});

db.authenticate().
then(() => {
  console.log('connected to the database');
})




module.exports = app;