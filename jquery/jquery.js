$(function(){
    $("nav").load("nav.html", function(){
        $("nav a").mouseenter(function(){
            var name = $(this).html();
            $(".menu_name").text(name);
            $(".filter").css({"z-index":"7"});
            setTimeout(function(){
                $(".menu_name").css({"opacity":"1"});
                $(".filter").css({"opacity":"0.8"});
            }, 100);
        });

        $("nav a").mouseleave(function(){
            $(".menu_name").css({"opacity":"0"});
            setTimeout(function(){
               $(".menu_name").text("");
               $(".filter").css({"opacity":".5", "z-index":"5"});
           }, 50);
        });
    });
});
function loaded(){
    setTimeout(function(){
        setTimeout(function(){
            $(".logo").css({"opacity":"1"});
        }, 0);
        setTimeout(function(){
            if ($(window).width()<721) {
                $(".logo").css({"top":"0%"});
            } else {
                $(".logo").css({"top":"0vh"});
            }
        }, 200);
        setTimeout(function(){
            $(".load").css({"opacity":"0"});
        }, 400);
        setTimeout(function(){
            $(".load").css({"z-index":"-100"});
            $(".news").css({"opacity":"1"});
        },1000);
    }, 0);
}

$(".hamb").click(function(){
    $("nav").toggleClass("open_nav");
    $(".hamb").toggleClass("open_hamb");
    $("body").toggleClass("oh");
});

$(document).ready(function(){
    /*var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDay();
    if(day<10){
        day = "0"+day;
    }
    if(month<10){
        month = "0"+month;
    }*/
    //console.log(year+"-"+month+"-"+day);
    $('.inc img').each(function(){
        var iw = $(this).width();
        var ih = $(this).height();
        if(iw >= ih){
            $(this).css({"width":"90%", "height":"auto"});
        }else{
            $(this).css({"width":"50%", "height":"auto"});
        }
    });
});
