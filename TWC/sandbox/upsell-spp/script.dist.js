var check=function(){$(".price-wrap").length?priceMatchHeight():setTimeout(check,500)},priceMatchHeight=function(){var e={$wrap:$(".price-wrap"),maxHeight:0};e.$wrap.length&&e.$wrap.each(function(){var t=$(this).outerHeight();t>e.maxHeight&&(e.maxHeight=t)}).css("min-height",e.maxHeight)};$(function(){check()});