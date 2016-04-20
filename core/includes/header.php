<?php
define("ROOT", $_SERVER['DOCUMENT_ROOT']);
define("CORE", ROOT . '/TWC/core/');
define("INC", ROOT . '/TWC/core/includes/');

function include_core($file, $once = true) {
	$file = INC . $file;
	if ($once) {
		include_once($file);
	} else {
		include($file);
	}
}

function get_header() {
	include_core('header.php');
}

function get_footer() {
	include_once(INC.'footer.php');
}

function the_title() {
	$site_title = 'Time Warner Cable';
	if ( (isset($GLOBALS['title'] )) && ($GLOBALS['title'] !== '') ) {
		echo($GLOBALS['title']);
	} elseif ( (isset($GLOBALS['banner_title'] )) && ($GLOBALS['banner_title'] !== '') ) {
		echo ($GLOBALS['banner_title']);
	} else {
		echo 'Page Title';
	}
	echo " | $site_title";
}

// include_once($_SERVER['DOCUMENT_ROOT'] . '/TWC/core/includes/config.php');

// Include all needed template pieces

// Load Header -- includes TopHat
include_once(INC.'head.php');

// Load Browser Alerts
if ( (isset($browserAlerts)) && ($browserAlerts === true) ) {
	include_core('browserAlerts.php');
}

// Load TopHat
if ( (isset($tophat)) && ($tophat === true) ) {
	include_core('tophat.php');
} else {
}

// Load TopHat Redesign
if ( (isset($tophat_redesign)) && ($tophat_redesign === true) ) {
	include_core('tophat_redesign.php');
}

// Load Logo-only Header
if ( (isset($logoHeader)) && ($logoHeader === true) ) {
	include_core('logoHeader.php');
}

// Load Main Nav -- Mega-Menu
if ( (isset($nav)) && ($nav === true) ) {
	include_core('nav.php');
}

// Load SubNav if present
if ( (isset($subnav)) && ($subnav === true) ) {
	include_core('subnav.php');
}

// Load SubNav if present
if ( (isset($simpleNav)) && ($simpleNav === true) ) {
	include_core('simpleNav.php');
}

// Conditionally Load Alert if required
if ( isset($alert) && ($alert === true) ) {
	include_core('alert.php');
}

// Conditionally Load Banner if required
if ( (isset($banner)) && ($banner === true) ) {
	include_core('banner.php');
}

// Load Supprt Pages Search
if ( isset($supportSearch) && ($supportSearch === true) ) {
	include_core('supportSearch.php');
}

// Load Content opening tags
if ( (isset($content)) && ($content === true) ) {
	include_core('content.php');
}

if ( (isset($container)) && ($container != true) ) {
	include_core('container.php');
} else {
	include_core('containerFull.php');
}

// Conditionally Load Image Content Panel if required
if ( (isset($panel)) && ($panel === true) ) {
	include_core('panel.php');
}

// Conditionally Load Carousel if required
if ( (isset($carousel)) && ($carousel === true) ) {
	include_core('carousel.php');
}

// Conditionally Load Share Component if required
if ( (isset($share)) && ($share === true) ) {
	include_core('share.php');
}

  // Conditionally Load Slider if required
if ( (isset($slider)) && ($slider === true) ) {
	include_core('slider.php');
}

?>
