$(document).ready(function(){
  // Select already existing elements
  var $app = $('#app');
  $app.html('');

  // Create new HTML elements
  var $title = $('<h1>Twiddler</h1>');
  var $updateButton = $('<button id="update-feed">Update Feed</button>');
  var $feed = $('<div id="feed"></div>');
  var $tweet = $('<div class="tweet"></div>');

  // Create event handler functions
  var handleTitleClick = function(event) {
    alert('The title of this page is: ' + event.target.innerText);
  }





  var renderFeed = function () {
    var index = streams.home.length - 1;
    while(index >= 0) {
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweet"></div>');
      // $tweet.text('@' + tweet.user + ': ' + tweet.message);
      // $tweet.appendTo($feed);

      // create new HTML elements within Tweet
      var $profilePhoto = $('<img class="profile-photo" src="assets/img/' + tweet.user + '.png"></img>');
      var $username = $('<span class="username"> @' + tweet.user + '</span>');
      var $message = $('<p class ="message">' + tweet.message + '</p>');
      var time = jQuery.timeago(tweet.created_at);
      var $timestamp = $('<span class="timestamp">' + time + '</span>');

      var $comment = $('<img class="icon comment" src="assets/icons/placeholder.png"></img>');
      var $retweet = $('<img class="icon retweet" src="assets/icons/placeholder.png"></img>');
      var $like = $('<img class="icon like" src="assets/icons/placeholder.png"></img>');
      var $share = $('<img class="icon share" src="assets/icons/placeholder.png"></img>');

      // Append new HTML elements within Tweet
      $profilePhoto.appendTo($tweet);
      $username.appendTo($tweet);
      $message.appendTo($tweet);
      $timestamp.appendTo($tweet);
      $comment.appendTo($tweet);
      $retweet.appendTo($tweet);
      $like.appendTo($tweet);
      $share.appendTo($tweet);

      $tweet.appendTo($feed);
      index -= 1;
    }

  };
  renderFeed();

  // Set event listeners (providing appropriate handlers as input)
  $title.on('click', handleTitleClick);
  $updateButton.on("click", function(event) {
    $feed.empty();
    renderFeed();
  });

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