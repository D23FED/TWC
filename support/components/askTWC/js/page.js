$('#askTWC').focus(function() {
  $(this).parents('.inputWrapper').siblings('.suggestionBox').slideDown('fast').addClass('js-open');
});
$('#askTWC').focusout(function() {
  $(this).parents('.inputWrapper').siblings('.suggestionBox').slideUp('fast').removeClass('js-open');
});