<!-- Internet -->
<?php
$title        = 'Internet';
$mbps         = '60';
$price = array(
	'dollars' => 39,
	'super'   => '99/mo',
	'term'    => 'for 12 mos',
	'was'     => '59.99',
	'before'  => 'From:'
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
			<div class="100 columnControl parsys section">
				<div class="parsys_column twc-col1_100   ">
					<div id="" class="twc-col1_100-c0  parsys_column">
						<div class="parsys parsys0 column">
							<div class="parbase section bordered-right">
								<div class="text-center">
									<figure>
										<img src="images/internet_cic_icon.png" alt="">
									</figure>
									<p class="b">Internet</p>
									<a class="fs-14">Up to <br><?php echo $mbps; ?>Mbps</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="columnClear"></div>
			</div>
			<!-- end .columnControl -->
		</div>
		<hr class="spacer">
		<hr>

		<!-- Pricing/Offer Row -->
		<div class="specialOffer">
			<div class="price-wrap pricing-small">
				<div class="price-lockup">
				  <div class="before">
				  	<?php echo $price['before']; ?>
				  </div>
				  <div class="pricing">
				    <div class="price">
				      <div class="column dollars"><span class="currency">$</span><?php echo $price['dollars']; ?>
				      </div>
				      <div class="column">
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
			<hr>
			<hr class="spacer">
			<ul class="included text-left text-center">
				<li><?php echo $features[0]; ?></li>
				<li><?php echo $features[1]; ?></li>
				<li><?php echo $features[2]; ?></li>
			</ul>
		</div>
		<hr>
	</div>
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
