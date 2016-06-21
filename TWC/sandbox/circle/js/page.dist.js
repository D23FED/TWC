var speedometer = {
	'trigger'        : '#speed-compare',
	'target'         : '.modal_content .speedometer',
	'activationClass': 'play',
	'delay'          : 500
};
var activateSpeedometer = function() {
	setTimeout( function() {
		$(speedometer.target).each(function() {
			$(this).addClass(speedometer.activationClass);
		});
	}, speedometer.delay);
};
activateSpeedometer();
