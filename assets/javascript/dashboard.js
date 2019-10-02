$(function () {
    $('.nav-tabs li:first-child a').tab('show')
});
$('.nav-tabs a').on('shown.bs.tab', function (event) {
    let x = $(event.target).text();         // active tab
    if (x === "خبرها") {
        $("#news h2").text("home");
    } else if (x === "تایید تحلیل ها") {
        $("#analysis h2").text("menu1");
    } else if (x === "تایید اینستاگرام") {
        $("#instagram h2").text("menu2");
    } else if (x === "تایید تلگرام") {
        $("#telegram h2").text("menu3");
    }
});
