<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

				<div class="100 section columnControl">
					<div class="parsys_column twc-col1_100">
						<div class="parsys parsys0 twc-col1_100-c0 parsys_column">
							<div class="parbase section">

								<!-- Feedback Container -->
								<div class="twc-box-column feedback-container">

								    <p>We can answer your questions right away through our live <a href="">chat online</a> or you can <a href="">contact us</a> by phone. We want you to share your thoughts and ideas about how we can improve our products and services. Please submit your feedback through the form below.</p>

									<div class="40-60 section columnControl">
										<div class="parsys_column twc-col2_4060">
											<div class="parsys parsys0 twc-col2_4060-c0 parsys_column bordered-right">
												<div class="parbase section">

													<div class="formrow">
														<div class="formitem">
															<label for="name" class="b">Your Full Name</label>
															<input id="name" type="text" autocomplete="name" name="name" tabindex="1" required>
															<label class="error-msg" for="name-error" id="name-error">Please fill in your first name</label>
														</div>
													</div>

													<div class="formrow">
														<div class="formitem">
															<label for="email_addr" class="b">Email Address</label>
															<input id="email_addr" name="email" type="email" autocomplete="email" placeholder="joe@email.com" tabindex="2" required>
														</div>
													</div>

													<div class="formrow">
														<div class="formitem">
															<label for="text" class="b">Your Phone Number</label>
															<input id="phone" name="phone" type="text" autocomplete="phone" placeholder="### - ### - ####" tabindex="3" >
														</div>
													</div>

													<div class="channel-name">
														<div class="formrow">
															<div class="formitem">
																<label for="channel-name" class="b">Enter name of channel</label>
																<input id="channel-name" name="channel-name" type="text" placeholder="" tabindex="5">
															</div>
														</div>
													</div>

												</div>
												<div class="new section"></div>
											</div>
											<div class="parsys parsys1 twc-col2_4060-c1 parsys_column">
												<div class="parbase section">

													<div class="formrow">
														<div class="formitem">
															<label for="textarea" class="b">Enter your feedback</label>
															<textarea></textarea>
														</div>

														<div id="fillit">
															If you see this, leave this form field blank.
															<input id="improve" type="text" name="confirm" value="">
														</div>

													</div>

													<div class="formrow">
														<div class="formitem left callback">
															<div class="cta omega twc-icon-after icon-angle-right">
                                                                <a id="submit" href="#" analyticsname="test">
                                                                    <span>Submit</span>
                                                                </a>
                                                            </div>
															<div class="cta">
                                                                <a href="" analyticsname="test">
                                                                    <span>Cancel</span>
                                                                </a>
                                                            </div>
														</div>
													</div>

												</div>
												<div class="new section"></div>
											</div>
										</div>
										<div class="columnClear"></div>
									</div>
								</div>
								<!-- .Feedback Container -->

							</div>
							<div class="new section"></div>
						</div>
					</div>
					<div class="columnClear"></div>
				</div>

    			<!-- Feedback Response -->
    			<div class="twc-box-column feedback-response">

					<div class="100 section columnControl">
						<div class="parsys_column twc-col1_100">
							<div class="parsys parsys0 twc-col1_100-c0 parsys_column">
								<div class="parbase section">
								    <div class="formrow">
								        <div class="formitem">
    								        <b>Thank you for your feedback.</b>
								        </div>
								    </div>
								    <div class="formrow">
								        <div class="formitem">
    								        <div class="cta omega twc-icon-before icon-comments-alt">
                                                <button>
                                                    <span>Need Help? Let's Chat</span>
                                                </button>
                                            </div>
								        </div>
								    </div>
								</div>
								<div class="new section"></div>
							</div>
						</div>
						<div class="columnClear"></div>
					</div>
    			</div>
    			<!-- .Feedback Response -->


<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>
