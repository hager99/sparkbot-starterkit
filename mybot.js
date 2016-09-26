/*
 * Simple bot that takes action from a /echo command by sending back the message into the room
 *
 * Illustrates a REST Webhook
 *
 * INSTALLATION NOTES : the node-sparky is required, to install it run :
 *   > npm install node-sparky
 */
var SparkBot = require("sparkbot-starterkit");
var Sparky = require("node-sparky");

var config = {
  /// Cisco Spark API token, note that it is mandatory for webhooks to decode new messages
  token: process.env.SPARK_TOKEN,
  webhookURI: "/webhook"
};

// Starts your Webhook
var bot = new SparkBot(config);

// Create a Spark client to send messages back to the Room
var sparky = new Sparky({ token: config.token });

// This function will be called every time a new message is posted into Spark
bot.register(function(message) {
  //
  // ADD YOUR CUSTOM CODE HERE
  //
  console.log("New message from " + message.personEmail + ": " + message.text);

  // Check if the message is the /echo command
  var command = message.text.match(/\/\w+)/);
  if(command=="help"){
    console.log("help command detected");
    // send the message into the room
    sparky.messageSendRoom(message.roomId, {
      text: "Welcome to Redbot!"
    }, function(err, results) {
      if (err) {
        console.log("could not send the message to the room: " + err);
      }
      else {
        console.log("echo command successful");
      }
    });
  }
  if(command=="about"){
    console.log("about command detected");
    // send the message into the room
    sparky.messageSendRoom(message.roomId, {
      text: "I am RedBot, Redbulls first Spark bot! /r/n If you have any Ideas how I can help you let my master know!"
    }, function(err, results) {
      if (err) {
        console.log("could not send the message to the room: " + err);
      }
      else {
        console.log("echo command successful");
      }
    });
  }

});
