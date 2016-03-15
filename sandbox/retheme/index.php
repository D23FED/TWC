<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<!-- HTML Start -->
<header class="tophat twc-header twc-full steelDark-9 newHead">
  <div>
    <div class="twc-container topNav">
      <nav role="navigation">
        <ul class="twc-top-nav">
          <li>
            <div class="navList tophat-tabs">
              <ul>
                <li>
                  <div class="smartlink smartLink parbase">
                    <a href="">Residential</a>
                  </div>
                </li>

                <li>
                  <div class="smartlink_0 smartLink parbase">
                    <a href="">Business</a>
                  </div>
                </li>
                <li>
                  <div class="smartlink_2 smartLink parbase">
                    <a href="">Español</a>
                  </div>
                </li>
              </ul>
            </div>
          </li>

        </ul>
      </nav>
    </div>
  </div>

  <div id="header" class="twc-container">
    <div class="twc-logo">
      <a title="TWC Logo" href="../" class="twc-logo-img">
        <img title="TWC logo" alt="TWC Logo" src="/TWC/core/images/TWC_EB_Horiz_Black_RGB_300.png">
      </a>
    </div>

    <div class="newHeaderIcons">
      <ul class="horizontal">
        <li class="mobile-hidden">
          <div class="clickIcon offPage">
            <a href="">
              <figure>
                <img alt="Pay Bill" src="/TWC/core/images/head-1.png">
              </figure>
              <span>Pay Bill</span>
            </a>
          </div>
        </li>
        <li>
          <div class="clickIcon offPage">
            <a href="">
              <figure>
                <img alt="Email" src="/TWC/core/images/head-2.png">
              </figure>
              <span class="mobile-hidden">Email</span>
              <span class="desktop-hidden tablet-hidden"></span>
            </a>
          </div>
        </li>
        <li>
          <div class="clickIcon noZip hiddenCheckboxLabel" data-id="cust-loc-dropdown">
            <a href="">
              <figure>
                <img alt="Location" src="/TWC/core/images/head-3.png">
              </figure>
              <span class="mobile-hidden">Enter ZIP</span>
              <span class="desktop-hidden tablet-hidden"></span>
            </a>
          </div>
        </li>

        <li>
          <div class="clickIcon search hiddenCheckboxLabel" data-id="search-dropdown">
            <a href="">
              <figure>
                <img alt="Search" src="/TWC/core/images/head-4.png">
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
                  <figure><img alt="" src="/TWC/core/images/head-3.png"></figure>
                  <form action="geoLoc" class="geoLoc">
                    <fieldset class="twc-search">
                      <div class="twc-zip">
                        <input type="text" name="" id="" placeholder="Change Location">
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
          <form action="searchPage" class="contentSearch">
            <fieldset class="twc-search">
              <div class="twc-search-input-wrap">
                <input type="search" name="" id="" placeholder="Search...">
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
<!-- HTML Finish -->

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>