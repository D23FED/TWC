<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<div class="twc-box-column">
	<h1>Moving made easy</h1>
	<p class="b">Enter the ZIP Code that you are moving to and we'll check to see if service is available in your area.</span>
	
	<div class="zip-form">
		<form action="searchPage">
		    <fieldset>
		        <div class="zip-input">
					<input type="search" placeholder="Zip Code" id="" name="">
				</div>
				<div class="cta omega twc-icon-after icon-angle-right mobile-full" id="checkZip">
				    <a href="#" analyticsname="">
				        <span>Check</span>
				    </a>
				</div>
		    </fieldset>
		</form>			
	</div>
</div>

<div class="contact-form">
	<div class="twc-box-column twc-backgroundGradient-6">
	
		<h1>We'll call you within 5 minutes.**</h1>
		<p class="b">Fill out the form and we'll get back to you within 5 minutes. Time Warner Cable is here to make sure that your TV, Internet and Phone services are set up and ready to go as soon as you are.</p>
		
		<p>* Indicates a required field</p>
            
        <form action="" novalidate>
            <fieldset>
                <!-- First Name / Last Name -->
    			<div class="50-50 section columnControl">
    				<div class="parsys_column twc-col2_5050">
    					<div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
    						<div class="parbase section">
    							
                  <div class="formitem first-name">
                      <label class="required" for="first-name">First Name:</label>
                      <input type="text" id="first-name" name="first-name" pattern="[a-zA-Z]+" autocomplete="given-name" tabindex="1" required autofocus>
                      <span title="Please enter your First Name"></span>
                  </div>
    							
    						</div>
    						<div class="new section"></div>
    					</div>
    					<div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
    						<div class="parbase section">
    							
    							<div class="formitem last-name">
        							<label class="required" for="last-name">Last Name:</label>
                                    <input type="text" id="last-name" name="last-name" autocomplete="family-name" tabindex="2" required>
                                    <span title="Please enter your Last Name"></span>
    							</div>
    							
    						</div>
    						<div class="new section"></div>
    					</div>
    				</div>
    				<div class="columnClear"></div>
    			</div>
    			<!-- .First Name / Last Name -->
    			
    			<!-- Email Address -->
				<div class="100 section columnControl">
					<div class="parsys_column twc-col1_100">
						<div class="parsys parsys0 twc-col1_100-c0 parsys_column">
							<div class="parbase section">
								 <div class="formitem email">
								    <label for="email" class="required">Email Address:</label>
                                    <input id="email" type="email" name="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" autocomplete="email" tabindex="3" required>
                                    <span title="Please enter your Email Address"></span>
							    </div>		
							</div>
						<div class="new section"></div>
						</div>
					</div>
					<div class="columnClear"></div>
				</div>
    			<!-- .Email Address -->
    			
    			<!-- Phone / Alt Phone -->
				<div class="50-50 section columnControl">
					<div class="parsys_column twc-col2_5050">
						<div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
							<div class="parbase section">
								
							    <legend class="required">Contact Number:</legend>
							    <div class="formitem phone-number">
							        <label for="phone-number" class="visually-hidden">Contact Number</label>
									<input type="tel" id="phone-number" name="phone-number" placeholder="XXX-XXX-XXXX" pattern="\d{3}[\-]\d{3}[\-]\d{4}" autocomplete="tel" tabindex="4" required>
									<span title="Please enter a phone number"></span>
								</div>
								<input type="checkbox" name="smsConfirm">
								<span>Contact number is same as mobile number</span>
							</div>
							<div class="new section"></div>
						</div>
						<div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
							<div class="parbase section">
								
							    <legend>Alternate Phone Number:</legend>
							    <div class="formitem phone-number">
							        <label for="phone-number" class="visually-hidden">Mobile Number</label>
									<input type="tel" id="phone-number" name="phone-number" placeholder="XXX-XXX-XXXX" pattern="\d{3}[\-]\d{3}[\-]\d{4}" name="tel" autocomplete="tel" tabindex="5">
									<input type="checkbox" name="smsConfirm">
									<span>Receive a confirmation via SMS on Mobile number †</span>
									<p>†By checking the box, you agree to receive SMS text messages from Time Warner Cable. To opt out of messages you can text STOP to 70626 or HELP for info. Messaging and data rates may apply. Up to (3) messages per month.</p>
									<p>**During typical call center hours 8am-Midnight Central Time</p>
								</div>
								
							</div>
							<div class="new section"></div>
						</div>
					</div>
					<div class="columnClear"></div>
				</div>
    			<!-- .Phone / Alt Phone -->
    			
            </fieldset>
        </form>

		<div class="cta omega twc-icon-after icon-angle-right mobile-full">
		    <a href="#" analyticsname="">
		        <span>Get A Call Back</span>
		    </a>
		</div>
	</div>
</div>

    
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>

