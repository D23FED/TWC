<?php
// function include_core($file, $once = true) {
// 	$file = CORE_INC . $file;
// 	if ($once) {
// 		include_once($file);
// 	} else {
// 		include($file);
// 	}
// }

// function get_header() {
// 	include_core('header.php');
// }

// function get_footer() {
// 	include_once(CORE_INC.'footer.php');
// }

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

function stylesheet($url) {
	$style_str = "<link rel='stylesheet' href='$url'>";
	echo $style_str;
}
?>

