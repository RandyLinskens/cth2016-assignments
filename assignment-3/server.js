// server.js
/*
  file:   server.js
  desc:   Script that configures a HTTP server that listens to incoming client connections.
          Clients can send questions or short remarks to the server which then returns an answer.
          This assignment is a continuation of the last one where I created a sort of Donald Trump bot.
          I thought that idea fitted perfectly with the assignment for this week. 
  author: Linskens
  date:   20/11/16
*/


// import express ()
var express = require('express');		// npm install --save express
var app = express();

// import node.js http
var server = require('http').Server(app);

// import socket.io
var io = require('socket.io')(server);	// npm install --save socket.io


// import chance (http://chancejs.com)
var chance = require('chance').Chance(); // npm install --save chance

//Topics you can ask Donald-bot, and normal questions and remarks such as seen in pat 1/2/9

var pattern_1 = ['Hello', 'Hoi', 'Hallo', 'Hi', 'Hej', 'Good day', 'Bonjour', 'good evening', 'good morning', 'good afternoon'];

var pattern_2 = ['how are you?', 'how are you doing?', "What's up?", 'How do you feel?', 'How is it going?', 'How do you do?'];

var pattern_3 = ['immigrants', 'immigrant', 'migrant', 'foreigners', 'foreigner', 'refugees', 'refugee', 'Syrians', 'luck seekers'];

var pattern_4 = ['muslim', 'muslims', 'ISIS', 'Islamic State', 'sharia', 'Arabs', 'terrorist', 'terrorism', 'terrorists', 'extremists', 'Islam'];

var pattern_5 = ['economic recessions', ' economy', 'recession', 'inflation', 'stock market', 'debt', 'debts', 'Wall street', 'bank', 'banks', 'bankers', 'brokers', 'finance', 'depression', 'poverty'];

var pattern_6 = ['Mexican', 'Mexicans', 'Mexico', 'Wall', 'Latin American', 'Latin Americans', "Latino's", 'border', 'borders'];

var pattern_7 = ["LGBT's", 'woman', 'women', 'women rights', 'the poor', 'lower class', 'minority', 'minorities', 'black people', 'blacks', 'African American', 'African Americans'];

var pattern_8 = ['Hillary', 'Hillaries', ' Hilary', 'Clinton', 'democrats', 'democrat', 'left wing', 'Hilldogs', 'Hilldog'];

var pattern_9 = ['bye', 'goodbye', 'thanks', 'thank you', 'see you later', 'au revoir', 'ciao'];

var pattern_10 = ['No', 'yes', 'maybe'];

//Function that looks for matches in the arrays above

function matches(msg, array_of_patterns) {
  var msg_lower = msg.toLowerCase();                     //makes everything lowercase, doesn't matter if you type uppercase
  for(var i = 0; i < array_of_patterns.length; i++) {
    var pattern_lower = array_of_patterns[i].toLowerCase();
    if(msg_lower.search(pattern_lower) > -1) {          //searches for matches in the patterns as listed above
      return true;
    }
  }
  return false; 
}

//Word library

//General words for every answer


const aanhef = ['Now listen,', 'You want to know what I think?', 'The way I see it is,', 'Now,', 'Well,', 'Good question, is what you might think,',
                'Wow, how original,', 'Did you come up with that yourself?', 'Next question... Just kidding,', 'Hmm... Let me think,'];

const ow = [' we', ' all Americans', ' me and my future government', ' all voters', ' we as a country', ' all of us', ' we as a nation',
            ' us and by us I mean the greatest country in the world'];

const ww = [' have to', ' need to', ' got to', ' have got to', ' must', ' have no other option but to', ' only have to', ' just have to', ' are forced to', 
             " can't think of anything else but"];

const wwpos = [' accept', ' welcome', ' embrace', ' help', ' comfort', ' restore', 'fund', ' encourage', ' subsidize', 
                ' adore', ' support', ' admire', ' care for', ' strengthen', ' promote', ' assist', ' aid'];

