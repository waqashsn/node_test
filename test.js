console.log("Hello World!!!");
console.log("I am testing Twitter API...and learning!");

var Twit = require('twit');

var T = new Twit({
  consumer_key:         'rxaiYFoO5y68Yb330mtwHBRBs',
  consumer_secret:      '0vW7JBsg0hUYg6gk0ZA3IyrGbFYI92yCMrNiHOSIBCmAcL8zMB',
  access_token:         '347385261-CBoVHVVDD7KctJrHCZxNJYPzMng0e352sprWQyhc',
  access_token_secret:  'f9wS1B3MlQVJ2WI6UbIUrSeIvCLKOg5Buv85cps1Qnzay',
  //timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
})

T.get('search/tweets', { q: 'Peshawar since:2017-05-12', count: 10 }, function(err, data, response) {
  var tweets = data.statuses;
  for(var i=0;i<tweets.length;i++){
      console.log(tweets[i].text);


  }
  
})