myItems = [
    {
        id: 1,
        title: "خبر اول",
        image: "./assets/img/1.jpg",
        text: "این متن خبر اول است"
    },
    {
        id: 2,
        title: "خبر دوم",
        image: "./assets/img/2.png",
        text: "این متن خبر دوم است"
    },
    {
        id: 3,
        title: "خبر سوم",
        image: "./assets/img/3.png",
        text: "این متن خبر سوم است"
    },
];

function newItem(id, title, image, tags, isVip, level, typeId, icon, typeTilte, viewCount, likeCount, lang, sources, isLiked, state, date, text) {
    this.id = id;
    this.title = title;
    this.image = image;
    // this.tags = tags;
    // this.isVip = isVip;
    // this.level = null;
    // this.typeId = null;
    // this.icon = null;
    // this.typeTitle = null;
    // this.viewCount = null;
    // this.likeCount = null;
    // this.lang = null;
    // this.sources = null;
    // this.isLiked = null;
    // this.state = null;
    // this.date = null;
    this.text = null;

}

let analysisItem = {
    userName: null,
    title: null,
    score: null,
    text: null,
};
let instagramItem = {
    userName: null,
    userId: null,
};
let telegramItem = {
    userName: null,
    userId: null,
};
///////////////////////////////////////////////////////////////////////
$(function () {
    $('.nav-tabs li:first-child a').tab('show')
});
$('.nav-tabs a').on('shown.bs.tab', function (event) {
    let x = $(event.target).text();         // active tab
    if (x === "خبرها") {
        $("#news").html(
            newsListGenerator(myItems))
    } else if (x === "تایید تحلیل ها") {
        $("#analysis ul").text("menu1");
    } else if (x === "تایید اینستاگرام") {
        $("#instagram ul").text("menu2");
    } else if (x === "تایید تلگرام") {
        $("#telegram ul").text("menu3");
    }
});

function newsListGenerator(items) {
    let HTML = "<ul class='list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        HTML += "<li id='listNewsItemNumber"+ i + "' class='list-group-item'>";
        let tmp = items[i];
        HTML += "id:" + tmp.id +"<p></p>";
        HTML += "title:" + tmp.title +"<p></p>";
        HTML += "image:" + tmp.image+"<p></p>";
        HTML += "text:" + tmp.text+"<p></p>";
        HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value=\"ویرایش\">";
        HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value=\"حذف\">";
        HTML += "</li>";

        $("")
    }
    HTML += "</ul>";
    console.log(HTML);
    return HTML;
}