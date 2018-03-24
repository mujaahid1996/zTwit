console.log('bot is starting');

var Twit = require('twit'); // import paket twit

var config = require('./config'); // import file konfigurasi autentikasi key & token
var T = new Twit(config); // instansiasi konfigurasi

// GET TWEETS -- baris 9 s.d. 38
/*
// search twitter for all tweets containing the word 'banana' since July 11, 2011
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})
 */

// ubah param ke dlm variabel
//params
var params = {
  q: 'unicorn',
  count: 2
}; 
/* https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets */

function getData(err, data, response) {
  var tweets = data.statuses;
  for( var i=0; i<tweets.length; i++ ){
    console.log( tweets[i].text );
  }
    // console.log(data);
}

/**
 * method utk mencari tweet,  opsi mempunyai:
 * Twitter standard API endpoint
 * Parameters
 * callback
 */
T.get('search/tweets', params, getData);