const wwneg = [' solve', ' end', ' finish', 'seperate', ' nuke', ' destroy', ' register', ' clean out', ' cast out', ' delete',
               ' secure', ' neglect', ' rinse', ' refuse', ' stop', ' terminate', ' wreck', ' ditch'];

const wwposlijd = [' accepted', ' welcomed', ' embraced', ' helped', ' comforted', ' entertained',  ' adored', ' supported', 
                    ' admired', ' cared for'];

const wwneglijd = [' ended', ' finished', ' seperated', ' registered', ' casted out', ' deleted', ' secured', ' neglected', ' refused'];

const AV = [' all', ' these', ' those', ' our', ' the', ' the countries', ' some', ' all of those', ' everyone of those', ' none of those'];

const AVh = [' All', ' These', ' Those', ' Our', ' The', ' The countries', ' Some', ' All of those', 'Everyone of those'];

const bijvnwpos = [' nice', ' great', ' lovely', ' immense', ' beautiful', ' honest', ' good', ' highly valued', ' lovable', 
                  ' respectable', ' grand', ' trustworthy', ' reliable', ' safe',];

const bijvnwneg = [' emerging', ' problematic', ' dangerous', ' scary', ' untrustworthy', ' unsafe', ' unbelievable', ' unreliable', ' uprising', ' bitter', ' repulsive', ' worthless',
                    ' disgusting', ' disgracefull', ' filthy', ' misleading', ' illiterate', ' gruesome', ' sickening', ' obnoxious',
                    ' annoying', ' horrific'];

const bijw = [' really', ' absolutely', 'sincerly', ' finaly', ' definitely', ' positively', ' truly', ' surely', ' unquestionably'];

const acc = [' by you', ' by me', ' by us', ' by all voters', ' by all Americans', ' by good people', ' by our armed forces', ' by everyone'];

const aanvul = [' in order to make America great again', ' if we want to survive', ' in our country', ' with a lot of talking',
            ' in the oval office', ' in America', ' in the United States', ' if we want the world to like us', ' before the sun comes up', 
          ' with your help', ' at the White House', ' in this beautiful country of ours', ' in this amazing day and age'];

const zlfstnw_antw3 = [' immigrants', ' migrants', ' foreigners', ' refugees', ' luck seekers', ' pests', ' nuisances'];

const zlfstnw_antw4 = [' muslim extremists', ' ISIS rebels', ' rebels', ' Islamic State threats', ' sand nikkers', ' rats', ' Arabs', ' terrorists', ' religious extremists', ' Syrians', ' Islam extremists', ' '];

const zlfstnw_antw5 = [' economic recessions', ' recessions', ' stock market problems', ' stock markets', ' markets', ' debts', ' inflations', ' impoverishments', ' banks', ' bankers', ' brokers', ' financing problems', ' people of Wall Street'];

const zlfstnw_antw6 = [' Mexicans', ' Mexican people', ' Taco-eaters', ' Latins', ' Latin Americans', ' Mexican workers', ' Latin American guest workers', ' leeches', ' chinks', ' rats'];

const zlfstnw_antw7 = [" LGBT's", ' women rights', ' women', ' poor people', ' lower class people', ' minorities', ' black fellow Americans', ' African Americans', ' black people'];

const zlfstnw_antw8 = [' democrats', ' Hillary supporters', " Hilldogs", ' left wing shitheads', ' commies', ' soft boiled eggs', ' panzies', ' softies', ' lying Hillary bootlickers'];

const default_answers = ['Why would you say that? Please, continue with your next question or shut up... For the love of god.', "Ohh stop it... I don't have time for this", "You think you're funny?",
                      "Please, you think this is fun for me? Next question.", "I will make America great again.", "Lalala... I am a retard, I don't understand a word you just said."];

const aanvul1 = [' Does that answer you question?', "Don't you agree?", "Right?", " If you disagree you can fuck off.", " And that's my humble opinion",
                'That is the way the cookie crumbles.', 'Satisfied?', 'Next question please.', " Ha Ha, I'm so amazing.", " Jep... Now I'm bored.", 
                " Have I told you how rich I am?", "Carry on, my dear friend."];


//Creating the functions that compute the randomness of the words in the answer sentences

