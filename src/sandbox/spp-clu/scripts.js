$(function(){
	// console.log('load injection');
	// Move location component to header
	var $location = $('#tab1').find('.change-location');
	$('#page-header-right').append($location);

	// Remove Channel List PDF
	$('#center-smart-link').remove();

	// Move Channel seach form input to near filter dropdowns
	var $searchInput = $('.channel-search.table-filter');
	$('.clu-filter-wrapper').prepend($searchInput);

	// Move links
	var $printCluLink = $('.ncs-print-link');
	var $viewListingsLink = $('#right-smart-link .smartLink');
	$('#tab1-header-right').prepend($printCluLink);
	$('#tab1-header-right').append($viewListingsLink);

	// Remove hr
	$('.ncs-search-zip-wrapper + .richtext').find('hr').remove();

// Add "refresh" button to channel search
	var refreshCtaHtml = '<div class="cta omega"><div class="twc-icon-before cta flatOmega omega"><a href="#"><span>Refresh</span></a><div class="clear"></div></div></div>';
	var $refreshCtaHtml = $(refreshCtaHtml);
	$('fieldset.channel-search').append($refreshCtaHtml);

	// Add H2 class to H1
	$('.tab-content h1').addClass('h2');
});
