require('dotenv').config();
var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsi

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('baucua', { themes: 'mobile' }))

app.get('/myip', (req, res) => {
	var ip = req.headers['x-forwarded-for'] || 
     req.connection.remoteAddress || 
     req.socket.remoteAddress ||
     (req.connection.socket ? req.connection.socket.remoteAddress : null);
	
	res.send(ip)
})

app.get('/bao-gia', (req, res) => res.render('paste'))
app.get('/fitness', (req, res) => res.render('fitness'))
app.get('/datcom', (req, res) => {
		res.send('h')
})
app.get('/pikamobile', (req, res) => res.render('pika', { themes: 'mobile' }));
app.get('/pikabrowser', (req, res) => res.render('pika', { themes: 'browser' }));


app.listen(process.env.PORT || 3001, function () {
	console.log('Server listening on port ');
});
