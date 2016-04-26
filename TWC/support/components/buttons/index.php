<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>

<h5>Standard Omega CTA's</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/omega/index.php'); ?>

<hr>
<h5>Flat Omega CTA's</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/flatOmega/index.php'); ?>

<hr>
<h5>Green CTA's</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/green/index.php'); ?>

<hr>
<h5>Red CTA's</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/red/index.php'); ?>

<hr>
<h5>Standard White CTA's</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/white/index.php'); ?>

<hr>
<h5>Standard Black CTA's</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/black/index.php'); ?>

<hr>
<h5>Standard Disabled CTA's</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/disabled/index.php'); ?>

<hr>
<h5>Unstyled CTA</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/forms/index.php'); ?>

<hr>
<h5>Checkbox Buttons - Omega</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/checkbox/index.php'); ?>

<hr>
<h5>Radio Buttons - Omega</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/radio/index.php'); ?>

<pre class="prettyprint">
&lt;!-- Button with Icon Angle Right after --&gt;
  &lt;div class="cta omega twc-icon-after icon-angle-right mobile-full"&gt;
      &lt;a analyticsname="test" href="http://google.com"&gt;
          &lt;span&gt;Send Feedback&lt;/span&gt;
      &lt;/a&gt;
  &lt;/div&gt;
</pre>

<h5>Button with Icon</h5>
<div class="cta omega icon-after icon-share mobile-full">
  <a href="#">
    <span>Button Text</span>
  </a>
</div>
<div class="cta omega icon-after icon-facebook mobile-full">
  <a href="#">
    <span>Button Text</span>
  </a>
</div>
<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>
