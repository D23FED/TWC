<?php
include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
?>
<div class="hidden wrap circle-01">
	<div class="container container-a">
	  <div class="half-cirle"></div>
	</div>
	<div class="container container-b">
	  <div class="half-cirle"></div>
	</div>
</div>

<div class='circle-02'>
	<div class="radial-progress" data-progress="0">
		<div class="circle">
			<div class="mask full">
				<div class="fill"></div>
			</div>
			<div class="mask half">
				<div class="fill"></div>
				<div class="fill fix"></div>
			</div>
		</div>
		<div class="inner-circle"></div>
	<div class="controls">
		<a href="#" class="btn-rotate">75</a>
		<a href="#" class="btn-rotate">90</a>
		<a href="#" class="btn-rotate">120</a>
		<a href="#" class="btn-rotate">180</a>
	</div>
	</div>
</div>

<div class="hidden circle-03">
	<div id="cont" data-pct="100">
	<svg id="svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	  <circle r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
	  <circle id="bar" r="90" cx="100" cy="100" fill="transparent" stroke-dasharray="565.48" stroke-dashoffset="0"></circle>
	</svg>
	</div>
	<label for="percent">Type a percent!</label>
	<input id="percent" name="percent">
</div>

<div class="hidden circle-04">
	<svg id="processArrowPath" xmlns="http://www.w3.org/2000/svg" height="220">
	  <circle class="path" cy="110" cx="110" r="100"></circle>
	</svg>
</div>

<div class="hidden circle-06">
	<svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		 x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" xml:space="preserve">
		<path class="semicircle" fill="none" stroke="#000000" stroke-miterlimit="10" d="M32.108,181.952c-37.495-37.496-37.496-98.288,0-135.784
		c37.496-37.495,98.29-37.494,135.784,0.001c37.496,37.495,37.496,98.287,0,135.783"/>
	</svg>
</div>
<div class="hidden circle-07">
	<div class="mask">
		<img src="images/circle-75-path-mask.png" alt="">
	</div>
	<div class="bar">
		<img src="images/circle-75-path.png" alt="">
	</div>
</div>

<div class="circle-08">
	<svg version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		 x="0px" y="0px" width="200px" height="200px" viewBox="0 0 200 200" xml:space="preserve">
		<path class="semicircle" fill="none" stroke="#000000" stroke-width="5" stroke-miterlimit="10" d="M32.108,181.952c-37.495-37.496-37.496-98.288,0-135.784
		c37.496-37.495,98.29-37.494,135.784,0.001c37.496,37.495,37.496,98.287,0,135.783"/>
	</svg>
	<div class="offset">Offset: <span class="raw"></span> | <span class="percent"></span>%</div>
	<div class="controls"></div>
</div>

<script>

</script>
<?php include_once($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>
