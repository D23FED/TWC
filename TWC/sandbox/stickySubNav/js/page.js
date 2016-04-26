$(document).ready(function () {
    
    $('.styleguideNav ul a[href*=#]').click(function(e) {
        e.preventDefault();
        var href = $(this).attr("href"),
            hash = href.match(/(#.*)/)[0],
            sticky_bar = $('.js-sticky').height() || 0;
        if (hash !== '') {
            $('body').scrollTo('*[name=' + hash.substring(1) + '], #' + hash.substring(1), {duration:1000, offsetTop : sticky_bar});
        }
    });
    
    $('.expandNav').click(function(){
        $(this).children('.collapse, .expand').toggleClass('js-inactive');
        if($(this).children('.collapse').hasClass('js-inactive')){
            $(this).siblings('.sectionList').slideUp().css('padding' + '0 1em 0');
            $(this).parents('.styleguideNav').addClass('js-collapsed');
        } else {
            $(this).siblings('.sectionList').slideDown();
            $(this).parents('.styleguideNav').removeClass('js-collapsed');
        }
        return false;
    });
    $(window).scroll(function(){
        if($('.sticky').hasClass('js-sticky')) {            
            $('.sticky').removeClass('unstuck');
            $('.sticky-clone').css('height', $('.styleguideNav .sectionList').height()).css('display', 'block');

        } else {
            $('.sticky').addClass('unstuck');
            $('.sticky-clone').css('display', 'none');
        }
    });
});

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