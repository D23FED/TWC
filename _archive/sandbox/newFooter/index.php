<!DOCTYPE html>
<!--[if IE 8 ]><html class="twc-ie twc-ie8 no-js" lang="en"><![endif]-->
<!--[if IE 9 ]><html class="twc-ie twc-ie9 no-js" lang="en"><![endif]-->
<!--[if gt IE 9]><!--><html class="no-js"><!--<![endif]-->

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="expires" content="Mon, 26 Jul 1997 05:00:00 GMT"/>

    <? include('variables/global_variables.php'); include('includes/variables/page_variables.php'); ?>
    <title><?php if ($title !='') { echo($title); } else { echo ($banner_title); } ?> | Time Warner Cable</title>
    <meta name="description" content="<?=$description?>">
    <meta name="keywords" content="<?=$keywords?>">
    <!-- <meta name="viewport" content="width=device-width"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="format-detection" content="telephone=no">
    <link rel="icon" href="/TWC/core/images/favicon.ico" type="image/x-icon">

    <!-- Global Element & Page CSS -->
    <!-- <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet"> -->

    <link rel="stylesheet" href="/TWC/core/css/main.min.css">
    <? if ($componentName !='') { echo '<link rel="stylesheet" href="css/' . $componentName . '.css">'; }
       if (file_exists('../../css/page.css')) { echo '<link rel="stylesheet" href="../../css/page.css">'; }
       if (file_exists('../css/page.css')) { echo '<link rel="stylesheet" href="../css/page.css">'; }
       if (file_exists('css/page.css')) { echo '<link rel="stylesheet" href="css/page.css">'; }
    // Load Page Module Specific CSS
       if (file_exists('includes/css.php')) { include('includes/css.php');} ?>
    <link id='printCSS' media='print' rel='stylesheet' type='text/css' href='/TWC/core/css/print.css' />
    <script src="/TWC/core/js/vendor/modernizr-2.6.2.min.js"></script>
</head>

<body id="<?php if ($body_ID !='') { echo($body_ID);}?>">
<!-- Footer Component -->
<div class="socialStrip">
  <div class="twc-container">
    <ul class="horizontal text-center">
      <li class="socialHeader tablet-hidden">
        <span class="h3 text-white">Follow Us</span>
      </li>
      <li>
        <a href="">
          <img src="images/facebook.png" alt="Facebook">
          <span class="h6 text-white tablet-hidden">Facebook</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="images/twitter.png" alt="Twitter">
          <span class="h6 text-white tablet-hidden">Twitter</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="images/instagram.png" alt="Instagram">
          <span class="h6 text-white tablet-hidden">Instagram</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="images/youtube.png" alt="Youtube">
          <span class="h6 text-white tablet-hidden">YouTube</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="images/untangled.png" alt="Untangled Blog">
          <span class="h6 text-white tablet-hidden">Untangled Blog</span>
        </a>
      </li>
      <li>
        <a href="">
          <img src="images/facebook.png" alt="Facebook">
          <span class="h6 text-white tablet-hidden">Mi Cultura</span>
        </a>
      </li>
    </ul>
  </div>
</div>
<div class="emailSubscribe">
  <div class="twc-container">
    <form class="emailSubscribeForm">
      <label class="h5" for="emailSubscribe">Sign up for the latest offers from TWC</label>
      <input id="emailSubscribe" type="text" placeholder="Enter your email address">
      <div class="cta flatOmega icon-after icon-angle-right mobile-full">
        <a href="#">
          <span>Submit</span>
        </a>
      </div>
    </form>
  </div>
