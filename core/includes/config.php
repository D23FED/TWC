<?php
define("ROOT", $_SERVER['DOCUMENT_ROOT']);
define("CORE", ROOT . '/TWC/core/');
define("INC", ROOT . '/TWC/core/includes/');

function get_header() {
	include_once(INC . 'header.php');
}
function get_footer() {
	include_once(INC . 'footer.php');
}
?>