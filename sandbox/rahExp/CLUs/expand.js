 $(function(){
    $('.clu .viewMore').click(function() {
      if ($(this).html() == "See More Channels") {
        $(this).html("See Less Channels");
        $('.clu .wrap').css({'height':'100%'});
      } else {
        $(this).html("See More Channels");
        $('.clu .wrap').css({'height':'0'});
        /*$('html, body').animate({
          scrollTop: $("#cluSearchArea").offset().top
        }, 500);*/
      }

      return false;
    });
  });