<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/TWC/core/includes/constants.php');

// Get page name
if ( isset($_GET['p']) ) {
	$page = $_GET['p'];
	$lastchar = substr($page, -1);
	$ext = substr($page, -4);
}
// Handle references to a directory
if ($lastchar === '/') {
	$page .= 'index.php';
// Handle references to files that a missing ext
} elseif ($ext !== '.php') {
	$page .= '.php';
}

// Location of variables file
$page_vars_file = 'page_variables.php';
$page_vars_file_alt = 'vars.php';
$page_inc_dir = 'includes/';
$page_vars_dir = 'variables/';
$root_dir = 'TWC/';
$page_dir = dirname($page) . '/';
// Look for:
//   "/includes/variables/page_variables.php"
$page_vars = $page_dir.$page_inc_dir.$page_vars_dir.$page_vars_file;
//   or "/includes/vars.php"
$page_vars_alt = $page_dir.$page_inc_dir.$page_vars_file_alt;

// Debug
echo "\n" . '<!--' . "\n";
echo $_GET['p'] . "\n";
echo $page . "\n";
echo substr($page, -1) . "\n";
echo substr($page, -4) . "\n";
echo '-->';

// Assemble page
if ( file_exists($page) ) {
	// Check for location of vars file
	if (file_exists($page_vars)) {
		include_once($page_vars);
	} elseif ( file_exists($page_vars_alt) ) {
		include_once($page_vars_alt);
	} else {
		echo '<!-- No page variables found -->';
	}
	include_once(CORE_INC . 'functions.php');
	include_once(CORE_INC . 'header.php');
	// Image files relative to their project folder will break, search and replace img tags to make them relative to root
	ob_start();
	include($page);
	$page_content = ob_get_clean();
	$body = str_replace('"images/','"'.$page_dir.'images/',$page_content);
	$body = str_replace('"img/','"'.$page_dir.'img/',$body);
	echo $body;
	// include_once($page);
	include_once(CORE_INC . 'footer.php');
} else {
	echo '<h1>Page not found</h1>';
}

?>