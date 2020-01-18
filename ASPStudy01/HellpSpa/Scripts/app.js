$().ready(function () {
    $("button").click(function () {
        var name = $("input[type=text]").val();
        if (name) {
            $.getJSON("/api/Hello/HelloWithName/" + name + "?date=" + new Date().getTime(), null, function (data, textStatus, jqXHR) {
                var text = data;
                $("div span").remove();
                $("div").append("<span>" + text + "</span>");
            });
        }
    });
    var timerToken;
    timerToken = setInterval(function () {
        var clientVersion = 1;
        $.getJSON("api/Hello/IsEnabled/" + clientVersion + "?date=" + new Date().getTime(), null, function (data, textStatus, jqXHR) {
            var isEnabled = data;
            if (isEnabled == false) {
                $("footer").append("<div>新しいバージョンがあります！再読み込みしてください</div>");
                clearTimeout(timerToken);
            }
        });
    }, 1000);
});
//# sourceMappingURL=app.js.map