<?php

// Include all needed template pieces

// Load Header -- includes TopHat
include_once(CORE_INC.'head.php');

$arr = array(
	'browserAlerts',
	'tophat',
	'tophat_redesign',
	'logoHeader',
	'nav',
	'subnav',
	'simpleNav',
	'alert',
	'banner',
	'supportSearch',
	'content',
	'panel',
	'carousel',
	'share',
	'slider'
	);
foreach ($arr as $value) {
  if (isset(${$value}) && ${$value} ) {
  	include_once(CORE_INC.$value.'.php');
  }
}

// Load Browser Alerts
// if ( isset($browserAlerts) && $browserAlerts ) {
// 	include_once(CORE_INC.'browserAlerts.php');
// }

// // Load TopHat
// if ( isset($tophat) && $tophat ) {
// 	include_once(CORE_INC.'tophat.php');
// } else {
// }

// // Load TopHat Redesign
// if ( isset($tophat_redesign) && $tophat_redesign ) {
// 	include_once(CORE_INC.'tophat_redesign.php');
// }

// // Load Logo-only Header
// if ( isset($logoHeader) && $logoHeader ) {
// 	include_once(CORE_INC.'logoHeader.php');
// }

// // Load Main Nav -- Mega-Menu
// if ( isset($nav) && $nav ) {
// 	include_once(CORE_INC.'nav.php');
// }

// // Load SubNav if present
// if ( isset($subnav) && $subnav ) {
// 	include_once(CORE_INC.'subnav.php');
// }

// // Load SubNav if present
// if ( isset($simpleNav) && $simpleNav ) {
// 	include_once(CORE_INC.'simpleNav.php');
// }

// // Conditionally Load Alert if required
// if ( isset($alert) && $alert ) {
// 	include_once(CORE_INC.'alert.php');
// }

// // Conditionally Load Banner if required
// if ( isset($banner) && $banner ) {
// 	include_once(CORE_INC.'banner.php');
// }

// // Load Supprt Pages Search
// if ( isset($supportSearch) && $supportSearch ) {
// 	include_once(CORE_INC.'supportSearch.php');
// }

// // Load Content opening tags
// if ( isset($content) && $content ) {
// 	include_once(CORE_INC.'content.php');
// }

if ( isset($container) && ($container !== true) ) {
	include_once(CORE_INC.'container.php');
} else {
	include_once(CORE_INC.'containerFull.php');
}

// // Conditionally Load Image Content Panel if required
// if ( isset($panel) && $panel ) {
// 	include_once(CORE_INC.'panel.php');
// }

// // Conditionally Load Carousel if required
// if ( isset($carousel) && $carousel ) {
// 	include_once(CORE_INC.'carousel.php');
// }

// // Conditionally Load Share Component if required
// if ( isset($share) && $share ) {
// 	include_once(CORE_INC.'share.php');
// }

// // Conditionally Load Slider if required
// if ( isset($slider) && $slider ) {
// 	include_once(CORE_INC.'slider.php');
// }

?>

