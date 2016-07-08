<!DOCTYPE html>
<?php
	include_once(CORE_INC . 'variables/global_variables.php');
	// $global_vars = 'variables/global_variables.php';
	// if ( file_exists($global_vars) ) {
	// 	include($global_vars);
	// } else {
	// 	echo '<!-- Global vars not found -->';
	// }
	// $page_vars = 'includes/variables/page_variables.php';

	if (!isset($page_vars)) {
		$page_vars = 'includes/variables/page_variables.php';
		$page_vars_alt = 'includes/vars.php';
	}
	if ( file_exists($page_vars) ) {
		include($page_vars);
		echo '<!-- page_variables.php found -->';
	} elseif ( file_exists($page_vars_alt) ) {
		include($page_vars_alt);
		echo '<!-- pvars.php found -->';
	} else {
		echo '<!-- Page vars not found -->';
	}
?>

<!--[if IE 8 ]><html class="twc-ie twc-ie8 no-js" lang="en"><![endif]-->
<!--[if IE 9 ]><html class="twc-ie twc-ie9 no-js" lang="en"><![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js">
<!--<![endif]-->

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta http-equiv="expires" content="Mon, 26 Jul 1997 05:00:00 GMT"/>
	<meta name="description" content="<?=$description?>">
	<meta name="keywords" content="<?=$keywords?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="format-detection" content="telephone=no">
	<title><?php the_title(); ?></title>
	<link rel="icon" href="/TWC/core/images/favicon.ico" type="image/x-icon">

	<!-- Global Element & Page CSS -->
	<?php
		if ( isset($includeLiveCss) && ($includeLiveCss == true) ) {
			include_once('live-style.php');
		}
	?>
	<link rel="stylesheet" href="/TWC/core/css/main.min.css">
	<?php
		if ( (isset($componentName)) && ($componentName !='') ) { echo '<link rel="stylesheet" href="css/' . $componentName . '.css">'; }
	  if (isset($page_dir) && $page_dir) {
	  	stylesheet($page_dir.'css/page.css');
	  }
	  $stylesheets = array(
	  	'../../css/page.css',
	  	'../css/page.css',
	  	'css/page.css',
	  	'css/style.css',
	  	'style/style.css',
	  	'style/page.css',
	  	'style.css'
  	);
  	foreach ($stylesheets as $value) {
  	  if ( file_exists($value) ) {
  	  	stylesheet($value);
  	  }
  	}

	  // if (file_exists('../../css/page.css')) { echo '<link rel="stylesheet" href="../../css/page.css">'; }
	  // if (file_exists('../css/page.css')) { echo '<link rel="stylesheet" href="../css/page.css">'; }
	  // if (file_exists('css/page.css')) { echo '<link rel="stylesheet" href="css/page.css">'; }
	// Load Page Module Specific CSS
	  if (file_exists('includes/css.php')) { include('includes/css.php');}
	?>

	<link id='printCSS' media='print' rel='stylesheet' type='text/css' href='/TWC/core/css/print.css' />
	<script src="/TWC/core/js/vendor/modernizr-2.6.2.min.js"></script>

</head>

<body id="<?php if ($body_ID !='') { echo($body_ID);}?>">
<?php	include_once(CORE_INC . 'browse-happy.php') ?>
