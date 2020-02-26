//$().ready(() => {
//    var text = "SAMPLE";
//    $("div").append(text);
//})

$().ready(() => {
    $.getJSON(
        "api/Hello/Hello/",
        null,
        (data, textStatus, jqXHR) => {
            var text = data;
            $("div").append("<span>" + text + "</span>");
        })
});