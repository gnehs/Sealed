var canvas = document.getElementById('canvas');
var max = 15000;
var width = Math.min(window.innerWidth, max);
var height = width;
var ctx = canvas.getContext('2d');
var img = document.createElement('img');
var downloadButton = document.getElementById('download');
var loaded = false;
var thoughtText = '';
var thought = document.getElementById('thought');

function dataURItoBlob(dataURI) {
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {
        type: mimeString
    });
}

function updateText(val, offset) {
    offset = offset || 0;
    thoughtText = val;
    var fontSize = 0.055 * width;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, width, height);
    if (loaded) {
        var devicePixelRatio = window.devicePixelRatio || 1;
        ctx.drawImage(img, 0, offset * devicePixelRatio, width * devicePixelRatio, height * devicePixelRatio);
    }
    ctx.fillStyle = '#FFFFFF'
    ctx.font = fontSize + 'px Noto Sans CJK TC, PingFangTC-Regular, sans-serif';
    ctx.save();
    thoughtText.split('\n').forEach((line, index) => {
        ctx.fillText(line, 0.66 * width, 0.24 * width + (fontSize * index * 1.2) + offset);
    });
    ctx.restore();
}

function update(offsetTop, offsetBottom) {
    offsetTop = offsetTop || 0;
    offsetBottom = offsetBottom || 0;
    console.log('window width', window.innerWidth);
    width = Math.min(window.innerWidth, max);
    height = width * img.naturalHeight / img.naturalWidth;
    canvas.setAttribute('width', width);
    canvas.setAttribute('height', height + offsetTop + offsetBottom);
    ctx = canvas.getContext('2d');
    updateText(thought.value, offsetTop);
}
//圖片讀取
img.src = 'original.jpg';
img.onload = function() {
    loaded = true;
    update();
}
//下載
downloadButton.addEventListener('click', function(evt) {
    canvas.toBlob(function(blob) {
        saveAs(blob, "Xiaoan.png");
        update();
    });
});
//監聽
thought.addEventListener('input', evt => updateText(evt.target.value));
window.addEventListener('resize', evt => update());