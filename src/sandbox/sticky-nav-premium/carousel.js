// Carousel
// Vars
var buttons = {
	prev: '<a class="slick-prev btn-prev"></a>',
	next: '<a class="slick-next btn-next"></a>'
};

// Init
$(function() {
	$('#sticky-subnav .twc-container').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: true,
		prevArrow: buttons.prev,
		nextArrow: buttons.next
	});
});
