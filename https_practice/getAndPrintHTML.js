var https = require("https");

function getAndPrintHTML(options) {

	var fullData = ""

	https.get(options, function(response) {
		response.setEncoding("utf8")

		response.on('data', function(chunk) {
			fullData += chunk;
			console.log("chunk added", fullData);
		})

		response.on('end', function() {
			console.log("data stream ended")
		})
	})
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)