$(function(){$(".flyoutCTA").each(function(t){$(this).attr("id","flyoutCTA"+t)}),$('[id^="flyoutCTA"]').click(function(){return $(this).next().addClass("js-openWindow").toggle(),$(this).toggleClass("icon-angle-down").toggleClass("icon-angle-up"),!1})});