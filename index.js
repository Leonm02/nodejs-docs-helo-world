var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
var bodyParser = require('body-parser');

var express = require('express');

// Konfiguration des Body-Parsers mit einer höheren Grenze für die Anfragegröße
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'Kevin'})
})

app.post('/image', function (req, res, next) {
  try {
      console.log('Request body:', req.body);
      const listData = req.body; // No need for JSON.parse
      console.log('Parsed data:', listData);
      res.json({msg: 'This is CORS-enabled for all origins!'});
  } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Ihr Server starten
app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000');
});