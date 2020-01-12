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
});
