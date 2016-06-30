	<!-- Scripts -->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
	<script>window.jQuery || document.write('<script src="/TWC/core/js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
	<script src="/TWC/core/js/vendor/jquery-ui-1.10.3.custom.min.js"></script>
	<!--[if lt IE 10]>
		<script src="/TWC/core/js/vendor/jquery.columnizer.js"></script>
	<![endif]-->
	<script src="/TWC/core/js/vendor/jquery.slider.min.js"></script>
	<script src="/TWC/core/js/vendor/jquery.cookie.js"></script>
	<script src="/TWC/core/js/vendor/jquery.placeholder.js"></script>
	<script src="/TWC/core/js/vendor/respond.min.js"></script>
	<script src="/TWC/core/js/vendor/parsley.min.js"></script>
	<script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?skin=desert"></script>
	<script src="/TWC/core/js/global_init.js"></script>
	<script src="/TWC/core/js/build/production.min.js"></script>
	<?php
		$js_dir = 'js/';
		$js_filename = 'page.js';
		$js_filename_alt = 'scripts.js';
		$js_file = $js_dir.$js_filename;
		$js_file_alt = $js_dir.$js_filename_alt;
		if (isset($page_dir) && $page_dir) {
			if ( file_exists($page_dir.$js_file) ) {
				script_tag($page_dir.$js_file);
			}
			if ( file_exists($page_dir.$js_file_alt) ) {
				script_tag($page_dir.$js_file_alt);
			}
		}
		if (file_exists('../../js/page.js')) {
			script_tag('../../js/page.js');
		} elseif (file_exists('../js/page.js')) {
			script_tag('../js/page.js');
		} elseif (file_exists('js/page.js')) {
			script_tag('js/page.js');
		} elseif (file_exists($js_file_alt)) {
			script_tag($js_file_alt);
		} elseif (file_exists($js_filename_alt)) {
			script_tag($js_filename_alt);
		} elseif (file_exists('script.js')) {
			script_tag('script.js');
		} elseif (file_exists('includes/functions.js')) {
			script_tag('includes/functions.js');
		} else {
			echo '<!-- No .js found -->';
		}
		// Load Footer
		if ( isset($page_dir) && $page_dir ) {
			$scripts = $page_dir.'includes/scripts.php';
			if ( file_exists($scripts) ) {
				include($scripts);
			} else {
				echo "<!--  $scripts not found -->";
			}
		}
		if ( isset($persist) && $persist ) {
			include('persist.php');
		}
	?>

</body>
</html>
