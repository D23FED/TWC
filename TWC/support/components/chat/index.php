<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>
<script language="javascript">
timer=setTimeout("window.open('popUp.php','','width=300,height=700')",3000)
</script>

	<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/chat.php'); ?>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>