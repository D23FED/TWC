<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<h2>Combine TV, Internet &amp; Phone for the best deal</h2>
<figure>
  <img src="images/DVR_Burst_Main.png" alt="">
</figure>
<div class="packageSelectTabs">
  <div class="selectFilter sticky">
    <div class="stickyWrapper">
      <div class="100 section columnControl">
        <div class="parsys_column twc-col1_100">
          <div class="parsys parsys0 twc-col1_100-c0 parsys_column">
            <div class="parbase section">
              <span class="h4">Select and Filter</span>
              <div class="collapse-button">
                <span></span>
              </div>
            </div>
            <div class="new section"></div>
          </div>
        </div>
        <div class="columnClear"></div>
      </div>
      <form class="package-filters" action="searchPage" >
        <div class="75-25 section columnControl">
          <div class="parsys_column twc-col2_7525">
            <div class="parsys parsys0 twc-col2_7525-c0 parsys_column">
              <div class="parbase section">
                <fieldset>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <input id="sort1" type="checkbox">
                          <label for="sort1">TV</label>
                        </td>
                        <td>
                          <input id="sort2" type="checkbox">
                          <label for="sort2">Internet</label>
                        </td>
                        <td>
                          <input id="sort3" type="checkbox">
                          <label for="sort3">Phone</label>
                        </td>
                        <td>
                          <input id="sort4" type="checkbox" checked="">
                          <label for="sort4">All Packages</label>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </fieldset>
              </div>
              <div class="new section"></div>
            </div>
            <div class="parsys parsys1 twc-col2_7525-c1 parsys_column">
              <div class="parbase section">
                <select name="sortOrder" id="sortOrder">
                  <option value="recommended">Recommended</option>
                  <option value="lowToHigh">Low To High</option>
                  <option value="highToLow">High To Low</option>
                </select>
              </div>
              <div class="new section"></div>
            </div>
          </div>
          <div class="columnClear"></div>
        </div>
      </form>
    </div>
  </div>
  <div class="stickySpacing"></div>
  <div class="packageSelect stickyElement">
    <!--PACKAGE BEGIN-->
    <div class="package triple">
      <div class="packageHead">
        <fieldset>
          <input class="comparePackage" id="compare-1a" type="checkbox">
          <label class="compare-label" for="compare-1a">Compare Plan</label>
          <div class="alertTooltip">
            <p>This is an alert</p>
          </div>
          <div class="compare-button cta">
            <a href="">
              <span>Compare Plan</span>
            </a>
          </div>
        </fieldset>
        <div class="packageTitle">
        </div>
        <div class="compareAlert minimum">
          <div class="compareAlertBody">
            <div class="closeBtn"></div>
            <p>You must select at least 1 more package to compare</p>
          </div>
        </div>
        <div class="compareAlert maximum">
          <div class="compareAlertBody">
            <div class="closeBtn"></div>
            <p>You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare</p>
            <p>If you wish to clear your compare selections and begin again, select <strong>Start Over</strong>. To keep your current choices, select <strong>Continue.</strong></p>
            <div class="cta compareStartOver">
              <a href="#">
                <span>Start Over</span>
              </a>
            </div>
            <div class="cta compareContinue">
              <a href="#">
                <span>Continue</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="packageBody">
        <div class="packageInfo">
          <div class="text-center">
             <div id="1" class="cta modal-button">
                <a href=""   analyticsname="test">
                  <span>200+ Channels - View List</span>
                </a>
              </div>
          </div>
          <p class="text-center">
            Speeds up to <a class="tooltip below" href="#">60Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
          </p>
          <p class="text-center">Phone w/ voicemail</p>
        </div>
        <hr class="spacer">
        <hr>
        <div class="pricing temp text-center">
          <span class="h4">
            <sup class="dollar-sign">$</sup>
            <span class="dollars">89</span>
            <sup class="cents">97</sup>
          </span>
          <span class="term">
            <div class="richtext preTerm">
              <div id="">
                <p>Per Month for&nbsp;</p>
              </div>
            </div>
            <br>
            <div class="discountTerm">12</div>
            <div class="richtext postTerm">
              <div id="">
              <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
              </div>
            </div>
          </span>
        </div>
        <hr>
        <div class="specialOffer">
          <div class="charterTitle">
            <div class="h4">Triple Play Select</div>
          </div>
          <div class="steelDark-9">
            <div class="text-center">
              <div class="h5 block">From</div>
              <div class="h2">
                <div class="left fs48">$29</div>
                <div class="right">
                  <p class="h4">99/mo</p>
                  <p class="term">each for 12 mos when bundled*</p>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <hr class="spacer">
          <ul class="text-left text-center">
            <li>
              <p class="book fs14"><span class="text-info">FREE</span> DVR Service</p>
            </li>
            <li>
              <br>
            </li>
            <li>
              <br>
            </li>
          </ul>
        </div>
        <hr>
      </div>
      <div class="packageFooter side-by-side">
        <div class="buttonWrapper">
          <div class="cta whiteCTA expandDetails icon-after icon-angle-down">
            <a href="">
              <span>View Details</span>
            </a>
          </div>
        </div>
        <div class="buttonWrapper">
          <div class="cta green icon-after icon-angle-right">
            <a href="">
              <span>Select Offer</span>
            </a>
          </div>
        </div>
        <div class="clear"></div>
        <div class="detailsExpansion">
          <div class="cta icon-after icon-remove right closeDetails">
            <a href="#">
              <span>Close</span>
            </a>
          </div>
          <div class="detailsContent">
            <div class="vertical bulleted">
              <ul>
                <li class="listHead b">TV</li>
                <li>
                  <p>200+ channels, with many in HD</p>
                </li>
                <li>
                  <p>EPIX Free for 12-months</p>
                </li>
                <li>
                  <p>FREE HD Box</p>
                </li>
                <li>
                  <p>Access to 30,000 shows and movies with TWC On Demand</p>
                </li>
                <li>
                  <p>FREE TWC TV® app - Watch live TV and On Demand on any device</p>
                </li>
              </ul>
            </div>
            <hr class="spacer">
            <hr>
            <hr class="spacer">
            <div class="vertical bulleted">
              <ul>
                <li class="listHead b">Internet</li>
                <li>
                  <p>100Mbps speeds and FREE home wifi</p>
                </li>
                <li>
                  <p>Unlimited access to 500,000 TWC WiFi Hotspots nationwide</p>
                </li>
                <li>
                  <p>No data caps - unlimited usage</p>
                </li>
              </ul>
            </div>
            <hr class="spacer">
            <hr>
            <hr class="spacer">
            <div class="vertical bulleted">
              <ul>
                <li class="listHead b">Extras</li>
                <li>
                  <p>$300 Gift Card</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--PACKAGE END-->
    <!--PACKAGE BEGIN-->
    <div class="package triple">
      <div class="packageHead">
        <fieldset>
          <input class="comparePackage" id="compare-1a" type="checkbox">
          <label class="compare-label" for="compare-1a">Compare Plan</label>
          <div class="alertTooltip">
            <p>This is an alert</p>
          </div>
          <div class="compare-button cta">
            <a href="">
              <span>Compare Plan</span>
            </a>
          </div>
        </fieldset>
        <div class="packageTitle">
        </div>
        <div class="compareAlert minimum">
          <div class="compareAlertBody">
            <div class="closeBtn"></div>
            <p>You must select at least 1 more package to compare</p>
          </div>
        </div>
        <div class="compareAlert maximum">
          <div class="compareAlertBody">
            <div class="closeBtn"></div>
            <p>You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare</p>
            <p>If you wish to clear your compare selections and begin again, select <strong>Start Over</strong>. To keep your current choices, select <strong>Continue.</strong></p>
            <div class="cta compareStartOver">
              <a href="#">
                <span>Start Over</span>
              </a>
            </div>
            <div class="cta compareContinue">
              <a href="#">
                <span>Continue</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="packageBody">
        <div class="packageInfo">
          <div class="text-center">
             <div id="1" class="cta modal-button">
                <a href=""   analyticsname="test">
                  <span>200+ Channels - View List</span>
                </a>
              </div>
          </div>
          <p class="text-center">
            Speeds up to <a class="tooltip below" href="#">60Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
          </p>
          <p class="text-center">Phone w/ voicemail</p>
        </div>
        <div class="clear"></div>
        <hr class="spacer">
        <hr>
        <div class="clear"></div>
        <div class="pricing temp text-center">
          <span class="h4">
            <sup class="dollar-sign">$</sup>
            <span class="dollars">109</span>
            <sup class="cents">97</sup>
          </span>
          <span class="term">
            <div class="richtext preTerm">
              <div id="">
                <p>Per Month for&nbsp;</p>
              </div>
            </div>
            <br>
            <div class="discountTerm">12</div>
            <div class="richtext postTerm">
              <div id="">
              <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
              </div>
            </div>
          </span>
        </div>
        <hr>
        <div class="specialOffer">
          <div class="charterTitle">
            <div class="h4">Triple Play Silver</div>
          </div>
          <div class="steelDark-9">
            <div class="text-center">
              <div class="h5 block">Select +</div>
              <div class="h2">
                <div class="left fs48">$20</div>
                <div class="right">
                  <p class="h4">more</p>
                  <p class="term">per mo for 12 mos*</p>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <hr class="spacer">
          <ul class="text-left text-center">
            <li>
              <p class="book fs14"><span class="text-info">FREE</span> DVR Service</p>
            </li>
            <li>
              <p class="book fs14">Includes HBO, Cinemax, Showtime &amp; NFL Network</p>
            </li>
          </ul>
        </div>
        <hr>
      </div>
      <div class="packageFooter side-by-side">
        <div class="buttonWrapper">
          <div class="cta whiteCTA expandDetails icon-after icon-angle-down">
            <a href="">
              <span>View Details</span>
            </a>
          </div>
        </div>
        <div class="buttonWrapper">
          <div class="cta green icon-after icon-angle-right">
            <a href="">
              <span>Select Offer</span>
            </a>
          </div>
        </div>
        <div class="clear"></div>
        <div class="detailsExpansion">
          <div class="cta icon-after icon-remove right closeDetails">
            <a href="#">
              <span>Close</span>
            </a>
          </div>
          <div class="detailsContent">
            <div class="vertical bulleted">
              <ul>
                <li class="listHead b">TV</li>
                <li>
                  <p>70+ channels, with many in HD</p>
                </li>
                <li>
                  <p>Access to 30,000 shows and movies with TWC On Demand</p>
                </li>
                <li>
                  <p>FREE TWC TV® app - Watch live TV and On Demand on any device</p>
                </li>
              </ul>
            </div>
            <hr class="spacer">
            <hr>
            <hr class="spacer">
            <div class="vertical bulleted">
              <ul>
                <li class="listHead b">Internet</li>
                <li>
                  <p>100Mbps speeds and FREE home wifi</p>
                </li>
                <li>
                  <p>Unlimited access to 500,000 TWC WiFi Hotspots nationwide</p>
                </li>
                <li>
                  <p>No data caps - unlimited usage</p>
                </li>
              </ul>
            </div>
            <hr class="spacer">
            <hr>
            <hr class="spacer">
            <div class="vertical bulleted">
              <ul>
                <li class="listHead b">Extras</li>
                <li>
                  <p>$300 Gift Card</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--PACKAGE END-->
      <!--PACKAGE BEGIN-->
    <div class="package triple">
      <div class="packageHead">
        <fieldset>
          <input class="comparePackage" id="compare-1a" type="checkbox">
          <label class="compare-label" for="compare-1a">Compare Plan</label>
          <div class="alertTooltip">
            <p>This is an alert</p>
          </div>
          <div class="compare-button cta">
            <a href="">
              <span>Compare Plan</span>
            </a>
          </div>
        </fieldset>
        <div class="packageTitle">
        </div>
        <div class="compareAlert minimum">
          <div class="compareAlertBody">
            <div class="closeBtn"></div>
            <p>You must select at least 1 more package to compare</p>
          </div>
        </div>
        <div class="compareAlert maximum">
          <div class="compareAlertBody">
            <div class="closeBtn"></div>
            <p>You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare</p>
            <p>If you wish to clear your compare selections and begin again, select <strong>Start Over</strong>. To keep your current choices, select <strong>Continue.</strong></p>
            <div class="cta compareStartOver">
              <a href="#">
                <span>Start Over</span>
              </a>
            </div>
            <div class="cta compareContinue">
              <a href="#">
                <span>Continue</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="packageBody">
        <div class="packageInfo">
          <div class="text-center">
             <div id="1" class="cta modal-button">
                <a href=""   analyticsname="test">
                  <span>200+ Channels - View List</span>
                </a>
              </div>
          </div>
          <p class="text-center">
            Speeds up to <a class="tooltip below" href="#">60Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
          </p>
          <p class="text-center">Phone w/ voicemail</p>
        </div>
        <div class="clear"></div>
        <hr class="spacer">
        <hr>
        <div class="clear"></div>
        <div class="pricing temp text-center">
          <span class="h4">
            <sup class="dollar-sign">$</sup>
            <span class="dollars">129</span>
            <sup class="cents">97</sup>
          </span>
          <span class="term">
            <div class="richtext preTerm">
              <div id="">
                <p>Per Month for&nbsp;</p>
              </div>
            </div>
            <br>
            <div class="discountTerm">12</div>
            <div class="richtext postTerm">
              <div id="">
              <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
              </div>
            </div>
          </span>
        </div>
        <hr>
        <div class="specialOffer">
          <div class="charterTitle">
            <div class="h4">Triple Play Gold</div>
          </div>
          <div class="steelDark-9">
            <div class="text-center">
              <div class="h5 block">Silver +</div>
              <div class="h2">
                <div class="left fs48">$20</div>
                <div class="right">
                  <p class="h4">more</p>
                  <p class="term">per mo for 12 mos*</p>
                </div>
              </div>
            </div>
          </div>
          <hr>
          <hr class="spacer">
          <ul class="text-left text-center">
            <li>
              <p class="book fs14"><span class="text-info">FREE</span> DVR Service</p>
            </li>
            <li>
              <p class="book fs14">Includes HBO, Cinemax, Showtime, TMC, STARZ, NFL Network &amp; more</p>
            </li>
          </ul>
        </div>
        <hr>
      </div>
      <div class="packageFooter side-by-side">
        <div class="buttonWrapper">
          <div class="cta whiteCTA expandDetails icon-after icon-angle-down">
            <a href="">
              <span>View Details</span>
            </a>
          </div>
        </div>
        <div class="buttonWrapper">
          <div class="cta green icon-after icon-angle-right">
            <a href="">
              <span>Select Offer</span>
            </a>
          </div>
        </div>
        <div class="clear"></div>
        <div class="detailsExpansion">
          <div class="cta icon-after icon-remove right closeDetails">
            <a href="#">
              <span>Close</span>
            </a>
          </div>
          <div class="detailsContent">
            <div class="vertical bulleted">
              <ul>
                <li class="listHead b">Phone</li>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam.</p></li>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam.</p></li>
                <li><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, quibusdam.</p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--PACKAGE END-->

  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>