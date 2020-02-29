//$().ready(() => {
//    var text = "SAMPLE";
//    $("div").append(text);
//})
$().ready(function () {
    $("#change").click(function () {
        var name = $("input[type=text]").val();
        if (name) {
            $.getJSON("api/Hello/HelloWithName/" + name + "/aaa" + "?date=" + new Date().getTime(), null, function (data, textStatus, jqXHR) {
                var text = data;
                $("div").append("<span>" + text + "</span>");
            });
        }
    });
    $("#plus").click(function () {
        var name = $("input[type=text]").val();
        if (name) {
            $.getJSON("api/Hello/Plus?date=" + new Date().getTime(), null, function (data, textStatus, jqXHR) {
                var text = data;
                $("div").append(text);
            });
        }
    });
    var timerToken;
    timerToken = setInterval(function () {
        var clientVersion = 1;
        $.getJSON("/api/Hello/IsEnabled/" + clientVersion + "?date=" + new Date().getTime(), null, function (data, textStatus, jqXHR) {
            var isEnabled = data;
            if (isEnabled == false) {
                $("footer").append("<div>新しいバージョンがあります");
                clearTimeout(timerToken);
            }
        });
    });
});
//# sourceMappingURL=app.js.map