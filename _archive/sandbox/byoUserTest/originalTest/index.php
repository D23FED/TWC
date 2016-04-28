<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<h1>View Plans</h1>
<div class="packageSelectTabs">
  <div class="psTabs">
    <ul class="tab-links">
      <li class="tabHead">
        <span href="#tab1" class="h4" data-tabs="1">Select A Package</span>
      </li>
      <li class="tabHead js-active">
        <span href="#tab2" class="h4" data-tabs="2">Build your own</span>
      </li>
    </ul>
    <div class="tab-content">
      <div id="tab1" class="tab">
      </div>
      <div id="tab2" class="tab js-active">
        <p class="text-center super-h3"><b>Start to build your own package.<br>Choose the services you want:</b></p>
        <form action="submit">
          <div class="box">
            <ul>
              <li>
                <input id="TV" type="checkbox">
                <label class="super-h3" for="TV"><b>TV</b></label>
              </li>
              <li>
                <input id="Internet" type="checkbox">
                <label class="super-h3" for="Internet"><b>Internet</b></label>
              </li>
              <li>
                <input id="Phone" type="checkbox">
                <label class="super-h3" for="Phone"><b>Phone</b></label>
              </li>
            </ul>
          </div>
          <div class="cta fs-30 icon-after icon-angle-right alignCenter mobile-full">
            <a href="page2.php">
              <span>Continue</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>
<hr class="spacer">
<div class="icon-before icon-angle-left">
  <a href="index.php">
    <span>Start Over</span>
  </a>
</div>