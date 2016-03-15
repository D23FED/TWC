/* ==========================================================================
    Channel Line Up -- Version: 1.0.0.0 - Updated: 3/6/2014
   ========================================================================== */
 $(function(){
    $('.clu .viewMore').click(function() {
      if ($(this).html() == "<span>See More Channels</span>") {
        $(this).html("<span>See Less Channels</span>");
        $('.clu table tbody').css({'max-height':'100%'});
      } else {
        $(this).html("<span>See More Channels</span>");
        $('.clu table tbody').css({'max-height':'350px'});
      }

      return false;
    });
  });