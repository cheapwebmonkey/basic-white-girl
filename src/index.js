'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "ur skill id here";

var SKILL_NAME = "Basic White Girl Facts";
var GET_FACT_MESSAGE = "Like, here's your fact or whatevs: ";
var HELP_MESSAGE = "So like, you can totes say tell me a basic white girl fact, or, you can say exit or whatever... Like, what can I help you with, or something?";
var HELP_REPROMPT = "O.M.G., Seriously, like, what can I help you with?";
var STOP_MESSAGE = "As if! Goodbye!";

var data = [
    "Like, if your name is Becky, you're probs a Basic White Girl. No worries.",
    "I was like, at my fave Starbucks and they were out of Pumpkin Spiced fraps and I was like, O.M.G!, how is life?",
    "So, if you like put glitter of, ummmm, any kind on a white girl, she is, like, magically transformed into a Basic White Girl, or whatever.",
    "If you own literally eleventy-million pairs of Uggs, like you're def a Basic White Girl.",
    "It's not Instagram. It's Insta. As if.",
    "Basic White Girls literally will not date someone who isn't at least a 7. Because Insta.",
    "So, like, basic white girls think they are totes unique and special and trendsetting. Literally.",
    "Ummmm, Basic White Girls totes take like, seventy five milllion selfies before they find the perf one to Insta.",
    "Quoting Mean Girls like, automagically confers Basic White Girl status onto a reg white girl, mos def.",
    "Do you totes love Lisa Frank? Then you're totes a Basic White Girl.",
    "Like, OMG!, They have pumpkin spiced dog treats!",
    "Literally, I can't", 
    "Essential oils are like, totally legit",
    "I only drink vegan cage free water, becasue, like, Goop said so",
    "Deconstructed meals are all the rage, like, I never knew how interesting a sandwich could be.",
    "No laws when you're drinking the claws, like, totally",
    "Hard seltzer is so 2 months ago, we're all about the pumpkin cider now",
    "Its fall and I can't find my leggings and flannel!"
];


exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
