$(function(){$(window).width()>mediumBreakPoint&&$(".columnControl").each(function(i){if($(this).has("vertical-center")){var e=$(this).height();$(this).find(".vertical-center-wrapper").css({height:e+"px"})}}),$(window).resize(function(){$(".columnControl").each(function(i){if($(window).width()>mediumBreakPoint){var e=$(this).height();$(this).find(".vertical-center-wrapper").css({height:e+"px"})}else $(this).find(".vertical-center-wrapper").css({height:"auto"})})})});