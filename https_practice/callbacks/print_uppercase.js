var getHTML = require('../https-functions.js');

var printUpper = function(html) {
	console.log(html.toUpperCase())
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

getHTML(requestOptions, printUpper);