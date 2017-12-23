if (window.DeviceOrientationEvent) {

    window.addEventListener('deviceorientation', function(event) {
        var alpha = event.alpha,
            beta = event.beta,
            gamma = event.gamma;
        //$(".pace.pace-active").css("transform", 'rotate(' + alpha + 'deg)');
        $("#about").css("transform", 'rotateX(' + beta + 'deg) rotateY(' + gamma + 'deg) rotateZ(' + alpha + 'deg)');
        $('<style>.pace .pace-progress::after{transform:rotate(' + alpha + 'deg)}</style>').appendTo('head');


    }, false);
} else {
    document.querySelector('body').innerHTML = '你的瀏覽器不支援喔';
}