</div>
<footer class="twc-footer" role="contentinfo">
  <div class="twc-container">
    <hr>
    <div class="labelList section">
      <p class="label round">Product</p>
      <ul>
        <li class="twc-first">
          <div class="smartLink parbase">
            <a href="#">Packages</a>
          </div>
        </li>
        <li>
          <div class="smartLink parbase">
            <a href="#">TV</a>
          </div>
        </li>
        <li>
          <div class="smartLink parbase">
            <a href="#">Internet</a>
          </div>
        </li>
        <li>
          <div class="smartLink parbase">
            <a href="#">Phone</a>
          </div>
        </li>
        <li>
          <div class="smartLink parbase">
            <a href="#">IntelligentHome</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="labelList section">
      <p class="label round">Services</p>
      <ul>
        <li class="twc-first">
          <div class="smartLink parbase">
            <a href="#">Pay Your Bill Online</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">Ways to Pay Your Bill</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">Moving?</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">My Account</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">TWC Apps</a>
          </div>
        </li>

        <li class="twc-last">
          <div class="smartLink parbase">
            <a href="#">Check Email</a>
          </div>
        </li>
        <li class="twc-last">
          <div class="smartLink parbase">
            <a href="#">On Demand</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="labelList section">
      <p class="label round">Support</p>
      <ul>
        <li class="twc-first">
          <div class="smartLink parbase">
            <a href="#">Browse Support</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">Program Your Remote</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">Channel Lineup</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">Closed Captioning</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">Welcome to TWC</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">TV Parental Controls</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">Internet Safety</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase accessibility">
            <a href="#">Accessibility</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="labelList section">
      <p class="label round">Contact Us</p>
      <ul>
        <li class="twc-first">
          <div class="smartLink parbase">
            <a href="#">TWC Forums</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">Contact Us</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">TWC Stores</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">Channel Feedback</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">Investor Relations</a>
          </div>
        </li>

        <li class="twc-last">
          <div class="smartLink parbase">
            <a href="#">Careers</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#"> Email Offers</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="labelList section">
      <p class="label round">Other Sites</p>
      <ul>
        <li class="twc-first">
          <div class="smartLink parbase">
            <a href="#">TWC Central</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">TWC News</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a href="#">TWC Media</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a  href="#">Community Solutions</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a  href="#">Connect a Million Minds</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a  href="#">TWC Sportsnet</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a  href="#">TWC Exclusives</a>
          </div>
        </li>

        <li>
          <div class="smartLink parbase">
            <a  href="#">Espanol</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="clear"></div>
    <hr>
    <div class="parsys twc-footer-links twc-row">
    <div class="list section">
      <ul>
        <li class="twc-first js-first">
            <div class="smartLink parbase">
                <a href="http://www.timewarnercable.com/en/about-us/legal/privacy-policy.html" target="_blank" analyticsname="Privacy Policy:1:1:privacy policy">Privacy Policy</a>
            </div>
        </li>

        <li>
            <div class="smartLink parbase">
                <a href="http://help.twcable.com/html/policies.html" target="_blank" analyticsname="Terms, Conditions &amp; Policies:1:2:terms, conditions &amp; policies">Terms, Conditions &amp; Policies</a>
            </div>
        </li>

        <li>
            <div class="smartLink parbase">
                <a href="http://www.timewarnercable.com/en/about-us/legal/regulatory-notices.html" target="_blank" analyticsname="Regulatory:1:3:regulatory">Regulatory</a>
            </div>
        </li>

        <li>
            <div class="smartLink parbase">
                <a href="http://www.timewarnercable.com/en/about-us/legal/privacy-policy/caution-concerning-forward-looking-statements.html" target="_blank" analyticsname="Forward-Looking Statements Caution:1:4:forward-looking statements caution">Forward-Looking Statememts Caution</a>
            </div>
        </li>

        <li>
            <div class="smartLink parbase">
                <a href="http://help.twcable.com/html/twc_sub_agreement_california.html" target="_blank" analyticsname="California Privacy Rights:1:5:california privacy rights">California Privacy Rights</a>
            </div>
        </li>

        <li>
            <div class="smartLink parbase">
                <a href="http://www.timewarnercable.com/en/about-us/legal/privacy-policy/website-terms-of-use.html" target="_blank" analyticsname="Website Terms of Use:1:6:website terms of use">Website Terms of Use</a>
            </div>
        </li>

        <li class="twc-last js-last">
            <div class="smartLink parbase">
                <a href="">Site Map</a>
            </div>
        </li>
      </ul>
    </div>

    <div class="parbase footer-copyright-msg section">
      <div class="twc-footer-copyright-msg">
        <p>&copy; 2004 - 2014 Time Warner Cable Inc. All rights reserved. Time Warner Cable and the Time Warner Cable logo are trademarks of Time Warner Inc. Used under license.</p>
      </div>
    </div>
  </div>
</footer>
<!-- .Footer Component -->
<!-- scripts -->
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"></script>
  <script>window.jQuery || document.write('<script src="/TWC/core/js/vendor/jquery-1.9.0.min.js"><\/script>')</script>
  <script src="/TWC/core/js/vendor/jquery-ui-1.10.3.custom.min.js"></script>
  <script src="/TWC/core/js/global_init.js"></script>
   <!--[if lt IE 10]>
      <script src="/TWC/core/js/vendor/jquery.columnizer.js"></script>
  <![endif]-->
  <script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js?skin=desert"></script>
  <? if (file_exists('../../js/page.js')) { echo '<script src="../../js/page.js"></script>'; }
     if (file_exists('../js/page.js')) { echo '<script src="../js/page.js"></script>'; }
     if (file_exists('js/page.js')) { echo '<script src="js/page.js"></script>'; }
     if (file_exists('includes/functions.js')) { echo '<script src="includes/functions.js"></script>'; } ?>
  <script src="/TWC/core/js/vendor/jquery.slider.min.js"></script>
  <script src="/TWC/core/js/vendor/respond.min.js"></script>
  <script src="/TWC/core/js/vendor/jquery.cookie.js"></script>
  <script src="/TWC/core/js/vendor/parsley.min.js"></script>
  <script src="/TWC/core/js/vendor/jquery.placeholder.js"></script>
  <script src="/TWC/core/js/build/production.min.js"></script>
    <?
  // Load Footer
  include('includes/scripts.php');

  if ($persist == true) { include('persist.php'); }
    ?>

</body>
</html>