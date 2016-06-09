<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<!-- HTML Start -->
<h1 class="text-center">Let's Make A Performance Budget!</h1>
<div class="b">
  <div class="b-header">
    <h2 class="b-title" contenteditable>Template Name</h2>
    <em class="b-size">Budget: <span contenteditable>2000</span>KB</em>
  </div><!--end b-header-->
  <div class="b-budget">
    <div class="b-cat-container">
      <em class="actual-size">Actual: <span>60</span>KB</em>
      <ul class="b-cat-list">
        <li class="b-cat b-cat-html">
          <label for="html">HTML</label>
          <input id="html" type="number" pattern="[0-9]*" value="350" />
        </li>
        <li class="b-cat b-cat-css">
          <label for="css">CSS</label>
          <input id="css" type="number" pattern="[0-9]*" value="400" />
        </li>
        <li class="b-cat b-cat-js">
          <label for="js">JS</label>
          <input id="js" type="number" pattern="[0-9]*" value="100" />
        </li>
        <li class="b-cat b-cat-img">
          <label for="img">Images</label>
          <input id="img" type="number" pattern="[0-9]*" value="200" />
        </li>
        <li class="b-cat b-cat-fonts">
          <label for="fonts">Fonts</label>
          <input id="fonts" type="number" pattern="[0-9]*" value="100" />
        </li>
      </ul><!--end b-bar-->
    </div><!--end cat-container-->
  </div><!--end b-budget-->
</div><!--end b-->
<!-- HTML Finish -->

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>