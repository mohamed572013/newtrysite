function footerAlign() {
    jQuery(".site-footer").css("display", "block"), jQuery(".site-footer").css("height", "auto");
    var a = jQuery(".site-footer").outerHeight();
    jQuery(".footer-fixed > .page-wraper").css("padding-bottom", a), jQuery(".site-footer").css("height", a)
}
jQuery(document).ready(function() {
        "use strict";

        function a(a) {
            jQuery(a.target).prev(".panel-heading").find("i.indicator").toggleClass("glyphicon-minus glyphicon-plus")
        }
        jQuery("#quik-search-btn").on("click", function() {
            jQuery(".dez-quik-search").animate({
                width: "100%"
            }), jQuery(".dez-quik-search").delay(500).css({
                left: "0"
            })
        }), jQuery("#quik-search-remove").on("click", function() {
            jQuery(".dez-quik-search").animate({
                width: "0%",
                right: "0"
            }), jQuery(".dez-quik-search").css({
                left: "auto"
            })
        }), jQuery(".tp-bgimg").after("<div class='overlay-row'></div>"), jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'), jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>'), jQuery("#image-gallery-mix").length && (jQuery(".gallery-filter").find("li").each(function() {
            $(this).addClass("filter")
        }), jQuery("#image-gallery-mix").mixItUp()), jQuery(".gallery-filter.masonary").length && jQuery(".gallery-filter.masonary span").on("click", function() {
            var a = $(this).parent().attr("data-filter");
            return jQuery(".gallery-filter.masonary span").parent().removeClass("active"), jQuery(this).parent().addClass("active"), jQuery("#image-gallery-isotope").isotope({
                filter: a
            }), !1
        }),jQuery(window).on("scroll", function() {
            var a = jQuery(".sticky-header");
            $(window).scrollTop() > a.offset().top ? a.addClass("is-fixed") : a.removeClass("is-fixed")
        }), jQuery("button.scroltop").on("click", function() {
            return jQuery("html, body").animate({
                scrollTop: 0
            }, 1e3), !1
        }), jQuery(window).on("scroll", function() {
            var a = jQuery(window).scrollTop();
            a > 900 ? jQuery("button.scroltop").fadeIn(1e3) : jQuery("button.scroltop").fadeOut(1e3)
        }), jQuery(document).on("change", ".btn-file :file", function() {
            var a = jQuery(this),
                b = a.get(0).files ? a.get(0).files.length : 1,
                c = a.val().replace(/\\/g, "/").replace(/.*\//, "");
            a.trigger("fileselect", [b, c])
        })
    }),
    function(a) {
        jQuery.support.placeholder = "placeholder" in document.createElement("input")
    }(jQuery), jQuery(function() {
        jQuery.support.placeholder || (jQuery("[placeholder]").focus(function() {
            jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("")
        }).blur(function() {
            "" == jQuery(this).val() && jQuery(this).val(jQuery(this).attr("placeholder"))
        }).blur(), jQuery("[placeholder]").parents("form").submit(function() {
            jQuery(this).find("[placeholder]").each(function() {
                jQuery(this).val() == jQuery(this).attr("placeholder") && jQuery(this).val("")
            })
        }))
    }), equalheight = function(a) {
        var e, b = 0,
            c = 0,
            d = new Array;
        $(a).each(function() {
            if (e = $(this), $(e).height("auto"), topPostion = e.position().top, c != topPostion) {
                for (currentDiv = 0; currentDiv < d.length; currentDiv++) d[currentDiv].height(b);
                d.length = 0, c = topPostion, b = e.height(), d.push(e)
            } else d.push(e), b = b < e.height() ? e.height() : b;
            for (currentDiv = 0; currentDiv < d.length; currentDiv++) d[currentDiv].height(b)
        })
    }, jQuery(window).on('load',function() {
        equalheight(".equal-wraper .equal-col")
    }), jQuery(window).resize(function() {
        equalheight(".equal-wraper .equal-col")
    }), jQuery(document).ready(function() {
        footerAlign()
    }), jQuery(window).resize(function() {
        footerAlign()
});
/**************************************************************************/
$(document).ready(function() {
    var tpj=jQuery;
    var revapi1014;
    tpj(document).ready(function() {
        if(tpj("#rev_slider_1014_1").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_1014_1");
        }else{
            revapi1014 = tpj("#rev_slider_1014_1").show().revolution({
                sliderType:"standard",
                jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
                dottedOverlay:"none",
                delay:9000,
                startwidth:1200,
                startheight:750,
                hideThumbs:600,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    }
                    ,
                    arrows: {
                            style: "hermes",
                            enable: true,
                            hide_onmobile: false,
                            hide_onleave: false,
                            tmp: '<div class="tp-arr-allwrapper">   <div class="tp-arr-imgholder"></div>    <div class="tp-arr-titleholder">{{title}}</div> </div>',
                            left: {
                                h_align: "left",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            },
                            right: {
                                h_align: "right",
                                v_align: "center",
                                h_offset: 0,
                                v_offset: 0
                            }
                        }
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],

                lazyType:"none",
                shadow:0,
                spinner:"off",
                stopLoop:"on",
                stopAfterLoops:0,
                stopAtSlide:1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "60px",
                disableProgressBar:"on",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }


    }); /*ready*/
    /* --------------------------------------------------------
                    fancybox
    ----------------------------------------------------------- */
       $('.mask a').fancybox({
            width: 900,
            height: 900,
            type: 'iframe'
        });
    /* --------------------------------------------------------
                    owlCarousel agents
    ----------------------------------------------------------- */

        $('.client-logo-carousel ', ).owlCarousel({
        // loop:true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 20,
        nav: true,
        rewind: true,
        smartSpeed: 1200,
        autoplayTimeout: 3000,
        dots:false,
        responsive: {
            0: {
                items: 1
            },
            480:{
                items:1
            },
            600: {
                items: 2
            },
            1000: {
                items: 6
            }
        }
    });
    /* --------------------------------------------------------
                    owlCarousel clients
    ----------------------------------------------------------- */
    $('.clients-carousel').owlCarousel({
    loop: true,
    /*rtl: true,*/
    responsive: {
      0: {
        items: 1
      },
      320: {
        items: 1
      },
      480: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 5
      }
    },
    margin: 15,
    nav:false,
    navText: [],
    dots: true,
    autoplay: true,
  });

});