$(window).resize(function () {
    if ($(window).width() > 768) {
        $('.simpleNavItems').show();
    }
});

$(document).ready(function () {
    var headerHeight = $('header.simply').outerHeight();
    $('.headerSpacing').height(headerHeight);
});


$('.simpleNavToggle').click(function () {
    $(this).toggleClass('js-active');
    $(this).siblings('.simpleNavItems').toggleClass('js-active');
});

$('li.subNavHead > a').click(function () {
    $(this).toggleClass('js-active').siblings('.subNavListItems').toggleClass('js-active').parent('li.subNavHead').toggleClass('js-active').siblings('li.subNavHead').removeClass('js-active').children().removeClass('js-active');
    return false;
});

/* verticalCarousel Class*/
var verticalCarousel = {
    create: function (wrapper, slides, options) {
        var containerSlides,
            containerPager,
            timer = null;
        BrowserType = this.widthPage() || 'desktop';
        CarouselSlides = slides;
        CarouselOptions = options;
        this.wrapper = wrapper;
        this.generate(BrowserType);
        /*DOM loaded events*/
        
        $(window).error(function(e){
            e.preventDefault();
        });
        $(window).ready(function () {
        //$(window).bind("load", function () {
            try {
                BrowserType = verticalCarousel.widthPage();
                verticalCarousel.heroHeight();
                if (CarouselOptions.auto === true) {
                    clearInterval(timer);
                    timer = setInterval(verticalCarousel.autoTrigger, CarouselOptions.speed || 5000);
                    if (CarouselOptions.hover === true) {
                        $('.hero-slider-controls div').click(function (ev) {
                            if (ev.originalEvent !== undefined) {
                                clearInterval(timer);
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
                    verticalCarousel.destroy();
                    verticalCarousel.generate(BrowserType);
                    verticalCarousel.videoTrigger(slideNo);
                }
                BrowserType = verticalCarousel.widthPage();
                verticalCarousel.heroHeight();
                verticalCarousel.responsiveActiveBlock();
            } catch(error){}
        });
    },
     /*
    * generate the markup of the slider
    */
    generate: function (type) {
        $.each(CarouselSlides, function (index, elem) {
            // generate elements of slider
            if ($('.heroslider-' + index).length == 0) {
                $('.hero-image-slider').append('<div class="huge-hero-image heroslider-' + index + '"></div>');
            }
            if (elem[type].video !== null && elem[type].video != undefined) {
                containerSlides = '<video class="marquee-video" poster="' + elem[type].poster + '" ' + elem[type].options + '>';
                for (i = 0; i < elem[type]['video'].length; i++) {
                    containerSlides += '<source src="' + elem[type]['video'][i] + '">';
                }
                containerSlides += '</video>';
                $('.heroslider-' + index).append(containerSlides);
            } else if (elem[type].image !== undefined) {
                var focus = elem[type].focus || '50% center';
                $('.heroslider-' + index).css('background-image', 'url("' + elem[type].image + '")');
                $('.heroslider-' + index).css('background-position', focus);
            }
            //generate elements of controls
            if ($('.hero-slider-controls .slide-' + index).length == 0) {
                $('.hero-slider-controls').append('<div class="slide slide-' + index + '"></div>');
            }
            if (typeof elem[type].icon == 'object' && elem[type].icon != false) {
                var icons = '<figure>';
                for (i = 0; i < elem[type]['icon'].length; i++) {
                    icons += '<img src="' + elem[type]['icon'][i] + '" />';
                }
                icons += '</figure>';
                $('.slide-' + index).append(icons);
            }
        });
        if (CarouselOptions.controlClone === true) {
            $('.hero-slider-controls').clone().appendTo('.hero-slider-progress-clone');
            $('.hero-slider-progress-clone .hero-slider-controls div figure').remove();
        }
        
        if (CarouselOptions.infiniteLoop === true) {
            verticalCarousel.slideCloner();
            var positions = this.sliderPosition(),
                type = this.widthPage() || 'desktop';
            if (type === 'desktop') {
                $('.hero-wrapper').css('top', '-' + positions[1] +'px');
            } else if (type === 'mobile') {
                $('.hero-wrapper').css('left', '-' + positions[1] +'px');
            }
        }
        
        $(".hero-slider-controls div").click(function (e) {
            e.preventDefault();
            var $attId = verticalCarousel.getSlideClick(this),
                slideNo = parseInt($attId.match(/\d+/)) || 0;
            if (e.originalEvent !== undefined) {
                CarouselOptions.slideTimeout = true;
            }
            verticalCarousel.activeIcon($(this));
            verticalCarousel.triggerCarousel(slideNo);
            verticalCarousel.videoTrigger(slideNo);
        });
    },
    /*
    * activate video autoplay trigger when the video is active
    */
    videoTrigger: function (slide) {
        var video = $('.heroslider-' + slide + ' video');
        $('.huge-hero-image video').trigger('pause');
        if (typeof video == 'object' && $(video).length > 0) {
            $(video).trigger('play');
        }
    },
    /*
    * activate icon related to actual slide
    */
    activeIcon: function (element) {
        $(".hero-slider-controls div").removeClass("active", 500);
        $(element).addClass("active", 500);
        if (CarouselOptions.controlClone === true) {
            var slideId = verticalCarousel.getSlideClick(element);
            $('.hero-slider-controls .' + slideId).addClass("active", 500);
        }
    },
    /*
    * create carousel animation
    */
    triggerCarousel: function (elem) {
        try {
            var type = this.widthPage() || 'desktop',
                positions = this.sliderPosition(),
                infiniteTrigger = false;
               
            if (CarouselOptions.infiniteLoop === true) {
                positions[elem] = positions[elem] + positions[1];
            }
            if (CarouselOptions.infiniteLoop === true && CarouselOptions.slideTimeout === false && elem == 0) {
                elem = CarouselSlides.length + 1;
                infiniteTrigger = true;
            }
            
            if (type === 'desktop') {
                $('.hero-wrapper').css({
                    transition: CarouselOptions.animation,
                    'top': '-' + positions[elem] + 'px'
                });
                if (infiniteTrigger === true) {
                    var detectChange = setInterval(function() {
                        if ($('.hero-wrapper').css('top') == '-' + positions[elem] +'px') {
                            $('.hero-wrapper').css({
                                transition: 'none',
                                'top':'-' + positions[1] +'px'
                            });
                            clearInterval(detectChange);
                        }
                    }, 10);
                }
            } else if (type === 'mobile') {
                $('.hero-wrapper').css({
                    transition: CarouselOptions.animation,
                   'left': '-' + positions[elem] + 'px'
                });
                if (infiniteTrigger === true) {
                    var detectChange = setInterval(function() {
                        if ($('.hero-wrapper').css('left') == '-' + positions[elem] +'px') {
                            $('.hero-wrapper').css({
                                transition: 'none',
                                'left':'-' + positions[1] +'px'
                            });
                            clearInterval(detectChange);
                        }
                    }, 10);
                }
            }
        } catch(error){}
    },
    /*
    * adjust position of active block on resize
    */
    responsiveActiveBlock: function () {
        var $active = verticalCarousel.getSlideClick('.hero-slider-controls .active'),
            slideNo = parseInt($active.match(/\d+/)) || 0;
            if (CarouselOptions.infiniteLoop === true) {                
                slideNo = slideNo + 1;
            }
        $('.hero-wrapper').css('top', '0').css('left', '0');
        if (BrowserType === 'desktop') {
            $('.hero-wrapper').css('top', '-' + this.sliderPosition()[slideNo] + 'px');
        } else if (BrowserType === 'mobile') {
            $('.hero-wrapper').css('left', '-' + this.sliderPosition()[slideNo] + 'px');
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
        var hero_height = $('.huge-hero').css('max-height'),
            type = this.widthPage() || 'desktop';
            
        $(".huge-hero").height(hero_height);
        $('.huge-hero-image').width($(window).outerWidth(true));
    },
    /*
    * calculate position of sliders on resize
    */
    sliderPosition: function () {
        var elements = $('.huge-hero-image'),
            result = {},
            type = this.widthPage() || 'desktop';
        result[0] = 0;
        if (type === 'desktop') {
            $(elements).each(function(index, elem) {
                result[index + 1] = result[index] + $(elem).height();
            });
        }
        if (type === 'mobile') {
            $(elements).each(function (index, elem) {                
                result[index + 1] = result[index] + $(window).width() + 3;
            });
        }
        return result;
    },
    /*
    * destroy carousel on breakpoints
    */
    destroy: function () {
        try {
            $('.hero-slider-controls .slide').html('');
            if (CarouselOptions.controlClone === true) {
                $('.hero-slider-progress-clone').html('');
            }
            $('.hero-image-slider div.clone').remove();
            $('.huge-hero-image figure').html('');
            $('.huge-hero-image video').remove();
            $(".hero-slider-controls div").unbind("click");
            $('.hero-wrapper').css('top', '0').css('left', '0');
        } catch(error){}
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
            var slides = $('.hero-slider-controls div').length,
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
    /* Slides parameters
    * Object:
    * desktop = Object | definitions for desktop version
    * mobile = Object | definitions for mobile version
    * desktop.image = String | carousel image
    * desktop.video = Array | carousel video definitions
    * desktop.poster = String | carousel video poster
    * desktop.icon = Array | carousel icons for desktop
    */
     var slides = [
    { 
        'desktop': {
             'image': '/content/dam/residential/images/Enjoy/prototypes/lex/hp-cap/hero-bg-1-tv.jpg',              
            'icon': false,
            'focus': '50% center'
        },       
        'mobile': {
            'image': '/content/dam/residential/images/Enjoy/prototypes/lex/hp-cap/hero-bg-1-tv.jpg',         
            'icon': false,
            'focus': '50% center'
        }            
    },
    {
        'desktop': {
             'image': '/content/dam/residential/images/Enjoy/prototypes/lex/hp-cap/hero-bg-2-internet.jpg',              
            'icon': false,
            'focus': '50% center'
        },       
        'mobile': {
            'image': '/content/dam/residential/images/Enjoy/prototypes/lex/hp-cap/hero-bg-2-internet.jpg',         
            'icon': false,
            'focus': 'left center'
        }
    },
    { 
        'desktop': {
             'image': '/content/dam/residential/images/Enjoy/prototypes/lex/hp-cap/hero-bg-3-phone.jpg',              
            'icon': false,
           'focus': '50% center'
        },       
        'mobile': {
            'image': '/content/dam/residential/images/Enjoy/prototypes/lex/hp-cap/hero-bg-3-phone.jpg',         
            'icon': false,
            'focus': '50% center'
        }            
    },
    {
        'desktop': {
             'image': '/content/dam/residential/images/Enjoy/prototypes/lex/hp-cap/hero-bg-4-ih.jpg',              
            'icon': false,
           'focus': '50% center'
        },       
        'mobile': {
            'image': '/content/dam/residential/images/Enjoy/prototypes/lex/hp-cap/hero-bg-4-ih.jpg',         
            'icon': false,
           'focus': '50% center'
        }            
    }
    ],
    /* Carousel options
        * Object:
        * speed: speed for auto scroll
        * animation: animation used on slide transition
        * auto: auto scroll enable/disable
        * hover: mouse hover pause on auto scroll
        * controlClone: include the double controller in desktop version
        * infiniteLoop: create animation for infinite loop
        * slideTimeout: internal use, default value false
        */
    slide_options = {
        speed: 7000,
        animation: '0.5s ease-in',
        auto: true,
        hover: true,
        controlClone: false,
        infiniteLoop: true,
        slideTimeout: false
    };
    try {
        verticalCarousel.create('.huge-hero', slides, slide_options);
    } catch(error){}
});