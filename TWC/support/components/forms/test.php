<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>
<div class="formValidate">
<p>
  * Indicates a required field
</p>

<form action="" novalidate>
  <fieldset>
    <h3>
      Contact Information
    </h3>
    <!-- Required / Regex -->
    <div class="50-50 section columnControl">
      <div class="parsys_column twc-col2_5050">
        <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
          <div class="parbase section">

            <div class="formitem first-name">
              <label class="required" for="first-name">
                <a href="#">Required:</a>
              </label>
              <input type="text" id="first-name" name="first-name" autocomplete="given-name" tabindex="1" required>
              <span title="This is a required field"></span>
            </div>
          </div>
          <div class="new section"></div>
        </div>
        <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
          <div class="parbase section">

            <div class="formitem last-name">
              <label class="required" for="last-name">
                <a href="#">Required + Regex:</a>
              </label>
              <input type="text" id="last-name" name="last-name" autocomplete="family-name" tabindex="2" pattern="[a-zA-Z]+" required>
              <span title="Field rules: Required, May not contain numbers or special characters">
              </span>
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

            <div class="formitem first-name">
              <label class="required" for="first-name">
                <a href="#">Required + Regex + Min Length 3:</a>
              </label>
              <input type="text" id="first-name" name="first-name" autocomplete="given-name" tabindex="3" pattern="[a-zA-Z]{3,}" required>
              <span title="Field rules: Required, Min 3 characters and may not contain numbers or special characters"></span>
            </div>

          </div>
          <div class="new section"></div>
        </div>
        <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
          <div class="parbase section">

            <div class="formitem last-name maxlength">
              <label class="required" for="last-name">
                Required + Regex + Max Length 8
              </label>
              <input type="text" id="last-name" class="maxlength" name="last-name" autocomplete="family-name" tabindex="4" pattern="[a-zA-Z]+" maxlength="8" required>
              <span title="Field rules: Required, Max 8 characters and may not contain numbers or special characters"></span>
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

            <div class="formitem first-name maxlength">
              <label class="required" for="first-name">
                Required + Regex + Min 3 + Max 8:
              </label>
              <input type="text" class="maxlength minmax-input" id="first-name" name="first-name" autocomplete="given-name" tabindex="5" pattern="[a-zA-Z]{3,}" maxlength="8" required>
              <span title="Field rules: Required, Min 3 characters, Max 8 characters and may not contain numbers or special characters"></span>
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

    <!-- Min Length / Max Length -->
    <div class="50-50 section columnControl">
      <div class="parsys_column twc-col2_5050">
        <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
          <div class="parbase section">

            <div class="formitem first-name maxlength">
              <label class="required" for="first-name">
                Max Length 8 + required:
              </label>
              <input class="maxlength" type="text" id="first-name" name="first-name" autocomplete="given-name" tabindex="5"  maxlength="8" required>
              <span title="Field rules: Required, Max 8 characters"></span>
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
        <!-- Min Length / Max Length -->
    <div class="50-50 section columnControl">
      <div class="parsys_column twc-col2_5050">
        <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
          <div class="parbase section">

            <div class="formitem first-name maxlength">
              <label class="" for="first-name">
                Min length 3, max length 8, regex. (Not required)
              </label>
              <input class="maxlength minlength" type="text" id="first-name" pattern="[a-zA-Z]{3,}" name="first-name" autocomplete="given-name" tabindex="5"  maxlength="8">
              <span title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, quisquam inventore repellat neque laudantium recusandae. Iste, quas, ducimus placeat voluptas incidunt modi fugit tenetur obcaecati necessitatibus quasi provident eligendi culpa quibusdam beatae vitae accusantium temporibus. Enim, unde, tempora illum id temporibus odit molestiae. Perferendis, magnam deserunt eius architecto minus ad."></span>
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
    <!-- Min Length / Max Length -->
    <div class="50-50 section columnControl">
      <div class="parsys_column twc-col2_5050">
        <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
          <div class="parbase section">

            <div class="formitem first-name maxlength">
              <label class="" for="first-name">
                Min length 3, max length 8, regex. (Not required)
              </label>
              <input class="maxlength minlength" type="text" id="first-name" pattern="[a-zA-Z]{3,}" name="first-name" autocomplete="given-name" tabindex="5"  maxlength="8">
              <span title="Field rules: Min 3 character, Max 8 characters and may not contain numbers or special characters "></span>
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