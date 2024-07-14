const sleeper = (time) => new Promise((resolve) => setTimeout(resolve, time));
async function hideElementsByClassNames(classNames) {
    await sleeper(1500);
    classNames.forEach(function (className) {
        console.log("target classname=" + className);
        var elements = document.getElementsByClassName(className);
        for (var i = 0; i < elements.length; i++) {
            elements[i].style.display = 'none';
        }
    });
}

var classNamesToHide = ['style-1gtaew4', 'style-1y0vgst'];
hideElementsByClassNames(classNamesToHide);
