// Page Specific JS Functions
$(function(){
  //Init three up carousel
  $(window).bind("load", function(){
      $('.three-up-carousel').css({'visibility': 'visible'});
      //Removes the random CQ "new * section" element which throws off slide index
      $('.three-up-carousel .new').remove();
  });

  $('.promo-slides').slider({
    mode: 'vertical',
    auto: true,
    autoHover: true,
    slideWidth: 310,
    minSlides: 2,
    slideMargin: 10,
    pager: false
  });
});