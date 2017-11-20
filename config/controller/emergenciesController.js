const { Emergency } = require('../../models');
const db = require('../database');
const axios = require('axios');
const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

const sendTexts = (req, res) => {
  //check to see if clients number includes a 1 in front of it.
  //if not add it
  //send req.user info to go through some formatting function
  //then send the generated message
  //as the body

  let buff = new Buffer(req.params.phoneNumber, 'base64');  
  let text = JSON.parse(buff.toString('ascii'));
  console.log('data is: ', text)
  client.messages.create({
    to: text.params.phoneNumber,
    from: process.env.TWILIO_NUMBER,
    body: "IT's A ME, MARIO. You're Screwed :)"
  }, (err, message) => {
    if(err){
      console.log("Error");
      throw err;
    } else {
      if(message.sid){
        console.log("YOU MADE IT!!!... ", message.sid);
      }
    }
  })

  res.status(200).send("AYOOOOO");
};


module.exports = {
  sendTexts
}