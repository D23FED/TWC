<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>
<div class="my-move">
  <div class="75-25 section columnControl">
    <div class="parsys_column twc-col2_7525">
      <div class="parsys parsys0 twc-col2_7525-c0 parsys_column">
        <div class="parbase section">
          <h1>TWC My Move</h1>
          <div class="twc-box-column">
            <div class="60-40 section columnControl">
              <div class="parsys_column twc-col2_6040">
                <div class="parsys parsys0 twc-col2_6040-c0 parsys_column">
                  <div class="parbase section">
                  <h5>Already a TWC Customer?</h5>
                  <h6>Moving Made Easy</h6>
                  <p>Enter the ZIP Code that you are moving to and we'll check to see if service is available in your area</p>
                  </div>
                  <div class="new section"></div>
                </div>
                <div class="parsys parsys1 twc-col2_6040-c1 parsys_column">
                  <div class="parbase section">
                    <div class="box">
                      <div class="zip-form">
                        <form action="searchPage">
                          <fieldset>
                            <div class="zip-input">
                              <input type="search" name="" id="" placeholder="Zip Code"></div>
                              <div id="checkZip" class="cta omega">
                              <a analyticsname="" href="#">
                                <span>
                                  Check
                                </span>
                              </a>
                            </div>
                          </fieldset>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="new section"></div>
                </div>
              </div>
              <div class="columnClear"></div>
            </div>
            <div class="call-back">
              <hr>
              <h6>We'll call you within 5 minutes.**</h6>
              <p>Fill out the form and we'll get back to you within 5 minutes. Time Warner Cable is here to make sure that your TV, Internet and Phone services are set up and ready to go as soon as you are.</p>
              <div class="formValidate">
                <form data-parsley-validate>
                  <div class="50-50 section columnControl">
                    <div class="parsys_column twc-col2_5050">
                      <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                        <div class="parbase section">
                          <div class="formitem first-name-only">
                            <label class="required" for="first-name-only">
                              First Name:
                            </label>
                            <input type="text"
                             id="first-name"
                             name="first-name-only"
                             data-parsley-pattern="[a-zA-Z]+"
                             autocomplete="given-name"
                             tabindex="1"
                             data-parsley-trigger="focusout"
                             data-parsley-required-message="First Name is required"
                             data-parsley-required="">
                          </div>
                        </div>
                        <div class="new section"></div>
                      </div>
                      <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                        <div class="parbase section">

                          <div class="formitem last-name">
                            <label class="required" for="last-name">
                              Last Name:
                            </label>
                            <input type="text"
                             id="last-name"
                             name="last-name"
                             autocomplete="family-name"
                             tabindex="2"
                             data-parsley-trigger="focusout"
                             data-parsley-required-message="Please enter your Last Name"
                             data-parsley-required="">
                          </div>

                        </div>
                        <div class="new section"></div>
                      </div>
                    </div>

                    <div class="columnClear"></div>
                  </div>
                  <div class="50-50 section columnControl">
                    <div class="parsys_column twc-col2_5050">
                      <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                        <div class="parbase section">
                          <div class="formitem email">
                            <label for="email" class="required">
                              Email Address:
                            </label>
                            <input id="email"
                                   type="email"
                                   name="email"
                                   data-parsley-pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                                   autocomplete="email"
                                   tabindex="3"
                                   data-parsley-trigger="focusout"
                                   data-parsley-required-message="Please enter your Email Address"
                                   data-parsley-required="">
                          </div>
                        </div>
                        <div class="new section"></div>
                      </div>
                      <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                        <div class="parbase section">
                          <div class="formitem zip">
                            <label for="zip" class="required">
                              ZIP Code:
                            </label>
                            <input type="text"
                                   id="zip"
                                   name="zip"
                                   data-parsley-pattern="(\d{5}([\-]\d{4})?)"
                                   autocomplete="postal-code"
                                   tabindex="4"
                                   data-parsley-trigger="focusout"
                                   data-parsley-required-message="Please enter your ZIP"
                                   data-parsley-required="">
                          </div>
                        </div>
                        <div class="new section"></div>
                      </div>
                    </div>
                    <div class="columnClear"></div>
                  </div>
                  <div class="50-50 section columnControl">
                    <div class="parsys_column twc-col2_5050">
                      <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                        <div class="parbase section">
                          <div class="formitem phone-number">
                            <label for="phone-number" class="required">
                              Contact Number
                            </label>
                            <input type="tel"
                                   id="phone-number"
                                   name="phone-number"
                                   placeholder="XXX-XXX-XXXX"
                                   data-parsley-pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                                   autocomplete="tel"
                                   tabindex="11"
                                   data-parsley-trigger="focusout"
                                   data-parsley-required-message="Please enter a valid Phone Number"
                                   data-parsley-required="">
                          </div>
                          <div class="formitem checkbox">
                            <input type="checkbox" name="mobile-same" id="sameMobile">
                            <label for="mobile-same">
                              Mobile number is same as contact number.
                            </label>
                          </div>
                        </div>
                        <div class="new section"></div>
                      </div>
                      <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                        <div class="parbase section">
                          <div class="formitem phone-number">
                            <label for="phone-number">
                              Mobile Number
                            </label>
                            <input type="tel"
                                   id="phone-number"
                                   name="phone-number"
                                   placeholder="XXX-XXX-XXXX"
                                   data-parsley-pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                                   name="tel"
                                   autocomplete="tel"
                                   tabindex="12">
                          </div>
                          <div class="formitem checkbox">
                            <input type="checkbox" name="confirmation" id="mobile-confirm">
                            <label for="confirmation">
                              Receive a confirmation via SMS on Mobile number
                            </label>
                          </div>
                        </div>
                        <div class="new section"></div>
                      </div>
                    </div>
                    <div class="columnClear"></div>
                  </div>
                  <div class="76-24 section columnControl">
                    <div class="parsys_column twc-col2_2476">
                      <div class="parsys parsys0 twc-col2_2476-c0 parsys_column">
                        <div class="parbase section">
                          <div class="cta omega mobile-full">
                            <a href="#">
                              <span>Get a Callback Now</span>
                            </a>
                          </div>
                        </div>
                        <div class="new section"></div>
                      </div>
                      <div class="parsys parsys1 twc-col2_2476-c1 parsys_column">
                        <div class="parbase section">
                        </div>
                        <div class="new section"></div>
                      </div>
                    </div>
                    <div class="columnClear"></div>
                  </div>
                  <hr class="spacer">
                  <p class="disclaimer-text muted">* Required Fields</p>
                  <p class="disclaimer-text muted">** During typical call center hours 8am-Midnight Central Time</p>

                </form>
              </div>
            </div>
            <div class="regrets">
              <hr>
              <h6>We Are Sorry</h6>
              <p>The ZIP Code that you entered is not serviced by Time Warner Cable. If you entered the wrong ZIP Code in error, please re-enter the ZIP Code where you are moving to try again.</p>
              <p>Time Warner Cable is a proud partner of the CableMover program, and we can help you transition to another cable company in your new location. Call us at <a href="tel:+18553946832">1-855-394-6832</a>, or go to <a href="http://cablemover.com">CableMover.com</a> and enter your address to get started.</p>
            </div>
          </div>
          <div class="twc-box-column">
            <h5>Thank You</h5>
            <p>You will receive a call back within 5 minutes. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, sequi, culpa, id quisquam omnis dolor consequuntur tempore sed porro alias molestiae nostrum suscipit numquam sint.</p>
            <div class="cta omega icon-after icon-angle-right right mobile-full">
              <a href="#">
                <span>Continue</span>
              </a>
            </div>
          </div>
          <div class="twc-box-column">
            <h5>Not a TWC Customer?</h5>
            <div class="50-50 section columnControl">
              <div class="parsys_column twc-col2_5050">
                <div class="parsys parsys0 twc-col2_5050-c0 parsys_column bordered-right">
                  <div class="parbase section">
                    <h6>Lorem ipsum dolor sit.</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veniam, quasi aliquam unde sunt quia dolorum exercitationem a beatae officiis!</p>
                    <div class="cta omega twc-icon-after icon-angle-right mobile-full">
                      <a href="#">
                        <span>Learn More</span>
                      </a>
                    </div>
                  </div>
                  <div class="new section"></div>
                </div>
                <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                  <div class="parbase section">
                    <h6>Lorem ipsum dolor sit.</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, veniam, quasi aliquam unde sunt quia dolorum exercitationem a beatae officiis!</p>
                    <div class="cta omega twc-icon-after icon-angle-right mobile-full">
                      <a href="#">
                        <span>Learn More</span>
                      </a>
                    </div>
                  </div>
                  <div class="new section"></div>
                </div>
              </div>
              <div class="columnClear"></div>
            </div>
          </div>
          <div class="50-50 section columnControl">
            <div class="parsys_column twc-col2_5050">
              <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                <div class="parbase section">
                  <div class="twc-box-column blue">
                    <h5>Protect your new home.</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem saepe magni quia tempora nesciunt consequatur eligendi fugiat voluptatibus similique odio?</p>
                    <div class="cta omega twc-icon-after icon-angle-right">
                      <a href="#">
                        <span>Learn How</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="new section"></div>
              </div>
              <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                <div class="parbase section">
                  <div class="twc-box-column gray">
                    <h5>Enjoy your services better</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem saepe magni quia tempora nesciunt consequatur eligendi fugiat voluptatibus similique odio?</p>
                    <div class="cta omega twc-icon-after icon-angle-right">
                      <a href="#">
                        <span>Watch Now</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="new section"></div>
              </div>
            </div>
            <div class="columnClear"></div>
          </div>
        </div>
        <div class="new section"></div>
      </div>
      <div class="parsys parsys1 twc-col2_7525-c1 parsys_column">
        <div class="parbase section">
          <div class="tablet-hidden">
            <?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/share.php'); ?>
          </div>
          <h5>Or you can call us</h5>
          <p>Our My Move Specialists are waiting for your call. We're here to help make your move hassle-free.</p>
          <h5><a href="tel:+18664619843">1-866-461-9843</a></h5>
          <hr class="spacer">
          <h5>My Move Video</h5>
          <p>Watch how My Move can make moving easier</p>

        </div>
        <div class="new section"></div>
      </div>
    </div>
    <div class="columnClear"></div>
  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>