<?php
include_once('constants.php');
include_once(CORE_INC.'functions.php');
include_once(CORE_INC.'head.php');
$headerComponents = array(
	'browserAlerts',
	'tophat',
	// 'tophat_redesign',
	'logoHeader',
	'nav',
	'subnav',
	'simpleNav',
	'alert',
	'banner',
	'supportSearch'
);
$bodyComponents = array(
	'panel',
	'carousel',
	'share',
	'slider'
);
?>
<!-- Begin Page Header -->
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
<!-- End Page Header -->
<?php
// Content Wrapper
if ( isset($content) && ($content == true) ) {
	include_once(CORE_INC.'content.php');
}

// Container
if ( isset($container) && ($container !== true) ) {
	include_once(CORE_INC.'container.php');
} else {
	include_once(CORE_INC.'containerFull.php');
}

// Inside container
foreach ($bodyComponents as $value) {
  if (isset(${$value}) && ${$value} ) {
  	include_once(CORE_INC.$value.'.php');
  }
}
?>
