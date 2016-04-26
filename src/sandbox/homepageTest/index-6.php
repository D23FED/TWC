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
<!-- HTML Start -->
<!-- Begin TopHat Component -->
<header class="tophat twc-header twc-full twc-backgroundGradient-2 newHead">
  <a href="#startContent" style="position: absolute; left: -10000px;">Skip To Content</a>
  <div class="twc-top">
    <div class="twc-container">
      <nav role="navigation">
        <ul class="twc-top-nav">
          <li>
            <div class="navList tophat-tabs">
              <ul>
                <li class="twc-active twc-first">
                  <div class="smartlink smartLink parbase">
                    <a href="">Your Home</a>
                  </div>
                </li>

                <li>
                  <div class="smartlink_0 smartLink parbase">
                    <a href="">Your Business</a>
                  </div>
                </li>
                <li>
                  <div class="smartlink_2 smartLink parbase">
                    <a href="">TWC Central</a>
                  </div>
                </li>
                <li>
                  <div class="smartlink_3 smartLink parbase">
                    <a href="">About Us</a>
                  </div>
                </li>
                <li>
                  <div class="smartlink_4 smartLink parbase">
                    <a href="">Investor Relations</a>
                  </div>
                </li>
                <li>
                  <div class="smartlink_5 smartLink parbase">
                    <a href="">Careers</a>
                  </div>
                </li>
                <li>
                  <div class="smartlink_6 smartLink parbase">
                    <a href="">Espanol</a>
                  </div>
                </li>
              </ul>
            </div>
          </li>

        </ul>
      </nav>
    </div>
  </div>

  <div class="twc-container" id="header">
    <div class="twc-logo">
      <a class="twc-logo-img" href="../" title="TWC Logo">
        <img src="images/TWC-Blue-Logo.png" alt="TWC Logo" title="TWC logo">
      </a>
    </div>

    <div class="newHeaderIcons">
      <ul class="horizontal">
        <li>
          <div class="clickIcon offPage">
            <a href="">
              <figure>
                <img src="images/shop-icon.png" alt="Shop">
              </figure>
              <span class="mobile-hidden">Shop</span>
              <span class="desktop-hidden tablet-hidden"></span>
            </a>
          </div>
        </li>
        <li class="mobile-hidden">
          <div class="clickIcon offPage">
            <a href="">
              <figure>
                <img src="images/pay-bill-icon.png" alt="Pay Bill">
              </figure>
              <span class="mobile-hidden">Pay Bill</span>
              <span class="desktop-hidden tablet-hidden"></span>
            </a>
          </div>
        </li>
        <li class="mobile-hidden">
          <div class="clickIcon offPage">
            <a href="">
              <figure>
                <img src="images/email-icon.png" alt="Email">
              </figure>
              <span class="mobile-hidden">Email</span>
              <span class="desktop-hidden tablet-hidden"></span>
            </a>
          </div>
        </li>
        <li>
          <div data-id="cust-loc-dropdown" class="clickIcon hiddenCheckboxLabel">
            <a href="">
              <figure>
                <img src="images/location-icon.png" alt="Location">
              </figure>
              <span class="mobile-hidden">10010</span>
              <span class="desktop-hidden tablet-hidden"></span>
            </a>
          </div>
        </li>
        <li>
          <div data-id="search-dropdown" class="clickIcon search hiddenCheckboxLabel">
            <a href="">
              <figure>
                <img src="images/search-icon.png" alt="Search">
              </figure>
              <span class="mobile-hidden">Search</span>
              <span class="desktop-hidden tablet-hidden"></span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div class="pushDown">
    <div class="twc-container">
      <div class="pushDownContent">
        <div class="cust-loc-dropdown hiddenCheckboxDropdown">
          <div class="hiddenCheckboxLabel closeDropdown twc-icon-only icon-remove-sign">
            <span></span>
          </div>
          <div class="60-40 section columnControl">
            <div class="parsys_column twc-col2_6040 marginless">
              <div class="parsys parsys0 twc-col2_6040-c0 parsys_column">
                <div class="parbase section">
                  <span class="localize-head right">Service may not be available in: <span class="text-error">12567.</span> If this is not your correct ZIP Code, please enter your ZIP. If it is correct, visit <a href="">cablemover.com</a> to contact the cable provider that serves your area or call <a href="tel:1-855-394-6832">1-855-394-6832</a></span>
                </div>
                <div class="new section"></div>
              </div>
              <div class="parsys parsys1 twc-col2_6040-c1 parsys_column">
                <div class="parbase section">
                  <figure><img src="/TWC/core/images/head-3.png" alt=""></figure>
                  <form class="geoLoc" action="geoLoc">
                    <fieldset class="twc-search">
                      <div class="twc-zip">
                        <input type="text" placeholder="Change Location" id="" name="">
                        <div class="cta omega geoloc-btn twc-icon-after icon-angle-right">
                          <a href="">
                            <span>GO</span>
                          </a>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
                <div class="new section"></div>
              </div>
            </div>
            <div class="columnClear"></div>
          </div>
        </div>
      </div>
      <div class="pushDownContent">
        <div class="search-dropdown hiddenCheckboxDropdown">
          <div class="hiddenCheckboxLabel closeDropdown twc-icon-only icon-remove-sign">
            <span></span>
          </div>
          <form class="contentSearch" action="searchPage">
            <fieldset class="twc-search">
              <div class="twc-search-input-wrap">
                <input type="search" placeholder="Search..." id="" name="">
                <div class="cta omega twc-icon-after icon-angle-right">
                  <a href="">
                    <span>GO</span>
                  </a>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</header>
