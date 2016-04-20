<!-- Banner Component -->
<header role="banner" class="twc-banner">
	<?php
		if ( (isset($breadcrumbs)) && ($breadcrumbs === true) ) {
			echo '<div class="twc-breadcrumbs-gradient twc-full">';
			echo '<div class="twc-container"></div>';
			echo '</div>';
		}
	?>
	<div class="twc-container">
		<div class="parsys breadcrumbs">
			<div class="twc-breadcrumbs section">
				<ul class="horizontal slashes">
				<?php
					if ( (isset($breadcrumbs)) && ($breadcrumbs === true) ) {

						if ( (isset($breadcrumb_A)) && ($breadcrumb_A !='') ) {
							echo "<li><a href=''>$breadcrumb_A</a></li>";
						} else {
							echo "<li><a href=''>Your Home</a></li>";
						}
						if ( (isset($breadcrumb_B)) && ($breadcrumb_B !='') ) {
							echo "<li><a href=''>$breadcrumb_B</a></li>";
						}
						if ( (isset($breadcrumb_C)) && ($breadcrumb_C !='') ) {
							echo "<li><a href=''>$breadcrumb_C</a></li>";
						}
						if ( (isset($breadcrumb_D)) && ($breadcrumb_D !='') ) {
							echo "<li><a href=''>$breadcrumb_D</a></li>";
						}
						if ( (isset($breadcrumb_E)) && ($breadcrumb_E !='') ) {
							echo "<li><a href=''>$breadcrumb_E</a></li>";
						}
					}
				?>
				</ul>
			</div>
			<div class="new section"></div>
		</div>
		<h1 class='<?php if ( (isset($banner_title_position)) && ($banner_title_position === 'center') ) { echo "text-center"; } ?>'>
			<?php echo $banner_title; ?>
		</h1>
		<span>
		<?php
			if ( isset($banner_text) ) {
				echo $banner_text;
			}
		?>
		</span>
	</div>
</header>
<!-- /Banner Component -->
