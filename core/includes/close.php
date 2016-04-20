	<!-- Scripts -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/TWC/core/js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
	<script src="/TWC/core/js/vendor/jquery-ui-1.10.3.custom.min.js"></script>
	<script src="/TWC/core/js/global_init.js"></script>
	<!--[if lt IE 10]>
		<script src="/TWC/core/js/vendor/jquery.columnizer.js"></script>
	<![endif]-->
	<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?skin=desert"></script>
	<? if (file_exists('../../js/page.js')) { echo '<script src="../../js/page.js"></script>'; }
	   if (file_exists('../js/page.js')) { echo '<script src="../js/page.js"></script>'; }
	   if (file_exists('js/page.js')) { echo '<script src="js/page.js"></script>'; }
	   if (file_exists('includes/functions.js')) { echo '<script src="includes/functions.js"></script>'; } ?>
	<script src="/TWC/core/js/vendor/jquery.slider.min.js"></script>
	<script src="/TWC/core/js/vendor/respond.min.js"></script>
	<script src="/TWC/core/js/vendor/jquery.cookie.js"></script>
	<script src="/TWC/core/js/vendor/parsley.min.js"></script>
	<script src="/TWC/core/js/vendor/jquery.placeholder.js"></script>
	<script src="/TWC/core/js/build/production.min.js"></script>
	<?php
		// Load Footer
		$scripts = 'includes/scripts.php';
		if ( file_exists($scripts) ) {
			include('includes/scripts.php');
		} else {
			echo "<!--  $scripts not found -->";
		}

		if ( (isset($persist)) && ($persist === true) ) {
			include('persist.php');
		}
	?>

</body>
</html>