<!-- End TopHat Component -->

<!-- Begin Nav -->
<nav role="navigation" class="twc-new-navigation">
  <div class="twc-container">
    <ul class="twc-new-nav">
      <li class="nav-menu-1">
        <input id="mobile-menu-one" class="desktop-hidden  mobile-nav" type="checkbox" role="button">
        <label for="mobile-menu-one" class="desktop-hidden">Discover</label>
        <a href="" class="tablet-hidden" onclick="return false">Discover TWC</a>
        <ul>
          <li>
            <div class="parbase teaser twc-new-mega-section width-fifty expand-right">
              <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050 marginless">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Find Channels</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">TV Listings</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">On Demand</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Watch TV Online</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Premium Channel Apps</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Kids Apps</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Sports Apps</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">All TV Apps</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li class="nav-menu-2">
        <input id="mobile-menu-two" class="desktop-hidden mobile-nav" type="checkbox" role="button">
        <label for="mobile-menu-two" class="desktop-hidden">Upgrade</label>
        <a href="" class="tablet-hidden" onclick="return false">Upgrade Services</a>
        <ul class="plans-packages">
          <li>
            <div class="parbase teaser twc-new-mega-section expandable width-ninetyFive">
              <div class="20-20-20-20-20 section columnControl">
                <div class="parsys_column twc-col5_2020202020 marginless">
                  <div class="parsys parsys0 twc-col5_2020202020-c0 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <h5 class="label">Packages</h5>
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">All Plans & Packages</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">SignatureHome&reg;</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">TWC & Verizon Wireless</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col5_2020202020-c1 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <h5 class="label">TV</h5>
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">TV Plans</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Premium Channels</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Sports Packages</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">On Demand</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Channels by Package</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col5_2020202020-c2 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <h5 class="label">Internet</h5>
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Internet Plans</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Select Your Speed</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Speed Test</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Buy Your Modem</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col5_2020202020-c3 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <h5 class="label">Phone</h5>
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">National Phone Plans</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">International Calling Plans</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col5_2020202020-c4 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <h5 class="label">Home Security</h5>
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">IntelligentHome&reg;</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Videos & Features</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Equipment Packages</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Equipment List</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Download the App</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li class="nav-menu-3 tablet-hidden">
        <input id="mobile-menu-three" class="desktop-hidden  mobile-nav" type="checkbox" role="button">
        <a href="" class="tablet-hidden" onclick="return false">Watch TV</a>
        <ul>
          <li>
            <div class="parbase teaser twc-new-mega-section width-fifty">
              <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050 marginless">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Find Channels</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">TV Listings</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">On Demand</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Watch TV Online</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Premium Channel Apps</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Kids Apps</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Sports Apps</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">All TV Apps</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li class="nav-menu-4">
        <input id="mobile-menu-four" class="desktop-hidden  mobile-nav" type="checkbox" role="button">
        <label for="mobile-menu-four" class="desktop-hidden">My Account</label>
        <a href="" class="tablet-hidden" onclick="return false">My Account</a>
        <ul>
          <li>
            <div class="parbase teaser twc-new-mega-section width-fifty">
              <div class="50-50 section columnControl">
                <div class="parsys_column twc-col2_5050 marginless">
                  <div class="parsys parsys0 twc-col2_5050-c0 parsys_column push">
                    <div class="parbase section">
                      <ul>
                        <li>
                          <form action="" method="post" id="login-form">
                            <fieldset class="login">
                              <div class="rounded-input-wrap">
                                <label for="username">Residential Account Sign-in</label>
                                <input type="text" placeholder="username" id="username" name="username" class="rounded" autocomplete="off"></div>
                              <div class="rounded-input-wrap">
                                <label for="password" class="visually-hidden">Password</label>
                                <input type="password" id="password" placeholder="password" name="password" class="rounded" autocomplete="off"></div>
                              <div class="cta omega twc-icon-after icon-angle-right right">
                                <button type="submit">Sign In</button>
                              </div>
                            </fieldset>
                          </form>
                        </li>
                      </ul>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col2_5050-c1 parsys_column pull">
                    <div class="parbase section">
                      <div class="labelList section">
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Access My Account</a>
                            </div>
                          </li>
                          <li class="tablet-hidden">
                            <div class="smartLink parbase">
                              <span>Forgot <a href="">username</a> or <a href="">password</a>?</span>
                            </div>
                          </li>
                          <li class="nav-desktop-hidden">
                            <div class="smartLink parbase">
                              <a href="">Forgot Username</a>
                            </div>
                          </li>
                          <li class="nav-desktop-hidden">
                            <div class="smartLink parbase">
                              <a href="">Forgot Password</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Register for a TWC ID</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Looking for a Business account?</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Check Email</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li class="nav-menu-5">
        <input id="mobile-menu-five" class="desktop-hidden  mobile-nav" type="checkbox" role="button">
        <label for="mobile-menu-five" class="desktop-hidden">Support</label>
        <a href="" class="tablet-hidden" onclick="return false">Support</a>
        <ul>
          <li>
            <div class="parbase teaser twc-new-mega-section width-sixty expand-left">
              <div class="33-33-33 section columnControl">
                <div class="parsys_column twc-col3_333333 marginless">
                  <div class="parsys parsys0 twc-col3_333333-c0 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <h5 class="label">Help with Services</h5>
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">TV</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Internet</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Phone</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">IntelligentHome&reg;</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Support Overview</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col3_333333-c1 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Contact Us</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">TWC Store Locations</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">TWC Community Forums</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Moving?</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">How-To Videos</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col3_333333-c2 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Account & Billing</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Frequently Asked Questions</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Buy Your Own Modem</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Program Your Remote</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Find Channels</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li class="nav-menu-6 desktop-hidden">
        <input id="mobile-menu-six" class="desktop-hidden  mobile-nav" type="checkbox" role="button">
        <label for="mobile-menu-six" class="desktop-hidden icon-after icon-angle-right">More</label>
        <ul>
          <li>
            <div class="parbase teaser twc-new-mega-section width-sixty expand-left">
              <div class="33-33-33 section columnControl">
                <div class="parsys_column twc-col3_333333 marginless">
                  <div class="parsys parsys0 twc-col3_333333-c0 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <h5 class="label">Help with Services</h5>
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">TV</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Internet</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Phone</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">IntelligentHome&reg;</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Support Overview</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col3_333333-c1 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Contact Us</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">TWC Store Locations</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">TWC Community Forums</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Moving?</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">How-To Videos</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col3_333333-c2 parsys_column">
                    <div class="parbase section">
                      <div class="labelList section">
                        <ul>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Account & Billing</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Frequently Asked Questions</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Buy Your Own Modem</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Program Your Remote</a>
                            </div>
                          </li>
                          <li>
                            <div class="smartLink parbase">
                              <a href="">Find Channels</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="new section"></div>
                  </div>
                </div>
                <div class="columnClear"></div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
