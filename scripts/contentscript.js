//Content script that only runs when in netflix domain. Periodically checks for new titles every second
function getTitle(obj) {
    var ancestor = $(obj).closest("div.jawBone")
    var h1 = $(ancestor).children("h1").find("img").attr("alt")
    var h3 = $(ancestor).children("h3").find("img").attr("alt")
    var movie_title = "N/A"

    if (h1)
        return "N/A"
    else
        return h3
}

var prev_title = '';
var prev_rate = ''
setInterval(function() {
        $("body").find("span.duration").each( function() {
            var tmp = $(this).next()
            var copy = this
            if (!tmp.hasClass("myrating")) {
                var title = getTitle(copy)
                if (title != "N/A" && title != prev_title) {
                    prev_title = title
                    chrome.runtime.sendMessage({movie: title}, function(response) {
                        if (response.imdb && response.imdb != "N/A" && response.imdb != prev_rate) {
                            prev_rate = response.imdb
                            var html = "<span class=\"my__rating\">   IMDb: " + response.imdb + "  </span>"
                                $(copy).after(html).next().css({
                                    "font-size": "px",
                                    "border": "2px solid #FFFFFF",
                                    "border-radius": "20px",
                                    "padding": "5px 5px 5px 5px"
                                })
                        }
                        return true
                    });
                }
            }
        });
}, 1000);
