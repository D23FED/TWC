
// $('.simpleNavItems li a').click(function(){
//   $(this).parents('.simpleNav').children('.navContainer').slideToggle().toggleClass('js-active');
//   return false;
// });

jQuery(document).ready(function() {
  jQuery('.simpleNavItems li a').on('click', function(e)  {
    var currentAttrValue = jQuery(this).data('nav');
    var activeNav = $('#nav-content-' + currentAttrValue);
    $(this).parents('.simpleNav').children('.navContainer').hide;
    // Show/Hide Tabs
    if ($(this).parents('.simpleNav').children('.navContainer').is(':visible')) {
      $(this).parents('.simpleNav').children('.navContainer').animate({left: "160%"}).hide();
      $(activeNav).removeClass('js-active');
    } else {
      $(this).parents('.simpleNav').children('.navContainer').show().animate({left: "60%"});
      $(activeNav).addClass('js-active');
      $(activeNav).siblings().removeClass('js-active');
    }
    console.log(activeNav);
    e.preventDefault();
  });
});