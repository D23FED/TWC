$(document).ready(function () {
    $('a[href*=#]').click(function(e) {
        e.preventDefault();
        var href = $(this).attr("href"),
            hash = href.match(/(#.*)/)[0];
        if (hash !== '') {
            $('body').scrollTo('*[name=' + hash.substring(1) + ']', {duration:1000, offsetTop : '0'});
        }
    });
});





//this is where we apply opacity to the arrow
$(document).ready(function () {
    elements_tops = $('.imageArtDirection').getTopPosition();
    $('.sticky-arrow a').click(function (e) {
        e.preventDefault();
        console.log(elements_tops);
        var topWindow = parseInt($(window).scrollTop()) + 1;
            next_elem = 0;
        console.log('top '+ topWindow);
        for (var i=0; i < elements_tops.length; i++) {
            if (elements_tops[i] >= topWindow && next_elem === 0) {
                console.log('elem '+ elements_tops[i]);
                next_elem = elements_tops[i + 1];
            }
        }
        console.log('next '+next_elem);
        $('body,html').animate({scrollTop: next_elem}, 500, 'swing');

    });
    
});

//SCROLL ICON
$(document).ready(function () {
    var stickytimer,
        stickyscrolling = false,
        stickyContainer = '.stickyScrolNav';
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
            $(stickyContainer).animate({'opacity': 1}, 500);
            stickyscrolling = false;
        }
        if ((topWindow + windowHeight >= topFooter + stickybar) ) {
            $(stickyContainer).animate({'opacity': 0}, 200);
        }
    }
    $(window).on('scroll', onScrollStart);
});

/*Scroll hide*/
$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($('.scroll-arrow').css('display') != 'none') {
            $('.scroll-arrow').fadeOut("slow");
        }
    });
});

//STICKY ICONS
/* $(document).ready(function () {
    var stickytimer,
        stickyscrolling = false;
    function onScrollStart () {
        clearTimeout(stickytimer);
        stickytimer = setTimeout(onScrollStop, 500);
        if (stickyscrolling === false) {
            stickyscrolling = true;
            $('.stickyScrolNav').animate({'opacity': 0.25}, 500);
        }
    }
    function onScrollStop () {
        var topWindow = parseInt($(window).scrollTop()),
            topFooter = parseInt($('footer').position().top),
            windowHeight = parseInt($(window).height()),
            stickybar = parseInt($('.stickyScrolNav').height());
        if ((topWindow + windowHeight < topFooter + stickybar) ) {          
            $('.stickyScrolNav').animate({'opacity': 1}, 500);
            stickyscrolling = false;
        }
        if ((topWindow + windowHeight >= topFooter + stickybar) ) {
            $('.stickyScrolNav').animate({'opacity': 0}, 200);
        }
    }
    $(window).on('scroll', onScrollStart);
   
}); */

//sticky arrow
/*$(window).scroll( function(){
    var topWindow = parseInt($(window).scrollTop()),
        footer = parseInt($('footer').position().top),
        windowHeight = parseInt($(window).height()),
        stickybar = parseInt($('.stickyScrolNav').height());
    console.log(topWindow + windowHeight);
    console.log(footer + stickybar);    
    console.log($('.stickyScrolNav').css('display'));
    if ((topWindow + windowHeight >= footer + stickybar) && $('.stickyScrolNav').css('display') !== 'none') {
        console.log('fire');
        $('.stickyScrolNav').fadeOut("slow");
    } else if ((topWindow + windowHeight < footer + stickybar) && $('.stickyScrolNav').css('display') == 'none') {
        $('.stickyScrolNav').fadeIn("slow");
    }
        //elements_tops = $('.imageArtDirection').getTopPosition();
        //topWindow = topWindow * 1.5,
        //windowHeight = $(window).height(),
        //position = topWindow / windowHeight;

  //position = 1 - position;
  
  //console.log(position);
  //$('.sticky-arrow').css('opacity', position);

});*/

$.fn.getTopPosition = function() {
    var tops = [],
        parent = $(this).parents(),
        parent_top = 0;
        
    $(this).parents().each(function(index, parent){
        parent_top += parseInt($(parent).position().top);
    });       
    $(this).each(function(index, elem) {
        if (typeof $(elem).position() == 'object') {
            tops.push(parent_top + parseInt($(elem).position().top));
        }
    });   
    return tops;
};

$.fn.scrollTo = function( target, options, callback ) {
  if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
  var settings = $.extend({
    scrollTarget  : target,
    offsetTop     : 50,
    duration      : 500,
    easing        : 'swing'
  }, options);
  return this.each(function(){
    var parent_top = 0,
        scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget),
        scrollY;
    $(this).parents().each(function(index, parent){
        parent_top += parseInt($(parent).position().top);
    });
    scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + parent_top - parseInt(settings.offsetTop);
    $('html, body').animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
      if (typeof callback == 'function') { callback.call(this); }
    });
  });
}