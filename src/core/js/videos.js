/* ==========================================================================
    Videos -- Version: 1.9.0.0 - Updated: 12/31/2013 
   ========================================================================== */
// Allow only one video to play at a time
$('video').bind('play', function() {
	activated = this;
	$('video').each(function() {
			if(this != activated) this.pause();
	});
});