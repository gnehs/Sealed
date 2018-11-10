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
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuNSIgeTE9IjAuMCIgeDI9IjAuNSIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIzMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjYwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iNjAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA=='), url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuNSIgeDI9IjEuMCIgeTI9IjAuNSI+PHN0b3Agb2Zmc2V0PSIzMCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSI1MCUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjYwJSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iNjAlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA=='), url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjEuMCIgeDI9IjEuMCIgeTI9IjAuMCI+PHN0b3Agb2Zmc2V0PSIzMyUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSI1MyUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjU3JSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA=='), url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgeDE9IjAuMCIgeTE9IjAuMCIgeDI9IjEuMCIgeTI9IjEuMCI+PHN0b3Agb2Zmc2V0PSIzMyUiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMC4wIi8+PHN0b3Agb2Zmc2V0PSI1MyUiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjU3JSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iNjUlIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAuMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==');
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