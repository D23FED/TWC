$('.cta').click(function() {
  if ( $(this).hasClass('red')) {
    $(this).addClass('green').removeClass('red');
    $(this).find('span').replaceWith('<span>Select Offer</span>')
  } else {
    $(this).addClass('red').removeClass('green');
    $(this).find('span').replaceWith('<span>Remove Offer</span>')
  }
  return false;
});