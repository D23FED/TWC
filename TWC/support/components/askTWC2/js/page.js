$('#askTWC').focus(function() {
  $(this).siblings('.suggestionBox').slideDown('fast').addClass('js-open');
});
$('#askTWC').focusout(function() {
  $(this).siblings('.suggestionBox').slideUp('fast').removeClass('js-open');
});