//$().ready(() => {
//    var text = "SAMPLE";
//    $("div").append(text);
//})

$().ready(() => {
    $("#change").click(() => {
        var name = $("input[type=text]").val();
        if (name) {
            $.getJSON(
                "api/Hello/HelloWithName/" + name + "/aaa" + "?date=" + new Date().getTime(),
                null,
                (data, textStatus, jqXHR) => {
                    var text = data;
                    $("div").append("<span>" + text + "</span>");
                });
        }
    });

    $("#plus").click(() => {
        var name = $("input[type=text]").val();
        if (name) {
            $.getJSON(
                "api/Hello/Plus?date=" + new Date().getTime(),
                null,
                (data, textStatus, jqXHR) => {
                    var text = data;
                    $("div").append(text);
                });
        }
    });

    var timerToken: number;
    timerToken = setInterval(() => {
        var clientVersion = 1;

        $.getJSON(
            "/api/Hello/IsEnabled/" + clientVersion + "?date=" + new Date().getTime()
            , null,
            (data, textStatus, jqXHR) => {
                var isEnabled: boolean = data;
                if (isEnabled == false) {
                    $("footer").append("<div>新しいバージョンがあります");
                    clearTimeout(timerToken);
                }
            })
    });

});