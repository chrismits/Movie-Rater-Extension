alert("Welcome to Netflix");
var xpos, ypos;

document.onmouseover = function(e) {
    e = e || window.event;
    xpos = e.clientX;
    ypos = e.clientY;
    var elem = elementAtMouse();
    var title = elem.getAttribute("aria-label");

    if (title != null && title != "") {
        chrome.runtime.sendMessage({movie: title}, function(response) {
            console.log(response.rating);
        });
    }
};




function elementAtMouse() {
    return document.elementFromPoint(xpos, ypos);
}
