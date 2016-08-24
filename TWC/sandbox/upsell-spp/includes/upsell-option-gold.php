<?php if ( $package !== 'Gold' ) : ?>

	<!-- Upsell/Switch to Gold Package -->
	<div class="upsell-option upsell-02 upsell-pkg-gold">
		<div class="inner">
			<!-- Column: Pricing -->
			<div class="col col-pricing">
			<p class="action"><?php echo $offer_action[$gold_offer]; ?></p>
				<p class="package">TV Gold <?php echo $price_prefix[$gold_offer]; ?></p>
				<div class="price-lockup">
					<div class="currency-symbol">$</div>
					<div class="dollars"><?php echo $gold_price; ?></div>
					<div class="terms"><?php echo $terms[$gold_offer]; ?></div>
				</div>
			</div>
			<!-- Column: Package features -->
			<div class="col col-features">
				<div class="row row-channels"><p class="channels">200 + Channels</p> <a href="#" class="">View Channel Lineup</a></div>
				<div class="row row-features"><p class="channel-description">50 Additional Channels including:</p> </div>
				<div class="row row-logos">
					<img src="images/logo-block-gold.png" alt="HBO, Showtime, Cinemax, Starz, Starz Encore, Epix">
				</div>
			</div>
			<!-- Column: Call to action -->
			<div class="col col-cta">
				<div class="twc-icon-after cta <?php echo $cta_class[$gold_offer]; ?>  icon-angle-right section">
					<a href="#">
						<span><?php echo $cta_title[$gold_offer]; ?></span>
					</a>
					<div class="clear"></div>
				</div>
			</div>
		</div>
	</div>

<?php endif; ?>
