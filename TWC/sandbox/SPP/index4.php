<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<h2>Combine TV, Internet &amp; Phone for the best deal</h2>
<figure>
  <img src="images/DVR_Burst_Main.png" alt="">
</figure>
<div class="packageSelectTabs">
	<?php include('includes/menu.php'); ?>
	<div class="packageSelect stickyElement">
		<!-- Triple Play Select -->
		<?php include('includes/package-01.php'); ?>
		<!-- Triple Play Silver -->
		<?php include('includes/package-02.php'); ?>
		<!-- Triple Play Gold -->
		<?php include('includes/package-03.php'); ?>
		<!-- TV Select + Internet -->
		<?php include('includes/package-04.php'); ?>
		<!-- TV Select + Phone -->
		<?php include('includes/package-05.php'); ?>
		<!--  Internet -->
		<?php include('includes/package-06.php'); ?>
  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>
