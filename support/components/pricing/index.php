<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>

<!-- Pricing Component -->
<div class="pricing">
  <span class="h4">
    <sup class="dollar-sign">$</sup>
    <span class="dollars">79</span>
    <sup class="cents">99</sup>
  </span>
  <span class="term">Per mo.<br>for 12 mos.</span>
</div>
<!-- .Pricing Component -->

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>