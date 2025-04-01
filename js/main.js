//menu欄位的tab切換並滑動到指定位置
function switchTabAndScroll(tabID, subTabID) {
    $('.content').removeClass('active');  
    $('#' + tabID).addClass('active');  
    $('.menu_pc li').removeClass('active');
    $('.menu_pc li[data-target="' + tabID + '"]').addClass('active');

    $('html, body').animate({
        scrollTop: $('#' + tabID + ' #' + subTabID).offset().top
    });
}

// menu_s2~menu_s5的點擊事件
$(".menu_page02").on('click', function() {
    switchTabAndScroll('tab1', 'tab_s2');
});

$(".menu_page03").on('click', function() {
    switchTabAndScroll('tab1', 'tab_s3');
});

$(".menu_page04").on('click', function() {
    switchTabAndScroll('tab2', 'tab_s4');
});

$(".menu_page05").on('click', function() {
    switchTabAndScroll('tab2', 'tab_s5');
});



//主視覺tab切換
$(document).ready(function() {
    $('.tabbutton li').on('click', function() {        
        var targetID = $(this).data('target');  
        $('.content').removeClass('active');  
        $('#' + targetID).addClass('active');  
        $('.tabbutton li').removeClass('active');
        $(this).addClass('active');

        // 滑動到指定位置
        if (targetID === 'tab1') {
            $('html, body').animate({
                scrollTop: $('#tab_s2').offset().top
            }, 500);
        } else if (targetID === 'tab2') {
            $('html, body').animate({
                scrollTop: $('#tab_s4').offset().top
            }, 500);
        }
        
    });
});


//跳窗
$(document).on('click', '.Popupbtn', function() {
    var targetID = $(this).data("activity");
    $("#" + targetID).fadeIn(200);
    $("html").css("overflow", "hidden");
});

$(document).on('click', '.popup_close', function() {
    $(".mask").fadeOut(200);
    $("html").css("overflow", "scroll");
});

//超過600px，顯示menu
$(document).ready(function() {
    var targetDiv = $('.menu_area');
    var showPosition = 600; 

    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();

        if (scrollPosition > showPosition) {
            targetDiv.fadeIn();
        } else {
            targetDiv.fadeOut();
        }
    });
});


//點擊後滑到最上方
$(".jq-goTop").click(function (e) {
    e.preventDefault();
    $("html,body").animate(
    {
        scrollTop: 0,
    },
        600
    );
});

//swiper輪播
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

autoScroll();
function autoScroll() {
    var _url = $(location).attr("href").split("?");
    if (_url[1]) {
        if (_url[1] == "page02") {
        setTimeout(() => {
            $(".menu_page02").click();
            $(".menu_page02").on("click", function () {});
        }, 100);
        } else if (_url[1] == "page03") {
        setTimeout(() => {
            $(".menu_page03").click();
            $(".menu_page03").on("click", function () {});
        }, 100);
        } else if (_url[1] == "page04") {
        setTimeout(() => {
            $(".menu_page04").click();
            $(".menu_page04").on("click", function () {});
        }, 100);
        } else if (_url[1] == "page05") {
        setTimeout(() => {
            $(".menu_page05").click();
            $(".menu_page05").on("click", function () {});
        }, 200);
        } 
    }
}




