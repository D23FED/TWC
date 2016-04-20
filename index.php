<?php
if ( isset($_GET['p']) ) {
	$page = $_GET['p'];
	$lastchar = substr($page, -1);
	$ext = substr($page, -4);
}
if ($lastchar === '/') {
	$page .= 'index.php';
} elseif ($ext !== '.php') {
	$page .= '.php';
}
include "$page";
echo "\n" . '<!--' . "\n";
echo $_GET['p'] . "\n";
echo $page . "\n";
echo substr($page, -1) . "\n";
echo substr($page, -4) . "\n";
echo '-->';
?>