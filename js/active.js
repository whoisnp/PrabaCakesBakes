(function($) {
    "use strict";

    /*----------------------------
    START - Method for assign croissent_js controls
    ------------------------------ */
    function croissent_js() {
        var windowH = $(window).height(),
            navbarH = $('.navarea').height(),
            bannerH = (windowH - navbarH),
            hrsubsection = $('.home-subsection').height(),
            slickvr = ((bannerH - hrsubsection) / 2);

        $('.home-area, .home-single-slider img').css('height', bannerH);
        $('.home-image-slider .slick-arrow').css({
            top: slickvr,
            bottom: slickvr
        });
    }
    // initiate croissent_js
    croissent_js();

    // call croissent_js method & init preloader when window load
    $(window).on('load', function() {
        croissent_js();
        $('#preloader').fadeOut('slow', function() {
            $(this).remove();
        });
    });

    // call croissent_js method when window resize
    $(window).on('resize', function() {
        croissent_js();
    });

    /*----------------------------
    START - One page MENU scrolling JS activation
    ------------------------------ */
    $('.menu').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });

    /*----------------------------
    START - Slider activation
    ------------------------------ */
    // Header background slider activation
    $('.home-image-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        autoplay: true,
        prevArrow: '<button type="button" class="slick-prev fa fa-long-arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next fa fa-long-arrow-right"></button>',
    });


    $('.baked-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: false,
        autoplay: false,
        item: 1
    });
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: false,
        autoplay: true,
        item: 1,
        fade: true
    });

    $('.bakers-slider').slick({
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToscroll: 1,
        prevArrow: '<button type="button" class="bakers-left-arrow slick-prev fa fa-long-arrow-left"></button>',
        nextArrow: '<button type="button" class="bakers-right-arrow slick-next fa fa-long-arrow-right"></button>',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                }
            }, {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.popular-item-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 680,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]


    });

    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function(a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });

    $('#demo-wrapper ul li').on('click', function() {
        var path = $(this).data('path');
        $('#color-switcher').attr('href', path);
    });
    // Sticky Menu
    $(".navbar-area").sticky({ topSpacing: 0 });


    /*----------------------------
    START - WOW JS activation
    ------------------------------ */
    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    // initiate wow
    wow.init();

    /*----------------------------
    START - jQuery Tubular activation
    ------------------------------ */
    if ($.fn.YTPlayer) {
        if (!device.tablet() && !device.mobile()) {
            $('#homearea').addClass(
                'big-background-default-image');
            $(".tubular").YTPlayer();
        } else {
            //jQuery will add the default background to the preferred class 
            $('#homearea').addClass(
                'big-background-default-image');
        }
    }

    /*----------------------------
    START - Scroll to Top activation
    ------------------------------ */
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });

    $(document).on('click', '#return-to-top', function() { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });


    /* =================================
    ===  CONTACT FORM          ====
    =================================== */
    $("#contact-form").on('submit', function(e) {
        e.preventDefault();
        var name = $("#name").val() + " (" + $("#phone_number").val() + ")";
        var email = $("#email_address").val();
        var subject = $("#contact_reason").val();
        var message = $("#message").val();
        var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

        function isValidEmail(emailAddress) {
            var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
            return pattern.test(emailAddress);
        };

        if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
            $.ajax({
                type: "POST",
                url: "php/sendmail.php",
                data: dataString,
                success: function() {
                    $('.success').fadeIn(1000);
                    $('.error').fadeOut(500);
                }
            });
        } else {
            $('.error').fadeIn(1000);
            $('.success').fadeOut(500);
        }

        return false;
    });

})(jQuery);