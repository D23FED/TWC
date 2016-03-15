<?php

	// Load End Content closing tags
	if ($content == true) {
		include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/endContent.php');
	}

	// Load Sticky Bar if present
  if ($sticky == true) {
   	include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/sticky.php');
  }

	// Load Footer
	if ($footer) {
		include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/foot.php');
	}

	// Conditionally Load Sticky Footer if required
	if ($stickyFooter == true) {
		include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/stickyFooter.php');
	}

	// Close the page
		include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/close.php');

?>