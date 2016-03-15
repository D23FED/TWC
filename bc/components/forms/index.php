<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php');
}
?>

<p>
    * Indicates a required field
</p>
<div class="formValidate">
    <form action="" novalidate>
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
                                    First Name:
                                </label>
                                <input type="text" id="first-name" name="first-name" pattern="[a-zA-Z]+" autocomplete="given-name" tabindex="1" required>
                                <span title="First Name"></span>
                            </div>
                            <div class="formitem middle-initial">
                                <label for="middle-initial">
                                    MI:
                                </label>
                                <input type="text" id="middle-initial" name="first-name" autocomplete="additional-name-initial" tabindex="2"></div>

                        </div>
                        <div class="new section"></div>
                    </div>
                    <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                        <div class="parbase section">

                            <div class="formitem last-name">
                                <label class="required" for="last-name">
                                    Last Name:
                                </label>
                                <input type="text" id="last-name" name="last-name" autocomplete="family-name" tabindex="3" required>
                                <span title="Please enter your Last Name"></span>
                            </div>

                        </div>
                        <div class="new section"></div>
                    </div>
                </div>
                <div class="columnClear"></div>
            </div>
            <!-- .First Name / Last Name -->

            <!-- Service Address -->
            <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050">
                    <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                        <div class="parbase section">

                            <div class="formitem address">
                                <label for="address" class="required">
                                    Service Address:
                                </label>
                                <input type="text" id="address" name="address" autocomplete="address-line1" tabindex="4" required>
                                <span title="Please enter your Service Address"></span>
                            </div>

                        </div>
                        <div class="new section"></div>
                    </div>
                    <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                        <div class="parbase section">

                            <div class="formitem address2">
                                <label for="address2">
                                    Apt., Suite, or Floor:
                                </label>
                                <input type="text" id="address2" name="address2" autocomplete="address-line2" tabindex="5"></div>

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
                                    City:
                                </label>
                                <input type="text" id="city" name="city" autocomplete="city" tabindex="6" required>
                                <span title="Please enter your City"></span>
                            </div>

                        </div>
                        <div class="new section"></div>
                    </div>
                    <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                        <div class="parbase section">

                            <div class="formitem state">
                                <label for="state" class="required">
                                    State:
                                </label>
                                <select name="state" autocomplete="state" tabindex="7" required>
                                    <option value="null">
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
                                    <option value="CO" selected="selected">
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
                            <div class="formitem zip">
                                <label for="zip" class="required">
                                    ZIP Code:
                                </label>
                                <input type="text" id="zip" name="zip" pattern="(\d{5}([\-]\d{4})?)" autocomplete="postal-code" tabindex="8" required>
                                <span title="Please enter your ZIP"></span>
                            </div>

                        </div>
                        <div class="new section"></div>
                    </div>
                </div>
                <div class="columnClear"></div>
            </div>
            <!-- .Service Address -->

            <!-- Phone / Alt Phone -->
            <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050">
                    <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                        <div class="parbase section">

                            <legend class="required">
                                Phone Number:
                            </legend>
                            <div class="formitem phone-number">
                                <label for="phone-number" class="visually-hidden">
                                    Phone Number
                                </label>
                                <input type="tel" id="phone-number" name="phone-number" placeholder="XXX-XXX-XXXX" pattern="\d{3}[\-]\d{3}[\-]\d{4}" autocomplete="tel" tabindex="9" required>
                                <span title="Gonna need dem digits"></span>
                            </div>

                        </div>
                        <div class="new section"></div>
                    </div>
                    <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                        <div class="parbase section">

                            <legend>
                                Alternate Phone Number:(Optional)
                            </legend>
                            <div class="formitem phone-number">
                                <label for="phone-number" class="visually-hidden">
                                    Phone Number
                                </label>
                                <input type="tel" id="phone-number" name="phone-number" placeholder="XXX-XXX-XXXX" pattern="\d{3}[\-]\d{3}[\-]\d{4}" name="tel" autocomplete="tel" tabindex="10"></div>

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
                                    Email Address:
                                </label>
                                <input id="email" type="email" name="email" pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}" autocomplete="email" tabindex="11" required>
                                <span title="Please enter your Email Address"></span>
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
                                <legend>
                                    Leave a really complimentary comment about us here:
                                </legend>
                                <textarea tabindex="12"></textarea>
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
                                <input id="checking" type="radio" name="account-type" tabindex="13" checked>
                                <label for="checking">
                                    Charge this card every month for my account charges.
                                </label>
                            </div>
                            <div class="formitem radio">
                                <input id="savings" type="radio" name="account-type" tabindex="14">
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
                                            <input type="checkbox" name="terms" tabindex="15">
                                            <label for="terms" class="b">
                                                Option A
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="16">
                                            <label for="terms" class="b">
                                                Option B
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="17">
                                            <label for="terms" class="b">
                                                Option C
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="18">
                                            <label for="terms" class="b">
                                                Option D
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="19">
                                            <label for="terms" class="b">
                                                Option E
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="20">
                                            <label for="terms" class="b">
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
                                            <input type="checkbox" name="terms" tabindex="15">
                                            <label for="terms" class="b">
                                                Option 1-A
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="16">
                                            <label for="terms" class="b">
                                                Option 1-B
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="17">
                                            <label for="terms" class="b">
                                                Option 1-C
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="18">
                                            <label for="terms" class="b">
                                                Option 1-D
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="19">
                                            <label for="terms" class="b">
                                                Option 1-E
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="20">
                                            <label for="terms" class="b">
                                                Option 1-F
                                            </label>
                                        </div>
                                    </li>
                                    <span title="Please select a Minimum of 4"></span>
                                </ul>
                            </div>
                        </div>
                        <div class="new section"></div>
                    </div>
                </div>
                <div class="columnClear"></div>
            </div>
            <!-- .Radio / Select -->
            <h3>
                Checkbox Inputs - Minimum of 2 selected
            </h3>

            <!-- Radio / Select -->
            <div class="100 section columnControl">
                <div class="parsys_column twc-col1_100">
                    <div class="parsys parsys0 twc-col1_100-c0 parsys_column">
                        <div class="parbase section">

                            <div class="horizontal list">
                                <ul class="column-count-6 min-2">
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="15">
                                            <label for="terms" class="b">
                                                Option 1-A
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="16">
                                            <label for="terms" class="b">
                                                Option 1-B
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="17">
                                            <label for="terms" class="b">
                                                Option 1-C
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="18">
                                            <label for="terms" class="b">
                                                Option 1-D
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="19">
                                            <label for="terms" class="b">
                                                Option 1-E
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="terms" tabindex="20">
                                            <label for="terms" class="b">
                                                Option 1-F
                                            </label>
                                        </div>
                                    </li>
                                    <span title="Please select a Minimum of 2"></span>
                                </ul>
                                <div id="validateMin" class="cta omega icon-after icon-angle-right mobile-full">
                                    <a href="#">
                                        <span>
                                            Validate Min. Checkboxes
                                        </span>
                                    </a>
                                </div>
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
                                            <input type="checkbox" name="max-terms" class="max-3" tabindex="15">
                                            <label for="terms" class="b">
                                                Option 1
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="max-terms" class="max-3" tabindex="16">
                                            <label for="terms" class="b">
                                                Option 2
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="max-terms" class="max-3" tabindex="17">
                                            <label for="terms" class="b">
                                                Option 3
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="max-terms" class="max-3" tabindex="18">
                                            <label for="terms" class="b">
                                                Option 4
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="max-terms" class="max-3" tabindex="19">
                                            <label for="terms" class="b">
                                                Option 5
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="formitem checkbox">
                                            <input type="checkbox" name="max-terms" class="max-3" tabindex="20">
                                            <label for="terms" class="b">
                                                Option 6
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
            Datalist Field
          </h3>
          <div class="formitem">
            <label for="browsers">
              Internet Browsers
            </label>
            <input type="text" list="browsers" name="browser" placeholder="Internet Explorer" tabindex="21" >
            <datalist id="browsers">
              <option value="Internet Explorer">
              <option value="Firefox">
              <option value="Chrome">
              <option value="Opera">
              <option value="Safari">
            </datalist>
          </div>
        </fieldset>

                            <fieldset>
                                <h3>
                                    Generic Form Field
                                </h3>
                                <div class="formitem">
                                    <label for="generic" class="visually-hidden">
                                        Generic
                                    </label>
                                    <input type="text" id="generic" class="" name="" value="" placeholder="Generic" tabindex="22" required></div>
                            </fieldset>

                            <div id="fillit">
                                If you see this, leave this form field blank.
                                <input id="improve" type="text" name="confirm" value=""></div>

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

                    <pre class="prettyprint">&lt;fieldset&gt;
    &lt;div class="formitem"&gt;
        &lt;label for="generic" class="visually-hidden"&gt;Generic&lt;/label&gt;
        &lt;input type="text" id="" class="" name="" value="" placeholder="Generic" tabindex="21" required&gt;
    &lt;/div&gt;
&lt;/fieldset&gt;
</pre>

                    <?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/footer.php');
}
?>