// Packages - expand to show details
$('.side-by-side .expandDetails').click(function() {
  if ($(this).parents().nextAll('.detailsExpansion').is(':hidden')) {
    $(this).parents().nextAll('.detailsExpansion').slideToggle().addClass('js-active');
    $(this).removeClass('icon-angle-up').addClass('icon-angle-down').addClass('js-active');
    $(this).closest('.package').addClass('js-active');
  } else {
    $(this).parents().nextAll('.detailsExpansion').slideToggle().removeClass('js-active');
    $(this).removeClass('icon-angle-down').addClass('icon-angle-up').removeClass('js-active');
    $(this).closest('.package').removeClass('js-active');
  }
  return false;
});

$('.closeDetails').click(function() {
  $(this).parents('.detailsExpansion').slideToggle().removeClass('js-active');
  $(this).removeClass('js-active');
  $(this).closest('.package').removeClass('js-active');
  $(this).closest('.packageFooter').find('.expandDetails').removeClass('js-active').removeClass('icon-angle-up').addClass('icon-angle-down');
  return false;
});
// End expand to show details

// JS to control compare checkbox so it swaps the label to a button
$(".comparePackage:checkbox").on('click', function() {
  if ($(this).is(":checked")) {
    $(this).closest('.package').addClass('js-compare');
  } else {
    $(this).closest('.package').removeClass('js-compare');
  }
});
// End JS to control compare checkbox so it swaps the label to a button

// Compare Button Maximum Alert
$(".comparePackage").on("click", function() {
  var compareSelected = $(".comparePackage:checked").length;
  if ($(window).width() > 768) {
    if (compareSelected >= 2) {
      if (compareSelected > 3) {
        $(this).attr('checked', false).parent().siblings(".maximum").toggle().addClass('js-active');
        $(this).closest('.package').removeClass('js-compare');
      } else {}
    } else {}
  } else {
    if (compareSelected >= 1) {
      if (compareSelected > 2) {
        $(this).attr('checked', false).parent().siblings(".maximum").toggle().addClass('js-active');
        $(this).closest('.package').removeClass('js-compare');
      } else {}
    } else {}
  }
});
// End compare Button Maximum Alert

// Compare Button Min Alert
$(".compare-button").on("click", function() {
  var compareSelected = $(".comparePackage:checked").length;
  if ($(window).width() > 768) {
    if (compareSelected < 2) {
      $(this).attr('checked', false).parent().siblings(".minimum").toggle().addClass('js-active');
      return false;
    } else {}
  } else {
    if (compareSelected < 2) {
      $(this).attr('checked', false).parent().siblings(".minimum").toggle().addClass('js-active');
      return false;
    } else {}
  }
});
// End compare Button Min Alert

// Close alert messages
$('.closeBtn').click(function() {
  $(this).closest(".compareAlert").toggle().removeClass('js-active');
  return false;
});
$('.maximum .closeBtn').click(function() {
  $(this).closest(".package").removeClass('js-compare');
  return false;
});
$('.compareContinue').click(function() {
  $(this).closest(".compareAlert").toggle().removeClass('js-active');
  return false;
});
$('.maximum .compareContinue').click(function() {
  $(this).parents('.package').removeClass('js-compare');
  return false;
});
$('.compareStartOver').click(function() {
  $(this).closest(".compareAlert").toggle().removeClass('js-active');
  $(this).parents(".packageSelect").find(".comparePackage").attr('checked', false);
  $(this).parents(".packageSelect").find(".js-compare").removeClass('js-compare');
  return false;
});
// End close alert messages

//  BYO JS - Expand / Collapse columns
$(document).ready(function() {
  if ($(window).width() < 768) {
    $('.byoHeader').siblings('.byoPackages').hide();
    $('.byoHeader').children("p").addClass("js-active");
  }
});
$(window).resize(function() {
  if ($(window).width() > 768) {
    $('.byoHeader').siblings('.byoPackages').show();
  } else {
    $('.byoHeader').siblings('.byoPackages').hide();
    $('.byoHeader').children("p").addClass("js-active");
  }
});
$('.byoHeader').click(function() {
  if ($(window).width() < 769) {
    console.log('tablet');
    $(this).siblings(".byoPackages").slideToggle();
    $(this).children("p").toggleClass("js-active");
    return false;
  } else {
    console.log('desktop');
  }
});

//  End BYO JS - Expand / Collapse columns

//  BYO Package Select
$('.byoPackageSelect').click(function() {
  if ($(this).parents('.package').hasClass('js-selected')) {
    $(this).parents('.package').removeClass('js-selected');
    $(this).parents('.package').siblings('.package').removeClass('js-notSelected');
  } else {
    $(this).parents('.package').siblings('.package').removeClass('js-selected').addClass('js-notSelected');
    $(this).parents('.package').toggleClass('js-selected');
  }
  return false;
});
//  End BYO Package Select

// Tab functionality
jQuery(document).ready(function() {
  jQuery('.psTabs .tab-links li').on('click', function(e) {
    var currentAttrValue = jQuery(this).children('span').data('tabs');
    // Show/Hide Tabs
    jQuery('#tab' + currentAttrValue).addClass('js-active').siblings().removeClass('js-active');
    // Change/remove current tab to active
    jQuery(this).addClass('js-active').siblings().removeClass('js-active');
    e.preventDefault();
  });
});
// End Tab functionality

// Prevent content from jumping below sticky header when it sticks
// Must pair with CSS to hide/show .stickySpacing
$(document).ready(function() {
  var stickySpacing = $('.sticky').outerHeight();
  $('.stickySpacing').height(stickySpacing);
});
// End prevent content from jumping below sticky header when it sticks

// Expand / Collapse Select and Filter
$(document).ready(function() {
  $('.collapse-button').parents('.stickyWrapper').addClass('js-open');
});
$('.collapse-button').click(function() {
  if ($(this).parents('.stickyWrapper').hasClass('js-open')) {
    $(this).parents('.stickyWrapper').removeClass('js-open').addClass('js-closed');
    $(this).parents('.stickyWrapper').children('.package-filters').slideToggle();
  } else {
    $(this).parents('.stickyWrapper').removeClass('js-closed').addClass('js-open');
    $(this).parents('.stickyWrapper').children('.package-filters').slideToggle();
  }
  return false;
});
// End expand / Collapse Select and Filter

// Start Quick Checkout
$('.quickCheckoutBtn').click(function() {
  $(this).parents('.quickCheckoutAccordion').toggleClass('js-open');
  $(this).toggleClass('icon-angle-down icon-angle-up');
  $(this).siblings('.quickCheckoutContent').slideToggle().toggleClass('js-active');
  return false;
});

$('.closeAccordion').click(function() {
  if ($(this).parents('.quickCheckoutAccordion').hasClass('js-open')) {
    $(this).parents('.quickCheckoutContent').hide();
    $(this).parents('.quickCheckoutAccordion').removeClass('js-open');
    $(this).parents('.quickCheckoutAccordion').children('.quickCheckoutBtn').removeClass('icon-angle-up').addClass('icon-angle-down');
  } else {

  }
});
// End Quick Checkout