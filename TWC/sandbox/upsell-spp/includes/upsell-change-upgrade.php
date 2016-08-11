<?php
// Determine what each upsell option will offer, to "Add" and "Upgrade" (upgrade), or to "Select & Save" and "Select Plan" (downgrade)
$select_offer = "upgrade";
$silver_offer = "upgrade";
$gold_offer   = "upgrade";

// Difference in price compared to selected package
$select_price = "20";
$silver_price = "20";
$gold_price   = "40";

// Order of upsell options
$upsell_option_order = 'forward';
// Action/Package combo determines what the offers are
if ($selection_action === "selected" ) {
	if ($package === 'Select') {
		$silver_offer        = "upgrade";
		$gold_offer          = "upgrade";
	} elseif ($package === 'Silver') {
		$select_offer        = "downgrade";
		$gold_offer          = "upgrade";
	} elseif ($package === 'Gold') {
		$select_offer        = "downgrade";
		$silver_offer        = "downgrade";
		$select_price        = "40";
		$upsell_option_order = 'reverse';
	}
} elseif ($selection_action === "upgraded" ) {
	if ($package === 'Select') {
	} elseif ($package === 'Silver') {
		$select_offer        = "downgrade";
		$gold_offer          = "upgrade";
		$upsell_option_order = 'reverse';
	} elseif ($package === 'Gold') {
		$select_offer        = "downgrade";
		$silver_offer        = "downgrade";
		$select_price        = "40";
		$upsell_option_order = 'reverse';
	}
} elseif ($selection_action === "switched" ) {
	if ($package === 'Select') {
		$silver_offer        = "upgrade";
		$gold_offer          = "upgrade";
	} elseif ($package === 'Silver') {
		$select_offer        = "downgrade";
		$gold_offer          = "upgrade";
	} elseif ($package === 'Gold') {
		$select_offer        = "downgrade";
		$silver_offer        = "downgrade";
	}
}

// The call to action that the upsell uses, "Add" this or "Switch to" this
$offer_action = array (
	"upgrade"   => "Add",
	"downgrade" => "Switch to"
);

// The text preceding the price, describing it's relation to the current package, "[package] FOR $20" vs "[package] & SAVE $20"
$price_prefix = array(
	"upgrade"   => "for",
	"downgrade" => "&amp; <strong>save</strong>"
);

// Terms of offer
$terms = array (
	"upgrade"   => "more per mo.",
	"downgrade" => "per month"
);

// CTA Title
$cta_title = array(
	"upgrade"   => "Upgrade",
	"downgrade" => "Select Plan"
);

// CTA Classes
$cta_class = array(
	"upgrade"   => "green",
	"downgrade" => "white"
);

?>

<!-- Get the most out of your TV service -->
<div class="upsell-component upsell-component-02">
	<header>
		<h2 class='title'>Get the most out of your TV service</h2>
		<?php if ($selection_action !== "selected") : ?>
			<div class="cart-notifier upsell-pkg-<?php echo strtolower($package) ?>">
				<div class="inner"><a class="package-name tooltip">TV <?php echo $package ?></a> Added to Cart</div><div class="indicator-icon active"><?php echo file_get_contents("images/icon-cart-2color.svg"); ?></div>
			</div>
		<?php endif; ?>
	</header>

	<section class="upsells">

		<?php
		if ($upsell_option_order === 'reverse') {
			include 'includes/upsell-option-gold.php';
		} else {
			include 'includes/upsell-option-select.php';
		};
		include 'includes/upsell-option-silver.php';
		if ($upsell_option_order === 'reverse') {
			include 'includes/upsell-option-select.php';
		} else {
			include 'includes/upsell-option-gold.php';
		};
		?>

	</section>
</div>
