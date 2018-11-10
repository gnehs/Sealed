(function () {
    //https://codepen.io/epilande/pen/owAnm?editors=0100#0
    let qty = 128
    let random = i => Math.floor(Math.random() * i)
    let containerClass = Math.random().toString(36).substring(2).replace(/\d+/g, '')
    let objectClass = Math.random().toString(36).substring(2).replace(/\d+/g, '')
    let keyframesName = [
        Math.random().toString(36).substring(2).replace(/\d+/g, ''),
        Math.random().toString(36).substring(2).replace(/\d+/g, ''),
        Math.random().toString(36).substring(2).replace(/\d+/g, ''),
        Math.random().toString(36).substring(2).replace(/\d+/g, '')
    ]
    let injectCss = `
    .${containerClass} {
        position: fixed;
        z-index: 9999;
        width: 100vw;
        height: 100vh;
        top: 0;
        pointer-events: none;
        overflow: hidden;
    }
    .${objectClass} {
        position: absolute;
        border-radius: 50%;
        background-size: 100%;
    }
    @keyframes ${keyframesName[0]} {
        0%{
            transform: translateY(0) rotate(0deg) scale(2);
        }
        100% {
            transform: translateY(200vh) rotate(2500deg) scale(0);
        }
    }
    @keyframes ${keyframesName[1]} {
        0%{
            transform: translateY(0) rotate(2500deg) scale(0);
        }
        100% {
            transform: translateY(200vh) rotate(0deg) scale(1);
            opacity: 0;
        }
    }
    @keyframes ${keyframesName[2]} {
        0%{
            transform: translateY(0) rotate(0deg);
        }
        100% {
            transform: translateY(200vh) rotate(1200deg) scale(1.2);
        }
    }
    @keyframes ${keyframesName[3]} {
        0%{
            transform: translateY(0) rotate(1200deg);
        }
        100% {
            transform: translateY(200vh) rotate(0deg) scale(.7);
        }
    }
    `
    for (i = 0; i < qty; i++) {
        let flakeSize = 50 + random(80)
        injectCss += `.${objectClass}:nth-child(${i+1}){
                       width:  ${flakeSize}px;
                      height:  ${flakeSize}px;
                         top:  ${-700+random(200)}px;
                        left:  ${random(100)}%;
            background-image:  url("https://gnehs.github.io/Sealed/negi/img/frying${1+random(5)}.png");
             background-size:  100%;
           background-repeat:  no-repeat; 
         background-position:  center center; 
                   animation:  ${5+random(10)}s ${keyframesName[random(4)]} linear infinite;
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