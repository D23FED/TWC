<!-- TV Select + Phone -->
<?php
$title        = 'TV Select + Phone';
$channels     = '125';
$mbps         = '60';
// TV
$price = array(
	'dollars' => 29,
	'super'   => '99/mo',
	'term'    => 'for 12 mos',
	'was'     => '59.99',
	'before'  => 'From:'
	);
// Phone
$price2 = array(
	'dollars' => 19,
	'super'   => '99/mo',
	'term'    => 'for 12 mos',
	'was'     => '',
	'before'  => ''
	);
$features = array(
	'<p><span class="text-info">FREE</span> DVR Service</p>',
	'<br>',
	'<br>'
	);
?>
<div class="package triple">
	<div class="packageHead">
		<div class="packageTitle">
			<p class="h5"><?php echo $title; ?></p>
		</div>
	</div>
	<div class="packageBody">
		<div class="packageInfo">
			<div class="50-50 section columnControl">
				<div class="parsys_column twc-col2_5050">
					<div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
						<div class="parbase section bordered-right">
							<div class="text-center">
								<figure>
									<img src="images/tv_cic_icon.png" alt="">
								</figure>
								<p class="b">TV</p>
								<a href="" class="fs-14"><?php echo $channels; ?>+ <br>Channels</a>
							</div>
						</div>
						<div class="new section"></div>
					</div>
					<div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
						<div class="parbase section">
							<div class="text-center">
								<figure>
									<img src="images/phone_cic_icon.png" alt="">
								</figure>
								<p class="b">Phone</p>
								<p class="fs-14">with <br> voicemail</p>
							</div>
						</div>
						<div class="new section"></div>
					</div>
				</div>
				<div class="columnClear"></div>
			</div>
		</div>
		<hr class="spacer">
		<hr>

		<!-- Pricing/Offer Row -->
		<div class="specialOffer">

			<div class="price-wrap pricing-small pricing-dual">

				<!-- Row: Prices -->
				<div class="row">

					<div class="column">

							<div class="price-lockup">
								<div class="before">
									<div class="column"><?php echo $price['before']; ?></div>
								</div>
								<div class="pricing">
									<div class="price">
										<div class="column left dollars"><span class="currency">$</span><?php echo $price['dollars']; ?>
										</div>
										<div class="column spacer"></div>
										<div class="column right">
											<p class="super"><?php echo $price['super']; ?></p>
											<p class="term"><?php echo $price['term']; ?></p>
										</div>
									</div>
								</div>
								<?php	if ($price['was'] !== ''): ?>
								<div class="after">
									was <span class="price-prev"><?php echo $price['was']; ?></span>
								</div>
								<?php endif; ?>
							</div>

					</div>

					<div class="column right">

						<div class="price-lockup">
							<div class="before">
								<div class="column"><?php echo $price2['before']; ?></div>
							</div>
							<div class="pricing">
								<div class="price">
									<div class="column dollars"><span class="currency">$</span><?php echo $price2['dollars']; ?>
									</div>
									<div class="column">
										<p class="super"><?php echo $price2['super']; ?></p>
										<p class="term"><?php echo $price2['term']; ?></p>
									</div>
								</div>
							</div>
							<?php	if ($price2['was'] !== ''): ?>
								<div class="after row">
									was <span class="price-prev"><?php echo $price2['was']; ?></span>
								</div>
							<?php endif; ?>
						</div>

					</div>

				</div>
				<!-- end .row -->

			</div>


			<hr>
			<hr class="spacer">
			<ul class="included text-left text-center">
				<li>
					<?php echo $features[0]; ?>
				</li>
				<li>
					<?php echo $features[1]; ?>
				</li>
				<li>
					<?php echo $features[2]; ?>
				</li>
			</ul>
		</div><!-- end .specialOffer -->
		<hr>
	</div><!-- end .packageBody -->
	<div class="packageFooter side-by-side">
		<div class="buttonWrapper">
			<div class="cta whiteCTA expandDetails icon-after icon-angle-down">
				<a href="">
					<span>View Details</span>
				</a>
			</div>
		</div>
		<div class="buttonWrapper">
			<div class="cta green icon-after icon-angle-right">
				<a href="">
					<span>Select Offer</span>
				</a>
			</div>
		</div>
		<div class="clear"></div>
		<div class="detailsExpansion">
			<div class="cta icon-after icon-remove right closeDetails">
				<a href="#">
					<span>Close</span>
				</a>
			</div>
			<div class="detailsContent">
				<div class="vertical bulleted">
					<ul>
						<li class="listHead b">TV</li>
						<li>
							<p>200+ channels, with many in HD</p>
						</li>
						<li>
							<p>EPIX Free for 12-months</p>
						</li>
						<li>
							<p>FREE HD Box</p>
						</li>
						<li>
							<p>Access to 30,000 shows and movies with TWC On Demand</p>
						</li>
						<li>
							<p>FREE TWC TV® app - Watch live TV and On Demand on any device</p>
						</li>
					</ul>
				</div>
				<hr class="spacer">
				<hr>
				<hr class="spacer">
				<div class="vertical bulleted">
					<ul>
						<li class="listHead b">Internet</li>
						<li>
							<p>100Mbps speeds and FREE home wifi</p>
						</li>
						<li>
							<p>Unlimited access to 500,000 TWC WiFi Hotspots nationwide</p>
						</li>
						<li>
							<p>No data caps - unlimited usage</p>
						</li>
					</ul>
				</div>
				<hr class="spacer">
				<hr>
				<hr class="spacer">
				<div class="vertical bulleted">
					<ul>
						<li class="listHead b">Extras</li>
						<li>
							<p>$300 Gift Card</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<!--PACKAGE END: <?php echo $title; ?> -->
