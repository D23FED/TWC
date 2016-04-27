var wrap = '<div class="wrap"/>';
var row = '<div class="row"/>';

var col1of2 = '<div class="col col-half col-1-of-2"/>';
var col2of2 = '<div class="col col-half col-2-of-2"/>';

var col1of3 = '<div class="col col-third col-1-of-3"/>';
var col2of3 = '<div class="col col-third col-2-of-3"/>';
var col3of3 = '<div class="col col-third col-3-of-3"/>';

var $twoPlay = $('.double');
var $threePlay = $('.triple');

var $pkgTv = $('<span class="package-name package-name-tv">TV</span>');
var $pkgInternet = $('<span class="package-name package-name-internet">Internet</span>');
var $pkgPhone = $('<span class="package-name package-name-phone">Phone</span>');
var $pkgTvDetails = $('<span class="package-description"><a href="#">300+ Channels</a></span>');
var $pkgPhoneDetails = $('<span class="package-description"><a href="#">Up to 200 Mbps</a></span>');
var $pkgInternetDetails = $('<span class="package-description">w/ voicemail</span>');

// $(col1of2).append($pkgTv);
// $col2of2.append($pkgInternet);
// var $twoCol = $wrap;
// var $twoColDesc = $wrap;
// var $threeCol = $wrap;
$twoCol = $(wrap).append(
	$(row)
		.append( $(col1of2).append($pkgTv.prop('outerHTML')) )
		.append( $(col2of2).append($pkgInternet.prop('outerHTML')) )
	);
$twoColDesc = $(wrap).append(
	$(row)
		.append( $(col1of2).append($pkgTvDetails.prop('outerHTML')) )
		.append( $(col2of2).append($pkgInternetDetails.prop('outerHTML')) )
	);
// 3
$threeCol = $(wrap).append(
	$(row)
		.append( $(col1of3).append($pkgTv) )
		.append( $(col2of3).append($pkgInternet) )
		.append( $(col3of3).append($pkgPhone) )
	);
$threeColDesc = $(wrap).append(
	$(row)
		.append( $(col1of3).append($pkgTvDetails.prop('outerHTML')) )
		.append( $(col2of3).append($pkgInternetDetails.prop('outerHTML')) )
		.append( $(col3of3).append($pkgPhoneDetails.prop('outerHTML')) )
	);

$twoPlay.each(function() {
	$(this).find('.packageTitle').empty().append($twoCol.prop('outerHTML'));
	$(this).find('.mainContent > .enrichment:first-child').empty().append($twoColDesc.prop('outerHTML'));
});
$threePlay.each(function() {
	$(this).find('.packageTitle').empty().append($threeCol.prop('outerHTML'));
	$(this).find('.mainContent > .enrichment:first-child').empty().append($threeColDesc.prop('outerHTML'));
});
