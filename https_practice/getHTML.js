var https = require('https');

function getHTML(options, callback) {

	var fullData = ""

	https.get(options, function(response) {
		response.setEncoding("utf8")

		response.on('data', function(chunk) {
			fullData += chunk;
			callback(fullData);
		})

		response.on('end', function() {
			console.log("data stream ended")
		})
	})
};

function printHTML(html) {
	console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)