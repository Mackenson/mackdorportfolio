const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const morgan = require('morgan');
const compression = require('compression');
const createServer = require('http');
const dotenv = require('dotenv')

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'public')))

const dev = app.get('env') !== 'production';

if (!dev) {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(morgan('common'));

  app.use(express.static(path.resolve(__dirname, 'build')));

  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'build', 'index.js'));
  });
}

if (dev) {
  app.use(morgan('dev'));
}

app.post('/form', (req, res) =>{
  console.log(req.body);
});

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
});

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function() {
  console.log('server is running on port ' +  app.get('port'));
});
