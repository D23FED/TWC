/*
* Hero Infinite Slider with controls and autoscroll
*/
if (document.documentElement) {
    var middleBreakPoint = 768,
        smallBreakPoint = 640,
        heroStop = false,
        $heroElements = $('.heroWrapper, .carouselIcons'),
        heroTotalElements = $('.carouselIcons').length,
        heroTimer,
        heroStart = false;
    $(function() {
        if ( window.addEventListener ) {
            window.addEventListener( "load", doLoad, false );
        } else if ( window.attachEvent ) {
            window.attachEvent( "onload", doLoad );
        } else if ( window.onLoad ) {
            window.onload = doLoad;
        }
        /*$(window).on("load", function(){
            console.log('=====J0=====');
            doLoad();
        });*/
        $(window).resize(function() {
            heroHeight();
            iconSize();
        });
        $("[id^='heroCarouselIcon-']").click(function(e) {
            sliderCarousel(this);
        });
        $('.heroCarousel #heroCarouselPreview').click(function(){carouselControl('prev')});
        $('.heroCarousel #heroCarouselNext').click(function(){carouselControl('next')});

        //swipe version for mobile
        $('.heroIconWrapper').on('swipeleft', function(e) {
            carouselControl('next');
        }).on('swiperight', function(e) {
            carouselControl('prev');
        });
        function doLoad() {
            $(".heroCarousel").show();            
            heroHeight();
            iconSize();
            // Stop trigger on hover
            $heroElements.hover(function(ev) {
                clearInterval(heroTimer);
            }, function(ev) {
                if (heroStop === false && heroStart === true) {
                    clearInterval(heroTimer);
                    heroTimer = setInterval(triggerCarousel, heroSliderConfig.carouselSpeed);
                }
            });
            // Stop trigger on click
            $heroElements.click(function(ev) {
                if (ev.originalEvent !== undefined) {
                    clearInterval(heroTimer);
                    heroStop = true;
                }
            });
            // Stop trigger until carousel is on focus
            $(window).scroll(function() {
                var heroPosition = $('.heroCarousel').position().top,
                    scroll = $(window).scrollTop();
                if (parseInt(scroll) + 150 >= heroPosition && heroStart === false) {
                   clearInterval(heroTimer);
                   heroTimer = setInterval(triggerCarousel, heroSliderConfig.carouselSpeed);
                   heroStart = true;
                }
            });            
        };
        function sliderCarousel(element) {
            var iconNumber = $(element).attr('id').match(/\d+/),
                iconActive = parseInt(iconNumber[0]) || 1;
            clearInterval(heroTimer);
            heroTimer = setInterval(triggerCarousel, heroSliderConfig.carouselSpeed);

            $("[id^='heroCarouselIcon-']").removeClass("active");
            $('#heroCarouselIcon-' + iconActive).addClass("active");
            $("[id^='heroCarousel-']").removeClass("active");
            $("#heroCarousel-" + iconActive).addClass("active");
        };
        function infiniteCarousel(cero) {
            var $elements = $('.carouselIcons').not('.clone'),
                elementsTotal = $($elements).length,
                elementsRotation = Math.ceil(elementsTotal / heroSliderConfig.iconSlideNumber),
                elementsPrev,
                elementNext;
            if($('.heroIcons .clone').length == 0 && heroTotalElements > heroSliderConfig.iconSlideNumber) {
                for (i=0; i < elementsRotation; i++) {
                    var $elements_block = $($elements).slice(i * heroSliderConfig.iconSlideNumber, (heroSliderConfig.iconSlideNumber * (i + 1)));
                    if ($($elements_block).length < heroSliderConfig.iconSlideNumber) {
                        var blanks = heroSliderConfig.iconSlideNumber - $($elements_block).length,
                            empty_element = '<div class="carouselIcons"></div>';
                        for (w=0; w < blanks; w++) {
                            $(empty_element).appendTo('.iconWrapper').addClass('empty');
                        }
                    }
                }
                elementsPrev = $('.carouselIcons').not('.clone').slice(0,heroSliderConfig.iconSlideNumber),
                elementNext = $('.carouselIcons').not('.clone').slice(elementsTotal - heroSliderConfig.iconSlideNumber ,elementsTotal);
                elementsPrev.clone().appendTo('.iconWrapper').addClass('clone').removeAttr('id').removeClass('active');
                elementNext.clone().prependTo('.iconWrapper').addClass('clone').removeAttr('id').removeClass('active');
                $('.iconWrapper').css({
                    transition: 'none',
                    left: '-' + cero +'px'
                });
            }
        };
       function iconSize() {
            var iconWidth = $('div.heroIcons').width(),
                $iconActive = $(".carouselIcons.active").attr('id'),
                iconNumber = $iconActive.match(/\d+/);
            if (heroTotalElements <= heroSliderConfig.iconSlideNumber) {
                $('.heroCarousel #heroCarouselPreview, .heroCarousel #heroCarouselNext').css('display', 'none');
            }
            if ($(window).width() <= smallBreakPoint) {
                infiniteCarousel(iconWidth);
                $('div.carouselIcons').css('width', Math.floor(iconWidth / heroSliderConfig.iconSlideNumber) + 'px');
                $('.heroCarousel #heroCarouselPreview').css('left','3px');
                $('.heroCarousel #heroCarouselNext').css('right', '3px');
                if (heroTotalElements > heroSliderConfig.iconSlideNumber) {
                    if (iconNumber <= heroSliderConfig.iconSlideNumber) {
                        $('.iconWrapper').css({
                            transition: 'none',
                            left: '-' + iconWidth +'px'
                        });
                    } else {
                        $('.iconWrapper').css({
                            transition: 'none',
                            left: '-' + iconWidth * 2 +'px'
                        });
                    }
                }
            } else {
                $('div.carouselIcons').css('width', '');
                $('.heroIcons .clone').remove();
            }
        };
        function heroHeight() {
            var $heroSlides = $(".heroCarouselSlide"),
                maxHeight = 0;
                $($heroSlides).each(function (){
                    var slideHeight = $(this).find('div').first().outerHeight( true ) + $(this).find('img').outerHeight( true );
                    if (slideHeight > maxHeight) {
                        maxHeight = slideHeight;
                    }
                });
            $(".heroWrapper").removeAttr('style');
            $(".heroWrapper").css('height', parseInt(maxHeight) + 'px');
        };
        function triggerCarousel() {
            var iconNumber,
                conActive,
                maxTriggering = $('.carouselIcons').not('.clone, .empty').length,
                iconWidth = $('div.heroIcons').width();
            $iconActive = $(".carouselIcons.active").attr('id');
            iconNumber = $iconActive.match(/\d+/);
            iconActive = parseInt(iconNumber[0]);
            if (iconActive >= maxTriggering) {
                iconActive = 0;
            }
            sliderCarousel($('#heroCarouselIcon-' + (iconActive + 1)).not('clone'));
             if ($(window).width() <= smallBreakPoint) {
                if (iconActive == heroSliderConfig.iconSlideNumber) {
                    $('.iconWrapper').css({
                        transition: heroSliderConfig.iconTransition,
                        left: '-' + iconWidth * 2 +'px'
                    });
                }
                if (iconActive == 0) {
                    $('.iconWrapper').css({
                        transition: heroSliderConfig.iconTransition,
                        left: '-' + iconWidth * 3 +'px'
                    });
                    var detectChange = setInterval(function() {
                        if ($('.iconWrapper').css('left') == '-' + iconWidth * 3 +'px') {
                            $('.iconWrapper').css({
                                transition: 'none',
                                'left':'-' + iconWidth +'px'
                            });
                            clearInterval(detectChange);
                        }
                    }, 10);
                }
            }
        };
        function carouselControl(mode) {
            var next,
                iconNumber,
                active,
                iconWidth = $('div.heroIcons').width();
            $iconActive = $(".carouselIcons.active").attr('id');
            iconNumber = $iconActive.match(/\d+/);
            active = parseInt(iconNumber[0]);
            clearInterval(heroTimer);
            heroTimer= setInterval(triggerCarousel, heroSliderConfig.carouselSpeed);
            if (active <= heroSliderConfig.iconSlideNumber) {
                next = heroSliderConfig.iconSlideNumber + 1;
                if (mode === 'next') {
                    $('.iconWrapper').css({
                        transition: heroSliderConfig.iconTransition,
                        'left':'-' + iconWidth * 2 +'px'
                    });
                } else {
                    $('.iconWrapper').css({
                        transition: heroSliderConfig.iconTransition,
                        'left':'0px'
                    });
                    var detectChange = setInterval(function() {
                        if ($('.iconWrapper').css('left') == '0px') {
                            $('.iconWrapper').css({
                                transition: 'none',
                                'left':'-' + iconWidth * 2 +'px'
                            });
                            clearInterval(detectChange);
                        }
                    }, 10);
                }
            } else {
                next = 1;
                if (mode === 'next') {
                    $('.iconWrapper').css({
                        transition: heroSliderConfig.iconTransition,
                        'left':'-' + iconWidth * 3 +'px'
                    });
                    var detectChange = setInterval(function() {
                        if ($('.iconWrapper').css('left') == '-' + iconWidth * 3 +'px') {
                            $('.iconWrapper').css({
                                transition: 'none',
                                'left':'-' + iconWidth +'px'
                            });
                            clearInterval(detectChange);
                        }
                    }, 10);
                } else {
                    $('.iconWrapper').css({
                        transition: heroSliderConfig.iconTransition,
                        'left':'-' + iconWidth +'px'
                    });
                }
            }
            sliderCarousel($('#heroCarouselIcon-' + next).not('clone'));
        };
    });
}
