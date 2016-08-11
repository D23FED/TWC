<?php if ( $package !== "Select" ) : ?>

	<!-- Upsell/Switch to Select Package -->
	<div class="upsell-option upsell-01 upsell-pkg-select">
		<div class="inner">
			<!-- Column: Pricing -->
			<div class="col col-pricing">
				<p class="action"><?php echo $offer_action[$select_offer]; ?></p>
				<p class="package">TV Select <?php echo $price_prefix[$select_offer]; ?></p>
				<div class="price-lockup">
					<div class="currency-symbol">$</div>
					<div class="dollars"><?php echo $select_price; ?></div>
					<div class="terms"><?php echo $terms[$select_offer]; ?></div>
				</div>
			</div>
			<!-- Column: Package features -->
			<div class="col col-features">
				<div class="row row-channels"><p class="channels">125 + Channels</p> <a href="#" class="">View Channel Lineup</a></div>
				<div class="row"><p class="channel-description">FREE DVR Service | Featured Channels:</p> </div>
				<div class="row row-logos">
					<img src="images/logo-block-select.png" alt="MTV, CNN, ESPN, TLC, Discovery Channel, Lifetime">
				</div>
			</div>
			<!-- Column: Call to action -->
			<div class="col col-cta">
				<div class="twc-icon-after cta <?php echo $cta_class[$select_offer]; ?>  icon-angle-right section">
					<a href="#">
						<span><?php echo $cta_title[$select_offer]; ?></span>
					</a>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>

<?php endif; ?>
