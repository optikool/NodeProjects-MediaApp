'use strict';

const EndpointsSettings = {
    google: {
        geocode: ' https://maps.googleapis.com/maps/api/geocode/json',
        timezone: ' https://maps.googleapis.com/maps/api/timezone/json'
    },
    fileServer: {
        upload: '/service/upload/'
    }
};

module.exports = EndpointsSettings;

