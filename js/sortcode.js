function init_map() {
    var a= {
        zoom:10,
        center:new google.maps.LatLng(51.5073509, -.12775829999998223),
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        styles:[ {
            featureType:"all",
            elementType:"labels.text.fill",
            stylers:[ {
                saturation: 36
            }
            ,
            {
                color: "#000000"
            }
            ,
            {
                lightness: 40
            }
            ]
        }
        ,
        {
            featureType:"all",
            elementType:"labels.text.stroke",
            stylers:[ {
                visibility: "on"
            }
            ,
            {
                color: "#000000"
            }
            ,
            {
                lightness: 16
            }
            ]
        }
        ,
        {
            featureType:"all",
            elementType:"labels.icon",
            stylers:[ {
                visibility: "off"
            }
            ]
        }
        ,
        {
            featureType:"administrative",
            elementType:"geometry.fill",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 20
            }
            ]
        }
        ,
        {
            featureType:"administrative",
            elementType:"geometry.stroke",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 17
            }
            ,
            {
                weight: 1.2
            }
            ]
        }
        ,
        {
            featureType:"landscape",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 20
            }
            ]
        }
        ,
        {
            featureType:"poi",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 21
            }
            ]
        }
        ,
        {
            featureType:"road.highway",
            elementType:"geometry.fill",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 17
            }
            ]
        }
        ,
        {
            featureType:"road.highway",
            elementType:"geometry.stroke",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 29
            }
            ,
            {
                weight: .2
            }
            ]
        }
        ,
        {
            featureType:"road.arterial",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 18
            }
            ]
        }
        ,
        {
            featureType:"road.local",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 16
            }
            ]
        }
        ,
        {
            featureType:"transit",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 19
            }
            ]
        }
        ,
        {
            featureType:"water",
            elementType:"geometry",
            stylers:[ {
                color: "#000000"
            }
            ,
            {
                lightness: 17
            }
            ]
        }
        ]
    }
    ;
    map=new google.maps.Map(document.getElementById("gmap_canvas"), a),
    marker=new google.maps.Marker( {
        map: map, position: new google.maps.LatLng(51.5073509, -.12775829999998223)
    }
    ),
    infowindow=new google.maps.InfoWindow( {
        content: "<strong>Title</strong><br>London, United Kingdom<br>"
    }
    ),
    google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map, marker)
    }
    )
}

jQuery(document).ready(function() {
    "use strict";
    jQuery(".img-carousel").owlCarousel( {
        loop:!0, margin:30, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 767: {
                items: 3
            }
            , 1e3: {
                items: 4
            }
        }
    }
    ), jQuery(".img-carousel-content").owlCarousel( {
        loop:!0, margin:30, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 767: {
                items: 3
            }
            , 1e3: {
                items: 4
            }
        }
    }
    ), jQuery(".portfolio-carousel").owlCarousel( {
        loop:!0, margin:30, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 767: {
                items: 3
            }
            , 1e3: {
                items: 4
            }
        }
    }
    ), jQuery(".portfolio-carousel-nogap").owlCarousel( {
        loop:!0, margin:0, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 767: {
                items: 3
            }
            , 1e3: {
                items: 4
            }
        }
    }
    ), jQuery(".blog-carousel").owlCarousel( {
        loop:!0, margin:30, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 767: {
                items: 3
            }
            , 1e3: {
                items: 3
            }
        }
    }
    ), jQuery(".event-carousel").owlCarousel( {
        loop:!0, margin:30, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 767: {
                items: 3
            }
            , 1e3: {
                items: 3
            }
        }
    }
    ), jQuery(".client-logo-carousel").owlCarousel( {
        loop:!0, margin:30, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 2
            }
            , 480: {
                items: 2
            }
            , 767: {
                items: 3
            }
            , 1e3: {
                items: 5
            }
        }
    }
    ), jQuery(".owl-fade-one").owlCarousel( {
        loop: !0, autoplay: !0, autoplayTimeout: 2e3, margin: 30, nav: !0, navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], items: 1, dots: !1, animateOut: "fadeOut"
    }
    ), jQuery(".testimonial-one").owlCarousel( {
        loop:!0, margin:30, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 767: {
                items: 3
            }
            , 1e3: {
                items: 1
            }
        }
    }
    ), jQuery(".testimonial-two").owlCarousel( {
        loop:!0, margin:30, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 767: {
                items: 3
            }
            , 1e3: {
                items: 3
            }
        }
    }
    ), jQuery(".testimonial-three").owlCarousel( {
        loop:!0, margin:30, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 1
            }
            , 480: {
                items: 2
            }
            , 767: {
                items: 3
            }
            , 1e3: {
                items: 3
            }
        }
    }
    ), jQuery(".testimonial-four").owlCarousel( {
        loop:!0, margin:80, nav:!0, dots:!1, navText:['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'], responsive: {
            0: {
                items: 1
            }
            , 991: {
                items: 2
            }
        }
    }
    ), jQuery(".counter").counterUp( {
        delay: 10, time: 1e3
    }
    )
}

),
google.maps.event.addDomListener(window, "load", init_map);