$( window ).load(function() {
	$(function() {
		$('.btn-rotate').on('click', function(e) {
			e.preventDefault();
			var rotation = $(this).text() + 'deg';
			$('.fill, .mask.full').css('transform','rotate('+rotation+')');
		});

	})

	// // Circle 07
	// var p = document.querySelector('.animate'),
	// offset = 1000,
	// to = 500;
	// var animateTo() = function() {
	// 	p.style.strokeDashoffset = offset;
	// 	if (offset > to) {
	// 		offset--;
	// 		animationID = requestAnimationFrame(animateTo);
	// 	} else {

	// 	}

	// }

	// animateTo();

})
var $target = $('.circle-08 .semicircle');
var totalLength = $target[0].getTotalLength();
$target.css('stroke-dasharray',totalLength);
$target.css('stroke-dashoffset',totalLength);
offset = totalLength;
var $controls =  $('.circle-08 .controls');
function animateCircle(args) {
	if (args.to) {
		max = (100 - args.to) * totalLength * .01;
		console.log(max)
	} else {
		max = 0;
	}
	var step = function() {
		$target[0].style.strokeDashoffset = offset;
		offset--;
		$('div.offset .raw').text(Math.floor(offset));
		$('div.offset .percent').text( Math.floor( offset / totalLength ) );
		if (offset < max) {
			return;
		}
		requestAnimationFrame(step);
	};
	step();
}
animateCircle({
	to: 25
});
for (var i = 1; i < 5; i++) {
	$controls.append('<a href="#">'+i*25+"</a>");
}
