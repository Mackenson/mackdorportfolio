const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')))

app.post('/api/contact', function(req, res){
  console.log(req.body);
})

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function() {
  console.log('server is running on port ' +  app.get('port'));
})
