var https = require('https');

function getAndPrintHTML () {
	var fullData = ""

	var requestOptions = {
    	host: 'sytantris.github.io',
    	path: '/http-examples/step2.html'
  	};

  	https.get(requestOptions, function(response) {
  		response.setEncoding("utf8")

  		response.on('data', function(data) {
  			fullData += data;
  			console.log(fullData);
  			console.log("new data chunk added");

  		})

  		response.on('end', function() {
  			console.log("finished adding data"); 
  		})
  	})
}

getAndPrintHTML();