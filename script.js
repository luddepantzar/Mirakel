// jquery side menu controller
$(document).ready(function () {
    $('.nav-icon1').click(function () {
        $(this).toggleClass('open');
    });
});

$(".hamburgerBtn").click(function () {
    $(".sideMenuWrapper").toggle(200);
    $('.wrapper').toggleClass('push');
    $('.menu-type').toggleClass('open');
});

$(".wrapper").click(function () {
    $(".menu-type").removeClass("open");
    $(".nav-icon1").removeClass("open");
    $('.wrapper').removeClass('push');
});


$(".sideMenuWrapper").click(function (e) {
    if (e.pageX > $(window).width() * 0.75) {
        $('.nav-icon1').removeClass('open');
        $('.wrapper').toggleClass('remove');
        $(".sideMenuWrapper").toggle(200);
    }
});

$(document).ready(function () {


    // declare variable
    var scrollTop = $(".scrollTop");

    $(window).scroll(function () {
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
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;

    }); // click() scroll top EMD

    /*************************************
      LEFT MENU SMOOTH SCROLL ANIMATION
     *************************************/
    // declare variable
    var h1 = $("#ContertArea1").position();
    var h2 = $("#PriceHeading").position();
    var h3 = $(".headline").position();
    var h4 = $("#AboutusSection").position();
    var h5 = $("#FooterofFooter").position();

    $('#continueButton').click(function () {
        $('html, body').animate({
            scrollTop: h1.top - 95
        }, 1500);
        return false;

    });

    $('#PriceIconButton').click(function () {
        $('html,body').animate({
            scrollTop: h2.top - 20
        }, 1500);
        return false;
    });

    $('#BarberIconButton').click(function () {
        $('html,body').animate({
            scrollTop: h3.top
        }, 1500);
        return false;

    });

    $('#FindIconButton').click(function () {
        $('html,body').animate({
            scrollTop: h5.top
        }, 1500);
        return false;

    });

    $('#HomeButton').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1500);
        return false;

    });

    $('#AboutButton').click(function () {
        $('html,body').animate({
            scrollTop: h4.top
        }, 1500);
        return false;

    });

    $('#TeamButton').click(function () {
        $('html,body').animate({
            scrollTop: h3.top
        }, 1500);
        return false;

    });

    $('#ContactButton').click(function () {
        $('html,body').animate({
            scrollTop: h5.top
        }, 1500);
        return false;

    });

    // left menu link2 click() scroll END

}); // ready() END


// Custom map
function custom_map() {

    var var_location = new google.maps.LatLng(58.536851, 15.034569);

    var var_mapoptions = {
        center: var_location,
        zoom: 14,
        styles: [{
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                    "visibility": "simplified"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "on"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{
                        "color": "#5f94ff"
                    },
                    {
                        "lightness": 26
                    },
                    {
                        "gamma": 5.86
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [{
                        "weight": 0.6
                    },
                    {
                        "saturation": -85
                    },
                    {
                        "lightness": 61
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{
                        "hue": "#0066ff"
                    },
                    {
                        "saturation": 74
                    },
                    {
                        "lightness": 100
                    }
                ]
            }
        ]
    };

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Urban Hjärnes väg 9"
    });
}

// Initialize maps
google.maps.event.addDomListener(window, 'load', custom_map);


function scrollFooter(scrollY, heightFooter) {
    console.log(scrollY);
    console.log(heightFooter);

    if (scrollY >= heightFooter) {
        $('footer').css({
            'bottom': '0px'
        });
    } else {
        $('footer').css({
            'bottom': '-' + heightFooter + 'px'
        });
    }
}


function hover(element) {
    element.setAttribute('src', 'Images/Arrow\ up2.png');
}

function unhover(element) {
    element.setAttribute('src', 'Images/Arrow\ up.png');
}