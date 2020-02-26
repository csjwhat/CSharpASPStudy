//$().ready(() => {
//    var text = "SAMPLE";
//    $("div").append(text);
//})
$().ready(function () {
    $.getJSON("api/Hello/Hello/", null, function (data, textStatus, jqXHR) {
        var text = data;
        $("div").append("<span>" + text + "</span>");
    });
});
//# sourceMappingURL=app.js.map