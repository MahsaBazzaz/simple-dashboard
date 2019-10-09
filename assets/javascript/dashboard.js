myItems = [
    {
        id: 1,
        title: "first news",
        image: "./assets/img/1.jpg",
        text: "text1"
    },
    {
        id: 2,
        title: "second news",
        image: "./assets/img/2.jpg",
        text: "text2"
    },
    {
        id: 3,
        title: "third news",
        image: "./assets/img/3.jpg",
        text: "text3"
    },
];
Analysis =[
    {
        userName : "Mahsa",
        title : "Mahsa opinion",
        score : "100",
        text : "Mahsa says",
    },
];
Insta =[
    {
        userName : "Mahsa2",
        userId : "MahsaBazzaz",
    },
];

Tele =[
    {
        userName : "Mahsa",
        userId : "MahsaBazzaz1",
    },
];
function newItem(id, title, image, text) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.text = text;

}
///////////////////////////////////////////////////////////////////////
let whichTab = null;
let now = null;
let prev =null;
let theActiveElement = null;
$(function () {
    $('.nav-tabs li:last-child a').tab('show');
    whichTab = 3;
});

$('.nav-tabs a').on('shown.bs.tab', function (event) {
    $("#searchString").val("");
    $(".tab-content div div a").removeClass('active');
    now = $(event.target).text();// active tab
    prev = $(event.relatedTarget);
    if (now === "خبرها") {
        $("#searchNav").removeClass('d-none');
        whichTab = 3;
        $("#news div").html(
            newsListGenerator(myItems))
    } else if (now === "تایید تحلیل ها") {
        $("#searchNav").removeClass('d-none');
        whichTab = 2;
        $("#analysis div").html(
            analysisListGenerator(Analysis)
        );
    } else if (now === "تایید اینستاگرام") {
        $("#searchNav").removeClass('d-none');
        whichTab = 1;
        $("#instagram div").html(
            instaTeleListGenerator(Insta)
        );
    } else if (now === "تایید تلگرام") {
        $("#searchNav").removeClass('d-none');
        whichTab = 0;
        $("#telegram div").html(
            instaTeleListGenerator(Tele)
        );
    }
});

function newsListGenerator(items) {
    let HTML = "<div class='list3 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        HTML += "<a id='i"+ i+ "' class='list-group-item list-group-item-action'>";
        let tmp = items[i];
        HTML += "id:" + tmp.id +"<p></p>";
        HTML += "title:" + tmp.title +"<p></p>";
        HTML += "image:" + tmp.image+"<p></p>";
        HTML += "text:" + tmp.text+"<p></p>";
        HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value=\"ویرایش\">";
        HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value=\"حذف\" data-toggle='modal' data-target=\"#myModal\" data-backdrop=\"static\">";
        HTML += "</a>";
    }
    HTML += "<div class=\"modal\" id=\"myModal\">" +
        "<div class=\"modal-dialog\">" +
        "<div class=\"modal-content\">" +
        "<div class=\"modal-body\">آیا از خذف اطمینان دارید؟</div>" +
        "<div class=\"modal-footer\">" +
        "<button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">انصراف</button>"+
        "<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">بله</button></div></div></div></div>";
    HTML += "</div>";
    return HTML;
}
function analysisListGenerator(items) {
    let HTML = "<div class='list2 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        HTML += "<a class='list-group-item list-group-item-action'>";
        let tmp = items[i];
        HTML += "username:" + tmp.userName +"<p></p>";
        HTML += "title:" + tmp.title +"<p></p>";
        HTML += "score:" + tmp.score+"<p></p>";
        HTML += "text:" + tmp.text+"<p></p>";
        HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value=\"تایید\">";
        HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value=\"رد\">";
        HTML += "</a>";

        $("")
    }
    HTML += "</div>";
    return HTML;
}

function instaTeleListGenerator(items) {
    let HTML = null;
    if(whichTab === 0)
        HTML = "<div class='list0 list-group text-right'>";
    else if(whichTab ===1)
        HTML = "<div class='list1 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        HTML += "<a class='list-group-item list-group-item-action'>";
        let tmp = items[i];
        HTML += "username:" + tmp.userName +"<p></p>";
        HTML += "user id:" + tmp.userId+"<p></p>";
        HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value=\"تایید\">";
        HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value=\"رد\">";
        HTML += "</a>";

        $("")
    }
    HTML += "</div>";
    return HTML;
}
//SEARCH
$(document).ready(function(){
    $("#searchString").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        let where = ".list" + whichTab;
        $(where + " a").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(".tab-content").on('click', 'div a', function () {
    theActiveElement = this.id;
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
});

$(".tab-content #news").on('click','.modal .btn-danger',function () {
    myItems.splice(theActiveElement.split("i").pop(),1);
    $("#news div").html(newsListGenerator(myItems));
});

$(".cancel").on('click',function () {
    prev.trigger('click');
});

$(".ok").on('click',function () {
    //todo
    prev.trigger('click');
});

$(".tab-content #news").on('click','div a input.btn-success',function () {
    let parent = $(this).parent().text();
    console.log(parent);
    parent = parent.split("id:")[1];
    let tmp1 = parent.split("title:")[0];
    parent = parent.split("title:")[1];
    let tmp2 = parent.split("image:")[0];
    parent = parent.split("image:")[1];
    let tmp3 = parent.split("text:")[0];
    let tmp4 = parent.split("text:")[1];

     let i = new newItem(tmp1,tmp2,tmp3,tmp4);

    $("#edit-news input#id").val(i.id);
    $("#edit-news input#title").val(i.title);
    $("#edit-news input#image").val(i.image);
    $("#edit-news input#news-text").val(i.text);
    $("#searchNav").addClass('d-none');
    $("#eddit").trigger('click');
});

$("#addNewNews").on('click',function () {
    $("#neww").trigger('click');
    $("#searchNav").addClass('d-none');
});

