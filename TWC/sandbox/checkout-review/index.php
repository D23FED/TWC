<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<div class="checkout-review"><!-- Page Header -->
	<header>
		<h1 class="page-title">Choose Installation &amp; Review Order</h1>
	</header>
	<section class="section-installation-options">
		<header><h2 class="section-title">Installation options available to you:</h2></header>
		<div class="body">
			<form action="" id="form-install" class="form-install">
				<!-- Select install option -->
						<div class="select-install-type">
							<fieldset>
							<table class="table-install-options">
								<tbody>
									<tr>
										<td><input type="radio" id="input-appointment"></td>
										<td><label for="appointment">
												<span class="option-description"><span><strong>Schedule an appointment for a technician to install my services.</strong></span> <span class="details">Additional charges may apply. Any applicable service charges will be itemized under One-Time Charges below.</span></span>
											</label></td>
										<td><div class="price">$39.99</div></td>
									</tr>
								</tbody>
							</table>
							</fieldset>
								<!-- <div class="row">
									<div class="column"></div>
									<div class="column"></div>
									<div class="column"></div>
								</div> -->
						</div>

						<!-- Select install date -->
						<div class="select-install-date">
							<header>
								<h3>Installation: All Services</h3>
							</header>
							<div class="row">
								<div class="column col-50">
								<p><strong>Choose two dates and times that work for you. </strong></p>
									<fieldset class="select-date select-date-01">
										<label for="">Your First Choice</label>
										<div class="input-group">
										  <input type="text" class="form-control datepicker" placeholder="MM/DD/YYYY" aria-describedby="selected-date-01">
										  <!-- <span class="input-group-addon" id="selected-date-01">@</span> -->
										</div>
									</fieldset>
									<fieldset class="select-date select-date-02">
										<label for="">Your Second Choice</label>
										<div class="input-group">
										  <input type="text" class="form-control datepicker" placeholder="MM/DD/YYYY" aria-describedby="selected-date-02">
										  <!-- <span class="input-group-addon" id="selected-date-02">@</span> -->
										</div>
									</fieldset>

								</div>

								<div class="column col-50">
								<p>We’ll do our best to accommodate your preferences and contact you via email to confirm your appointment date.</p>

								<p class="note">Please note that someone 18 or over must be at home to let our technicians into your home.</p>

								</div>
							</div>
						</div>

				<div class="row">
					<div class="column col-50">




					</div>

					<div class="column col-50">

					</div>
				</div>







			</form>
		</div>
	</section>

	<!-- Review your new services -->
	<section class="section-review-services">
		<header><h2 class="section-title">Review Your New Services</h2></header>
		<div class="body">
			<!-- Monthly Charges -->
			<div class="services-section monthly-charges">
				<header>
					<h3>Monthly Charges</h3>
				</header>
				<!-- Package -->
				<table class="total">
					<tr>
						<td class="feature">Package Price</td>
						<td class="price">$99.99</td>
					</tr>
				</table>
				<!-- TV -->
				<div class="lob tv">
					<header>
						<h4>TV</h4><a href="#" class="modify-features">Add/Edit boxes or channels</a>
					</header>
					<table>
						<tr>
							<td class="feature">Preferred TV</td>
							<td class="price">Included</td>
						</tr>
						<tr>
							<td class="feature">HD Box</td>
							<td class="price">Included</td>
						</tr>
						<tr>
							<td class="feature">EPIX</td>
							<td class="price">Included</td>
						</tr>
					</table>
				</div>
				<!-- Internet -->
				<div class="lob internet">
					<header>
						<h4>Internet</h4><a href="#" class="modify-features">Add/Edit speed or equipment</a>
					</header>
					<table>
						<tr>
							<td class="feature">Ultimate 100</td>
							<td class="price">Included</td>
						</tr>
						<tr>
							<td class="feature">Internet Modem with Free Home WiFi</td>
							<td class="price">$10.00 per Month</td>
						</tr>
					</table>
				</div>
				<!-- Phone -->
				<div class="lob phone">
					<header>
						<h4>Phone</h4> <a href="#" class="modify-features">Add/Edit features</a>
					</header>
					<table>
						<tr>
							<td class="feature">TWC Phone</td>
							<td class="price">Included</td>
						</tr>
						<tr>
							<td class="feature">Voicemail</td>
							<td class="price">Included</td>
						</tr>
						<tfoot class="total">
							<tr>
								<td class="feature">Total Monthly Charges</td>
								<td class="price">$109.99</td>
							</tr>
						</tfoot>
					</table>
				</div>
			</div>
			<div class="services-section one-time-charges">
				<header>
					<h3>One-Time Charges</h3>
				</header>
				<table>
					<tbody>
						<tr>
							<td class="feature">Service Installation Fee</td>
							<td class="price">$9.99</td>
						</tr>
						<tr>
							<td class="feature">Included Outlet</td>
							<td class="price">$9.99</td>
						</tr>
						<tr>
							<td class="feature">TWC WiFi Router Installation Fee</td>
							<td class="price">$9.99</td>
						</tr>
						<tr>
							<td class="feature">Phone Activation Fee</td>
							<td class="price">$9.99</td>
						</tr>
						<tr>
							<td class="feature">Phone Jack</td>
							<td class="price">$9.99</td>
						</tr>
					</tbody>
					<tfoot class="total">
						<tr>
							<td class="feature">Total One-Time Charges</td>
							<td class="price">$0.00</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<!-- Gift -->
			<div class="services-section gift">
			<header>
				<h3>Special Gift for You</h3>
			</header>
			<p>$300 Gift Card upon proof of switch. Look out for an email and postcard with details.</p>
			</div>
		</div>
	</section>
	<!-- Upsell -->
	<section class="section-upsell">
		<header> <h2 class="section-title">More Popular Offers</h2>
		</header>
		<div class="body">
			<div class="row">
				<div class="column col-50">

					<div class="upsell upsell-01">
						<img src="img/upsell-01.jpg" alt="">
						<!-- <h3 class="title">Add Battery Backup for your Phone</h3>
						<div class="photo"><img src="#" alt=""></div>
						<div class="description">
							<p class="price">$35.00</p>
							<p>Don't worry about power outages. Get peace of mind with 8 hours of standby power.</p>
							<button class="add">Add To Order</button>
						</div> -->
					</div>

				</div>
				<div class="column col-50">

					<div class="upsell upsell-02">
					<img src="img/upsell-02.jpg" alt="">
						<!-- <h3 class="title">How about 200Mbps?</h3>
						<div class="photo"><img src="#" alt=""></div>
						<div class="description">
							<p class="price">Up to 200Mbps and Home WiFi - super-fast download speeds.</p>
							<button class="add">Add To Order</button>
						</div> -->
					</div>

				</div>
			</div>
		</div>
	</section>
	<section class="section-continue">
		<nav class="body">
			<div class="cta flatOmega twc-icon-after icon-angle-right mobile-full">
				<a href="#" rel="next">Continue</button>
			</div>
		</nav>
	</section>
	<section class="section-disclaimer">
		<div class="body"><?php include('includes/_disclaimer.php') ?></div>
	</section>
	<!-- Installation option -->
		<!-- Schedule checkbox -->
		<!-- Choose date section -->
	<!-- Review your new services -->
		<!-- Monthly charges -->
			<!-- Subpackages -->
		<!-- One-time charges -->
		<!-- Special gift -->
	<!-- More popular offers -->
		<!-- Offer -->
		<!-- Offer -->
	<!-- Continue-->
</div>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>