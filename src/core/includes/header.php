<?php
include_once('constants.php');
include_once(CORE_INC.'functions.php');
include_once(CORE_INC.'head.php');

$headerComponents = array(
	'browserAlerts',
	'tophat',
	'tophat_redesign',
	'logoHeader',
	'nav',
	'subnav',
	'simpleNav',
	'alert',
	'banner',
	'supportSearch',
	'content'
);
$bodyComponents = array(
	'panel',
	'carousel',
	'share',
	'slider'
	);
?>
<div class="parsys header tplparsys">
  <div class="tplparys_inherited">
    <div class="parsys header tplparsys">
			<?php //include('includes/browser-alerts.php'); ?>
			<?php //include('includes/style-injection-01.php'); ?>
      <div class="section">
        <div class="manual-id-wrapper">
          <div id="site-header">
            <div class="parsys">
	            <?php
		            foreach ($headerComponents as $value) {
		              if (isset(${$value}) && ${$value} ) {
		              	include_once(CORE_INC.$value.'.php');
		              }
		            }
	            ?>
	            <?php //include('includes/top-hat.php'); ?>
	            <?php //include('includes/logo-row.php'); ?>
	            <?php //include('includes/primary-nav.php'); ?>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="manual-id-wrapper">
          <div id="startContent">
            <div class="parsys">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<?php

// Before container
$headerComponents = array(
	'browserAlerts',
	'tophat',
	'tophat_redesign',
	'logoHeader',
	'nav',
	'subnav',
	'simpleNav',
	'alert',
	'banner',
	'supportSearch',
	'content'
);



// Container
if ( isset($container) && ($container !== true) ) {
	include_once(CORE_INC.'containerFull.php');
} else {
	include_once(CORE_INC.'container.php');
}

// After container

foreach ($bodyComponents as $value) {
  if (isset(${$value}) && ${$value} ) {
  	include_once(CORE_INC.$value.'.php');
  }
}

?>

