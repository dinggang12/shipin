const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

var server=app.listen(3000,'10.25.1.155', () => {
	var host=server.address().address;
	var port=server.address().port;
  	console.log('Example app listening at http://%s:%s',host,port);
})