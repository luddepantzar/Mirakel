// jquery side menu controller
var keeper;
$(document).ready(function(){
	$('.nav-icon1').click(function(){
        $(this).toggleClass('open');
	});
});

$(".hamburgerBtn").click(function(){
    $(".sideMenuWrapper").toggle(200);
    $('.container2').toggleClass('push');
    $('.menu-type').toggleClass('open');
});

$(".sideMenuWrapper").click(function(e){
    if(e.pageX > $( window ).width() * 0.75){
        $('.nav-icon1').removeClass('open');
        $('.container2').toggleClass('remove');
        $(".sideMenuWrapper").toggle(200);
    }
});
