<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<!-- Login Page -->
<section class="twc-container " role="main">
  <div class="twc-box-column">
    <form action="">
      <h3 class="text-center">
        Please provide the following Time Warner Cable account information.
      </h3>

      <div class="content-wrap">
        <!-- Login form Section -->
        <div class="50-50 section columnControl">
          <div class="parsys_column twc-col2_5050">
            <div class="parsys parsys0 twc-col2_5050-c0 parsys_column border">
              <div class="parbase section">

                <div class="formrow">
                  <div class="form-item">
                    <input type="radio">
                    <label for="username"> <b>Account Number &amp; Phone Number</b>
                    </label>
                  </div>
                </div>

                <div class="formrow">
                  <div class="form-item">
                    <label for="">
                      Account Number
                    </label>
                    <input id="" type="text" name="" value="" placeholder=""></div>
                </div>

                <div class="formrow text-center">
                  <span class="amp">
                    &amp;
                  </span>
                </div>

                <div class="formrow">
                  <div class="form-item">
                    <label for="">
                      Phone Number
                    </label>
                    <input id="" type="text" name="" value="" placeholder="" data-errormessage="Please tell us your Name"></div>
                </div>

                <div class="formrow">
                  <div class="form-item">
                    <figure>
                      <img src="http://placehold.it/300x125&text=FPO"></figure>
                  </div>
                </div>

              </div>

              <div class="new section"></div>
            </div>

            <span class="or h5">
              or
            </span>

            <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
              <div class="parbase section">

                <div class="formrow">
                  <div class="form-item">
                    <input type="radio">
                    <label for="username"> <b>Username &amp; Password</b>
                    </label>
                  </div>
                </div>

                <div class="formrow">
                  <div class="form-item">
                    <label for="">
                      Username
                    </label>
                    <input id="" type="text" name="" value="" placeholder="" data-errormessage="Please tell us your Name"></div>
                  <div class="form-item">
                    <a href="">
                      Forgot Username?
                    </a>
                  </div>
                </div>

                <div class="formrow">
                  <div class="form-item">
                    <label for="">
                      Password
                    </label>
                    <input id="" type="text" name="" value="" placeholder="" required data-errormessage="Invalid Password"></div>
                  <div class="form-item">
                    <a href="">
                      Forgot Password?
                    </a>
                  </div>
                </div>

              </div>
              <div class="new section"></div>
            </div>
          </div>
          <div class="columnClear"></div>
        </div>

        <!-- .Login form Section -->
      </div>

      <div class="button-row">
        <!-- Submit Buttons -->
        <div class="right">
          <div class="btn">
            <button>
              Cancel
            </button>
          </div>
          <div class="cta omega">
            <button>
              Continue
              <span class="twc-icon-after icon-angle-right"></span>
            </button>
          </div>
        </div>
        <!-- .Submit Buttons -->
      </div>
    </form>
  </div>
</section>
<!-- .Login Page -->

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>