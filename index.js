'use strict';

const express = require('express');
const util = require('util');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const fileUpload = require('express-fileupload');
const customValidators = require('./validators/validators');

const serverSettings = require('./settings').ServerSettings;

const options = {
    customValidators: customValidators
};

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(expressValidator(options));
app.use(fileUpload());

app.use(require('./controllers'));

console.log(`Server started on hose ${serverSettings.host}, port ${serverSettings.port}...`);
app.listen(serverSettings.port);
