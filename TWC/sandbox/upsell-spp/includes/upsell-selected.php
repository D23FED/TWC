<?php
$selection_actions = array(
	"selected" => "have selected",
	"upgraded" => "have upgraded to",
	"switched" => "selected &amp; saved by switching to"
	);

if ( $selection_action === "selected") {
	$icon_checkmark        = false;
	$heading_action_suffix = '';
} elseif ( $selection_action === "upgraded" ||  $selection_action === "switched" ) {
	$icon_checkmark        = true;
	$heading_action_suffix = 'to';
}
?>

<h6 class="heading"><strong><?php echo ucfirst($selection_action) ?></strong> <?php echo $heading_action_suffix;?> <strong><?php echo ucfirst($package) ?></strong> package</h6>
<!-- You selected & saved by switching to: -->
<div class="upsell-component upsell-component-01 pkg-<?php echo strtolower($package) ?> action-<?php echo strtolower($selection_action) ?>">

	<header>
		<?php if ( $icon_checkmark === true) : ?>
			<div class="column">
				<div class="indicator-icon active"><?php echo file_get_contents("images/icon-checkmark.svg"); ?></div>
			</div>
		<?php endif; ?>
		<div class="column">
			<h2 class='title'><?php if ( $selection_action !== "selected") : ?>You <?php echo $selection_actions[$selection_action]; ?>: <?php endif; ?><span class="package">Spectrum TV <strong class="package-name"><?php echo $package ?></strong></span></h2>
		</div>
	</header>

	<section class="body">
		<p class="package-contents-heading">Includes:</p>
		<ul class="package-contents">
			<li><span><strong>125+ channels</strong>, with <em>free</em> DVR Service</span></li>
			<li><span>Access to 10,000 shows and movies with On Demand, with 5,000 free choices!</span></li>
			<li><span>FREE Spectrum TV app&mdash;Watch live TV and On Demand on any device</span></li>
			<li><span>Pause, play and rewind live TV</span></li>
		</ul>
	</section>

</div>