function choice(array) {
  var index = chance.natural({'min': 0, 'max': array.length - 1});
  return array[index]; 
}


function maybe(array) {
  if( chance.bool() ) {
    return choice(array);
    } else {
      return '';
  } 
} 


//The greeting linked to the time. 

 function Dagdeel(time) {
    var time = new Date().getHours();
      if (time < 6) {
        return "good night. ";
      } else if
        (time < 12 ) {
          return "good morning. ";
        } else if 
          (time < 18) {
            return "good afternoon. ";
          } else { 
          return "good evening. ";
        }
      }


/*We saw after we we're done with this that you used switches to generate the different answers. 
Since this worked fine as well, we decided to stick with this.*/


function answer(msg) {
  if(matches(msg, pattern_1)) {
    return "Well, yes " + Dagdeel() + "I'm all ear, fire away sport!";

      } else if (matches(msg, pattern_3)) {
          return choice(aanhef) + choice(ow) + maybe(bijw) + choice(ww) + choice(wwneg) + choice(AV) + maybe(bijvnwneg) + choice(zlfstnw_antw3) + maybe(aanvul) + '.' + maybe(aanvul1)

        } else if (matches(msg, pattern_4)) {
            return choice(AVh) + choice(bijvnwneg) + choice(zlfstnw_antw4) + maybe(bijw) + choice(ww) + ' be' + choice(wwneglijd) + maybe(acc) + maybe(aanvul) + '.' + maybe(aanvul1)
        
          } else if (matches(msg, pattern_5)) {
              return choice(aanhef) + choice(ow) + maybe(bijw) + choice(ww) + choice(wwpos) + maybe(AV) + maybe(bijvnwpos) + choice(zlfstnw_antw5) + maybe(aanvul) + '.' + maybe(aanvul1)

            } else if (matches(msg, pattern_6)) {
                return choice(AVh) + maybe(bijvnwneg) + choice(zlfstnw_antw6) + maybe(bijw) + choice(ww) + ' be' + choice(wwneglijd) + maybe(acc) + '. There will be a wall' + maybe(aanvul) + '!'

              } else if (matches(msg, pattern_7)) {
                  return choice(aanhef) + choice(ow) + maybe(bijw) + choice(ww) + choice(wwneg) + choice(AV) + maybe(bijvnwneg) + choice(zlfstnw_antw7) + maybe(aanvul) + '.' + maybe(aanvul1)

                } else if (matches(msg, pattern_8)) {
                    return "Don't get me started, yes," + choice(zlfstnw_antw8) + ". A sickning group indeed. But o well, let's" + maybe(bijw) + choice(wwpos) + choice(AV) + maybe(bijvnwneg) + choice(zlfstnw_antw8) + 
                            ". No just kidding, just saying that so I don't look like a complete asshole... Which I am."
                
                  } else if (matches(msg, pattern_2)) {
                      return "I'm doing amazing, really amazing indeed, thanks for asking."
                  //Has to be the last one otherwise it'll respond to questions such as HOW DO YOU FEEL about immigrants?

                    } else if (matches(msg, pattern_9)) {
                        return "You're done already? Great... Now fuck off!"

                       } else if (matches(msg, pattern_10)) {
                          return "Who cares what you think? Please continue."

    } else {
        return choice(default_answers);
  }
}


/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// configure socket.io
// (1) when there is a connection 
io.on('connection', function(socket) {

  console.log('Welcome, we are now in direct connection with Donald Trump');
  //io.emit('message from robot', 'Hi! my name is Reihtuag!'); // greetings

  // (2) configure the connected socket to receive custom messages ('message from human')
  socket.on('message from human', function(msg) {

  	console.log('You: ' + msg);

    var response = answer(msg);

  	io.emit('DonBot: ', response);

  });

  socket.on('disconnet', function() {

  	console.log('got a disconnection');
  	
  });

});

/* -------------------
	Start the server
----------------------*/

// listen to connection on port 8088 --> http://localhost:8088
server.listen(8088, function () {
	console.log('Donald is ignoring you with very friendly smile on port: ' + 8088);
});

