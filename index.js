const express = require('express');
const dotenv = require('dotenv');

const renderStatic = require('./middlewares/main');

dotenv.config();
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