<div id="startContent"></div>
<!-- End Nav -->

<!-- Begin Content Wrapper -->
<div class="twc-content">
  <!-- Begin Image Content Panel Component -->

  <div class="100 section columnControl">
  <div class="parsys_column twc-col1_100-c0">
    <div class="parsys parsys0 twc-col100_1-c0 parsys_column internal heroBG ">
      <div class="parbase section "></div>
      <div class="new section">
            <div class="50-50 section columnControl">
              <div class="parsys_column twc-col2_5050">
                <div class="parsys parsys0 twc-col2_5050-c0 parsys_column internal ">
                  <div class="parbase section">
                    <figure>
                        <img alt="All Devices" src="images/devices.png">
                    </figure>
                  </div>
                  <div class="new section"> </div>
                </div>

                <div class="parsys parsys1 twc-col2_5050-c1 parsys_column internal ">
                  <div class="parbase section">
                    <div class="heroContainer">
                        <h1 class="super-h1">Do it all with a TWC ID</h1>
                          <p class="fs-26 light">View and pay your bill,<br> access WiFi hotspots,<br> watch TV online and more.</p>
                          <hr class="spacer">
                          <div class="cta twc-icon-after horizontal-center parbase smartLink icon-angle-right section non-indented fs-17">
                            <a href="#">
                              <span class="link-label">Learn More and Register Now</span>
                            </a>
                          </div>
                    </div>
                  </div>
                  <div class="new section"></div>
                </div>
              </div>

              <div class="columnClear"></div>
            </div>
      </div>
    </div>
  </div>

  <div class="columnClear"></div>
