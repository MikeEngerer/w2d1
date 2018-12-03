var getHTML = require('../https-functions.js');

var printLower = function(html) {
	console.log(html.toLowerCase())
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions, printLower);
