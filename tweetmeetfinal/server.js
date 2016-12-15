/*
  file:   server.js
  desc:   Script that configures a HTTP server that listens to incoming client connections.
          This server sends data from twitter to the directions.html file and generates (and seperates) the geocode 
          (and tweets themselves) so that it can be used by Google Maps. 
  author: Gandolahage & Linskens
  date:   14/12/16
*/


// server.js

// import express ()
var express = require('express');		// npm install --save express
    http = require('express');
var app = express();

// import node.js http
var server = require('http').Server(app);

// import socket.io
var io = require('socket.io')(server);	// npm install --save socket.io

// import filesystem (aka fs)
var fs = require('fs');

// import chance (http://chancejs.com)
var chance = require('chance').Chance(); // npm install --save chance

//import twitter
var twitter = require('twitter');       // npm install --save twitter


/* ----------------------
  Twitter Configuration
-------------------------*/

// load configuration file with all secrets, etc.
var config_file = "./twitter_credentials.json";
var config = JSON.parse(fs.readFileSync(config_file, "utf8"));

// create the twitter client
var client = new twitter(config);

//Configuring choice
function choice(array) {

 var index = chance.natural({'min': 0, 'max': array.length - 1});

   return array[index];
  
}

/*------------------------
  TWITTER FUNCTIONS
--------------------------*/
//-----------------------------------------------------------------------------SEARCH 1----------------------------
function search_twitter_start (keyword_value) {

  //https://dev.twitter.com/rest/reference/get/search/tweets

//Parameters Twitter is going to search for
  twitter_search_params = {q: keyword_value, count: 300};

//asking Twitter to search
  client.get('search/tweets', twitter_search_params, function(error, tweets, response) {

//array of Twitterresults
    results = [];



 if(!error) {


      for(tweet of tweets.statuses) {

  // Only Dutch located Tweets

    if(tweet.user.location != null && tweet.user.location.trim().length > 0 && tweet.lang == 'nl') {

      // console all information (in a readable way)
      console.log('>Tweet Start: ' + '\n' + tweet.text + '\n\n' + '>Locatie: ' + '\n' + tweet.user.location + '\n')

      //create array of results
      result = {tweet: tweet.text, location: tweet.user.location};


      results.push(result);
        
    }

   } 

  } else {

    console.log('No tweets: ' + error );
  }


    //console.log(tweets);

//Prevent a chance crash when there are no results and emitting a windowpopup to client
  if (results.length === 0) {
      io.emit('errormessagestart', "Sorry, your start search doesn't match any located tweets.")
    
    } else {
    
    // send results to client
    io.emit('search_twitter_results_start', choice(results));

    //callback(results);  
  }

  });

 } 

 
//-----------------------------------------------------------------------------SEARCH 2-------------------------------------
//See documentation SEARCH 1
function search_twitter_eind(keyword_value) {


  var twitter_search_params = {q: keyword_value, count: 300};


  client.get('search/tweets', twitter_search_params, function(error, tweets, response) {



    var results = [];

 if(!error) {


      for(tweet of tweets.statuses) {


    if(tweet.user.location != null && tweet.user.location.trim().length > 0 && tweet.lang == 'nl') {

      console.log('>Tweet: ' + '\n' + tweet.text + '\n\n' + '>Locatie: ' + '\n' + tweet.user.location + '\n')

      var result2 = {tweet: tweet.text, location: tweet.user.location};

      results.push(result2);

    }

   } 

  } else {

    console.log('No tweets:' + error );
  }


    //console.log(tweets);


    if (results.length === 0) {
      io.emit('errormessageeind', "Sorry, your end search doesn't match any located tweets.")
    
    } else {
    

    io.emit('search_twitter_results_eind', choice(results));    

    }

  });

} 


/* ----------------------------------
	Server and Socket Configuration
--------------------------------------*/

// tell express to server our index.html file
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/directions.html');
});

// configure socket.io
// (1) when there is a connection 
io.on('connection', function(socket) {

  console.log('got a connection');

  // (2) configure the connected socket to receive custom tweetsearches
  //Start Tweet
  socket.on('search_twitter_start', function(msg) {

  	console.log('\n'+ 'searching twitter start location with: ' + JSON.stringify(msg) + '\n');

    search_twitter_start(msg.keyword_value, msg.nbr_hits);

   });
//Eind Tweet
   socket.on('search_twitter_eind', function(msg) {

    console.log('\n'+ 'searching twitter end location with: ' + JSON.stringify(msg) + '\n');

    search_twitter_eind(msg.keyword_value, msg.nbr_hits);

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
	console.log('listening on port: ' + 8088);
});