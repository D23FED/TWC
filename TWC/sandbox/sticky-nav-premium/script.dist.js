var sticky={wrapper:"#sticky-subnav-wrapper",menu:"#sticky-subnav",el:".stickyElement",offscreenClass:"js-sticky-past",activeClass:"js-sticky",closedClass:"js-closed",spacer:"#sticky-spacer"};$(function(){0===$(sticky.wrapper).length&&(sticky.wrapper="#sticky-carousel-subnav-wrapper"),$(window).on("load",function(){sticky.top=$(sticky.wrapper).offset().top}),sticky.menuHeight=$(sticky.menu).outerHeight(),sticky.spacing=sticky.menuHeight,setSpacerHeight(sticky.spacing),$(sticky.menu).offset()&&$(function(){sticky.top=$(sticky.wrapper).offset().top;var t=function(t){var e=$(window).scrollTop();e>t?($(sticky.menu).addClass(sticky.activeClass),$(sticky.spacer).show()):($(sticky.menu).removeClass(sticky.activeClass),$(sticky.spacer).hide())};t(sticky.top),$(window).scroll(function(){_debounce(t(sticky.top),250)})}),$(sticky.el)[0]&&($.fn.is_on_screen=function(){var t=$(window),e=$(sticky.menu).height(),s={top:t.scrollTop()+e,left:t.scrollLeft()},i=this.offset();return s.right=s.left+t.width(),s.bottom=s.top+t.height(),s.height=t.height()-e,i.right=i.left+this.outerWidth(),i.bottom=i.top+this.outerHeight(),!(s.right<i.left||s.left>i.right||s.bottom<i.top||s.top>i.bottom)},$(window).scroll(function(){$(sticky.menu).length>0&&($(sticky.el).is_on_screen()?$(sticky.menu).removeClass(sticky.offscreenClass):$(sticky.menu).addClass(sticky.offscreenClass))}));var t=$(sticky.el).width();$(window).width()<1059&&$(window).width()>768&&$(sticky.menu).css({width:t+"px"}),$(sticky.menu+" a[href*=#]").click(function(t){t.preventDefault();var e=$(this).attr("href"),s=e.match(/(#.*)/)[0];""!==s&&$("body").scrollTo("[id="+s.substring(1)+"]",{duration:1e3,offsetTop:sticky.menuHeight})}),$(window).resize(function(){_debounce(onResize(),250)})});var onResize=function(){var t=$(sticky.menu).next(sticky.el).width();$(window).width()<1059&&$(window).width()>768?$(sticky.menu).css({width:t+"px"}):$(sticky.menu).css({width:"100%"}),sticky.top=$(sticky.wrapper).offset().top,setSpacerHeight($(sticky.menu).outerHeight())},setSpacerHeight=function(t){$(sticky.spacer).height(t)};$.fn.scrollTo=function(t,e,s){"function"==typeof e&&2===arguments.length&&(s=e,e=t);var i=$.extend({scrollTarget:t,offsetTop:-100,duration:500,easing:"swing"},e);return this.each(function(){var t,e=0,n="number"==typeof i.scrollTarget?i.scrollTarget:$(i.scrollTarget);$(this).parents().each(function(t,s){e+=parseInt($(s).position().top)}),t="number"==typeof n?n:n.offset().top+e-parseInt(i.offsetTop),$("html, body").animate({scrollTop:t},parseInt(i.duration),i.easing,function(){"function"==typeof s&&s.call(this)})})};var _debounce=function(t,e,s){var i,n,o,c,r,a=function(){var l=_now-c;e>l&&l>=0?i=setTimeout(a,e-l):(i=null,s||(r=t.apply(o,n),i||(o=n=null)))};return function(){o=this,n=arguments,c=_now;var l=s&&!i;return i||(i=setTimeout(a,e)),l&&(r=t.apply(o,n),o=n=null),r}},_now=Date.now||function(){return(new Date).getTime()},buttons={prev:'<a class="slick-prev btn-prev">Previous</a>',next:'<a class="slick-next btn-next">Next</a>'};$(function(){$("#sticky-subnav .twc-container").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,variableWidth:!0,centerMode:!0,prevArrow:buttons.prev,nextArrow:buttons.next})});