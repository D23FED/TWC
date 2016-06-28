(function($) {
	$.fn.extend({
		checkboxMax: function() {
			$('[class*=max-]').click(function() {
				classNames = $(this).attr('class').split().pop();
				limit = classNames.split('-').pop();

				if ($(this).closest('ul').find('[class*=max-]:checked').length == limit) {
					$(this).closest('ul').find('[class*=max-]:not(:checked)').attr('disabled', 'disabled');
				} else {
					$(this).closest('ul').find('[class*=max-]:not(:checked)').removeAttr('disabled').attr('enabled', 'enabled');
				}
			});
		}
	});
})(jQuery);

(function($) {
	$.fn.extend({
		checkboxMin: function() {
			$('#validateMin').click(function() {
				$('[class*=min-]').each(function(index) {
					allClasses = $(this).attr('class');
					classNames = $(this).attr('class').split().pop();
					limit = classNames.split('-').pop();

					if ($(this).find('input:checked').length >= limit) {
						$(this).removeClass('checkbox-alert');
					} else {
						$(this).removeClass().addClass('checkbox-alert ' + allClasses);
					}
				});

				return false;
			});
		}
	});
})(jQuery);