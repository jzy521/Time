var express = require('express');
var http = require('http');
var https = require('https');
var fs = require('fs');
var bodyParser = require('body-parser');


var RestController = require('./RestController.js');
var app = express();
app.listen(3000, "127.0.0.1");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


/**
 * process all rest call
 */
app.use(RestController);
console.log('Time Server start...');