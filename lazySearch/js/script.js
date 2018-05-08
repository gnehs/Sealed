$(document).ready(function() {
    $("#searchButton").on("click", function() {
        var query = $("#queryInput").val();
        if (query) {
            loadYoutubeService($("#queryInput").val());
            $("#searchButton").addClass('loading')
            $("#dimmer").addClass('active')
        }
    });
    $("#pr").on("click", function() {
        var query = Number($("#queryInput").val()) - 1;
        $("#queryInput").val(query)
        if (query) {
            loadYoutubeService($("#queryInput").val());
            $("#pr").addClass('loading')
            $("#dimmer").addClass('active')
        }
    });
    $("#ne").on("click", function() {
        var query = Number($("#queryInput").val()) + 1;
        $("#queryInput").val(query)
        if (query) {
            loadYoutubeService($("#queryInput").val());
            $("#ne").addClass('loading')
            $("#dimmer").addClass('active')
        }
    });
});

//抓資料囉
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
        $("#dimmer").removeClass('active')
        if (response.items[0])
            $('#video').attr('src', 'https://www.youtube.com/embed/' + response.items[0].id.videoId + '?rel=0')
        else {
            snackbar("找不到該影片");
            $("#queryInput").val('23101')
            $('#video').attr('src', 'https://www.youtube.com/embed/MQm7zv7QLAA?rel=0&controls=0')
        }
    });
}