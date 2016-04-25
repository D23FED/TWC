<?php

	// Load End Content closing tags
	if ( (isset($content)) && ($content === true) ) {
		include(CORE_INC . 'endContent.php');
	}

	// Load Sticky Bar if present
  if ( (isset($sticky)) && ($sticky === true) ) {
   	include_once(CORE_INC . 'sticky.php');
  }

	// Load Footer
	if ( (isset($footer)) && ($footer === true) ) {
		include(CORE_INC . 'foot.php');
	}

	// Conditionally Load Sticky Footer if required
	if ( (isset($stickyFooter)) && ($stickyFooter === true) ) {
		include_once(CORE_INC . 'stickyFooter.php');
	}

	// Close the page
		include(CORE_INC . 'close.php');

?>
