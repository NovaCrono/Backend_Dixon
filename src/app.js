const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

app.set('port', 9110);
app.set('views', path.join(__dirname, 'views'));

app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(require('./rutas/Guia'));
app.use((req, res, next)=>{
    res.status(404).send('404 not found');
})

module.exports = app;