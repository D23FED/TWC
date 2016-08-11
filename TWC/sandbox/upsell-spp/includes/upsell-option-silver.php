<?php if ( $package !== 'Silver' ) : ?>

	<!-- Upsell/Switch to Silver Package -->
	<div class="upsell-option upsell-01 upsell-pkg-silver">
		<div class="inner">
			<!-- Column: Pricing -->
			<div class="col col-pricing">
				<p class="action"><?php echo $offer_action[$silver_offer]; ?></p>
				<p class="package">TV Silver <?php echo $price_prefix[$silver_offer]; ?></p>
				<div class="price-lockup">
					<div class="currency-symbol">$</div>
					<div class="dollars"><?php echo $silver_price; ?></div>
					<div class="terms"><?php echo $terms[$silver_offer]; ?></div>
				</div>
			</div>
			<!-- Column: Package features -->
			<div class="col col-features">
				<div class="row row-channels"><p class="channels">175 + Channels</p> <a href="#" class="">View Channel Lineup</a></div>
				<div class="row"><p class="channel-description">50 Additional Channels including:</p> </div>
				<div class="row row-logos">
					<img src="images/logo-block-silver.png" alt="HBO, Showtime, Cinemax">
				</div>
			</div>
			<!-- Column: Call to action -->
			<div class="col col-cta">
				<div class="twc-icon-after cta <?php echo $cta_class[$silver_offer]; ?>  icon-angle-right section">
					<a href="#">
						<span><?php echo $cta_title[$silver_offer]; ?></span>
					</a>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>

<?php endif; ?>
