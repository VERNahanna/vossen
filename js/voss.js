$(document).ready(function() {
    /*** intialize AOS Library for scroll animation ***/
        AOS.init({
            duration: 1000,
        });
    /********* init nice-scroll.js *********/
    
        $(function() {
              $("body").niceScroll({
                scrollspeed: 80,
                cursorcolor:"rgb(238, 51, 109)"
              });
          });
    /*** navbar effects with scroll in all screens ***/
        var header = $(".navbar");
        var winWidth = 0;
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            winWidth = $(window).width();
    
            if (scroll >= 40) {
                header.addClass("scrolled");
                $(".nav-link").css("color","#2b2b2b");
                $("#white-logo-icon").css('display','none');
                $("#move-logo-icon").css('display','inline-block');
            } else {
                if (winWidth > 992)
                {
                    header.removeClass("scrolled");
                    $("#move-logo-icon").css('display','none');
                    $("#white-logo-icon").css('display','inline-block');
                    $(".nav-link").css("color","#ffffff");
                }
            }
        });
    
        $(window).on('resize', function(){
            winWidth = $(window).width();
            if (winWidth <= 992) {
                header.addClass("scrolled");
                $(".nav-link").css("color","#2b2b2b");
                $("#white-logo-icon").css('display','none');
                $("#move-logo-icon").css('display','inline-block');
            } else {
                header.removeClass("scrolled");
                $("#move-logo-icon").css('display','none');
                $("#white-logo-icon").css('display','inline-block');
                $(".nav-link").css("color","#ffffff");
            }
        });
    });
    //our crew
    $(document).ready(function() {
        $("#news-slider").owlCarousel({
            items : 3,
            itemsDesktop:[1199,3],
            itemsDesktopSmall:[980,2],
            itemsMobile : [600,1],
            navigation:true,
            navigationText:["",""],
            pagination:true,
            autoPlay:true
        });
    });
    //counter
    $(document).ready(function(){
        $('.counter-value').each(function(){
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            },{
                duration: 3500,
                easing: 'swing',
                step: function (now){
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
    /*animated prgress
    $('.progress .progress-bar span').each(function() {

        $(this).animate({ 

                width : $(this).attr('progress-bar-tooltip')
        },1000);

    });*/
    $(document).ready(function(){
        $("#testimonial-slider").owlCarousel({
            items:1,
            itemsDesktop:[1000,1],
            itemsDesktopSmall:[979,1],
            itemsTablet:[768,1],
            pagination:true,
            navigation:false,
            navigationText:["",""],
            slideSpeed:1000,
            singleItem:true,
            autoPlay:true
        });
    });
  
      