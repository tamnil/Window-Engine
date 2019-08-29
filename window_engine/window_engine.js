
const protoCall = x => (y,z)=> Array.prototype[x].call(z,y)
// const getElementsByClass = x => document.getElementsByClassName(x)

const mapCollection = fn => x => protoCall('map')(fn,x)
const filterCollection = fn => x => protoCall('filter')(fn,x)
const reduceCollection = (fn,x) => protoCall('reduce')(fn,x)

const windowActivators = document.getElementsByClassName('window-activator')
const windowTargets = document.getElementsByClassName('target')
const closeButtons = document.getElementsByClassName('close-btn')
const hideElement = el => el.style.display = 'none'

const targetContainsClass = el => cl => el.target.classList.contains(cl)

// binding events:
const clickOnClose = x => mapCollection(x=>x.onclick = (ev) => hideElement(ev.srcElement.closest('.target')))(x)
const activateWindow = (x) => mapCollection(x=> x.style.display ='block')(x)
const isMovable = (ev) => targetContainsClass(ev)('mydivheader')

const boundingBox = (x) => x.getBoundingClientRect();


//formatting
const formatStrToPx = x => String(x) + 'px'

//io

const setTargetWindow = (target,val) => ['left','top'].map((x,idx) => target.style[x] = formatStrToPx(val[idx]-20))
const moving = target => ev => ev.which == 1 ? setTargetWindow(target,[ev.clientX,ev.clientY]) : false

const moveMousePositons = target =>  target.addEventListener('mousemove', moving(target))

const moveElement = target => moveMousePositons(target.closest('.target'))
const listTemp = (ev) => moveElement(ev.target)

const dragElementF = (x) => mapCollection(el => el.addEventListener("mousedown", listTemp))(x)

//fading




//init

const init = () => {
    activateWindow(windowTargets)
    clickOnClose(closeButtons)
    dragElementF(windowTargets)
    console.log(dragElementF(windowTargets))
    console.log(windowTargets)
}

init()

// }
/*
function windowCreation(id) {
    var isOut;
    document.getElementById("closeButton" + id).onclick = function (e) {
        console.log(e)
        fadeOut(document.getElementById("mydiv" + id), 50);
        isOut = true;
    };
    document.getElementById("button" + id).onclick = function (el) {
        console.log(el);
        if (document.getElementById("mydiv" + id).style.display === "initial") {
            isOut = false;
        }
        if (isOut) {
            document.getElementById("mydiv" + id).style = "position: absolute;top: 80px;";
            fadeIn(document.getElementById("mydiv" + id), 50);
        }
        isOut = false;
    };
    dragElement(document.getElementById("mydiv" + id));
    isOut = true;
}
*/
    /*
function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
        var active = document.getElementsByClassName("mydiv");
        for (var i = active.length - 1; i > -1; i--) {
            active[i].classList.remove("mydivActive");
        }
        document.getElementById(elmnt.id).className += " mydivActive";
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

*/

function fadeIn(elem, ms) {
    elem.style.opacity = 0;
    elem.style.display = "initial";
    if (elem.classList.contains("fade")) {
        var opacity = 0;
        var timer = setInterval(function () {
            opacity += 10 / ms;
            if (opacity >= 1) {
                clearInterval(timer);
                opacity = 0.9;
            }
            elem.style.opacity = opacity;
            var active = document.getElementsByClassName("mydiv");
            for (var i = active.length - 1; i > -1; i--) {
                active[i].classList.remove("mydivActive");
            }
            elem.className += " mydivActive";
        }, 50);
    } else {
        elem.style.opacity = 0.9;
        var active = document.getElementsByClassName("mydiv");
        for (var i = active.length - 1; i > -1; i--) {
            active[i].classList.remove("mydivActive");
        }
        elem.className += " mydivActive";
    }
}

function fadeOut(elem, ms) {
    if (elem.classList.contains("fade")) {
        var opacity = 1;
        var timer = setInterval(function () {
            opacity -= 10 / ms;
            if (opacity <= 0) {
                clearInterval(timer);
                opacity = 0;
                elem.style.display = "none";
            }
            elem.style.opacity = opacity;
        }, 50);
    } else {
        elem.style.opacity = 0;
        elem.style.display = "none";
        var active = document.getElementsByClassName("mydiv");
        for (var i = active.length - 1; i > -1; i--) {
            active[i].classList.remove("mydivActive");
        }
        elem.className += " mydivActive";
    }
}
