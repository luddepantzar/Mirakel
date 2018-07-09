// jquery side menu controller
$(document).ready(function () {
    $('.nav-icon1').click(function () {
        $(this).toggleClass('open');
    });
});

$(".hamburgerBtn").click(function () {
    $(".sideMenuWrapper").toggle(200);
    $('.container2').toggleClass('push');
    $('.menu-type').toggleClass('open');
    $('.columns').toggleClass('push');
});

$(".sideMenuWrapper").click(function (e) {
    if (e.pageX > $(window).width() * 0.75) {
        $('.nav-icon1').removeClass('open');
        $('.container2').toggleClass('remove');
        $(".sideMenuWrapper").toggle(200);
    }
});

$(document).ready(function() {
    /******************************
        BOTTOM SCROLL TOP BUTTON
     ******************************/
  
    // declare variable
    var scrollTop = $(".scrollTop");
  
    $(window).scroll(function() {
      // declare variable
      var topPos = $(this).scrollTop();
  
      // if user scrolls down - show scroll to top button
      if (topPos > 500) {
        $(scrollTop).css("opacity", "1");
  
      } else {
        $(scrollTop).css("opacity", "0");
      }
  
    }); // scroll END
  
    //Click event to scroll to top
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 800);
      return false;
  
    }); // click() scroll top EMD
  
    /*************************************
      LEFT MENU SMOOTH SCROLL ANIMATION
     *************************************/
    // declare variable
    var h1 = $("#ContertArea1").position();
  
    $('#continueButton').click(function() {
      $('html, body').animate({
        scrollTop: h1.top - 95
      }, 500);
      return false;
  
    });// left menu link2 click() scroll END
  
  }); // ready() END

