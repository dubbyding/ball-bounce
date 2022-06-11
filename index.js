const express = require('express');

const renderStatic = require('./middlewares/main');

const app = express();
app.set('view options', { layout: false });
app.use(express.static(__dirname + '/static'));

// app.use(express.static(__dirname, '/static'));

app.use('/', renderStatic);

app.listen(process.env.port, (err, done) => {
	if (err) {
		console.log('error running site');
	} else {
		console.log('Server Running');
	}
});
