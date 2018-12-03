var getHTML = require('../https-functions.js');
var printReverse = function(html) {
	var htmlSorted = html.split("").sort(function(a, b) {
		return b - a;
	}).join('')
	console.log(htmlSorted)
}
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

getHTML(requestOptions, printReverse);