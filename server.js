'use strict';

var express = require('express'),
    employees = require('./routes/employeeInMemory'),
    phones = require('./routes/phonesInMemory');

var app = express();

app.get('/employees/:id/reports', employees.findByManager);
app.get('/employees/:id', employees.findById);
app.get('/employees', employees.findAll);

app.get('/phones/phones.json', phones.findAll);
app.get('/phones/:phoneId', phones.get);
app.use('/img/phones', express.static(__dirname + '/app/img/phones'));
app.use('/app', express.static(__dirname + '/app'));


app.listen(3000);
console.log((new Date()).getMinutes() + ': listening on port 3000.');
