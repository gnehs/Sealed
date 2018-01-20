function draw(owo) {
    var canvas = document.getElementById('owo');
    var ctx = canvas.getContext('2d');
    // 畫一個正方形
    //ctx.fillStyle = "#7eff00";
    //ctx.fillRect(10, 10, 680, 50);
    // 輸出圖片
    var img = new Image();
    img.src = 'chat.png';
    img.onload = function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // create pattern
        ctx.fillStyle = ctx.createPattern(img, 'no-repeat');
        ctx.fillRect(0, 0, 512, 92);
        // 輸出文字
        var name = document.getElementById("name").value;
        ctx.font = 'bold 18px Noto Sans CJK TC,PingFangTC-Regular,sans-serif';
        ctx.fillStyle = "rgb(22,138,205)";
        ctx.fillText(name, 88, 38);

        var msg = document.getElementById("msg").value;
        ctx.font = '18px Noto Sans CJK TC,PingFangTC-Regular,sans-serif';
        ctx.fillStyle = "#000";
        ctx.fillText(msg, 90, 62);

        var time = document.getElementById("time").value;
        ctx.font = '18px Noto Sans CJK TC,PingFangTC-Regular,sans-serif';
        ctx.fillStyle = "#afacb6";
        ctx.fillText(time, 430, 69);

        var admin = document.getElementById("admin").value;
        ctx.font = '19px Noto Sans CJK TC,PingFangTC-Regular,sans-serif';
        ctx.fillStyle = "#afacb6";
        ctx.fillText(admin, 420, 38);

        var DownloadHref = canvas.toDataURL();
        $('#download').attr('href', DownloadHref);
        $('#download').attr('download', name + msg + ' - Telegram 對話產生器.png');
    }
}
$(document).ready(function() {
    $("input").on("input", function() { draw("為美好的世界獻上洨安教，一個沒有歧視的歡樂天堂") })
});

function downloadimg() {
    ts('.snackbar').snackbar({ content: '對話已經成功地下載了，感謝您今日的使用。', actionEmphasis: 'negative' })
}