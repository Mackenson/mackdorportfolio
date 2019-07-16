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

// async..await is not allowed in global scope, must use a wrapper
async function main(){

  const htmlEmail = `
    <h3>Contact Info</h3>
    <ul>
      <li>Name:${req.body.name}</li>
      <li>Email:${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.ETHEREAL_USERNAME, // generated ethereal user
      pass: process.env.ETHEREAL_PASS // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `"Fred Foo 👻" <${req.body.email}>`, // sender address
    to: "rowan.torp@ethereal.email", // list of receivers
    subject: "New Message ✔", // Subject line
    text: `<b>HEY</b>`, // plain text body
    html: `<b>hello body</b>` // html body
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
});

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), function() {
  console.log('server is running on port ' +  app.get('port'));
})
