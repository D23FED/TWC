// Page Specific JS Functions

    //Init three up carousel
    $('.three-up-carousel').css({'visibility': 'visible'});
    //Removes the random CQ "new * section" element which throws off slide index
    $('.three-up-carousel .new').remove();
    
    if (document.documentElement.clientWidth >= 1100) {
        $(function() {
            $('.promo-slides').slider({
                slideWidth: 310,
                minSlides: 2,
                maxSlides: 3,
                slideMargin: 25
            });
        });
    }
    if (document.documentElement.clientWidth <= 1099 && document.documentElement.clientWidth >= 706) {
        $(function() {
            $('.promo-slides').slider({
                slideWidth: 310,
                minSlides: 1,
                maxSlides: 2,
                slideMargin: 25
            });
        });
    }
    if (document.documentElement.clientWidth <= 706) {
        $(function() {
            $('.promo-slides').slider({
                slideWidth: 310,
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 0
            });
        });
    }
