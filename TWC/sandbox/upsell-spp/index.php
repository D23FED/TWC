<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>
<?php
$package          = 'Select';
$selection_action = "selected";
include 'includes/upsells.php';

$package          = 'Silver';
$selection_action = "selected";
include 'includes/upsells.php';

$package          = 'Gold';
$selection_action = "selected";
include 'includes/upsells.php';

$package          = 'Silver';
$selection_action = "upgraded";
include 'includes/upsells.php';

$package          = 'Gold';
$selection_action = "upgraded";
include 'includes/upsells.php';

$package          = 'Select';
$selection_action = "switched";
include 'includes/upsells.php';

$package          = 'Silver';
$selection_action = "switched";
include 'includes/upsells.php';

?>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>
