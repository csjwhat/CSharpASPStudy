$().ready(() => {
    $("button").click(() => {

        var name = $("input[type=text]").val();
        if (name) {
            $.getJSON(
                "/api/Hello/HelloWithName/" + name + "?date=" + new Date().getTime(),
                null,
                (data, textStatus, jqXHR) => {
                    var text = data;
                    $("div span").remove();
                    $("div").append("<span>" + text + "</span>");
                });
        }
    });

    var timerToken: number;
    timerToken = setInterval(() => {
        var clientVersion = 1;
        $.getJSON(
            "api/Hello/IsEnabled/" + clientVersion + "?date=" + new Date().getTime(),
            null,
            (data, textStatus, jqXHR) => {
                var isEnabled: boolean = data;
                if (isEnabled == false) {
                    $("footer").append("<div>新しいバージョンがあります！再読み込みしてください</div>");
                    clearTimeout(timerToken);
                }
            });
    } ,1000)
});
