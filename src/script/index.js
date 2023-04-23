const production = false;
function checkDevice () {
    if (navigator.userAgent.match(/Android/i) ||  navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
        return true;
    }
    
    return false;
}

const isMobi = checkDevice();
if (!production) {
    if (isMobi) {
        window.location.replace("/src/page/mobile/");
    }else {
        window.location.replace("/src/page/desktop/");
    }
} else {
    if (isMobi) {
        window.location.replace("IEPE.github.io/src/page/mobile/");
    }else {
        window.location.replace("IEPE.github.io/src/page/desktop/");
    }
}

