myItems = [
    {
        id: 0,
        title: "zero news",
        image: "./assets/img/0.jpg",
        text: "text0"
    },
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
];
Analysis = [
    {
        userName: "Mahsa0",
        title: "Mahsa0 opinion",
        score: "100",
        text: "Mahsa0 says",
        accepted: null,
    },
    {
        userName: "Mahsa1",
        title: "Mahsa1 opinion",
        score: "10",
        text: "Mahsa1 says",
        accepted: null,
    },
    {
        userName: "Mahsa2",
        title: "Mahsa2 opinion",
        score: "30",
        text: "Mahsa2 says",
        accepted: null,
    },
];
Insta = [
    {
        userName: "vahid0",
        userId: "vahid0Bazzaz",
        accepted: null,
    },
    {
        userName: "vahid1",
        userId: "vahid1Bazzaz",
        accepted: null,
    },
    {
        userName: "vahid2",
        userId: "vahid2Bazzaz",
        accepted: null,
    },
];
Tele = [
    {
        userName: "Maryam0",
        userId: "Maryam0ostadi",
        accepted: null,
    },
    {
        userName: "Maryam1",
        userId: "Maryam1ostadi",
        accepted: null,
    },
    {
        userName: "Maryam2",
        userId: "Maryam2ostadi",
        accepted: null,
    },
];

///////////////////////////////////////////////////////////////////////
let whichTab = null;
let now = null;
let prev = null;
let theActiveElement = null;
//When we log in first we see the news
$(function () {
    $('.nav-tabs li:last-child a').tab('show');
    whichTab = 3;

});

$('.nav-tabs a').on('shown.bs.tab', function (event) {
    //when new tab opens search bar should be empty
    $("#searchString").val("");
    //when new tab opens none of the items should be selected
    $(".tab-content div div a").removeClass('active');

    now = $(event.target).text();// active tab
    prev = $(event.relatedTarget);//previous tab

    if (now === "News") {
        $("#searchNav").removeClass('d-none');
        whichTab = 3;
        $("#news div").html(
            newsListGenerator(myItems))
    } else if (now === "Analysis") {
        $("#searchNav").removeClass('d-none');
        whichTab = 2;
        $("#analysis div").html(
            analysisListGenerator(Analysis)
        );
    } else if (now === "Instagram") {
        $("#searchNav").removeClass('d-none');
        whichTab = 1;
        $("#instagram div").html(
            instaListGenerator(Insta)
        );
    } else if (now === "Telegram") {
        $("#searchNav").removeClass('d-none');
        whichTab = 0;
        $("#telegram div").html(
            teleListGenerator(Tele)
        );
    }
});

function newsListGenerator(items) {
    let HTML = "<div class='list3 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        let tmp = items[i];
        HTML += "<a id='i" + tmp.id + "' class='list-group-item list-group-item-action'>";
        HTML += "id:" + tmp.id + "<p></p>";
        HTML += "title:" + tmp.title + "<p></p>";
        HTML += "image:" + tmp.image + "<p></p>";
        HTML += "text:" + tmp.text + "<p></p>";
        HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value='Edit'>";
        HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value='Delete' data-toggle='modal' data-target=\"#myModal\" data-backdrop=\"static\">";
        HTML += "</a>";
    }
    HTML += "<div class=\"modal\" id=\"myModal\">" +
        "<div class=\"modal-dialog\">" +
        "<div class=\"modal-content\">" +
        "<div class=\"modal-body\">Dou you want to delete the item?</div>" +
        "<div class=\"modal-footer\">" +
        "<button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Cancel</button>" +
        "<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Ok</button></div></div></div></div>";
    HTML += "</div>";
    return HTML;
}

