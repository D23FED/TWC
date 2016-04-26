/* ==========================================================================
    Truncate Text -- Version: 1.9.0.1 - Updated: 1/14/2014
   ========================================================================== */

    var ellipsestext = "...";
    var moretext = "Read More";
    var lesstext = "Read Less";

    $(window).bind("load", function(){
        $('[class^=truncate]').show();
    });

    $('[class^=truncate]').children().each(function(showChar) {
        var content = $(this).html();
        var compareChar = $(this).parent().attr('class').split('-');
        var compareCharLast = $(this).parent().attr('class').split('-').pop();

        if(Number(compareCharLast)){
            var showChar = compareCharLast;
        } else {
            var showChar = 300;
        }

        if(content.length > showChar) {
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            if(compareChar.indexOf('readMore') == 1){
                var html = c + '<span class="moreelipses">'+ellipsestext+'</span>&nbsp;<span class="morecontent"><span>' + h + '</span>&nbsp;<a href="" class="morelink">'+moretext+'</a></span>';
            } else {
                var html = c + '<span class="moreelipses">'+ellipsestext+'</span>';
            }

            $(this).html(html);
        }
    });

    $(document).on("click", ".morelink", function() {
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

    var windowTimer = null;
    textToCopy();
    resizeText();

    $(window).resize(function() {
        if (windowTimer) clearTimeout(windowTimer);
        windowTimer = setTimeout(resizeText, 50);
    });

function textToCopy() {
    $('[class^=truncate-]').each(function(i) {
        var chgText = $(this).html();
        $('<div id="copy_' + i + '">' + chgText + '</div>').hide().appendTo('body');
    });

    rebuildText();
}

function rebuildText() {
    $('[class^=truncate-]').each(function(i) {
        var adjText = $('#copy_' + i).clone().addClass('clone_' + i).removeAttr('id').show();
        $(this).html(adjText);
    });
}

function resizeText() {
    rebuildText();

    $('[class^=truncate-]').each(function(i) {
        var p = $('.clone_' + i).children();
        var divh = $(this).height();

        while ($(p).outerHeight() > divh) {
            $(p).text(function(index, text) {
                return text.replace(/\W*\s(\S)*$/, '...');
            });
        }
    });
}