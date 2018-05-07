$(document).ready(function() {
    //替按鈕綁上事件
    $("#searchButton").on("click", function() {
        var query = $("#queryInput").val();
        //防呆
        if (query) {
            loadYoutubeService($("#queryInput").val());
            console.log(query + " 搜尋中....");
            $("#searchButton").addClass('loading')
        }
    });
    $("#pr").on("click", function() {
        var query = Number($("#queryInput").val()) - 1;
        $("#queryInput").val(query)
            //防呆
        if (query) {
            loadYoutubeService($("#queryInput").val());
            console.log(query + " 搜尋中....");
            $("#pr").addClass('loading')
        }
    });
    $("#ne").on("click", function() {
        var query = Number($("#queryInput").val()) + 1;
        $("#queryInput").val(query)
            //防呆
        if (query) {
            loadYoutubeService($("#queryInput").val());
            console.log(query + " 搜尋中....");
            $("#ne").addClass('loading')
        }
    });
});

//向google 使用youtube服務
function loadYoutubeService(query) {
    gapi.client.load('youtube', 'v3', function() {
        gapi.client.setApiKey('AIzaSyBYXzGDkIxNjfMx4L9Wsr4W-A7W05s1l50');
        search(query);
    });
}
//搜尋
function search(query) {
    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q: 'TLHCM' + query,
        maxResults: 1
    });

    request.execute(function(response) {
        $("#searchButton,#pr,#ne").removeClass('loading')
        if (response.items[0])
            $('#video').attr('src', 'https://www.youtube.com/embed/' + response.items[0].id.videoId + '?rel=0')
        else {
            snackbar("找不到該影片");
            $("#queryInput").val('23101')
        }
    });
}