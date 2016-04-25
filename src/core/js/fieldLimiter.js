(function($) {
    $.fn.extend( {
        limiter: function(limit) {
            $(this).on("keyup focusout", function() {
                setCount(this);
            });

            function setCount(src) {
                var chars = src.value.length;

                if (chars > limit) {
                    src.value = src.value.substr(0, limit);
                    chars = limit;

                    $(src).addClass('max-input');

                    var delay = setTimeout(function(){
                            $(src).removeClass('max-input');
                        }, 1500);
                } else {
                	$(src).removeClass('max-input');
               	}
            }

            setCount($(this)[0]);
        }
    });
})(jQuery);