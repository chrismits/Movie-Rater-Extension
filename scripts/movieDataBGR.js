//send to content script]
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//       console.log(response.farewell);
//     });
//   });

function getIMDBrating(movie) {
  var rating;
  $.getJSON('http://www.omdbapi.com/?apikey=54386718&t=' + encodeURI(movie)).then(function(response) {
    if (response != null) {
      if (response.imdbRating) {
         rating = response.imdbRating;
      }
    }
  });

  return rating;
}

//receive from content script
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.movie != "" && request.movie != null) {
        console.log("HELLO");
        //get IMDB rating
        $.getJSON('http://www.omdbapi.com/?apikey=54386718&t=' + encodeURI(request.movie)).then(function(response) {
          if (response.imdbRating) {
            sendResponse({"title": response.Title, "imdb": response.imdbRating}, );
          }
        });
      }

    return true;
    });

    // $.getJSON('https://www.omdbapi.com/?apikey=54386718&t=' + encodeURI(request.movie)).then(function(response) {
    // });