
'use strict';
require('es6-promise').polyfill();

const https = require('https');

exports.metadata = function (url) {
    const urlMetadata = `https://www.youtube.com/oembed?url=` + url + `&format=json`;
    return new Promise(function (accept, error) {
        
        https.get(urlMetadata, function (_res) {
            var body = '';

            _res.on('data', function (chunk) {
                body += chunk;
            });

            _res.on('end', function () {
                try {
                    var response = JSON.parse(body);
                    accept(response);
                } catch (e) {
                    error({error: e});
                }
            });
        }).on('error', function (e) {
            error({ error: e });
        });
    });
};