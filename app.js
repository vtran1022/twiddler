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

      var $profilePhoto = $('<img class="profile-photo" src="assets/img/mracus.png"></img>');
      $profilePhoto.appendTo($tweet);
      var $username = $('<span class="username"> @' + tweet.user + '</span>');
      $username.appendTo($tweet);
      var $message = $('<p class ="message">' + tweet.message + '</p>');
      $message.appendTo($tweet);

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
  <div class="icon">
    <img class="icon comment" src="assets/icons/placeholder.png"></img>
    <img class="icon retweet" src="assets/icons/placeholder.png"></img>
    <img class="icon like" src="assets/icons/placeholder.png"></img>
    <img class="icon share" src="assets/icons/placeholder.png"></img>
  </div>


</div> */