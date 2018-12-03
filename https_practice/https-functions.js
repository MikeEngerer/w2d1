var https = require('https');

module.exports = function getHTML(options, callback) {

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
