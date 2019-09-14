$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1,

            },
            576:{
                items:1,
            },
            768:{
                items:1,
            },
            992:{
               items:3,
            },
            1200:{
                items:3,
            }
        }
    });
});
