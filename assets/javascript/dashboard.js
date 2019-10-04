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
$(function () {
    $('.nav-tabs li:first-child a').tab('show')
});
$('.nav-tabs a').on('shown.bs.tab', function (event) {
    $("#searchString").val("");
    let x = $(event.target).text();         // active tab
    if (x === "خبرها") {
        whichTab = 0;
        $("#news").html(
            newsListGenerator(myItems))
    } else if (x === "تایید تحلیل ها") {
        whichTab = 1;
        $("#analysis").html(
            analysisListGenerator(Analysis)
        );
    } else if (x === "تایید اینستاگرام") {
        whichTab = 2;
        $("#instagram ul").html(
            instaTeleListGenerator(Insta)
        );
    } else if (x === "تایید تلگرام") {
        whichTab = 3;
        $("#telegram ul").html(
            instaTeleeleListGenerator(Tele)
        );
    }
});

function newsListGenerator(items) {
    let HTML = "<ul class='list0 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        HTML += "<li class='list-group-item'>";
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
    return HTML;
}
function analysisListGenerator(items) {
    let HTML = "<ul class='list1 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        HTML += "<li class='list-group-item'>";
        let tmp = items[i];
        HTML += "username:" + tmp.userName +"<p></p>";
        HTML += "title:" + tmp.title +"<p></p>";
        HTML += "score:" + tmp.score+"<p></p>";
        HTML += "text:" + tmp.text+"<p></p>";
        HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value=\"تایید\">";
        HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value=\"رد\">";
        HTML += "</li>";

        $("")
    }
    HTML += "</ul>";
    return HTML;
}

function instaTeleListGenerator(items) {
    let HTML = null;
    if(whichTab === 2)
        HTML = "<ul class='list2 list-group text-right'>";
    else if(whichTab ===3)
        HTML = "<ul class='list3 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        HTML += "<li class='list-group-item'>";
        let tmp = items[i];
        HTML += "username:" + tmp.userName +"<p></p>";
        HTML += "user id:" + tmp.userId+"<p></p>";
        HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value=\"تایید\">";
        HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value=\"رد\">";
        HTML += "</li>";

        $("")
    }
    HTML += "</ul>";
    return HTML;
}
//id='listNewsItemNumber"+ i + "'

$(document).ready(function(){
    $("#searchString").on("keyup", function() {
        let value = $(this).val().toLowerCase();
        let where = ".list" + whichTab;
        $( where + " li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

