// Page Specific JS Functions

    //Init three up carousel
    $(window).bind("load", function(){
        $('.three-up-carousel').css({'visibility': 'visible'});
        //Removes the random CQ "new * section" element which throws off slide index
        $('.three-up-carousel .new').remove();
    });

    if (document.documentElement.clientWidth >= 768) {
        $(function() {
            $('#horizontal').slider({
                slideWidth: 310,
                minSlides: 2,
                maxSlides: 3,
                slideMargin: 25
            });
        });
    }
    if (document.documentElement.clientWidth <= 767 && document.documentElement.clientWidth >= 670) {
        $(function() {
            $('#horizontal').slider({
                slideWidth: 310,
                minSlides: 1,
                maxSlides: 2,
                slideMargin: 25
            });
        });
    }
    if (document.documentElement.clientWidth < 670) {
        $(function() {
            $('#horizontal').slider({
                slideWidth: 310,
                minSlides: 1,
                maxSlides: 1,
                slideMargin: 0
            });
        });
    }

    $(function() {
        $('#vertical').slider({
            mode: 'vertical',
            auto: false,
            autoHover: true,
            slideWidth: 310,
            minSlides: 2,
            slideMargin: 10,
            pager: false
        });
    });

    $(function(){
        $('#modalToTop').click(function() {
          $('.modal-body').animate({'scrollTop' : 0},1000);
          return false;
      });
    });