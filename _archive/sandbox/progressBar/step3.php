<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<!-- Progress Bar Start -->
<div class="progress-bar">
  <ul class="progress-bar-wrapper">
    <li class="first-step text-center color-block complete">
      <div class="stepNumber">
        <span class="uncompleted">1</span>
        <span class="completed"></span>
      </div>
      <div class="stepContent">
        <h4>Customize</h4>
        <div class="stepContentDetails">
          <div class="33-33-33 section columnControl">
            <div class="parsys_column twc-col3_333333">
              <div class="parsys parsys0 twc-col3_333333-c0 parsys_column">
                <div class="parbase section">
                  <div class="h6">TV</div>
                </div>
                <div class="new section"></div>
              </div>
              <div class="parsys parsys1 twc-col3_333333-c1 parsys_column">
                <div class="parbase section">
                  <div class="h6">Internet</div>
                </div>
                <div class="new section"></div>
              </div>
              <div class="parsys parsys1 twc-col3_333333-c2 parsys_column">
                <div class="parbase section">
                  <div class="h6">Phone</div>
                </div>
                <div class="new section"></div>
              </div>
            </div>
            <div class="columnClear"></div>
          </div>
        </div>
      </div>
    </li>
    <li class="second-step text-center color-block complete">
      <div class="stepNumber">
        <span class="uncompleted">2</span>
        <span class="completed"></span>
      </div>
      <div class="stepContent">
        <h4>Review</h4>
      </div>
    </li>
    <li class="third-step text-center color-block js-active">
      <div class="stepNumber">
        <span class="uncompleted">3</span>
        <span class="completed"></span>
      </div>
      <div class="stepContent">
        <h4>Checkout</h4>
      </div>
    </li>
    <li class="fourth-step text-center color-block ">
      <div class="stepNumber">
        <span class="uncompleted">4</span>
        <span class="completed"></span>
      </div>
      <div class="stepContent">
        <h4>Confirm</h4>
      </div>
    </li>
  </ul>
</div>
<!-- Progress Bar Finish -->
<hr class="spacer">
<hr class="solid">
<div class="cta omega icon-after icon-angle-right">
  <a href="index.php">
    <span>Step 1</span>
  </a>
</div>
<div class="cta omega icon-after icon-angle-right">
  <a href="step2.php">
    <span>Step 2</span>
  </a>
</div>
<div class="cta omega icon-after icon-angle-right">
  <a href="step3.php">
    <span>Step 3</span>
  </a>
</div>
<div class="cta omega icon-after icon-angle-right">
  <a href="step4.php">
    <span>Step 4</span>
  </a>
</div>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>