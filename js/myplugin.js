$(function()
{
$(".bar").click (function(){
$(".aside").fadeIn(500);
});
$(".exit").click (function(){
$(".aside").fadeOut(500);
});
$(window).scroll(function(){
    $(".aside").fadeOut(500);
});
$(".right-icon").on("click" ,function(){
var currentImg = $(".active");
var nextImg= currentImg.next();

if(nextImg.length)
{
    currentImg.removeClass("active").css("z-index" , -10);
    nextImg.addClass("active").css("z-index" ,99);
}
});

$(".left-icon").on("click" ,function(){
    var currentImg = $(".active");
    var prevImg= currentImg.prev();
    
    if(prevImg.length)
    {
        currentImg.removeClass("active").css("z-index" , -10);
        prevImg.addClass("active").css("z-index" ,99);
    }
    });
});
