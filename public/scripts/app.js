
$(document).ready(function() {

/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  
  // Test / driver code (temporary)


 function createTweetElement(tweetData){
   
    let tweetName = $("<h2>").text(tweetData.user.name);
    // console.log(tweetName);
    let tweetPicture = $(`<img>`).addClass("twitter-picture").attr("src", tweetData.user.avatars.regular);
    // console.log(tweetPicture);
    let tweetHandle = $('<p>').addClass("tweet-handle").text(tweetData.user.handle);
    // console.log(tweetHandle);
    let tweetHeader = $('<header>').addClass("tweet-header").append(tweetPicture).append(tweetHandle).append(tweetName);
    // console.log(tweetHeader); 
    let tweetBody = $('<p>').addClass("test-tweet").text(tweetData.content.text);
    // console.log(tweetBody);
    let postDate = $('<span>').addClass("span").text(tweetData.created_at);
    // console.log(postDate);
    let tweetFooter = $('<footer>').addClass("tweet-footer").append(postDate);
    // console.log(tweetFooter);
    let $tweet = $('<article>').addClass("tweet-article").append(tweetHeader).append(tweetBody).append(tweetFooter);
    // console.log($tweet);

    return $tweet;
    // console.log($tweet);
    
 };


function renderTweets(tweets) {
    // loops through tweets
    tweets.forEach(tweet =>{
        console.log("Test",tweet);

      // calls createTweetElement for each tweet
        let tweetElement = createTweetElement(tweet);
        console.log(tweetElement);
        $('#tweet-container').append(tweetElement);
    })
      // takes return value and appends it to the tweets container
};
  renderTweets(tweetData);
  
//   function createTweetElement(tweet) {
//     let $tweet = $('<article>').addClass('tweet');
//     // ...
//     return $tweet;
//   }
  
//   renderTweets(data);
});