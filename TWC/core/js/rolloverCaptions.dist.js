$(function(){$(".rolloverCaptions figure").click(function(){$(window).width()<=mediumBreakPoint&&1==isTouch&&($(".rolloverCaptions").addClass("touch"),$(this).children("figcaption").is(":hidden")?($(".rolloverCaptions figure figcaption").hide(),$(this).children("figcaption").show()):$(this).children("figcaption").hide())})}),"ontouchstart"in window||navigator.msMaxTouchPoints?isTouch=!0:isTouch=!1;