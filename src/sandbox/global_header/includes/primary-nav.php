<div class="manual-id-wrapper section">
	<div id="primary-nav">
		<div class="parsys">
			<div class="parbase section teaser">
				<script type="text/javascript">teaser();</script>
				<div id="_content_twc_en_global-elements_ge-residential-main_jcr_content_header_manual_id_wrapper_wrapper-parsys_manual_id_wrapper_283391331_wrapper-parsys_teaser" class="campaign campaign-top-nav">
					<div class="general">
						<div class="par parsys">
							<div class="mega-menu_v2 section">
								<div class="new-mega-menu">
									<nav role="navigation" class="twc-new-navigation desktop-hover">
										<div class="twc-container">
											<div class="twc-new-nav list">
												<ul>
													<?php
														$menuItems = array(
															'explore',
															'services',
															'watch',
															'account',
															'support',
															'more'
														);
														foreach ($menuItems as $value) {
															include_once('nav/'.$value.'.php');
														}
													?>
												</ul>
											</div>
										</div>
									</nav>
								</div>
								<div id="7bd76f3f-db23-49a9-b9ed-84f11ebc4dfd"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
		</div>
	</div>
	<!-- end #primary-nav -->
</div>
<script type="text/javascript">
function teaser() {
	initializeTeaserLoader([{
		"path": "/content/campaigns/residential/nav-megamenu-2-1/top-nav/authenticated",
		"name": "authenticated",
		"campaignName": "top-nav",
		"id": "top-nav_authenticated",
		"segments": "/etc/segmentation/twc-segments/seg-aam/authenticated-users"
	}, {
		"path": "/content/campaigns/residential/nav-megamenu-2-1/top-nav/existing-customer-nav",
		"name": "existing-customer-nav",
		"campaignName": "top-nav",
		"id": "top-nav_existing-customer-nav",
		"segments": ["/etc/segmentation/twc-segments/seg-aam/on-network", "/etc/segmentation/twc-segments/seg-aam/existing-customer"]
	}, {
		"path": "/content/campaigns/residential/nav-megamenu-2-1/top-nav/default",
		"name": "default",
		"campaignName": "top-nav",
		"id": "top-nav_default"
	}], "random", "_content_twc_en_global-elements_ge-residential-main_jcr_content_header_manual_id_wrapper_wrapper-parsys_manual_id_wrapper_283391331_wrapper-parsys_teaser", false);
}
jQuery('.tileList').hide();
jQuery('#7bd76f3f-db23-49a9-b9ed-84f11ebc4dfd').siblings('.new-mega-menu').find('.desktop-hidden').parent('li').addClass('desktop-hidden');
// Ready
jQuery(document).ready(function() {
	var tileListDiv = jQuery('.tileList');
	tileListDiv.addClass("");
	tileListDiv.show();
	jQuery('#7bd76f3f-db23-49a9-b9ed-84f11ebc4dfd').siblings('.new-mega-menu').navigation();
	//keeps the function call from causing an error in the teaser edit mode if util.js is not loaded in teaser edit mode
	if (typeof bindUndelagatedAnalyticsTrackingClickEvents == 'function') {
		bindUndelagatedAnalyticsTrackingClickEvents();
	}
});
</script>
