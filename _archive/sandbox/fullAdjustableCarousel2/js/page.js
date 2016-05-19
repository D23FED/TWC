/* verticalCarousel Class*/
var verticalCarousel = {
    create: function (wrapper, options) {
        var containerSlides,
            containerPager;
        Herotimer = null;
        BrowserType = this.widthPage() || 'desktop';
        CarouselSlides = $('.huge-hero .imageArtDirection');
        CarouselOptions = options;
        this.wrapper = wrapper;
        this.generate(BrowserType);
        
        $(window).error(function(e){
            e.preventDefault();
        });
        $(window).ready(function () {
            try {
                BrowserType = verticalCarousel.widthPage();
                verticalCarousel.heroHeight();
                if (CarouselOptions.auto === true) {
                    clearInterval(Herotimer);
                    Herotimer = setInterval(verticalCarousel.autoTrigger, CarouselOptions.speed || 5000);
                    if (CarouselOptions.hover === true) {
                        $('.hero-slider-controls .slide').click(function (ev) {
                            if (ev.originalEvent !== undefined) {
                                clearInterval(Herotimer);
                                CarouselOptions.slideTimeout = true;
                            }
                        });
                    }
                }
            } catch(error){}
        });
        /* page ready events*/
        $(window).ready(function () {
            try {
                verticalCarousel.heroHeight();
            } catch(error){}                
        });
        /* page on resize events*/
        $(window).resize(function () {
            try {
                if (verticalCarousel.widthPage() !== BrowserType) {               
                    var $active = verticalCarousel.getSlideClick('.hero-slider-controls .active'),
                        slideNo = $active.match(/\d+/) || 0;
                    BrowserType = verticalCarousel.widthPage();
                }
                BrowserType = verticalCarousel.widthPage();
                verticalCarousel.heroHeight();
                verticalCarousel.responsiveActiveBlock();
            } catch(error){}
        });
    },
     /*
    * generate the mark-up of the slider
    */
    generate: function (type) {
        var slide_type =  CarouselOptions.slideType[type] == 'horizontal' ? 'left' : 'top';            
        $.each(CarouselSlides, function(index, elem) {
            $(this).addClass('huge-hero-image heroslider-' + index);
            if ($('.hero-slider-controls .slide-' + index).length == 0) {
                $('.hero-slider-controls').append('<div class="slide slide-' + index + '"></div>');
            }                
        });
        $('.heroslider-0').addClass('active');
        $('.hero-slider-controls .slide-0').addClass('active');
        
        if (CarouselOptions.arrowControl === true) {
            $('.hero-slider-controls').prepend('<div class="arrows arrow-left twc-icon-before icon-angle-left"><span></span></div>');
             $('.hero-slider-controls').append('<div class="arrows arrow-right twc-icon-before icon-angle-right"><span></span></div>');
        }
        if (type == 'desktop') {
            $('.hero-wrapper').removeClass(CarouselOptions.slideType.mobile);
        } else {
            $('.hero-wrapper').removeClass(CarouselOptions.slideType.desktop);
        }
        $('.hero-wrapper').addClass(CarouselOptions.slideType[type]); 
        
        if (CarouselOptions.infiniteLoop === true) {
            verticalCarousel.slideCloner();
            var positions = this.sliderPosition();           
            $('.hero-wrapper').css(slide_type, '-' + positions[1] +'px');            
        }
        
        $(".hero-slider-controls .slide").click(function (e) {
            e.preventDefault();
            var $attId = verticalCarousel.getSlideClick(this),
                slideNo = parseInt($attId.match(/\d+/)) || 0;
            if (e.originalEvent !== undefined) {
                CarouselOptions.slideTimeout = true;
            }
            verticalCarousel.activeIcon($(this));
            verticalCarousel.triggerCarousel(slideNo);
        });
        $(".huge-hero .arrow-left").click(function (e) {
            e.preventDefault();            
            clearInterval(Herotimer);
            verticalCarousel.arrowControl(-1);
            
        });
        $(".huge-hero .arrow-right").click(function (e) {
            e.preventDefault();            
            clearInterval(Herotimer);
            verticalCarousel.arrowControl(1);
            
        });
    },
    /*
    * Trigger the slide control clicking on the arrows
    * positions -1 for previous, 1 for next
    */
    arrowControl: function(position) {
        try {
            var iconActive = $(".hero-slider-controls .active").attr('class').split(' ')[1],
                iconNumber = parseInt(iconActive.match(/\d+/)) || 0,
                elementsTotal = $('.hero-slider-controls .slide').length,
                next = iconNumber + position;
            if (next > 0 && next < elementsTotal) {
                verticalCarousel.activeIcon($('.hero-slider-controls .slide-' + next));
                verticalCarousel.triggerCarousel(next);
            } else if (next < 0) {
                verticalCarousel.activeIcon($('.hero-slider-controls .slide-'+ (elementsTotal - 1)));
                verticalCarousel.triggerCarousel(-1, false);
            } else if (next == 0) {
                CarouselOptions.slideTimeout = true;
                verticalCarousel.activeIcon($('.hero-slider-controls .slide-' + next));
                verticalCarousel.triggerCarousel(next);
            } else {
                CarouselOptions.slideTimeout = true;
                verticalCarousel.activeIcon($('.hero-slider-controls .slide-0'));
                verticalCarousel.triggerCarousel(0, false);
            }
        } catch (err) {}
    },    
    /*
    * activate icon related to actual slide
    */
    activeIcon: function (element) {
        $(".hero-slider-controls .slide").removeClass("active", 500);
        $(element).addClass("active", 500);        
    },
    /*
    * create carousel animation
    */
    triggerCarousel: function (elem, manual) {
        try {
            var type = this.widthPage() || 'desktop',
                positions = this.sliderPosition(),
                infiniteTrigger = false,
                slide_type =  CarouselOptions.slideType[type] == 'horizontal' ? 'left' : 'top',
                jump = false,
                obj_transition = {
                    transition: CarouselOptions.animation
                };
            if (CarouselOptions.infiniteLoop === true && elem >=0) {
                positions[elem] = positions[elem] + positions[1];
                if ((CarouselOptions.slideTimeout === false && elem == 0) || manual === false) {
                    elem = CarouselSlides.length + 1;
                    infiniteTrigger = true;
                }
            }
            if (manual === false && elem < 0) {
                 elem = 0;
                 positions[0] = 0;
                 infiniteTrigger = true;
                 jump = true;
            }
            obj_transition[slide_type] = '-' + positions[elem] + 'px';
            $('.hero-wrapper').css(obj_transition);
            if (infiniteTrigger === true) { 
                var detectChange = setInterval(function() {
                    if (parseInt($('.hero-wrapper').css('left'), 10) == -1 * positions[elem]) {
                        obj_transition.transition = 'none';
                        if (manual === false && jump === true) {
                            obj_transition[slide_type] = '-' + positions[CarouselSlides.length] + 'px';
                        } else {
                            obj_transition[slide_type] = '-' + positions[1] + 'px';
                        }
                        $('.hero-wrapper').css(obj_transition);
                        clearInterval(detectChange);
                    }
                }, 20);
            }
        } catch(error){}
    },
    /*
    * adjust position of active block on resize
    */
    responsiveActiveBlock: function () {
        var $active = verticalCarousel.getSlideClick('.hero-slider-controls .active'),
            slideNo = parseInt($active.match(/\d+/)) || 0,
            type = this.widthPage() || 'desktop',
            slide_type =  CarouselOptions.slideType[type] == 'horizontal' ? 'left' : 'top';
        if (CarouselOptions.infiniteLoop === true) {                
            slideNo = slideNo + 1;
        }
        $('.hero-wrapper').css('top', '0').css('left', '0');
        if (BrowserType === 'desktop') {
            $('.hero-wrapper').css(slide_type, '-' + this.sliderPosition()[slideNo] + 'px');
        } else if (BrowserType === 'mobile') {
            $('.hero-wrapper').css(slide_type, '-' + this.sliderPosition()[slideNo] + 'px');
        }
    },
    /*
    * returns the kind of device according the breakpoints definitions
    */
    widthPage: function() {
        var mediumBreakPoint = 768,
            smallBreakPoint = 640,
            width = $(window).width();
        if (width <= smallBreakPoint) {
            return 'mobile';
        } else if (width <= mediumBreakPoint) {
            //return 'tablet'; TODO: tablet version is not required for now.
            return 'mobile';
        } else {
            return 'desktop';
        }
    },
    /*
    * adjust the height of the hero carousel to keep the aspect ratio
    */
    heroHeight: function() {
        var maxHeight = 0,
            controls = $('.hero-slider-progress').outerHeight(true),
            hero_height = 0;
        $('.huge-hero .imageArtDirection > div').height('auto');
        $('.huge-hero').not('.clone').find('.imageArtDirection').children().each(function (){
            var comp_height = $(this).outerHeight(true);
            if (maxHeight < comp_height) {
                maxHeight = comp_height;
            }
        });
        hero_height = parseInt(maxHeight) + parseInt(controls);       
        $(".huge-hero, .huge-hero .overlay, .huge-hero .imageArtDirection > div ").height(hero_height);   
        $('.huge-hero-image').width($(window).outerWidth(true) + 1);
    },
    /*
    * calculate position of sliders on resize
    */
    sliderPosition: function () {
        var elements = $('.huge-hero-image'),
            result = {},
            type = this.widthPage() || 'desktop',
            slide_type =  CarouselOptions.slideType[type] == 'horizontal' ? 'left' : 'top';
        result[0] = 0;        
        if (CarouselOptions.slideType[type] == 'horizontal') {
            $(elements).each(function (index, elem) {                
                result[index + 1] = result[index] + $(window).width() + 5;
            });
        } else {
            $(elements).each(function(index, elem) {
                result[index + 1] = result[index] + $(elem).height();
            });
        }
        return result;
    },    
    /*
    * common function to get clicked slide
    */
    getSlideClick: function (elem) {
        try {
            var theClass = $(elem).attr("class").match(/slide\-[\w-]*\b/);
            return theClass[0];
        } catch(error){}
    },
    /*
    * create automatic trigger on continuous carousel
    */
    autoTrigger: function () {
        try {
            var slides = $('.hero-slider-controls .slide').length,
                $active = verticalCarousel.getSlideClick('.hero-slider-controls .active'),
                slideNo = parseInt($active.match(/\d+/)) || 0,
                next = 0;
            if (slideNo + 1 >= slides) {
                next = 0;
            } else {
                next = slideNo + 1;
            }
            $('.hero-slider-controls .slide-' + next).trigger('click');
            return;
        } catch(error){}
    },
    /*
    * create clones on continuous carousel
    */
    slideCloner: function () {
        var first_element = $('.huge-hero-image').not('.clone').first(),
            last_element = $('.huge-hero-image').not('.clone').last();
        $('.huge-hero-image .clone').remove();
        first_element.clone().appendTo('.hero-image-slider').addClass('clone').removeClass('active');
        last_element.clone().prependTo('.hero-image-slider').addClass('clone').removeClass('active');
    }
};

$(document).ready(function() { 
    /* Carousel options
        * Object:
        * slideType: type of slider on each device | horizontal/vertical
        * speed: speed for auto scroll in ms
        * animation: animation used on slide transition
        * auto: auto scroll | enable/disable
        * hover: mouse hover pause on auto scroll | true/false
        * infiniteLoop: create animation for infinite loop
        * slideTimeout: internal use only, default value false
        */
    slide_options = {
        slideType: {
            desktop: 'horizontal',
            mobile: 'horizontal'
        },
        speed: 8000,
        animation: 'all 1000ms cubic-bezier(1.000, 0.000, 0.000, 1.000)',
        auto: true,
        hover: true,
        infiniteLoop: true,
        arrowControl: true,
        slideTimeout: false
    };
    try {
        verticalCarousel.create('.huge-hero', slide_options);
    } catch(error){}
});