'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const fileUpload = require('express-fileupload');

const serverSettings = require('./settings').ServerSettings;

const options = {
    customValidators: {
        isImage: function (value, filename) {
            switch (filename.toLowerCase()) {
                case 'image/jpeg':
                case 'image/png':
                case 'image/gif':
                    return true;
                    break;
                default:
                    return false;
            }
        }
    }
};

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(expressValidator(options));
app.use(fileUpload());

app.use(require('./controllers'));

console.log(`Server started on host ${serverSettings.host}, port ${serverSettings.port}...`);
app.listen(serverSettings.port);
