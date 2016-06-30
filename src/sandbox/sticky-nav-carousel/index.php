<?php include($_SERVER[ 'DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<?php include( '/includes/copy-above.php'); ?>
<!-- Sticky nav wrapper -->
<div class="stickySubNavWrapper">
	<!-- Sticky nav container -->
	<div class="stickySubNav">
		<!-- Carousel container -->
		<div class="heroCarousel">
			<!-- Carousel menu wrapper -->
			<div class="heroIconWrapper">
				<!-- Previous Button -->
				<div class="btn-prev" id="heroCarouselPrev"><img src="images/carousel-left-blue.png" alt="">
				</div>
				<!-- Row of menu items -->
				<div class="heroIcons">
					<div class="iconWrapper">
						<div id="heroCarouselIcon-1" class="carouselIcons active">
							<span class="menu-item">Arabic</span>
						</div>
						<div id="heroCarouselIcon-2" class="carouselIcons">
							<span class="menu-item">Brazilian Portuguese</span>
						</div>
						<div id="heroCarouselIcon-3" class="carouselIcons">
							<span class="menu-item">Japanese</span>
						</div>
						<div id="heroCarouselIcon-4" class="carouselIcons">
							<span class="menu-item">South Asian</span>
						</div>
						<div id="heroCarouselIcon-5" class="carouselIcons">
							<span class="menu-item">Dothraki</span>
						</div>
						<div id="heroCarouselIcon-6" class="carouselIcons">
							<span class="menu-item">Klingon</span>
						</div>
						<div id="heroCarouselIcon-7" class="carouselIcons">
							<span class="menu-item">Esperanto</span>
						</div>
					</div>
				</div>
				<!-- Next button -->
				<div class="btn-next" id="heroCarouselNext"><img src="images/carousel-right-blue.png" alt="">
				</div>
			</div>
			<!-- end .heroIconWrapper -->
		</div>
		<!-- end .heroCarousel -->
	</div>
	<!-- end .stickySubNav -->
	<div class="stickySpacer" style="display: none;"></div>

</div>
<!-- end .stickySubNavWrapper -->
<?php include( '/includes/copy-below.php'); ?>

<?php include($_SERVER[ 'DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>
