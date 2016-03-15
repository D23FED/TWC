// Page Specific JS Functions

$(function() {
    if(isIE(8)){
        $(window).bind("load", function() {
            $('[class^=column-count] > ul').each(function(){
                var splitClass = $(this).attr('class').split('-').pop();
                $(this).columnize({ columns: splitClass }).show();
            });

            $('.no-csscolumns').css({'visibility':'visible'});
        });
    }
});

function isIE( version, comparison ){
    var $div = $('<div style="display:none;"/>').appendTo($('body'));
    $div.html('<!--[if '+(comparison||'')+' IE '+(version||'')+']><a>&nbsp;</a><![endif]-->');
    var ieTest = $div.find('a').length;
    $div.remove();
    return ieTest;
}