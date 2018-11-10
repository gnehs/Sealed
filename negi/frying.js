(function () {
    //https://codepen.io/epilande/pen/owAnm?editors=0100#0
    let qty = 128
    let random = i => Math.floor(Math.random() * i)
    let containerClass = Math.random().toString(36).substring(2);
    let objectClass = Math.random().toString(36).substring(2);
    let keyframesName = Math.random().toString(36).substring(2);
    let injectCss = `
    .${containerClass} {
        position: fixed;
        z-index: 9999;
        width: 100vw;
        height: 100vh;
        top: 0;
        pointer-events: none;
    }
    .${objectClass} {
        position: absolute;
        border-radius: 50%;
        transform: translateY(0) rotateX(0) rotateY(0);
        background-size: 100%;
    }
    @keyframes ${keyframesName} {
        100% {
            transform: translateY(1000px) rotateX(15deg) rotateY(24deg);
            opacity: 0;
        }
    }
    `
    for (i = 0; i < qty; i++) {
        let flakeSize = 5 + random(15)
        injectCss += `.${objectClass}:nth-child(${i+1}){
               width:  ${flakeSize}px;
              height:  ${flakeSize}px;
                 top:  ${-700+random(700)}px;
                left:  ${random(100)}%;
    background-image:  url("https://gnehs.github.io/Sealed/negi/img/frying${random(6)}.png");
     background-size:  100%;
           animation:  ${15+random(55)}s ${keyframesName} linear infinite;
	    }`
    }
    var styleElem = document.createElement('style');
    styleElem.type = 'text/css';
    styleElem.appendChild(document.createTextNode(injectCss));
    document.getElementsByTagName('head')[0].appendChild(styleElem);

    var snow = document.createElement("div");
    snow.className = containerClass
    for (var i = 0; i < qty; i++) {
        let flake = document.createElement("div")
        flake.className = objectClass
        snow.appendChild(flake)
    }
    document.body.appendChild(snow);
})();