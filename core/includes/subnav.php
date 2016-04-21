
	<!-- Begin SubNav Component -->
	<nav role="navigation" class="twc-sub-navigation twc-full twc-backgroundGradient-4">
	    <div class="twc-container">

	    	<?php if ($simpleSubnav) { ?>
			<?=$simpleSubnav?>
			<?php } else { ?>

	    	<h1><?=$breadcrumb_A?></h1>

			<div class="subnav navList">

		        <ul>
		        <li<?php if ($subNavSection =='1') {?> class="twc-active"<?php } ?>><div class="smartLink packages parbase"><?=$subNav_1?></div></li>

		            <li<?php if ($subNavSection =='2') {?> class="twc-active"<?php } ?>><div class="smartLink parbase tv"><?=$subNav_2?></div></li>

		            <li<?php if ($subNavSection =='3') {?> class="twc-active"<?php } ?>><div class="smartLink parbase internet"><?=$subNav_3?></div></li>

		            <li<?php if ($subNavSection =='4') {?> class="twc-active"<?php } ?>><div class="phone smartLink parbase"><?=$subNav_4?></div></li>

		            <li<?php if ($subNavSection =='5') {?> class="twc-active"<?php } ?>><div class="smartLink parbase events"><?=$subNav_5?></div></li>

		            <li<?php if ($subNavSection =='6') {?> class="twc-active"<?php } ?>><div class="smartLink intelligenthome parbase"><?=$subNav_6?></div></li>

		            <li<?php if ($subNavSection =='7') {?> class="twc-active"<?php } ?>><div class="smartLink parbase myservices"><?=$subNav_7?></div></li>

		            <li<?php if ($subNavSection =='8') {?> class="twc-active"<?php } ?>><div class="twc_tv smartLink parbase"><?=$subNav_8?></div></li>
		        </ul>

			</div>
			<?php } ?>

	    </div>
	</nav>
	<!-- End SubNav Component -->
