const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const bodyParser = require('body-parser');
const SparkPost = require('sparkpost');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(express.static('public'));

app.post("/email", function(req, res) {
  handleSendEmail(req.body, res)  
  
});

function handleSendEmail(body, res) {

    const client = new SparkPost('12ed5bde909b56accbd9d7f3b0c50b5dcffe8eb8');
    
    client.transmissions.send({
        options: {
          sandbox: true
        },
        content: {
          from: 'testing@sparkpostbox.com',
          subject: 'TV show poster you requested',
          html:`<html><body><p>This is the poster you requested to be emailed to you!<img src="${body.url}"/></p></body></html>`
        },
        recipients: [
          {address: body.email}
        ]
      })
      .then(data => {
        console.log('Woohoo! You just sent your first mailing!');
        console.log(data);
        res.send(data)
      })
      .catch(err => {
        console.log('Whoops! Something went wrong');
        console.log(err);
      });    
  }
module.exports = app;
