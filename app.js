$(document).ready(function(){
  // Select already existing elements
  var $app = $('#app');
  $app.html('');

  // Create new HTML elements
  var $title = $('<h1>Twiddler</h1>');
  var $updateButton = $('<button id="update-feed">Update Feed</button>');
  var $feed = $('<div id="feed"></div>');

  // Create event handler functions
  var handleTitleClick = function(event) {
    alert('The title of this page is: ' + event.target.innerText);
  }

  var handleButtonClick = function(event) {
    var element = document.getElementById("update-feed");
    if (element.innerText="Back") {
      element.innerText="Update Feed";
    }
    $feed.empty();
    renderFeed();
  }

  var handleUsernameClick = function(event) {
    var element = document.getElementById("update-feed");
    if (element.innerText === "Update Feed") {
      element.innerText="Back";
    }

    // Re-renders the Feed with only the clicked user's Tweets.
    var clickElementText = event.target.innerText;
    var userText = clickElementText.slice(2);
    $feed.empty();
    renderFeed(userText);
  }

  var renderFeed = function (user) {
    var index = streams.home.length - 1;

    while(index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');

      // create new HTML elements within Tweet div
      var $profilePhoto = $('<img class="profile-photo" src="assets/img/' + tweet.user + '.png"></img>');
      var $username = $('<span class="username"> @' + tweet.user + '</span>');

      var $message = $('<p class ="message">' + tweet.message + '</p>');
      var time = jQuery.timeago(tweet.created_at);
      var $timestamp = $('<span class="timestamp">' + time + '</span>');

      var $comment = $('<i class="icon comment fas fa-comment-dots"></i>');
      var $retweet = $('<i class="icon retweet fas fa-retweet"></i>');
      var $like = $('<i class="icon like fas fa-heart"></i>');
      var $share = $('<i class="icon share fas fa-share-square"></i>');

      // Append new HTML elements within Tweet div
      $profilePhoto.appendTo($tweet);
      $username.appendTo($tweet);
      $message.appendTo($tweet);
      $timestamp.appendTo($tweet);
      $comment.appendTo($tweet);
      $retweet.appendTo($tweet);
      $like.appendTo($tweet);
      $share.appendTo($tweet);

      //if user input
      if (user === tweet.user) {
        $tweet.appendTo($feed);
      } else if (user === undefined) {
        $tweet.appendTo($feed);
      }

      // Set event listeners
      $username.on('click', handleUsernameClick);

      index -= 1;
    }
  };
  renderFeed();

  // Set event listeners (providing appropriate handlers as input)
  $title.on('click', handleTitleClick);
  $updateButton.on('click', handleButtonClick);

  // Append new HTML elements to the DOM
  $title.appendTo($app);
  $updateButton.appendTo($app);
  $feed.appendTo($app);

});

/* <div class="tweet">

  <img class="profile-photo" src="assets/img/'username'.png"></img>
  <span class="username"></span>
  <p class ="message"></p>
  <span class="timestamp"></span>
  <img class="icon comment" src="assets/icons/placeholder.png"></img>
  <img class="icon retweet" src="assets/icons/placeholder.png"></img>
  <img class="icon like" src="assets/icons/placeholder.png"></img>
  <img class="icon share" src="assets/icons/placeholder.png"></img>


</div> */

// $username.on('click', function () {
//   $feed.filter($username);
// });