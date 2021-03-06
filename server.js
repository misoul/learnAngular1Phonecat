'use strict';

require('paint-console');

var express = require('express'),
    employeeDAO = require('./routes/employeeMongo'),
    phoneDAO = require('./routes/phonesInMemory');

var app = express();


employeeDAO.initConnection(registerRouteEmployees); // Passing callbacks twice just to register routes. Is this 'Callback Hell'?

app.get('/phones/phones.json', phoneDAO.findAll);
app.get('/phones/:phoneId', phoneDAO.get);
app.use('/img/phones', express.static(__dirname + '/app/img/phones'));
app.use('/app', express.static(__dirname + '/app'));


app.listen(3000);

var startupNote = ('['+(new Date()).getMinutes())+']' + ': listening on port 3000.';
console.info(startupNote);

function registerRouteEmployees(employees) {
  app.get('/employees/:id/reports', employees.findByManager);
  app.get('/employees/:id', employees.findById);
  app.get('/employees', employees.findAll);
}
