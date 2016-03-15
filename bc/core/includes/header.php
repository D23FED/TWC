<?php

// Include all needed template pieces

	// Load Header -- includes TopHat
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/head.php');

	// Load Browser Alerts
	if ($browserAlerts) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/browserAlerts.php');
	}

	// Load TopHat
	if ($tophat) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/tophat.php');
	}

	// Load NEW TopHat
	if ($new_tophat) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/new_tophat.php');
	}

	// Load TopHat Redesign
	if ($tophat_redesign) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/tophat_redesign.php');
	}

	// Load Logo-only Header
	if ($logoHeader) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/logoHeader.php');
	}

	// Load Main Nav -- Mega-Menu
	if ($nav == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/nav.php');
	}

	// Load NEW Main Nav -- Mega-Menu
	if ($new_nav == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/new_nav.php');
	}

	// Load SubNav if present
	if ($subnav == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/subnav.php');
	}

	// Load SubNav if present
	if ($simpleNav == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/simpleNav.php');
	}

	// Conditionally Load Alert if required
	if ($alert == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/alert.php');
	}

	// Conditionally Load Banner if required
	if ($banner == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/banner.php');
	}

	// Load Supprt Pages Search
	if ($supportSearch == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/supportSearch.php');
	}

	// Load Content opening tags
	if ($content == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/content.php');
	}

	// Conditionally Load Image Content Panel if required
	if ($panel == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/panel.php');
	}

	// Conditionally Load Carousel if required
	if ($carousel == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/carousel.php');
	}

	// Conditionally Load Share Component if required
	if ($share == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/share.php');
	}

    // Conditionally Load Slider if required
	if ($slider == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/slider.php');
	}

?>
