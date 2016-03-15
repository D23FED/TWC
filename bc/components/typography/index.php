<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
        include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/header.php');
} 
?>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/typography/fonts/index.php'); ?>
<hr class="spacer">
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/typography/headings/index.php'); ?>
<hr class="spacer">
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/typography/body_text/index.php'); ?>
<hr class="spacer">
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/typography/inline_text/index.php'); ?>
<hr class="spacer">
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/typography/text_alignment/index.php'); ?>
<hr class="spacer">
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/typography/text_emphasis/index.php'); ?>
<hr class="spacer">
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/support/components/typography/icons/index.php'); ?>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/bc/styleguide/') {
        include($_SERVER['DOCUMENT_ROOT']. '/TWC/bc/core/includes/footer.php');
} 
?>