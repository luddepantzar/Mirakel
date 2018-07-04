// jquery side menu controller
var keeper;
$(document).ready(function(){
	$('.nav-icon1').click(function(){
		$(this).toggleClass('open');
	});
});

$(".hamburgerBtn").click(function(){
    $(".sideMenuWrapper").toggle(200);
});



$(".sideMenuWrapper").click(function(e){
    if(e.pageX > $( window ).width() * 0.75){
        $('.nav-icon1').removeClass('open');
        $(".sideMenuWrapper").toggle(200);
    }
});