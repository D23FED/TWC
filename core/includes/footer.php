<?php

	// Load End Content closing tags
	if ( (isset($content)) && ($content === true) ) {
		include(INC . 'endContent.php');
	}

	// Load Sticky Bar if present
  if ( (isset($sticky)) && ($sticky === true) ) {
   	include_once(INC . 'sticky.php');
  }

	// Load Footer
	if ( (isset($footer)) && ($footer === true) ) {
		include(INC . 'foot.php');
	}

	// Conditionally Load Sticky Footer if required
	if ( (isset($stickyFooter)) && ($stickyFooter === true) ) {
		include_once(INC . 'stickyFooter.php');
	}

	// Close the page
		include(INC . 'close.php');

?>
