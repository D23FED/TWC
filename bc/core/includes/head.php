<!DOCTYPE html>
<!--[if IE 8 ]><html class="twc-ie twc-ie8 no-js" lang="en"><![endif]-->
<!--[if IE 9 ]><html class="twc-ie twc-ie9 no-js" lang="en"><![endif]-->
<!--[if gt IE 9]><!--><html class="no-js"><!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <? include('variables/global_variables.php'); include('includes/variables/page_variables.php'); ?>
    <title><?php if ($title !='') { echo($title); } else { echo ($banner_title); } ?> | Time Warner Cable</title>
    <meta name="description" content="<?=$description?>">
    <meta name="keywords" content="<?=$keywords?>">
    <meta name="viewport" content="width=device-width">
    <meta name="format-detection" content="telephone=no">
    <link rel="icon" href="/TWC/bc/core/images/favicon.ico" type="image/x-icon">

	<!-- Global Element & Page CSS -->
    <!-- <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"> -->

    <link rel="stylesheet" href="/TWC/bc/core/css/main.min.css">
    <? if ($componentName !='') { echo '<link rel="stylesheet" href="css/' . $componentName . '.css">'; }
    if (file_exists('../../css/page.css')) { echo '<link rel="stylesheet" href="../../css/page.css">'; }
    if (file_exists('../css/page.css')) { echo '<link rel="stylesheet" href="../css/page.css">'; }
    if (file_exists('css/page.css')) { echo '<link rel="stylesheet" href="css/page.css">'; }
    // Load Page Module Specific CSS
       if (file_exists('includes/css.php')) { include('includes/css.php');} ?>
    <link id='printCSS' media='print' rel='stylesheet' type='text/css' href='/TWC/bc/core/css/print.css' />
    <script src="/TWC/bc/core/js/vendor/modernizr-2.6.2.min.js"></script>

</head>

<body id="<?php if ($body_ID !='') { echo($body_ID);}?>">
	    <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
