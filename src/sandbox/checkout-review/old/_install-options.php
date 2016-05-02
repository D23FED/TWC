<div class="parsys par-content">
	<div class="section installOptionsWrapper">
		<div id="singleVisitDatesJson" data-single-visit-json="<?php include('_datepicker.php') ?>"></div>
		<!-- Installation Options -->
		<form id="js-main-form" method="get" action="">
			<div class="installation-options">
				<div class="installOptionsHeading options-heading">
					<h3 class="" style="">Installation options available to you:</h3>
				</div>
				<div id="section-schedule" class="collapsible active js-expander-initialized">
					<header>
						<label class="clearfix" for="appointment">
							<input id="appointment" class="radio installation" type="radio" checked="checked" data-name="Technician Visit" value="1-VZVI" name="installation">
							<p>
								<strong>
								Schedule an appointment for a technician to install my services. Additional charges may apply.
								<br>
								<br>Any applicable service charges will be itemized under One-Time Charges below.
								</strong>
							</p>
							<span class="price with-sticker">Included</span>
							<span class="promo-sticker"></span>
						</label>
					</header>
					<section>
						<div class="option-details content-wrap" style="opacity: 1;">
							<div class="schedule-a-technician scheduleTechnician">
								<div class="option-details content-wrap">
									<div class="twc-plain-text-p-strong parbase header-text text">
										<p>
											<strong></strong>
										</p>
									</div>
									<div class="error-module  hidden">
										<div class="error-wrap">
											<p class="parbase text missingFieldWarning twc-plain-text">Please review and correct the highlighted area(s) below:</p>
										</div>
									</div>
									<div class="date">
										<h5>Installation: All Services</h5>
										<div class="time-slot-text1 twc-base-text-tooltips">
											<p>Choose two dates and times that work for you. We’ll do our best to accommodate your preferences and contact you via email to confirm your appointment date.</p>
										</div>
										<fieldset>
											<div class="first-choice-text1 twc-plain-text-p-strong parbase text">
												<p>
													<strong>
													Your First Choice
													</strong>
												</p>
											</div>
											<input id="first-choice-date1" type="text" placeholder="MM/DD/YYYY" readonly="">
											<a href="#" class="datepicker-link">
											<span>Datepicker</span>
											</a>
											<select id="first-choice-time1" disabled="disabled" class="invisible"></select>
										</fieldset>
										<fieldset>
											<div class="twc-plain-text-p-strong parbase second-choice-text1 text">
												<p>
													<strong>
													Your Second Choice
													</strong>
												</p>
											</div>
											<input id="second-choice-date1" type="text" placeholder="MM/DD/YYYY" readonly="">
											<a href="#" class="datepicker-link">
											<span>Datepicker</span>
											</a>
											<select id="second-choice-time1" disabled="disabled" class="invisible"></select>
										</fieldset>
										<div class="twc-base-text-tooltips note-text1">
											<p>Please note that someone 18 or over must be at home to let our technicians into your home.</p>
										</div>
									</div>
									<div class="date hidden" style="display: none;">
										<h5>Loading...</h5>
										<div class="time-slot-text2 twc-base-text-tooltips">
											<p>Choose two dates and times that work for you. We’ll do our best to accommodate your preferences and contact you via email to confirm your appointment date.
												<br>
											</p>
										</div>
										<fieldset>
											<div class="first-choice-text2 twc-plain-text-p-strong parbase text">
												<p>
													<strong>
													Your First Choice
													</strong>
												</p>
											</div>
											<input id="first-choice-date2" type="text" placeholder="MM/DD/YYYY" readonly="">
											<a href="#" class="datepicker-link">
											<span>Datepicker</span>
											</a>
											<select id="first-choice-time2" disabled="disabled" class="invisible"></select>
										</fieldset>
										<fieldset>
											<div class="second-choice-text2 twc-plain-text-p-strong parbase text">
												<p>
													<strong>
													Your Second Choice
													</strong>
												</p>
											</div>
											<input id="second-choice-date2" type="text" placeholder="MM/DD/YYYY" readonly="">
											<a href="#" class="datepicker-link">
											<span>Datepicker</span>
											</a>
											<select id="second-choice-time2" disabled="disabled" class="invisible"></select>
										</fieldset>
										<div class="twc-base-text-tooltips note-text2">
											<p>Please note that someone 18 or over must be at home to let our technicians into your home.
												<br>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<!-- .collapsible -->
			</div>
			<!-- .installation-options -->
		</form>
		<header class="sub-header">
			<h3>
				<div class="new-services parbase text twc-plain-text">Review Your New Services</div>
			</h3>
		</header>
		<!-- Service Details -->
		<div class="solid module service-details-wrapper" style="position: relative;">
			<div class="service-details serviceDetails">
				<div class="services-details">
				<?php include('install-options/_analytics-product-input.php') ?>
				<?php include('install-options/modules/_monthly-charges.php') ?>
				<?php include('install-options/modules/_one-time-charges.php') ?>
				<?php include('install-options/modules/_gift.php') ?>
					<!-- end if:hasIncentive -->
					<p class="footnote"></p>
				</div>
			</div>
		</div>
		<!-- Upsell -->
		<?php include('install-options/modules/_review-order-upsell.php') ?>
		<nav class="button-nav ">
			<a href="/residential/order/session/da7d7b4d-a68b-4cc9-9116-367ae7b7e9b0?order_reviewed&amp;qso=1-GH5YJ" class="js-next-button blue-button" analyticsname="install options:1:1:continue" data-lob="">
			<span class="arrow">Continue</span>
			</a>
		</nav>
	</div>
</div>