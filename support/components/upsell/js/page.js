$(function(){
  $('.upsell .upsell-content-teaser').click(function() {
    if($('.upsell-content-expanded').is(':hidden')){
      $('.upsell-content-expanded').slideToggle();
      $('.upsell-content-teaser .expandButton span').text('Hide Details');
      $('.upsell-content-teaser .expandButton').removeClass('icon-angle-down').addClass('icon-angle-up');
    } else {
      $('.upsell-content-expanded').slideToggle();
      $('.upsell-content-teaser .expandButton span').text('See Details');
      $('.upsell-content-teaser .expandButton').removeClass('icon-angle-up').addClass('icon-angle-down');
    }
    return false;
  });
  $('.upsell .close-button').click(function() {
    $('.upsell').slideUp();
    return false;
  });
});

