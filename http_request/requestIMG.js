var request = require('request');
var fs = require('fs');

request('https://sytantris.github.io/http-examples/future.jpg')
	.on('err', function(err) {

		console.log(err)
	})

	.on('response', function(response) {
		console.log("response status code: ", response.statusCode)
		console.log("content type: ", response.headers['content-type'])
	})
	
	.pipe(fs.createWriteStream('./future.jpg').on('finish', function() {
		console.log("dl complete")
	}))


console.log('Downloading image...');

