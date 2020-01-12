$().ready(() => {
    $.getJSON(
        "/api/Hello/Hello/",
        null, (data, textStatus, jqXHR) => {
            var text = data;
            $("div").append(text);
        })
});
