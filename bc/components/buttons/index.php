<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php');
}
?>

<h5>Standard Omega CTA's</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/omega/index.php'); ?>

<hr>
<h5>Standard Black CTA's</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/black/index.php'); ?>

<hr>
<h5>Standard Disabled CTA's</h5>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/buttons/disabled/index.php'); ?>

<hr>
<h5>Form Submission Buttons - Omega</h5>
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
<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/footer.php');
}
?>
