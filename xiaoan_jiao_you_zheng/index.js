function draw(owo) {
    var canvas = document.getElementById('owo');
    var ctx = canvas.getContext('2d');
    // 畫一個正方形
    //ctx.fillStyle = "#7eff00";
    //ctx.fillRect(10, 10, 680, 50);
    // 輸出圖片
    var img = new Image();
    img.src = 'Xiaoan.png';
    img.onload = function () {
        // create pattern
        ctx.fillStyle = ctx.createPattern(img, 'no-repeat');
        ctx.fillRect(0, 0, 2400, 1430);
        // 教友編號
        if (!owo) {
            var number = Math.floor(Math.random() * 9999999999999)
            $("#num").attr('value', number)
        } else {
            var number = document.getElementById("num").value
            $("#download").attr('download', "教友 " + document.getElementById("name").value + " 的教友證.png")
        }
        ctx.font = '72px Raleway,Noto Sans CJK TC,PingFangTC-Regular,sans-serif';
        ctx.fillStyle = "#666";
        ctx.fillText(number, 1540, 1080);
        ctx.font = '250px owo';
        ctx.fillStyle = "#FFF";
        ctx.fillText(number, 1800, 780);
        // 輸出文字
        var area = document.getElementById("area").value;
        var name = document.getElementById("name").value;
        ctx.font = '96px Raleway,Noto Sans CJK TC,PingFangTC-Regular,sans-serif';
        ctx.fillStyle = "#222";
        ctx.fillText('教友', 1500, 760);
        ctx.fillText('教友編號', 1500, 1000);
        ctx.fillText('教區', 1500, 1240);
        ctx.font = '72px Raleway,Noto Sans CJK TC,PingFangTC-Regular,sans-serif';
        ctx.fillStyle = "#666";
        ctx.fillText(name, 1540, 840);
        ctx.fillText(area, 1540, 1320);
        var DownloadHref = canvas.toDataURL();
        $('#download').attr('href', DownloadHref);
    }
}
$(document).ready(function () {
    $("input").on("input", function () { draw("為美好的世界獻上洨安教，一個沒有歧視的歡樂天堂") })
});
function downloadimg() {
    ts('.snackbar').snackbar({ content: '親愛的 ' + document.getElementById("name").value + '，教友證已經成功地下載了，感謝您今日的使用。', actionEmphasis: 'negative' })
}

