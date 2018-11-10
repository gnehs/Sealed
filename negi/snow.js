(function () {
    //https://codepen.io/epilande/pen/owAnm?editors=0100#0
    let qty = 128
    let random = i => Math.floor(Math.random() * i)
    let containerClass = Math.random().toString(36).substring(2).replace(/\d+/g, '')
    let objectClass = Math.random().toString(36).substring(2).replace(/\d+/g, '')
    let keyframesName = Math.random().toString(36).substring(2).replace(/\d+/g, '')
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
        background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 30%, #ffffff 50%, #ffffff 60%, rgba(255, 255, 255, 0) 60%), linear-gradient(90deg, rgba(255, 255, 255, 0) 30%, #ffffff 50%, #ffffff 60%, rgba(255, 255, 255, 0) 60%), linear-gradient(45deg, rgba(255, 255, 255, 0) 33%, #ffffff 53%, #ffffff 57%, rgba(255, 255, 255, 0) 65%), linear-gradient(135deg, rgba(255, 255, 255, 0) 33%, #ffffff 53%, #ffffff 57%, rgba(255, 255, 255, 0) 65%);
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
             opacity:  ${(random(50)+50)*0.01};
              filter:  blur(${2+random(2)}px);
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