</div>

  <!-- End Image Content Panel Component -->
  <!-- Begin Flyout Container -->
  <div class="flyoutContainer">
    <div class="twc-container">
      <div class="text-center">
      <hr class="spacer">
      <div class="clear"></div>
        <span class="h1">Customer Quick Links</span>
        <div class="clear"></div>
        <hr class="spacer">
      </div>
      <div class="20-20-20-20-20 section columnControl">
        <div class="parsys_column twc-col5_2020202020 marginless">
          <div class="parsys parsys0 twc-col5_2020202020-c0 parsys_column">
            <div class="parbase section">
              <!-- Flyout Component -->
              <div class="flyout">
                  <div class="flyoutIcon">
                        <figure>
                            <a analyticsname="test" href="#">
                                <img alt="Improved Service" src="images/ManageAccountIcon.png">
                            </a>
                        </figure>
                    </div>
                    <div class="cta omegaWhite twc-icon-after icon-angle-right">

                      <a analyticsname="test" href="#">
                          <span><b>Manage Account</b></span>
                      </a>
                  </div>
                    <hr class="flyoutHR">
                  <div >
                      <div class="vertical">
                          <ul>
                              <li class="js-first">
                                  <a href="">
                                      <span>View/Pay Your Bill</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <span>Troubleshoot & Support</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <span>TWC Store Locations</span>
                                  </a>
                              </li>
                              <li class="js-last">
                                  <a href="">
                                      <span>Call or Chat with Us</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <!-- .Flyout Component -->
              <div class="clear"></div>
              <hr class="spacer desktop-hidden">
            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col5_2020202020-c1 parsys_column">
            <div class="parbase section">
            <!-- Flyout Component -->
              <div class="flyout">
                    <div class="flyoutIcon">
                        <figure>
                            <a analyticsname="test" href="#">
                                <img alt="Internet" src="images/internet-icon.png">
                            </a>
                        </figure>
                    </div>
                   <div class="cta omegaWhite twc-icon-after icon-angle-right">
                    <a analyticsname="test" href="#">
                        <span><b>Internet</b></span>
                    </a>
                  </div>
                    <hr class="flyoutHR">
                  <div>
                      <div class="vertical">
                          <ul>
                              <li>
                                  <a href="">
                                      <span>Test Your Speed</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <span>Internet Support</span>
                                  </a>
                              </li>

                              <li>
                                  <a href="">
                                      <span>TWC WiFi&reg; Coverage Map</span>
                                  </a>
                              </li>
                              <li class="js-last">
                                  <a href="">
                                      <span>Add or Upgrade Internet</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <!-- .Flyout Component -->

              <div class="clear"></div>
              <hr class="spacer desktop-hidden">
            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col5_2020202020-c2 parsys_column">
            <div class="parbase section">
              <!-- Flyout Component -->
              <div class="flyout">
                    <div class="flyoutIcon">
                        <figure>
                            <a analyticsname="test" href="#">
                                <img alt="Internet" src="images/tv-icon.png">
                            </a>
                        </figure>
                    </div>
                    <div class="cta omegaWhite twc-icon-after icon-angle-right">
                        <a analyticsname="test" href="#">
                            <span><b>TV</b></span>
                        </a>
                    </div>
                    <hr class="flyoutHR">

                  <div >
                      <div class="vertical">
                          <ul>
                              <li class="js-first">
                                  <a href="">
                                      <span>Watch TV Online</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <span>Channel Lineups</span>
                                  </a>
                              </li>

                              <li>
                                  <a href="">
                                      <span>TV Support</span>
                                  </a>
                              </li>
                              <li class="js-last">
                                  <a href="">
                                      <span>Add or Upgrade TV</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <!-- .Flyout Component -->
              <div class="clear"></div>
              <hr class="spacer desktop-hidden">
            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col5_2020202020-c3 parsys_column">
            <div class="parbase section">
              <!-- Flyout Component -->
              <div class="flyout">
                  <div class="flyoutIcon">
                        <figure>
                            <a analyticsname="test" href="#">
                                <img alt="Phone" src="images/phone-icon.png">
                            </a>
                        </figure>
                    </div>
                    <div class="cta omegaWhite twc-icon-after icon-angle-right">
                      <a analyticsname="test" href="#">
                          <span><b>Phone</b></span>
                      </a>
                  </div>
                    <hr class="flyoutHR">
                  <div >
                      <div class="vertical ">
                          <ul>
                              <li class="js-first">
                                  <a href="">
                                      <span>International Calling</span>
                                  </a>
                              </li>

                              <li>
                                  <a href="">
                                      <span>Sign in to VoiceZone</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <span>Phone Support</span>
                                  </a>
                              </li>
                              <li class="js-last">
                                  <a href="">
                                      <span>Add a Phone Plan</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <!-- .Flyout Component -->
              <div class="clear"></div>
              <hr class="spacer desktop-hidden">
            </div>
            <div class="new section"></div>
          </div>
          <div class="parsys parsys1 twc-col5_2020202020-c4 parsys_column">
            <div class="parbase section">
              <!-- Flyout Component -->
              <div class="flyout">
                <div class="flyoutIcon">
                        <figure>
                            <a analyticsname="test" href="#">
                                <img alt="Intelligent Home" src="images/ih-icon.png">
                            </a>
                        </figure>
                    </div>
                  <div class="cta omegaWhite twc-icon-after icon-angle-right">
                      <a analyticsname="test" href="#">
                          <span><b>Home Security</b></span>
                      </a>
                  </div>
                    <hr class="flyoutHR">
                  <div>
                      <div class="vertical">
                          <ul>
                              <li class="js-first">
                                  <a href="">
                                      <span>Research Home Management</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <span>Equipment Packages</span>
                                  </a>
                              </li>
                              <li>
                                  <a href="">
                                      <span>Home Security Support</span>
                                  </a>
                              </li>
                              <li class="js-last">
                                  <a href="">
                                      <span>Customer Portal</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <!-- .Flyout Component -->
              <div class="clear"></div>
              <hr class="spacer desktop-hidden">
            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
    </div>
  </div>
  <!-- End Flyout Container -->
  <!-- Begin Offer Strip -->
  <div class="segmentedBorder">
    <div class="segmentedBorderHeading text-center">
      <span class="h1">Most Popular Deals</span>
    </div>
    <div class="25-25-25-25 section columnControl">
      <div class="parsys_column twc-col4_25252525 marginless">
        <div class="parsys parsys0 twc-col4_25252525-c0 parsys_column">
          <div class="parbase section">
            <div class="offerStripContainer">
              <h6 class="text-center fs22">Upgrade Your Speed</h6>
              <div class="pricing text-center">
                <p class="b">As Low As</p>
                <span class="h4 newBlue">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">10</span>
                  <sup class="cents">00</sup>
                </span>
                <span class="term newBlue">Per mo. /<br>12 mos.</span>
              </div>
              <div class="ctaContainer">
                <hr class="spacer">
                <div class="cta flatOmega icon-after icon-angle-right">
                  <a href="#">
                    <span>Shop Plans</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="clear"></div>

          </div>
          <div class="new section"></div>
        </div>
        <div class="parsys parsys1 twc-col4_25252525-c1 parsys_column">
          <div class="parbase section">
            <div class="offerStripContainer">
              <h6 class="text-center fs22">Add TV</h6>
              <div class="pricing text-center">
                <p class="b">As Low As</p>
                <span class="h4 newBlue">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">10</span>
                  <sup class="cents">00</sup>
                </span>
                <span class="term newBlue">Per mo. /<br>12 mos.</span>
              </div>
              <div class="ctaContainer">
                <hr class="spacer">
                <div class="cta flatOmega icon-after icon-angle-right">
                  <a href="#">
                    <span>Shop Plans</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="clear"></div>

          </div>
          <div class="new section"></div>
        </div>
        <div class="parsys parsys1 twc-col4_25252525-c2 parsys_column">
          <div class="parbase section">
            <div class="offerStripContainer">
              <h6 class="text-center fs22">TV + Internet + Phone</h6>
              <div class="pricing text-center">
                <p class="b">As Low As</p>
                <span class="h4 newBlue">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">89</span>
                  <sup class="cents">99</sup>
                </span>
                <span class="term newBlue">Per mo. /<br>12 mos.</span>
              </div>
              <div class="ctaContainer">
                <hr class="spacer">
                <div class="cta flatOmega icon-after icon-angle-right">
                  <a href="#">
                    <span>Shop Plans</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="clear"></div>

          </div>
          <div class="new section"></div>
        </div>
        <div class="parsys parsys1 twc-col4_25252525-c3 parsys_column">
          <div class="parbase section text-center">
            <div class="offerStripContainer">
              <h6 class="text-center fs22">Most Popular Deals</h6>
              <hr class="spacer">
              <div class="cta flatOmega icon-after icon-angle-right">
                <a href="#">
                  <span>Shop Now</span>
                </a>
              </div>
            </div>
          </div>
          <div class="new section"></div>
        </div>
      </div>
      <div class="columnClear"></div>
    </div>
  </div>
  <!-- End Offer Strip -->
  <!-- begin image art blocks -->
    <div class="text-center">
        <hr class="spacer">
        <div class="clear"></div>
        <span class="h1">See how much more is included</span>
        <div class="clear"></div>
        <hr class="spacer">
    </div>
    <!-- start image art 1 -->

    <div class="image imageArtDirection image-focus-3 parbase section">
    <div style="background-image: url(images/cellPhones-background.jpg); height: auto;" class="image-focus-4 ">
        <div class="parsys twc-container art-direction-par"><div class="columnControl parsys 50-50 section">
            <div class="parsys_column twc-col2_5550   ">
                <div class="twc-col2_5050-c0  parsys_column" id="">
                    <div class="parsys parsys0 column">
                    </div>
                </div>
                <div class="twc-col2_5050-c1  parsys_column" id="">
                    <div class="parsys column parsys1">
                        <div class="richtext section">
                            <hr class="spacer"><hr class="spacer">
                            <div class="block text-center">
                                <p class="h1">TV anytime, anywhere with apps</p>
                                <hr class="spacer">
                                <div class="twc-icon-after cta icon-angle-right section omegaWhite fs-17">
                                <a href="/en/apps.html?iid=tv-lob:3:1:tvapps" analyticsname="tv-lob:4:2:learn about our tv apps">
                                    <span>See Apps Inventory</span>
                                </a>
                                <div class="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div class="richtext section">
                            <div id="a072783e-d0a5-4082-9042-9642e1043d8a">
                               <div style="margin-top: 1.5em; margin-bottom: 1.5em;"><figure><img src="images/apps-icons.png"></figure></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columnClear"></div>
        </div>
        </div>
        </div>
    </div>

    <!-- end image art 1 -->
    <!-- start image art 2 -->
    <div class="image imageArtDirection image-focus-3 parbase section">
    <div style="background-image: url(images/twc-hp-wifi-background.jpg); height: auto;" class="image-focus-3">
        <div class="parsys twc-container art-direction-par"><div class="columnControl parsys 50-50 section">
            <div class="parsys_column twc-col2_5050">
                <div class="twc-col2_5050-c0  parsys_column" id="">
                    <div class="parsys parsys0 column">
                            <div class="columnControl parsys 33-67 section">
                                <div class="parsys_column twc-col2_3367">
                                    <div class="twc-col2_3367-c0  parsys_column" id="">
                                        <div class="parsys parsys0 column">
                                            <div class="richtext section">
                                                <div class="mobileBG" style="margin-top:7em;">
                                                    <figure>
                                                        <img  src="images/twc-hp-wifi-icon.jpg">
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="twc-col2_3367-c1  parsys_column" id="">
                                        <div class="parsys column parsys1">
                                            <div class="heroContainer">
                                                <div class="mobileBG" style="margin-bottom:7em;">

                                                    <p class="h1 mobile-full block"> Free access to hotspots nationwide</p>
                                                    <hr class="spacer">
                                                    <div class="twc-icon-after cta icon-angle-right section omegaWhite fs-17 mobile-full">
                                                    <a href="#" analyticsname="#">
                                                        <span>See Coverage Map</span>
                                                    </a>
                                                    <div class="clear"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="twc-col2_5050-c1  parsys_column" id="">
                    <div class="parsys column parsys1">
                    </div>
                </div>
            </div>
            <div class="columnClear"></div>
        </div>
        </div>
        </div>
    </div>
    <!-- end image art 2 -->
    <!-- start image art 3 -->
    <div class="image imageArtDirection image-focus-4 parbase section">
    <div style="background-image: url(images/twc-hp-ondemand-background.jpg); height: auto;" class="image-focus-4">
        <div class="parsys twc-container art-direction-par"><div class="columnControl parsys 60-40 section">
            <div class="parsys_column twc-col2_6040   ">
                <div class="twc-col2_6040-c0  parsys_column" id="">
                    <div class="parsys parsys0 column">
                    </div>
                </div>
                <div class="twc-col2_6040-c1  parsys_column" id="">
                    <div class="parsys column parsys1">
                        <div class="richtext section heroContainer">
                            <p style="margin-top:2em;" class="h1 mobile-full">Thousands of moview and binge-worthy shows On Demand</p>
                            <hr class="spacer">
                            <div style="margin-bottom:2em;" class="twc-icon-after cta icon-angle-right section omegaWhite fs-17 mobile-full">
                            <a href="#" analyticsname="#">
                                <span>Watch Trailers</span>
                            </a>
                            <div class="clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columnClear"></div>
        </div>
        </div>
        </div>
    </div>
    <!-- end image art 3 -->
    <div class="text-center">
        <hr class="spacer">
      <div class="clear"></div>
        <span class="h1">TWC Spotlight</span>
        <div class="clear"></div>

    </div>
    <!-- start 33 column spotlight -->
    <div class="twc-container">
        <div class="columnControl parsys 33-33-33 section">
            <div class="parsys_column twc-col3_333333">
                <div class="twc-col3_333333-c0  parsys_column">
                    <div class="parsys parsys0 column">
                        <a href="#" analyticsname="#">
                            <figure>
                                <img src="images/twc-hp-spotlight-banner-01.jpg">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="twc-col3_333333-c1  parsys_column">
                    <div class="parsys parsys1 column">
                        <a href="#" analyticsname="#">
                            <figure>
                                <img src="images/twc-hp-spotlight-banner-02.jpg">
                            </figure>
                        </a>
                    </div>
                </div>
                <div class="twc-col3_333333-c2  parsys_column">
                    <div class="parsys parsys2 column">
                        <a href="#" analyticsname="#">
                            <figure>
                                <img src="images/twc-hp-spotlight-banner-03.jpg">
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="columnClear"></div>
    </div>
    <!-- end 33 column spotlight -->
    <!-- start 4 column links -->
        <div class="twc-container">
            <div class="parsys container-component container_component">
            <div class="25-25-25-25 columnControl parsys section">

            <div class="parsys_column twc-col4_25252525">
                    <div class="twc-col4_25252525-c0  parsys_column" id="">
                        <div class="parsys parsys0 column">
                            <div class="richtext section">
                                <div id="7b29c5a5-ba5d-4bd5-b1dd-7a606777dc89">
                                    <div class="text-center">
                                        <div class="cta twc-icon-after horizontal-center parbase icon-angle-right section non-indented omegaWhite fs-17">
                                            <a href="#" analyticsname="#">
                                            <img style="padding-bottom: 0.5em;" alt="See all packages" src="images/lockup-icon-all-packages.png"><br>
                                                <span class="link-label">Packages</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="one_column_text richtext section">
                                <div id="76dba623-6379-4311-97ac-ec2c55d0fbd4">
                                   <hr style="margin: 30px 0px;" class="mobile-only">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="twc-col4_25252525-c1  parsys_column" id="">
                        <div class="parsys column parsys1"><div class="richtext section">
                            <div id="d62c3cb8-ccc8-4203-a818-6519f3439eb1">
                                <div class="text-center">
                                        <div class="cta twc-icon-after horizontal-center parbase icon-angle-right section non-indented omegaWhite fs-17">
                                            <a href="#" analyticsname="#">
                                            <img style="padding-bottom: 0.5em;" src="images/lockup-icon-shoptag.png"><br>
                                                <span class="link-label">Shop Now</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="one_column_text richtext section">
                                <div id="3dbcddbf-e25d-4b3b-86a9-8ec3abdbbcfb">
                                   <hr style="margin: 30px 0px;" class="mobile-only">
                                </div>
                        </div>
                    </div>

                    <div class="twc-col4_25252525-c2  parsys_column" id="">
                        <div class="parsys column parsys2"><div class="one_column_text richtext section">
                            <div>
                                <div class="text-center">
                                    <div class="cta twc-icon-after horizontal-center parbase icon-angle-right section non-indented omegaWhite fs-17">
                                        <a href="#" analyticsname="#">
                                        <img style="padding-bottom: 0.5em;" alt="TWC Store locations" src="images/lockup-icon-twc-stores.png"><br>
                                            <span class="link-label">TWC Stores</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    <div class="one_column_text richtext section">
                            <div id="e4b152f7-2c20-4f68-bdb0-5a033dabd248">
                               <hr style="margin: 30px 0px;" class="mobile-only">
                            </div>
                    </div>

                    </div>
                    <div class="twc-col4_25252525-c3  parsys_column" id="">
                        <div class="parsys column parsys3"><div class="one_column_text richtext section">
                            <div>
                                <div class="text-center">
                                    <div class="cta twc-icon-after horizontal-center parbase icon-angle-right section non-indented omegaWhite fs-17">
                                        <a href="#" analyticsname="#">
                                        <img style="padding-bottom: 0.5em;" alt="Contact Us" src="images/lockup-icon-call-twc.png"><br>
                                            <span class="link-label">Contact TWC</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
            </div>
            <div class="columnClear"></div>

            </div>
        </div>
        <!-- end 4 columns links -->

  <!-- end image art blocks -->
  <hr class="spacer">
</div>
<!-- End Content Wrapper -->
<!-- HTML Finish -->
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
<hr class="spacer">
      <div class="clear"></div>
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