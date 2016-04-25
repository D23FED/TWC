$(window).resize(function(){
  if($(window).width() > 768){
    $('.simpleNavItems').show();
  } else {
  }
});

$(document).ready(function() {
    var headerHeight = $('header.simply').outerHeight();
    $('.headerSpacing').height(headerHeight);
});


$('.simpleNavToggle').click(function(){
  $(this).toggleClass('js-active');
  $(this).siblings('.simpleNavItems').toggleClass('js-active');
});

$('li.subNavHead > a').click(function(){
  $(this).toggleClass('js-active').siblings('.subNavListItems').toggleClass('js-active').parent('li.subNavHead').toggleClass('js-active').siblings('li.subNavHead').removeClass('js-active').children().removeClass('js-active');
  return false;
});