
//alert("Welcome to Netflix");
// var xpos, ypos;

// document.onmouseover = function(e) {
//     e = e || window.event;
//     xpos = e.clientX;
//     ypos = e.clientY;
//     var elem = elementAtMouse();
//     var title = elem.getAttribute("aria-label");


// };


console.log("Running")
//chrome.tabs.goBack()

var prevURL = '';
var prev_title = '';
setInterval(function() {
   // if (document.location.href != prevURL) {
        // do something
       // prevURL = document.location.href;

        $("body").find("span.duration").each( function() {

            var tmp = $(this).next()
            var copy = this
            if (!tmp.hasClass("myrating")) {
                var title = getTitle(copy, prev_title)
                if (title != "N/A") {
                    prev_title = title
                    chrome.runtime.sendMessage({movie: title}, function(response) {
                        // $(this).after("<span class=\"myrating\">" + response.imdbRating + "TEST</span>")
                        console.log("Sending message")
                        console.log(response)

                        if (response.imdb && response.imdb != "N/A") {
                           // console.log(response.imdb)
                            var html = "<span class=\"my__rating\"> " + response.imdb + "</span>"
                            console.log(html)
                            if (!$(copy).next()) {
                                $(copy).after(html).next().css({
                                    "border": "2px solid #FFFFFF",
                                    "font-size": "14px",
                                    "letter-spacing": "2px",
                                    "word-spacing": "2px",
                                    "color": "#FFFFFF",
                                    "font-weight": "700",
                                    "text-decoration": "none",
                                    "font-style": "normal",
                                    "font-variant": "normal",
                                    "text-transform": "uppercase"
                                })
                            }
                            return
                        }
                    });
                }
            }
        });

   // }

}, 1000);





function getTitle(obj, previous) {
    var ancestor = $(obj).closest("div.jawBone")
    var h1 = $(ancestor).children("h1").find("img").attr("alt")
    var h3 = $(ancestor).children("h3").find("img").attr("alt")
    var movie_title = "N/A"

    if (h1) {
        return "N/A"
    }
    else if (previous == h3) {
        return "N/A"
    }
    else {
        return h3
    } 
}





// document.onmousemove = function() {
//     console.log("click")
    
//     $("body").find("span.duration").each(function(){
//         var tmp = $(this).next()
//         if (!tmp.hasClass("myrating")) {
//             getRating(this)
//             // console.log(tmp)   
//             // if (rating != "N/A")
//             //     $(this).after("<span class=\"myrating\">" + rating + "TEST</span>")
//         }
//     });
// };
