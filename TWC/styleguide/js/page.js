$(function(){
  $('.styleguide-expand').click(function() {
    $(this).parent().nextAll('div.showContent').first().slideToggle();

    return false;
  });
  // Prevent button click from toggling details
  $('.style-guide .styleguide-expand .cta').click(function(event) {
    event.stopPropagation();
  });
});