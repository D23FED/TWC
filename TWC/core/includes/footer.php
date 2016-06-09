<?php
	// Close content tags
	if ( (isset($content)) && ($content === true) ) {
		include(CORE_INC.'endContent.php');
	}
	// Sticky Bar
  if ( (isset($sticky)) && ($sticky === true) ) {
   	include_once(CORE_INC.'sticky.php');
  }
	// Footer
	if ( (isset($footer)) && ($footer === true) ) {
		include(CORE_INC.'foot.php');
	}
	// Sticky Footer
	if ( (isset($stickyFooter)) && ($stickyFooter === true) ) {
		include_once(CORE_INC.'stickyFooter.php');
	}
	// Close the page
	include_once(CORE_INC.'close.php');
?>
