<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>
<div class="formValidate">
  <p>
    * Indicates a required field
  </p>

  <form data-parsley-validate>
    <fieldset>
      <h3>
        Contact Information
      </h3>
      <!-- Required / Regex -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem">
                <label class="required" for="first-name">
                  <p>Required:</p>
                </label>
                <input type="text"
                id="first-name"
                name="first-name"
                data-parsley-trigger="focusout"
                data-parsley-required-message="This input is required"
                autocomplete="given-name"
                tabindex="1"
                data-parsley-required="">
              </div>
            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
            <div class="parbase section">

              <div class="formitem">
                <label class="required" for="last-name">
                  <p>Required + Regex:</p>
                </label>
                <input type="text"
                id="last-name"
                name="last-name"
                autocomplete="family-name"
                tabindex="2"
                data-parsley-pattern="^[A-Za-z]+$"
                data-parsley-trigger="focusout"
                data-parsley-required=""
                data-parsley-required-message="This input is required"
                data-parsley-pattern-message="Please only enter letters">
              </div>

            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      <!-- .Required / Regex -->

      <!-- Min Length / Max Length -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem">
                <label class="required" for="first-name">
                  <p>Required + Regex + Min Length 3:</p>
                </label>
                <input type="text"
                id="a-name"
                name="a-name"
                data-parsley-minlength="3"
                autocomplete="given-name"
                data-parsley-required=""
                data-parsley-trigger="focusout"
                data-parsley-pattern="^[A-Za-z]+$"
                data-parsley-length="[3]"
                data-parsley-length-message="Please enter a min of 3 letters"
                data-parsley-pattern-message="Please only enter letters"
                data-parsley-required-message="This input is required"
                tabindex="3" />
              </div>
            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
            <div class="parbase section">

              <div class="formitem maxlength">
                <label class="required" for="last-name">
                  <p>Required + Regex + Max Length 8</p>
                </label>
                <input type="text"
                id="b-name"
                name="b-name"
                autocomplete="family-name"
                tabindex="4"
                data-parsley-trigger="focusout"
                data-parsley-pattern="^[A-Za-z]+$"
                maxlength="8"
                data-parsley-pattern-message="Please only enter letters"
                data-parsley-required-message="This input is required"
                data-parsley-required>
              </div>
            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      <!-- .Min Length / Max Length -->

      <!-- Min Length / Max Length -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem maxlength">
                <label class="required" for="first-name">
                  <p>Required + Regex + Min 3 + Max 8:</p>
                </label>
                <input type="text"
                id="c-name"
                name="c-name"
                autocomplete="given-name"
                tabindex="5"
                data-parsley-trigger="focusout"
                data-parsley-pattern="^[A-Za-z]+$"
                data-parsley-length="[3]"
                maxlength="8"
                data-parsley-length-message="Please enter a min of 3 letters"
                data-parsley-pattern-message="Please only enter letters"
                data-parsley-required-message="This input is required"
                data-parsley-required>
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
      <!-- .Min Length / Max Length -->

      <!-- Min Length / Max Length -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem maxlength">
                <label class="required" for="first-name">
                  <p>Max Length 8 + required:</p>
                </label>
                <input type="text"
                id="d-name"
                name="d-name"
                autocomplete="given-name"
                tabindex="5"
                maxlength="8"
                data-parsley-trigger="focusout"
                data-parsley-required=""
                data-parsley-required-message="This input is required">
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
      <!-- .Min Length / Max Length -->

      <!-- Min Length / Max Length -->
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem maxlength">
                <label class="" for="first-name">
                  <p>Min length 3, max length 8, regex. (Not required)</p>
                </label>
                <input type="text"
                id="e-name"
                data-parsley-pattern="^[A-Za-z]+$"
                data-parsley-pattern-message="Please only enter letters"
                data-parsley-length="[3]"
                data-parsley-length-message="Please enter a min of 3 letters"
                maxlength="8"
                name="e-name"
                autocomplete="given-name"
                tabindex="5"
                data-parsley-trigger="focusout">
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
      <!-- .Min Length / Max Length -->

    </fieldset>

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
      <hr>
      <h3>
        Valid Email and Phone regex
      </h3>
      <div class="50-50 section columnControl">
        <div class="parsys_column twc-col2_5050">
          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
            <div class="parbase section">

              <div class="formitem maxlength">
                 <label class="required" for="email">
                    <p>Email:</p>
                  </label>
                  <input type="email"
                  data-parsley-type="email"
                  id="email"
                  name="email"
                  autocomplete="email"
                  tabindex="2"
                  data-parsley-trigger="focusout"
                  data-parsley-required=""
                  data-parsley-required-message="This input is required"
                  data-parsley-pattern-message="Please only enter letters"
                  data-parsley-type-message="Please enter a valid email address">
              </div>
            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
            <div class="parbase section">
              <div class="formitem">
              <label class="required" for="last-name">
                <p>Phone:</p>
              </label>
              <input type="text"
              id="last-name"
              name="last-name"
              autocomplete="family-name"
              tabindex="2"
              data-parsley-pattern="^(?:\(\d{3}\)|\d{3})[- \.]?\d{3}[- \.]?\d{4}$"
              data-parsley-trigger="focusout"
              data-parsley-required=""
              data-parsley-required-message="This input is required"
              data-parsley-pattern-message="Please enter a valid phone number.">
            </div>
            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>

      <div class="columnClear"></div>
    </div>

    <!-- .Radio / Select -->
    </fieldset>
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
<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>