function analysisListGenerator(items) {
    let HTML = "<div class='list2 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        let tmp = items[i];
        if(tmp.accepted===null){
            HTML += "<a id='i" + tmp.userName + "' +  class='list-group-item list-group-item-action'>";
            HTML += "username:" + tmp.userName + "<p></p>";
            HTML += "title:" + tmp.title + "<p></p>";
            HTML += "score:" + tmp.score + "<p></p>";
            HTML += "text:" + tmp.text + "<p></p>";
            HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value=\"Approve\" data-toggle='modal' data-target=\"#rej-or-acc\" data-backdrop=\"static\">";
            HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value=\"Reject\" data-toggle='modal' data-target=\"#rej-or-acc\" data-backdrop=\"static\">";
            HTML += "</a>";
        }
    }
    HTML += "</div>";
    HTML += "<div class=\"modal\" id=\"rej-or-acc\">" +
        "<div class=\"modal-dialog\">" +
        "<div class=\"modal-content\">" +
        "<div class=\"modal-body\">Are you sure?</div>" +
        "<div class=\"modal-footer\">" +
        "<button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Cancel</button>" +
        "<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Ok</button></div></div></div></div>";
    HTML += "</div>";
    return HTML;
}

function instaListGenerator(items) {
    let HTML = null;
    HTML = "<div class='list1 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        let tmp = items[i];
        if(tmp.accepted === null){
            HTML += "<a id='i" + tmp.userName + "' + class='list-group-item list-group-item-action'>";
            HTML += "username:" + tmp.userName + "<p></p>";
            HTML += "user id:" + tmp.userId + "<p></p>";
            HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value=\"Approve\" data-toggle='modal' data-target=\"#rej-or-acc1\" data-backdrop=\"static\">";
            HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value=\"Reject\" data-toggle='modal' data-target=\"#rej-or-acc1\" data-backdrop=\"static\">";
            HTML += "</a>";
        }
    }
    HTML += "</div>";
    HTML += "<div class=\"modal\" id=\"rej-or-acc1\">" +
        "<div class=\"modal-dialog\">" +
        "<div class=\"modal-content\">" +
        "<div class=\"modal-body\">Are you sure?</div>" +
        "<div class=\"modal-footer\">" +
        "<button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Cancel</button>" +
        "<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Ok</button></div></div></div></div>";
    HTML += "</div>";
    return HTML;
}

function teleListGenerator(items) {
    let HTML = null;
    HTML = "<div class='list0 list-group text-right'>";
    for (let i = 0; i < items.length; i++) {
        let tmp = items[i];
        if(tmp.accepted===null){
            HTML += "<a id='i" + tmp.userName + "' + class='list-group-item list-group-item-action'>";
            HTML += "username:" + tmp.userName + "<p></p>";
            HTML += "user id:" + tmp.userId + "<p></p>";
            HTML += "<input type=\"button\" class=\"btn btn-success float-left\" value=\"Approve\" data-toggle='modal' data-target=\"#rej-or-acc2\" data-backdrop=\"static\">";
            HTML += "<input type=\"button\" class=\"btn btn-danger float-left\" value=\"Reject\" data-toggle='modal' data-target=\"#rej-or-acc2\" data-backdrop=\"static\">";
            HTML += "</a>";
        }
    }
    HTML += "</div>";
    HTML += "<div class=\"modal\" id=\"rej-or-acc2\">" +
        "<div class=\"modal-dialog\">" +
        "<div class=\"modal-content\">" +
        "<div class=\"modal-body\">Are you sure?</div>" +
        "<div class=\"modal-footer\">" +
        "<button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Cancel</button>" +
        "<button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Ok</button></div></div></div></div>";
    HTML += "</div>";
    return HTML;
}


