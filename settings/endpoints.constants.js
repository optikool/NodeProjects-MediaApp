'use strict';

const EndpointsSettings = {
    google: {
        geocode: ' https://maps.googleapis.com/maps/api/geocode/json',
        timezone: ' https://maps.googleapis.com/maps/api/timezone/json' // ?location=38.908133,-77.047119&timestamp=1458000000&key=AIzaSyB0lVlkRSLpKxRgI-aNYZtlXJkAWQIQolE
    },
    fileServer: {
        upload: '/service/upload/'
    }
};

module.exports = EndpointsSettings;

