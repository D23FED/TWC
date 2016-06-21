var speedometer = {
	'trigger'        : '#speed-compare',
	'target'         :'.modal_content .speedometer',
	'activationClass': 'play',
	'delay'          : 1250
};
$(function() {
	$(speedometer.trigger).on('click', function() {
		setTimeout( function() {
			$(speedometer.target).each(function() {
				$(this).addClass(speedometer.activationClass);
			});
		}, speedometer.delay);
	});
});
