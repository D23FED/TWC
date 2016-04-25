/* ==========================================================================
    Promo Slider -- Version: 1.9.0.0 - Updated: 12/31/2013
   ========================================================================== */
$.fn.promoSlider = function(opts) {
    $(this).data('initialized', true);
    var $that = this;
    var slider = $("ul.carousel-apps", this);
    var speed = 400;
    var num_items = $("ul.carousel-apps > li", this).size();
    var item_width = 274.5;
    var left_offset = -9.5;
    var left_value = left_offset - item_width;
    slider.css('width', (item_width * num_items));
    slider.css('left', left_offset);

    if (num_items > 2) {
        $('.btnnext', this).show();
        $('.btnprev', this).show();
        $("ul.carousel-apps li:first", this).before($("ul.carousel-apps li:last", this));
        slider.css('left', left_value);
        $('.btnprev', this).click(function() {
            if (!slider.is(':animated')) {
                var left_indent = parseInt(slider.css('left')) + item_width;
                slider.animate({
                    'left': left_indent
                }, speed, function() {
                    $("ul.carousel-apps li:first", $that).before($("ul.carousel-apps li:last", $that));
                    slider.css({
                        'left': left_value
                    });
                });
            }
            return false;
        });
        $('.btnnext', this).click(function() {
            if (!slider.is(':animated')) {
                var left_indent = parseInt(slider.css('left')) - item_width;
                slider.animate({
                    'left': left_indent
                }, speed, function() {
                    $("ul.carousel-apps li:last", $that).after($("ul.carousel-apps li:first", $that));
                    slider.css({
                        'left': left_value
                    });
                });
            }
            return false;
        });
    }
}
$('.promo-slides').each(function() {
    if ($(this).data('initialized') !== true) {
        $(this).promoSlider();
    }
});