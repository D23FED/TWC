<?php
	include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/config.php');

// Include all needed template pieces

	// Load Header -- includes TopHat
	include_once(INC . 'head.php');

	// Load Browser Alerts
	if ( (isset($browserAlerts)) && ($browserAlerts === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/browserAlerts.php');
	}

	// Load TopHat
	if ( (isset($tophat)) && ($tophat === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/tophat.php');
	}

	// Load TopHat Redesign
	if ( (isset($tophat_redesign)) && ($tophat_redesign === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/tophat_redesign.php');
	}

	// Load Logo-only Header
	if ( (isset($logoHeader)) && ($logoHeader === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/logoHeader.php');
	}

	// Load Main Nav -- Mega-Menu
	if ( (isset($nav)) && ($nav === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/nav.php');
	}

	// Load SubNav if present
	if ( (isset($subnav)) && ($subnav === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/subnav.php');
	}

	// Load SubNav if present
	if ( (isset($simpleNav)) && ($simpleNav === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/simpleNav.php');
	}

	// Conditionally Load Alert if required
	if ( isset($alert) && ($alert === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/alert.php');
	}

	// Conditionally Load Banner if required
	if ( (isset($banner)) && ($banner === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/banner.php');
	}

	// Load Supprt Pages Search
	if ( isset($supportSearch) && ($supportSearch === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/supportSearch.php');
	}

	// Load Content opening tags
	if ( (isset($content)) && ($content === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/content.php');
	}

	if ( (isset($container)) && ($container != true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/container.php');
	} else {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/containerFull.php');
	}

	// Conditionally Load Image Content Panel if required
	if ( (isset($panel)) && ($panel === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/panel.php');
	}

	// Conditionally Load Carousel if required
	if ( (isset($carousel)) && ($carousel === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/carousel.php');
	}

	// Conditionally Load Share Component if required
	if ( (isset($share)) && ($share === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/share.php');
	}

    // Conditionally Load Slider if required
	if ( (isset($slider)) && ($slider === true) ) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/slider.php');
	}

?>
