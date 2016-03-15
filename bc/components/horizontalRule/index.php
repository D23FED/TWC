<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php');
}
?>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/horizontalRule/default/index.php'); ?>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/horizontalRule/solid/index.php'); ?>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/horizontalRule/spacer/index.php'); ?>
<hr class="spacer">
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/horizontalRule/text/index.php'); ?>
<!--
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/horizontalRule/responsive/index.php'); ?> -->

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/footer.php');
}
?>
