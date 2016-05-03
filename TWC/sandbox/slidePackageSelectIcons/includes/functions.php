<?php
function price($dollars) {
	$price_str = "<span class='h4'>";
	$price_str .= "<sup class='dollar-sign'>$</sup>";
	$price_str .= "<span class='dollars'>$dollars</span>";
	$price_str .= "<sup class='cents'>99</sup>";
	$price_str .= '</span>';
	echo $price_str;
	include('pricing-term.php');
}
?>
