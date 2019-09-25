//Listen for movie from content Script
var requested = ''
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.movie != "" && request.movie != null && requested != request.movie) {
        requested = request.movie
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
