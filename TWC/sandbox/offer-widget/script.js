$(function() {
	var $component = $('#offer-widget');
	var $button = $component.find('.cta a');
	var $checkboxes = $component.find('.form.section .checkboxCollection :checkbox');
	$checkboxes.on('change', function() {
		var baseUrl = '/en/plans-packages/cable-internet.html';
		var targetUrl = baseUrl;
		var filters = [];
		var query = '?filters=';
		$checkboxes.each(function() {
			if ($(this).is(':checked')) {
				var val = $(this).siblings('label').find('p').text().toLowerCase().trim();
				filters.push(val);
			}
		});
		if (filters.length) {
			query += filters.join();
			targetUrl = baseUrl + query;
		} else {
			targetUrl = baseUrl;
		}
		$button.attr('href', targetUrl);
	});
});