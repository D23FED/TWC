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
  } else {
    $('.sticky').addClass('unstuck');
  }
});

// Begin scrollTo
$('a[href^="#"]').click(function() {

$('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);

return false;

e.preventDefault();

});