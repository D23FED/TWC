<?php
// Constants
// define("ROOT", $_SERVER['DOCUMENT_ROOT'].'/');
// define("CORE", ROOT . '/core/');
// define("CORE_INC", ROOT . '/core/includes/');

$url = $_SERVER['HTTP_HOST'];
$parsedUrl = parse_url($url);
$host = explode('.', $parsedUrl['host']);
$subdomain = $host[0];
echo $_SERVER['HTTP_HOST'];
echo 'loaded constants '.$subdomain;
define("ROOT", $_SERVER['DOCUMENT_ROOT'].'/');
if ( $subdomain != '' ) {
	$urlBase = '';
} else {
	$urlBase = 'TWC';
}
define("CORE", ROOT . $urlBase . '/core/');
define("CORE_INC", ROOT . $urlBase . '/core/includes/');
?>

