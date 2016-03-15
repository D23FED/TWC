$(function(){
  if($(window).width() >= mediumBreakPoint){
    console.log('inside');
    var arrHeight = [];

    $('.qr-row').each(function() {
      $(this).children('.qr-wrapper').each(function(){
        arrHeight.push($(this).height());
        });

      // add 32 for 1em padding
      var m = Math.max.apply(Math, arrHeight) + 32;
      $(this).children('.qr-wrapper').css({'padding':'1em','height':m+"px" });

        //clear array
        arrHeight.length = 0;
    });
  }
});