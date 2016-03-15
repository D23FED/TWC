$(function(){

  var resizeTimer;
  $(window).resize(function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(runHero, 100);
      if($(window).width() <= mediumBreakPoint){
        $('.general .33-33-33').children(":gt(0)").hide();
      } else {
        $('.general .33-33-33').children(":gt(0)").show();
      }
  });

  if($(window).width() <= mediumBreakPoint){
    $('.general .33-33-33').children(":gt(0)").hide();
  }

  $('.imageAccordion').click(function(){
    $('.general .33-33-33').children(":gt(0)").slideToggle(function() {
      if( $('.imageAccordion').hasClass('icon-angle-down')) {
        $('.imageAccordion').removeClass('icon-angle-down').addClass('icon-angle-up');
        $('.imageAccordion span').text('Show Less');
      } else {
        $('.imageAccordion').removeClass('icon-angle-up').addClass('icon-angle-down');
        $('.imageAccordion span').text('Show More');
      }
    });
    return false;
  });

}); //Wrapper Function