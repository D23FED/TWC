<!-- Begin SubNav Component -->
<nav role="navigation" class="twc-sub-navigation twc-full twc-backgroundGradient-4">
	<div class="twc-container">
	<?php if ($simpleSubnav) {
		echo $simpleSubnav;
	} else { ?>
		<h1><?php echo $breadcrumb_A ?></h1>
		<div class="subnav navList">
			<ul>
				<li<?php if ($subNavSection =='1') {?> class="twc-active"<?php } ?>><div class="packages smartLink parbase"><?php echo $subNav_1; ?></div></li>
				<li<?php if ($subNavSection =='2') {?> class="twc-active"<?php } ?>><div class="tv smartLink parbase "><?php echo $subNav_2; ?></div></li>
				<li<?php if ($subNavSection =='3') {?> class="twc-active"<?php } ?>><div class="internet smartLink parbase "><?php echo $subNav_3; ?></div></li>
				<li<?php if ($subNavSection =='4') {?> class="twc-active"<?php } ?>><div class="phone smartLink parbase"><?php echo $subNav_4; ?></div></li>
				<li<?php if ($subNavSection =='5') {?> class="twc-active"<?php } ?>><div class="events smartLink parbase "><?php echo $subNav_5; ?></div></li>
				<li<?php if ($subNavSection =='6') {?> class="twc-active"<?php } ?>><div class="intelligenthome smartLink parbase"><?php echo $subNav_6; ?></div></li>
				<li<?php if ($subNavSection =='7') {?> class="twc-active"<?php } ?>><div class="myservices smartLink parbase"><?php echo $subNav_7; ?></div></li>
				<li<?php if ($subNavSection =='8') {?> class="twc-active"<?php } ?>><div class="twc_tv smartLink parbase"><?php echo $subNav_8; ?></div></li>
			</ul>
		</div>
	<?php } ?>
	</div>
</nav>
<!-- End SubNav Component -->
