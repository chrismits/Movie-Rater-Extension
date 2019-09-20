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
            console.log(response);
            display(response);
        });
    }
};

function display(response) {
    var bod = document.getElementsByTagName('body')[0];

    bod.insertAdjacentHTML('afterbegin', 
    `<body style="
        outline: 4px solid #00FF4B;
        outline-offset: 0px;
        ">>RATING IS 10</body>`);
}


function elementAtMouse() {
    return document.elementFromPoint(xpos, ypos);
}
