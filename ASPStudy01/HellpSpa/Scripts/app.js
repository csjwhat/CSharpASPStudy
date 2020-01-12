$().ready(function () {
    $.getJSON("/api/Hello/Hello/", null, function (data, textStatus, jqXHR) {
        var text = data;
        $("div").append(text);
    });
});
//# sourceMappingURL=app.js.map