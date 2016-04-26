<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>

<p>
  * Indicates a required field
</p>
<div class="formValidate">
  <form data-parsley-validate>
    <fieldset>
      <h3>
        Contact Information
      </h3>
      <!-- First Name / Last Name -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem first-name">
                <label class="required" for="first-name">
                  <div class="richtext label">
                    <div>
                      <p>First Name:</p>
                    </div>
                  </div>
                </label>
                <input type="text"
                       id="first-name"
                       name="first-name"
                       data-parsley-pattern="[a-zA-Z]+"
                       autocomplete="given-name"
                       tabindex="1"
                       data-parsley-trigger="focusout"
                       data-parsley-required-message="First Name is required"
                       data-parsley-required="">
              </div>
              <div class="formitem middle-initial">
                <label for="middle-initial">
                  <div class="richtext label">
                    <div>
                      <p>MI:</p>
                    </div>
                  </div>
                </label>
                <input type="text"
                       id="middle-initial"
                       name="first-name"
                       autocomplete="additional-name-initial"
                       tabindex="2"></div>

            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
            <div class="parbase section">

              <div class="formitem last-name">
                <label class="required" for="last-name">
                  <div class="richtext label">
                    <div>
                      <p>Last Name:</p>
                    </div>
                  </div>
                </label>
                <input type="text"
                       id="last-name"
                       name="last-name"
                       autocomplete="family-name"
                       tabindex="3"
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

      <!-- Service Address -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem address">
                <label for="address" class="required">
                  <div class="richtext label">
                    <div>
                      <p>Service Address:</p>
                    </div>
                  </div>
                </label>
                <input type="text"
                       id="address"
                       name="address"
                       autocomplete="address-line1"
                       tabindex="4"
                       data-parsley-trigger="focusout"
                       data-parsley-required-message="Please enter your Service Address"
                       data-parsley-required="">
              </div>

            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
            <div class="parbase section">

              <div class="formitem address2">
                <label for="address2">
                  <div class="richtext label">
                    <div>
                      <p>Apt., Suite, or Floor:</p>
                    </div>
                  </div>
                </label>
                <input type="text"
                       id="address2"
                       name="address2"
                       autocomplete="address-line2"
                       tabindex="5"></div>

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

              <div class="formitem city">
                <label for="city" class="required">
                  <div class="richtext label">
                    <div>
                      <p>City:</p>
                    </div>
                  </div>
                </label>
                <input type="text"
                       id="city"
                       name="city"
                       autocomplete="city"
                       tabindex="6"
                       data-parsley-trigger="focusout"
                       data-parsley-required-message="Please enter your City"
                       data-parsley-required="">
              </div>

            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
            <div class="parbase section">
              <div class="50-50 section columnControl">
                <div class="parsys_column twc-5050">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                    <div class="parbase section">
                      <div class="formitem state">
                        <label for="state" class="required">
                          <div class="richtext label">
                            <div>
                              <p>State:</p>
                            </div>
                          </div>
                        </label>
                        <select name="state"
                                autocomplete="state"
                                tabindex="7"
                                data-parsley-trigger="focusout"
                                data-parsley-required-message="Please Select a State"
                                data-parsley-required="">
                          <option value="">
                            Please Select a State
                          </option>
                          <option value="AL">
                            Alabama
                          </option>
                          <option value="AK">
                            Alaska
                          </option>
                          <option value="AZ">
                            Arizona
                          </option>
                          <option value="AR">
                            Arkansas
                          </option>
                          <option value="CA">
                            California
                          </option>
                          <option value="CO">
                            Colorado
                          </option>
                          <option value="CT">
                            Connecticut
                          </option>
                          <option value="DE">
                            Delaware
                          </option>
                          <option value="DC">
                            District Of Columbia
                          </option>
                          <option value="FL">
                            Florida
                          </option>
                          <option value="GA">
                            Georgia
                          </option>
                          <option value="HI">
                            Hawaii
                          </option>
                          <option value="ID">
                            Idaho
                          </option>
                          <option value="IL">
                            Illinois
                          </option>
                          <option value="IN">
                            Indiana
                          </option>
                          <option value="IA">
                            Iowa
                          </option>
                          <option value="KS">
                            Kansas
                          </option>
                          <option value="KY">
                            Kentucky
                          </option>
                          <option value="LA">
                            Louisiana
                          </option>
                          <option value="ME">
                            Maine
                          </option>
                          <option value="MD">
                            Maryland
                          </option>
                          <option value="MA">
                            Massachusetts
                          </option>
                          <option value="MI">
                            Michigan
                          </option>
                          <option value="MN">
                            Minnesota
                          </option>
                          <option value="MS">
                            Mississippi
                          </option>
                          <option value="MO">
                            Missouri
                          </option>
                          <option value="MT">
                            Montana
                          </option>
                          <option value="NE">
                            Nebraska
                          </option>
                          <option value="NV">
                            Nevada
                          </option>
                          <option value="NH">
                            New Hampshire
                          </option>
                          <option value="NJ">
                            New Jersey
                          </option>
                          <option value="NM">
                            New Mexico
                          </option>
                          <option value="NY">
                            New York
                          </option>
                          <option value="NC">
                            North Carolina
                          </option>
                          <option value="ND">
                            North Dakota
                          </option>
                          <option value="OH">
                            Ohio
                          </option>
                          <option value="OK">
                            Oklahoma
                          </option>
                          <option value="OR">
                            Oregon
                          </option>
                          <option value="PA">
                            Pennsylvania
                          </option>
                          <option value="RI">
                            Rhode Island
                          </option>
                          <option value="SC">
                            South Carolina
                          </option>
                          <option value="SD">
                            South Dakota
                          </option>
                          <option value="TN">
                            Tennessee
                          </option>
                          <option value="TX">
                            Texas
                          </option>
                          <option value="UT">
                            Utah
                          </option>
                          <option value="VT">
                            Vermont
                          </option>
                          <option value="VA">
                            Virginia
                          </option>
                          <option value="WA">
                            Washington
                          </option>
                          <option value="WV">
                            West Virginia
                          </option>
                          <option value="WI">
                            Wisconsin
                          </option>
                          <option value="WY">
                            Wyoming
                          </option>
                        </select>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                    <div class="parbase section">
                      <div class="formitem zip">
                        <label for="zip" class="required">
                          <div class="richtext label">
                            <div>
                              <p>ZIP Code:</p>
                            </div>
                          </div>
                        </label>
                        <input type="text"
                               id="zip"
                               name="zip"
                               data-parsley-pattern="(\d{5}([\-]\d{4})?)"
                               autocomplete="postal-code"
                               tabindex="8"
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

            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      <!-- .Service Address -->

            <div class="50-50 section columnControl">
              <div class="parsys_column twc-col2_5050">
                <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                  <div class="parbase section">
                    <div class="formitem split-zip">
                      <label for="zip-1" class="required">
                        <div class="richtext label">
                          <div>
                            <p>Zip 1</p>
                          </div>
                        </div>
                      </label>
                      <input type="text"
                             class="autotab zip-1"
                             name="zip2"
                             data-parsley-pattern="\d{5}"
                             maxlength="5"
                             tabindex="9"
                             data-parsley-trigger="focusout"
                             data-parsley-required-message="Please enter your ZIP"
                             data-parsley-required="">
                    </div>
                    <div class="formitem split-zip">
                      <label for="zip-extension">
                        <div class="richtext label">
                          <div>
                            <p>Zip 2</p>
                          </div>
                        </div>
                      </label>
                      <input type="text"
                             class="autotab zip-extension"
                             name="zip-extension"
                             data-parsley-pattern="\d{4}"
                             maxlength="4"
                             tabindex="10">
                    </div>
                  </div>
                  <div class="new section"></div>
                </div>
                <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                  <div class="parbase section">

                  </div>
                  <div class="new section"></div>
                </div>
              </div>
              <div class="columnClear"></div>
            </div>

      <!-- Phone / Alt Phone -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem phone-number">
                <label for="phone-number">
                  <div class="richtext label">
                    <div>
                      <p>Phone Number</p>
                    </div>
                  </div>
                </label>
                <input type="tel"
                       id="phone-number"
                       name="phone-number"
                       placeholder="XXX-XXX-XXXX"
                       data-parsley-pattern="^(?:\(\d{3}\)|\d{3})[- \.]?\d{3}[- \.]?\d{4}$"
                       autocomplete="tel"
                       tabindex="11"
                       data-parsley-trigger="focusout"
                       data-parsley-required-message="Please enter a valid Phone Number"
                       data-parsley-required="">
              </div>

            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
            <div class="parbase section">
              <div class="formitem phone-number">
                <label for="phone-number">
                  <div class="richtext label">
                    <div>
                      <p>Alternate Phone Number:(Optional)</p>
                    </div>
                  </div>
                </label>
                <input type="tel"
                       id="phone-number"
                       name="phone-number"
                       placeholder="XXX-XXX-XXXX"
                       data-parsley-pattern="^(?:\(\d{3}\)|\d{3})[- \.]?\d{3}[- \.]?\d{4}$"
                       name="tel"
                       autocomplete="tel"
                       tabindex="12"></div>

            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      <!-- .Phone / Alt Phone -->

      <!-- Email Address -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem email">
                <label for="email" class="required">
                  <div class="richtext label">
                    <div>
                      <p>Email Address:</p>
                    </div>
                  </div>
                </label>
                <input id="email"
                       type="email"
                       name="email"
                       data-parsley-pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
                       autocomplete="email"
                       tabindex="13"
                       data-parsley-trigger="focusout"
                       data-parsley-required-message="Please enter your Email Address"
                       data-parsley-required="">
              </div>

            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
            <div class="parbase section"></div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      <!-- .Email Address -->
    </fieldset>

    <fieldset>
      <!-- Textarea -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem textarea">
                <label for="fixlength">
                  <div class="richtext label">
                    <div>
                      <p>Leave a really complimentary comment about us here:</p>
                    </div>
                  </div>
                </label>
                <textarea name="fixlength" maxlength="120" lengthcut="true"></textarea>
              </div>

            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
            <div class="parbase section"></div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      <!-- .Textarea -->
    </fieldset>

    <hr>

    <fieldset>
      <h3>
        Radio Inputs
      </h3>

      <!-- Radio / Select -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem radio">
                <input id="checking"
                       type="radio"
                       name="account-type"
                       tabindex="15"
                       checked>
                <label for="checking">
                  Charge this card every month for my account charges.
                </label>
              </div>
              <div class="formitem radio">
                <input id="savings"
                       type="radio"
                       name="account-type"
                       tabindex="16">
                <label for="savings">
                  Charge this card only for today’s charges.
                </label>
              </div>

            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
            <div class="parbase section"></div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      <!-- .Radio / Select -->
    </fieldset>

    <hr>

    <fieldset>
      <h3>
        Checkbox Inputs
      </h3>

      <!-- Radio / Select -->
      <div class="100 section columnControl">
        <div class="parsys_column twc-col1_100">
          <div class="parsys parsys0 twc-col1_100-c0 parsys_column">
            <div class="parbase section">

              <div class="horizontal list">
                <ul class="column-count-6">
                  <li>
                    <div class="formitem checkbox">
                      <input id="check-1" type="checkbox" name="terms1" tabindex="17">
                      <label for="check-1" class="b">
                        Option A
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input id="check-2" type="checkbox" name="terms1" tabindex="18">
                      <label for="check-2" class="b">
                        Option B
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input id="check-3" type="checkbox" name="terms1" tabindex="19">
                      <label for="check-3" class="b">
                        Option C
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input id="check-4" type="checkbox" name="terms1" tabindex="20">
                      <label for="check-4" class="b">
                        Option D
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input id="check-5" type="checkbox" name="terms1" tabindex="21">
                      <label for="check-5" class="b">
                        Option E
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input id="check-6" type="checkbox" name="terms1" tabindex="22">
                      <label for="check-6" class="b">
                        Option F
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      <!-- .Radio / Select -->
    </fieldset>
    <hr>
    <fieldset>
      <h3>
        Checkbox Inputs - Minimum of 4
      </h3>

      <!-- Radio / Select -->
      <div class="100 section columnControl">
        <div class="parsys_column twc-col1_100">
          <div class="parsys parsys0 twc-col1_100-c0 parsys_column">
            <div class="parbase section">

              <div class="horizontal list">
                <ul class="column-count-6 min-4">
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="min-4-1" name="terms" tabindex="15"
                      data-parsley-error-message="Please select a minimum of 4 checkboxes."
                      data-parsley-required=""
                      data-parsley-mincheck="4"
                      data-parsley-class-handler=".error-container"
                      data-parsley-errors-container=".error-container" >
                      <label for="min-4-1" class="b">
                        Option 1-A
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="min-4-2"  name="terms" tabindex="16">
                      <label for="min-4-2" class="b">
                        Option 1-B
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="min-4-3" name="terms" tabindex="17">
                      <label for="min-4-3" class="b">
                        Option 1-C
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="min-4-4" name="terms" tabindex="18">
                      <label for="min-4-4" class="b">
                        Option 1-D
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="min-4-5" name="terms" tabindex="19">
                      <label for="min-4-5" class="b">
                        Option 1-E
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="min-4-6" name="terms" tabindex="20">
                      <label for="min-4-6" class="b">
                        Option 1-F
                      </label>
                    </div>
                  </li>
                </ul>
                <div class="checkbox-validate">
                  <div class="error-container"></div>
                </div>
              </div>
            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
    </fieldset>
    <hr>
    <fieldset>
      <h3>
        Checkbox Inputs - Maximum of 3 selected
      </h3>

      <!-- Radio / Select -->
      <div class="100 section columnControl">
        <div class="parsys_column twc-col1_100">
          <div class="parsys parsys0 twc-col1_100-c0 parsys_column">
            <div class="parbase section">

              <div class="horizontal list">
                <ul class="column-count-6">
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox"
                             id="max-3-1"
                             name="maxterms"
                             tabindex="21"
                             data-parsley-required=""
                             data-parsley-error-message="Please select a maximum of 3 checkboxes."
                             data-parsley-maxcheck="3"
                             data-parsley-trigger="click"
                             data-parsley-class-handler=".max-error-container"
                             data-parsley-errors-container=".max-error-container">
                      <label for="max-3-1" class="b">
                        Option 1
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="max-3-2" name="maxterms" tabindex="22">
                      <label for="max-3-2" class="b">
                        Option 2
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="max-3-3" name="maxterms" tabindex="23">
                      <label for="max-3-3" class="b">
                        Option 3
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="max-3-4" name="maxterms" tabindex="24">
                      <label for="max-3-4" class="b">
                        Option 4
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="max-3-5" name="maxterms" tabindex="25">
                      <label for="max-3-5" class="b">
                        Option 5
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="formitem checkbox">
                      <input type="checkbox" id="max-3-6" name="maxterms" tabindex="26">
                      <label for="max-3-6" class="b">
                        Option 6
                      </label>
                    </div>
                  </li>
                </ul>
                <div class="checkbox-validate">
                  <div class="max-error-container"></div>
                </div>
              </div>
            <!-- Radio / Select -->
            <hr>
            <h3>
              Single Required Checkbox
            </h3>
            <div class="25-75 section columnControl">
              <div class="parsys_column twc-col2_2575">
                <div class="parsys parsys0 twc-col2_2575-c0 parsys_column">
                  <div class="parbase section">

                    <div class="horizontal list">
                      <ul>
                        <li>
                          <div class="formitem checkbox">
                            <input type="checkbox"
                                   id="terms"
                                   name="agree"
                                   data-parsley-required=""
                                   data-parsley-mincheck="1"
                                   data-parsley-error-message="Please agree to terms."
                                   data-parsley-class-handler=".agree-container"
                                   data-parsley-errors-container=".agree-container">
                            <label for="terms" class="b">
                              I agree to terms.
                            </label>
                          </div>
                        </li>
                      </ul>
                      <div class="checkbox-validate">
                        <div class="agree-container"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="parsys parsys0 twc-col2_2575-c1 parsys_column">
                  <div class="parbase section">
                  </div>
                </div>
              </div>
            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      <div class="clear"></div>
      <!-- .Radio / Select -->
    </fieldset>

<hr>

    <fieldset>
      <div class="formitem">
        <div class="cta omega twc-icon-after icon-angle-right">
          <button type="submit" name="submit" value="submit">
            <span>
              Submit
            </span>
          </button>
        </div>

        <div class="cta">
          <button type="reset" name="reset" value="reset">
            <span>
              Clear
            </span>
          </button>
        </div>
      </div>
    </fieldset>
  </form>
</div>

          <!-- <pre class="prettyprint">&lt;fieldset&gt;
    &lt;div class="formitem"&gt;
        &lt;label for="generic" class="visually-hidden"&gt;Generic&lt;/label&gt;
        &lt;input type="text" id="" class="" name="" value="" placeholder="Generic" tabindex="21" required&gt;
    &lt;/div&gt;
&lt;/fieldset&gt;
</pre> -->

          <?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>