$(document).ready(function () {
    
    var stickytimer,
        stickyscrolling = false,
        stickyContainer = '.scroll-arrow';

    $('.scroll-arrow a').click(function (e) {
        e.preventDefault();
        var windowHeight = parseInt($(window).height()),
            topWindow = parseInt($(window).scrollTop());
            console.log(windowHeight);
            console.log(topWindow);
        $('body,html').animate({scrollTop: topWindow + windowHeight}, 1000, 'swing');

    });
    
    function onScrollStart () {
        clearTimeout(stickytimer);
        stickytimer = setTimeout(onScrollStop, 500);
        if (stickyscrolling === false) {
            stickyscrolling = true;
            $(stickyContainer).animate({'opacity': 0.25}, 500);
        }
    }
    function onScrollStop () {
        var topWindow = parseInt($(window).scrollTop()),
            topFooter = parseInt($('footer').position().top),
            windowHeight = parseInt($(window).height()),
            stickybar = parseInt($(stickyContainer).height());
        if ((topWindow + windowHeight < topFooter + stickybar) ) { 
            $(stickyContainer).css('display', 'block');        
            $(stickyContainer).animate({'opacity': 1}, 500);
            stickyscrolling = false;
        }
        if ((topWindow + windowHeight >= topFooter + stickybar) ) {
            $(stickyContainer).animate({'opacity': 0}, 200, function() {
                $(this).css('display', 'none');
            });
        }
    }
    $(window).on('scroll', onScrollStart);
    
});