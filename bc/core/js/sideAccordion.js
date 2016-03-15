/* ==========================================================================
    Side Accordion -- Version: 1.0.0.0 - Updated: 1/7/2014
   ========================================================================== */
$(function(){
  $('.sideAccordion .expandableHybrid ul li').each(function() {
    if ($(this).has('ul').length) {
      $(this).addClass('js-expandable');
    } else {
      $(this).addClass('js-notexpandable');
    }
  });

  $('.sideAccordion li h6').click(function(){
      if($(this).next().has('ul').length && !$(this).hasClass('onState')){
          $('.sideAccordion li').removeClass('liState');
          $('.sideAccordion h6').removeClass('onState');
          $(this).addClass('onState');
          $('.sideAccordion li h6').parent().removeClass('js-active').find('ul').slideUp();
          $(this).parent().addClass('js-active').find('ul').slideDown();
          $(this).next('ul').find('li.js-first').addClass('liState');
          $('.sideAccordion .title').text($(this).next('ul').find('li.js-first a').text());
          var html2 = $(this).next('ul').find('li.js-first').next().html();
          var html2 = html2.replace('display:none','display:block').replace('height: 1px','').replace('overflow: hidden','');
          $('.sideAccordion .cloned-block').remove();
          $('<div class="cloned-block">'+html2+'</div>').appendTo('.sideAccordion .rightContent');
      } else if($(this).next().has('ul').length && $(this).hasClass('onState')){
        $(this).parent().addClass('js-active').find('ul').slideToggle();
      }
  });

  $('.sideAccordion .js-expandable > ul > li').click(function(){
      if(!$(this).has('h6').length){
        $('.sideAccordion li').removeClass('liState');
        $(this).addClass('liState');
        $('.sideAccordion .title').text($(this).text());
        if($(window).width() <= smallBreakPoint){
          $('.sideAccordion .activeContent').hide();
          $(this).next('.activeContent').show();
        } else {
          var html = $(this).next('.activeContent').html();
          $('.sideAccordion .cloned-block').remove();
          $('<div class="cloned-block">'+html.replace('display:none','display:block')+'</div>').appendTo('.sideAccordion .rightContent');
        }
      }
    return false;
  });

  $(window).bind("load", function(){
    resizeAccordion();
    $('.sideAccordion li.js-first').find('ul').slideDown();
    $('.sideAccordion .title').text($('.sideAccordion li.js-first a').first().text());
    $('.sideAccordion li.js-first').find('ul li.js-first').addClass('liState');
  });

  $(window).resize(function(){
    resizeAccordion();
  });
});

function resizeAccordion(){
  if($(window).width() >= mediumBreakPoint){
    var html = $('.sideAccordion .liState').next('.activeContent').html();
    if(html == undefined){
      var html = $('.sideAccordion .js-first').next('.activeContent').html();
    }

    $('.sideAccordion .activeContent').hide();
    $('.sideAccordion .rightContent').show();
    $('.sideAccordion .sbs-content').show();
    $('.sideAccordion .sbs-clone').show();
    $('.sideAccordion .cloned-block').remove();
    if(html != undefined){
      $('<div class="cloned-block">'+html.replace('display:none','display:block')+'</div>').appendTo('.sideAccordion .rightContent');
    }
  } else {
    $('.sideAccordion .rightContent').html('');
    $('.sideAccordion .sbs-content').hide();
  }
}