//SEARCH
$(document).ready(function () {
    $("#searchString").on("keyup", function () {
        let value = $(this).val().toLowerCase();
        let where = ".list" + whichTab;
        $(where + " a").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

//find the active element
$(".tab-content").on('click', 'div a', function () {
    theActiveElement = this.id;
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
});
$(".tab-content #instagram").on('click', 'a', function () {
    theActiveElement = this.id;
});
$(".tab-content #analysis").on('click', 'a', function () {
    theActiveElement = this.id;
});
$(".tab-content #telegram").on('click', 'a', function () {
    theActiveElement = this.id;
});

//reject insta item
$(".tab-content #instagram").on('click', '.modal button.btn-danger', function () {
    let i = Insta.findIndex(value => value.userName === theActiveElement.split("i")[1]);
    Insta[i].accepted = false;
    $("#instagram div").html(instaListGenerator(Insta));
});
//accept insta item
$(".tab-content #instagram").on('click', '.modal button.btn-success', function () {
    let i = Insta.findIndex(value => value.userName === theActiveElement.split("i")[1]);
    Insta[i].accepted = true;
    $("#instagram div").html(instaListGenerator(Insta));

});
//reject analysis item
$(".tab-content #analysis").on('click', '.modal button.btn-danger', function () {
    let i = Analysis.findIndex(value => value.userName === theActiveElement.split("i")[1]);
    Analysis[i].accepted = false;
    $("#analysis div").html(analysisListGenerator(Analysis));
});
//accept analysis item
$(".tab-content #analysis").on('click', '.modal button.btn-success', function () {
    let i = Analysis.findIndex(value => value.userName === theActiveElement.split("i")[1]);
    Analysis[i].accepted=true;
    $("#analysis div").html(analysisListGenerator(Analysis));

});
//reject telegram item
$(".tab-content #telegram").on('click', '.modal button.btn-danger', function () {
    let i = Tele.findIndex(value => value.userName === theActiveElement.split("i")[1]);
    Tele[i].accepted = false;
    $("#telegram div").html(teleListGenerator(Tele));
});
//accept telegram item
$(".tab-content #telegram").on('click', '.modal button.btn-success', function () {
    let i = Tele.findIndex(value => value.userName === theActiveElement.split("i")[1]);
    Tele[i].accepted = true;
    $("#telegram div").html(teleListGenerator(Tele));

});

//Delete a news item
        $(".tab-content #news").on('click', '.modal button.btn-danger', function () {
            myItems.splice(theActiveElement.split("i").pop(), 1);
            $("#news div").html(newsListGenerator(myItems));
        });

        $(".cancel").on('click', function () {
            prev.trigger('click');
        });
//change news
        $(".tab-content #news div").on('click', 'a input.btn-success', function () {
            $(this).parent().trigger('click');
            let index = theActiveElement.toString();
            index = index.split("i")[1];
            let alan = myItems[index];
            if (alan !== null) {
                $("#id").val(alan.id);
                $("#title").val(alan.title);
                $("#image").val(alan.image);
                $("#news-text").val(alan.text);
                $("#searchNav").addClass('d-none');
                $("#eddit").trigger('click');
            }
            $("#cancel").on('click', function () {
                emptyEditFields();
            });
            $("#change").on('click', function () {
                if (alan !== null) {
                    alan.id = $("#id").val();
                    alan.title = $("#title").val();
                    alan.image = $("#image").val();
                    alan.text = $("#news-text").val();
                    $("#news div").html(newsListGenerator(myItems));
                    prev.trigger('click');
                    emptyEditFields();
                    alan = null;
                }
            })
        });
//add new news
        $("#addNewNews").on('click', function () {
            $("#neww").trigger('click');
            $("#searchNav").addClass('d-none');
            $("#change1").on('click', function () {
                let newOne = {
                    id: $("#id1").val(),
                    title: $("#title1").val(),
                    image: $("#image1").val(),
                    text: $("#news-text1").val(),
                };
                myItems[myItems.length] = newOne;
                console.log(myItems);
                $("#news div").html(newsListGenerator(myItems));
                prev.trigger('click');
                emptyFields();
            });
            $("#cancel1").on('click', function () {
                emptyFields();
            });
        });

        function emptyFields() {
            $("#id1").val("");
            $("#title1").val("");
            $("#image1").val("");
            $("#news-text1").val("");
        }

        function emptyEditFields() {
            $("#id").val("");
            $("#title").val("");
            $("#image").val("");
            $("#news-text").val("");
        }


