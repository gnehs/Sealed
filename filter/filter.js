//===================
//  CSS 濾鏡實驗室
//  by 棒棒勝
//  Powered by 洨洨安實驗室
//===================
// 設定預設值
$('input[id="blur"]').val("0");
$('input[id="brightness"]').val("100");
$('input[id="saturate"]').val("100");
$('input[id="grayscale"]').val("0");
$('input[id="invert"]').val("0");
$('input[id="sepia"]').val("0");
$('input[id="huerotate"]').val("0");
// 讓滑桿左側擁有指示條顏色
ts('.ts.slider').slider();
// 如果滑桿調整，則變更 perview>div 內的 CSS，並輸出 CSS HTML JADE 程式碼
$("#breeding > div > div > input").on("input", function () {
    var grayscale = document.getElementById("grayscale").value;
    var sepia = document.getElementById("sepia").value;
    var saturate = document.getElementById("saturate").value;
    var contrast = document.getElementById("contrast").value * 2;
    var huerotate = document.getElementById("huerotate").value * 3.6;
    var invert = document.getElementById("invert").value * 0.01;
    var brightness = document.getElementById("brightness").value;
    var blur = document.getElementById("blur").value * 0.1;
    var filter = " invert(" + invert + ")" + " contrast(" + contrast + "%)" + " sepia(" + sepia + "%)" + " hue-rotate(" + huerotate + "deg)" + " grayscale(" + grayscale + "%)" + " blur(" + blur + "px)" + " brightness(" + brightness + "%)" + " saturate(" + saturate + "%)";
    // 變更 perview>div 內的 CSS
    $("#perview>img").css("filter", filter);
    // 並輸出 CSS HTML JADE 程式碼
    $("#CodeForCSS").html("filter:" + filter + ";");
});
// 上傳圖片的預覽
var reader = new FileReader();
$("#upload").change(function() {
    var upload_file = $("#upload")[0].files[0];
    reader.readAsDataURL(upload_file);
})
reader.onload = function(e) {
    $("#perview>img").attr("src", e.target.result);
}