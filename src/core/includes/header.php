<?php
include_once('constants.php');
include_once(CORE_INC.'functions.php');
include_once(CORE_INC.'head.php');

// Before container
$headerComponents = array(
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
	'content'
);

foreach ($headerComponents as $value) {
  if (isset(${$value}) && ${$value} ) {
  	include_once(CORE_INC.$value.'.php');
  }
}

// Container
if ( isset($container) && ($container !== true) ) {
	include_once(CORE_INC.'container.php');
} else {
	include_once(CORE_INC.'containerFull.php');
}

// After container
$bodyComponents = array(
	'panel',
	'carousel',
	'share',
	'slider'
	);
foreach ($bodyComponents as $value) {
  if (isset(${$value}) && ${$value} ) {
  	include_once(CORE_INC.$value.'.php');
  }
}

?>

