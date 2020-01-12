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
});
//# sourceMappingURL=app.js.map