const request = require('request');

// for forecast function, you have to pass lati and long
const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/cc5807a37da145581136c8a187adc423/${latitude},${longitude}`;

    request({
        url, // shorthand property  url:url
        json: true // same as JSON.parse()
    }, (error, {body}) => {  // destructuring  -  response.body to {body}
        if (error) {
            callback('Unable to connect with weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find location', undefined);
        } else {
            // callback(undefined, body.currently);
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.');
        }
    });
}

module.exports = forecast;