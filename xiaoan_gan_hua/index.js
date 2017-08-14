function draw(owo) {
    var canvas = document.getElementById('owo');
    var ctx = canvas.getContext('2d');
    // 畫一個正方形
    //ctx.fillStyle = "#7eff00";
    //ctx.fillRect(10, 10, 680, 50);
    // 輸出圖片
    var img = new Image();
    img.src = 'Yami.png';
    img.onload = function() {
        // create pattern
        ctx.fillStyle = ctx.createPattern(img, 'no-repeat');
        ctx.fillRect(0, 0, 1535, 270);
        // 輸出文字
        var text = document.getElementById("text").value;
        var btn = document.getElementById("btn").value;
        ctx.font = '87.21px Noto Sans CJK TC,PingFangTC-Regular,sans-serif';
        ctx.fillStyle = "#a7a7a7";
        ctx.fillText(text, 792, 110);
        ctx.font = '81.27px Noto Sans CJK TC,PingFangTC-Regular,sans-serif';
        ctx.fillStyle = "#dfdfdf";
        ctx.fillText(btn, 272, 220);
        var DownloadHref = canvas.toDataURL();
        $('#download').attr('href', DownloadHref);
        $('#download').attr('download', text + ' - 洨洨安幹話產生器');
    }
}
$(document).ready(function() {
    $("input").on("input", function() { draw("為美好的世界獻上洨安教，一個沒有歧視的歡樂天堂") })
});

function downloadimg() {
    ts('.snackbar').snackbar({ content: '幹話已經成功地下載了，感謝您今日的使用。', actionEmphasis: 'negative' })
}