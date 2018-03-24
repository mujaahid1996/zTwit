console.log('bot is starting');

var Twit = require('twit'); // import paket twit

var config = require('./config'); // import file konfigurasi autentikasi key & token
var T = new Twit(config); // instansiasi konfigurasi

//  filter the twitter public stream by the word 'smartphone'
var stream = T.stream('statuses/filter', { track: 'smartphone' })
//stream the tweet
stream.on('tweet', function (tweet) {
    console.log(tweet);
    console.log('\n-------------');
    var theTweet = tweet.text;
    var screenName = tweet.user.screen_name;
    console.log(theTweet);
    console.log(screenName);
    console.log('\n-------------');
    // tweet menggunakan sumber data tersebut
})

/*
tweetIt();
setInterval(tweetIt, 1000*60);

// membungkus kode utk post tweet baru 
function tweetIt() { 
    

    // var randomNumb = Math.floor(Math.random()*100);

    // param
    var myTweet = {
        status: 'automatically post [testing]';
    };
    //callback
    function tweeted(err, data, response) {
        if (err) {
            console.log('something went wrong')
        } else {
            console.log('it work');
            console.log(data);
            // store info of the tweet
            var idTweet = data.id;
            var theTweet = data.text;
            // show the info
            console.log('\n-----data summary------')
            console.log(idTweet );
            console.log(theTweet );     
        }
    }
    // posting status
    T.post('statuses/update', myTweet, tweeted);

}
*/