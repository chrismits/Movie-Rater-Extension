//send to content script
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//       console.log(response.farewell);
//     });
//   });

function apiCall(movie) {
  $.getJSON('http://www.omdbapi.com/?apikey=54386718&t=' + encodeURI(movie)).then(function(response) {
    console.log(response);
  });
}

//receive from content script
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.movie != "" && request.movie != null) {
        console.log("HELLO");
        $.getJSON('http://www.omdbapi.com/?apikey=54386718&t=' + encodeURI(movie)).then(function(response) {
          console.log(response);
        });
        sendResponse({rating: "10"});
      }
    return true;
    });