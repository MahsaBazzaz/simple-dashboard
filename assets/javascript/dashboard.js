myItems = [
    {
        id: 1,
        title: "first news",
        image: "./assets/img/1.jpg",
        text: "این متن خبر اول است"
    },
    {
        id: 2,
        title: "second news",
        image: "./assets/img/2.png",
        text: "این متن خبر دوم است"
    },
    {
        id: 3,
        title: "third news",
        image: "./assets/img/3.png",
        text: "این متن خبر سوم است"
    },
];
Analysis =[
    {
        userName : "Mahsa",
        title : "Mahsa opinion",
        score : "100",
        text : "Mahsa says",
    },
    {
        userName : "Vahid",
        title : "Vahid opinion",
        score : "0",
        text : "Vahid says",
    },
    {
        userName : "Maryam",
        title : "Maryam opinion",
        score : "50",
        text : "Maryam says",
    }
];
Insta =[
    {
        userName : "Mahsa2",
        userId : "MahsaBazzaz",
    },
    {
        userName : "Vahid2",
        userId : "VaidBazzaz"
    },
    {
        userName : "Maryam2",
        userId : "MaryamOstadi"
    }
];

Tele =[
    {
        userName : "Mahsa",
        userId : "MahsaBazzaz1",
    },
    {
        userName : "Vahid",
        userId : "VaidBazzaz1"
    },
    {
        userName : "Maryam",
        userId : "MaryamOstadi1"
    }
];
///////////////////////////////////////////////////////////////////////
let whichTab = null;
let now = null;
let prev =null;
$(function () {
    $('.nav-tabs li:first-child a').tab('show')
});

$('.nav-tabs a').on('shown.bs.tab', function (event) {
    $("#searchString").val("");
    now = $(event.target).text();// active tab
    prev = $(event.relatedTarget);
    if (now === "خبرها") {
        whichTab = 0;
        $("#news").append(
            newsListGenerator(myItems))
    } else if (now === "تایید تحلیل ها") {
        whichTab = 1;
        $("#analysis").append(
            analysisListGenerator(Analysis)
        );
    } else if (now === "تایید اینستاگرام") {
        whichTab = 2;
        $("#instagram").append(
            instaTeleListGenerator(Insta)
        );
    } else if (now === "تایید تلگرام") {
        whichTab = 3;
        $("#telegram").append(
            instaTeleListGenerator(Tele)
        );
    }
});

function newsListGenerator(items) {
    let HTML = "<div class='list0 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        HTML += "<a class='list-group-item list-group-item-action'>";
        let tmp = items[i];
        HTML += "id:" + tmp.id +"<p></p>";
        HTML += "title:" + tmp.title +"<p></p>";
        HTML += "image:" + tmp.image+"<p></p>";
        HTML += "text:" + tmp.text+"<p></p>";
        HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value=\"ویرایش\">";
        HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value=\"حذف\">";
        HTML += "</a>";

        $("")
    }
    HTML += "</div>";
    return HTML;
}
function analysisListGenerator(items) {
    let HTML = "<div class='list1 list-group text-right'>";
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
    if(whichTab === 2)
        HTML = "<div class='list2 list-group text-right'>";
    else if(whichTab ===3)
        HTML = "<div class='list3 list-group text-right'>";
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
//id='listNewsItemNumber"+ i + "'
//SEARCH
$(document).ready(function(){
    $("#searchString").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        let where = ".list" + whichTab;
        $( where + " li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

$(".tab-content").on('click', 'div a', function () {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
});

$(".tab-content #news").on('click','div a input.btn-success',function () {
    $("#searchNav").addClass('d-none');
    $("#eddit").trigger('click');
});

$(".tab-content #news").on('click','div a input.btn-danger',function () {
    //todo
});

$("#cancel").on('click',function () {
    prev.trigger('click');
    $("#searchNav").removeClass('d-none');
});

$("#ok").on('click',function () {
    //todo
    prev.trigger('click');
    $("#searchNav").removeClass('d-none');
});
