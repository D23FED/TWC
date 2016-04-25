// Page Specific JS Functions

    //Init three up carousel
    $(window).bind("load", function(){
        $('.three-up-carousel').css({'visibility': 'visible'});
        //Removes the random CQ "new * section" element which throws off slide index
        $('.three-up-carousel .new').remove();
    });

    if (document.documentElement.clientWidth >= 768) {
        $(function() {
            $('.promo-slides').slider({
                slideWidth: 310,
                minSlides: 2,
                maxSlides: 3,
                slideMargin: 25
            });
        });
    }
    if (document.documentElement.clientWidth <= 767 && document.documentElement.clientWidth >= 670) {
        $(function() {
            $('.promo-slides').slider({
                slideWidth: 310,
                minSlides: 1,
                maxSlides: 2,
                slideMargin: 25
            });
        });
    }
    if (document.documentElement.clientWidth < 670) {
        $(function() {
            $('.promo-slides').slider({
                slideWidth: 310,
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 0
            });
        });
    }
