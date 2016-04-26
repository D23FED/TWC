<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<h1>View Plans</h1>
<div class="packageSelectTabs">
  <div class="psTabs">
    <ul class="tab-links">
      <li class="tabHead js-active">
        <span href="#tab1" class="h4" data-tabs="1">Select A Package</span>
      </li>
      <li class="tabHead">
        <span href="#tab2" class="h4" data-tabs="2">Build A Package</span>
      </li>
      <div class="cta omega right tablet-hidden">
        <a href="">
          <span>Need Help?</span>
        </a>
      </div>
    </ul>
    <div class="tab-content">
      <div id="tab1" class="tab js-active">
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
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-1a" type="checkbox">
                <label class="compare-label" for="compare-1a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV, Internet</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">179</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="blue">Special Offer:</h5>
                <p>Limited Time Only - Was $19.99</p>
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
                    <span>Order Now</span>
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
                      <li class="listHead">Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-1b" type="checkbox">
                <label class="compare-label" for="compare-1b">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV, Internet</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5>Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-1c" type="checkbox">
                <label class="compare-label" for="compare-1c">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV, Internet, Phone</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
                <p class="text-center">Phone w/ Voicemail</p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-1d" type="checkbox">
                <label class="compare-label" for="compare-1d">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV, Internet, Phone</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
                <p class="text-center">Phone w/ Voicemail</p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-2a" type="checkbox">
                <label class="compare-label" for="compare-2a">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV, Internet, Phone</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
                <p class="text-center">Phone w/ Voicemail</p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-2b" type="checkbox">
                <label class="compare-label" for="compare-2b">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>Internet</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-2c" type="checkbox">
                <label class="compare-label" for="compare-2c">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-2d" type="checkbox">
                <label class="compare-label" for="compare-2d">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>Internet</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-3a" type="checkbox">
                <label class="compare-label" for="compare-3a">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
                <p class="text-center">Phone w/ Voicemail</p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-3b" type="checkbox">
                <label class="compare-label" for="compare-3b">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>Internet</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
                <p class="text-center">Phone w/ Voicemail</p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-3c" type="checkbox">
                <label class="compare-label" for="compare-3c">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
                <p class="text-center">Phone w/ Voicemail</p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-3d" type="checkbox">
                <label class="compare-label" for="compare-3d">Compare</label>
                <div class="compare-button cta twc-icon-after icon-angle-right">
                  <a href="">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>Phone</span>
                </div>
              </div>
              <div class="compareAlert compareAble">
                <div class="compareAlertBody">
                  <div class="closeBtn"></div>
                  <p>Compare now or click the "Compare" button when you've made your choices. You may select a maximum of <span class="tablet-hidden">3</span><span class="desktop-hidden">2</span> packages to compare at a time</p>
                  <div class="cta compare-button">
                    <a href="#">
                      <span>Compare Now</span>
                    </a>
                  </div>
                </div>
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
                <p class="text-center">
                  <a href="">20+ Channels</a>
                </p>
                <p class="text-center">
                  Internet Speed
                  <a href="">15Mbps</a>
                </p>
                <p class="text-center">Phone w/ Voicemail</p>
              </div>
              <div class="pricing text-center">
                <span class="h4">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">79</span>
                  <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer">
                <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <span>Order Now</span>
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
                  <div class="vertical">
                    <ul>
                      <li>Includes:</li>
                      <li>
                        <a href="">Digital Adapter</a>
                      </li>
                      <li>
                        <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                      </li>
                      <li>
                        <a href="">TWC WiFi Hotspots</a>
                      </li>
                      <li>
                        <a href="">Home WiFi</a>
                      </li>
                      <li>
                        <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tab2" class="tab">
        <div class="byoSelectFilter sticky">
          <div class="stickyWrapper">
            <form action="searchPage" >
              <div class="33-33-33 section columnControl">
                <div class="parsys_column twc-col3_333333">
                  <div class="parsys parsys0 twc-col3_333333-c0 parsys_column">
                    <div class="parbase section">
                      <h4 class="sticky-tablet-hidden">Choose the services you want</h4>
                      <p class="sticky-tablet-hidden">Select the plans you want to order. Then set up your services</p>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col3_333333-c1 parsys_column">
                    <div class="parbase section">
                      <select class="sticky-tablet-hidden" name="sortOrder" id="sortOrder">
                        <option value="recommended">Recommended</option>
                        <option value="lowToHigh">Low To High</option>
                        <option value="highToLow">High To Low</option>
                      </select>
                    </div>
                    <div class="new section"></div>
                  </div>
                  <div class="parsys parsys1 twc-col3_333333-c2 parsys_column">
                    <div class="parbase section">
                      <div class="price-box">
                        <div class="price">
                          <sup class="sign">$</sup>
                          79
                          <sup>99</sup>
                          <span>
                            <div class="text monthlycharge parbase twc-plain-text">TOTAL MO. CHARGE</div>
                          </span>
                        </div>
                        <div class="btn-container js-disabled">
                          <div class="disabled-overlay"></div>
                          <div class="cta green select icon-after icon-angle-right">
                            <a href="#">
                              <span>Order Now</span>
                            </a>
                          </div>
                        </div>
                      </div>
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
        <div class="byoUpsellPanel">
          <div class="byoUpsellContent">
            <div class="byoUpsellHeader">
              <h2>Upgrade your TV Service today for
                <span class="upsellPricing">
                  <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">15</span>
                  <sup class="cents">00</sup>
                </span>
                more per month!
              </h2>
              <div class="byoUpsellViewMore">
                <span>View Details</span>
              </div>
            </div>
            <div class="byoUpsellExpanded">
            <!-- Upsell Content Here -->
            </div>
          </div>
        </div>
        <div class="packageSelect stickyElement">
          <div class="buildYourOwn">
            <div class="byoHeader">
              <p class="h5">TV</p>
              <span class="showLess">Show Less</span>
              <span class="showMore">Show More</span>
            </div>
            <div class="byoPackages">
              <div class="package triple">
                <div class="packageHead">
                  <div class="packageTitle">
                    <div class="right">
                      <span>TV</span>
                    </div>
                  </div>
                </div>
                <div class="packageBody">
                  <div class="packageInfo">
                    <p class="text-center">
                      <a href="">20+ Channels</a>
                    </p>
                  </div>
                  <div class="pricing text-center">
                    <span class="h4">
                      <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                      <span class="dollars">179</span>
                      <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
                  </div>
                  <hr>
                  <div class="specialOffer">
                    <h5 class="blue">Special Offer:</h5>
                    <p>Limited Time Only - Was $19.99</p>
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
                    <div class="byoPackageSelect">
                      <div class="cta green select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta red deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove Offer</span>
                        </a>
                      </div>
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
                          <li class="listHead">Includes:</li>
                          <li>
                            <a href="">Digital Adapter</a>
                          </li>
                          <li>
                            <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                          </li>
                          <li>
                            <a href="">TWC WiFi Hotspots</a>
                          </li>
                          <li>
                            <a href="">Home WiFi</a>
                          </li>
                          <li>
                            <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="package triple">
                <div class="packageHead">
                  <div class="packageTitle">
                    <div class="right">
                      <span>TV</span>
                    </div>
                  </div>
                </div>
                <div class="packageBody">
                  <div class="packageInfo">
                    <p class="text-center">
                      <a href="">20+ Channels</a>
                    </p>
                  </div>
                  <div class="pricing text-center">
                    <span class="h4">
                      <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                      <span class="dollars">79</span>
                      <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
                  </div>
                  <hr>
                  <div class="specialOffer">
                    <h5>Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <div class="byoPackageSelect">
                      <div class="cta green select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta red deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove Offer</span>
                        </a>
                      </div>
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
                      <div class="vertical">
                        <ul>
                          <li>Includes:</li>
                          <li>
                            <a href="">Digital Adapter</a>
                          </li>
                          <li>
                            <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                          </li>
                          <li>
                            <a href="">TWC WiFi Hotspots</a>
                          </li>
                          <li>
                            <a href="">Home WiFi</a>
                          </li>
                          <li>
                            <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="package triple">
                <div class="packageHead">
                  <div class="packageTitle">
                    <div class="right">
                      <span>TV</span>
                    </div>
                  </div>
                </div>
                <div class="packageBody">
                  <div class="packageInfo">
                    <p class="text-center">
                      <a href="">20+ Channels</a>
                    </p>
                  </div>
                  <div class="pricing text-center">
                    <span class="h4">
                      <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                      <span class="dollars">79</span>
                      <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
                  </div>
                  <hr>
                  <div class="specialOffer">
                    <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <div class="byoPackageSelect">
                      <div class="cta green select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta red deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove Offer</span>
                        </a>
                      </div>
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
                      <div class="vertical">
                        <ul>
                          <li>Includes:</li>
                          <li>
                            <a href="">Digital Adapter</a>
                          </li>
                          <li>
                            <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                          </li>
                          <li>
                            <a href="">TWC WiFi Hotspots</a>
                          </li>
                          <li>
                            <a href="">Home WiFi</a>
                          </li>
                          <li>
                            <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="package triple">
                <div class="packageHead">
                  <div class="packageTitle">
                    <div class="right">
                      <span>TV</span>
                    </div>
                  </div>
                </div>
                <div class="packageBody">
                  <div class="packageInfo">
                    <p class="text-center">
                      <a href="">20+ Channels</a>
                    </p>
                  </div>
                  <div class="pricing text-center">
                    <span class="h4">
                      <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                      <span class="dollars">79</span>
                      <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
                  </div>
                  <hr>
                  <div class="specialOffer">
                    <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <div class="byoPackageSelect">
                      <div class="cta green select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta red deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove Offer</span>
                        </a>
                      </div>
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
                      <div class="vertical">
                        <ul>
                          <li>Includes:</li>
                          <li>
                            <a href="">Digital Adapter</a>
                          </li>
                          <li>
                            <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                          </li>
                          <li>
                            <a href="">TWC WiFi Hotspots</a>
                          </li>
                          <li>
                            <a href="">Home WiFi</a>
                          </li>
                          <li>
                            <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="package triple">
                <div class="packageHead">
                  <div class="packageTitle">
                    <div class="right">
                      <span>TV</span>
                    </div>
                  </div>
                </div>
                <div class="packageBody">
                  <div class="packageInfo">
                    <div class="icon-before icon-exclamation-sign text-warning">
                      <span class="text-warning">We're sorry, there is no available TV service to select. You have the highest level of service available.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="buildYourOwn">
            <div class="byoHeader">
              <p class="h5">Internet</p>
              <span class="showLess">Show Less</span>
              <span class="showMore">Show More</span>
            </div>
            <div class="byoPackages">
              <div class="package triple">
                <div class="packageHead">
                  <div class="packageTitle">
                    <div class="right">
                      <span>Internet</span>
                    </div>
                  </div>
                </div>
                <div class="packageBody">
                  <div class="packageInfo">
                    <p class="text-center">
                      <a href="">20+ Channels</a>
                    </p>
                    <p class="text-center">
                      Internet Speed
                      <a href="">15Mbps</a>
                    </p>
                  </div>
                  <div class="pricing text-center">
                    <span class="h4">
                      <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                      <span class="dollars">79</span>
                      <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
                  </div>
                  <hr>
                  <div class="specialOffer">
                    <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <div class="byoPackageSelect">
                      <div class="cta green select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta red deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove Offer</span>
                        </a>
                      </div>
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
                      <div class="vertical">
                        <ul>
                          <li>Includes:</li>
                          <li>
                            <a href="">Digital Adapter</a>
                          </li>
                          <li>
                            <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                          </li>
                          <li>
                            <a href="">TWC WiFi Hotspots</a>
                          </li>
                          <li>
                            <a href="">Home WiFi</a>
                          </li>
                          <li>
                            <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="package triple">
                <div class="packageHead">
                  <div class="packageTitle">
                    <div class="right">
                      <span>Internet</span>
                    </div>
                  </div>
                </div>
                <div class="packageBody">
                  <div class="packageInfo">
                    <p class="text-center">
                      <a href="">20+ Channels</a>
                    </p>
                    <p class="text-center">
                      Internet Speed
                      <a href="">15Mbps</a>
                    </p>
                  </div>
                  <div class="pricing text-center">
                    <span class="h4">
                      <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                      <span class="dollars">79</span>
                      <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
                  </div>
                  <hr>
                  <div class="specialOffer">
                    <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <div class="byoPackageSelect">
                      <div class="cta green select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta red deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove Offer</span>
                        </a>
                      </div>
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
                      <div class="vertical">
                        <ul>
                          <li>Includes:</li>
                          <li>
                            <a href="">Digital Adapter</a>
                          </li>
                          <li>
                            <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                          </li>
                          <li>
                            <a href="">TWC WiFi Hotspots</a>
                          </li>
                          <li>
                            <a href="">Home WiFi</a>
                          </li>
                          <li>
                            <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="package triple">
                <div class="packageHead">
                  <div class="packageTitle">
                    <div class="right">
                      <span>Internet</span>
                    </div>
                  </div>
                </div>
                <div class="packageBody">
                  <div class="packageInfo">
                    <p class="text-center">
                      <a href="">20+ Channels</a>
                    </p>
                    <p class="text-center">
                      Internet Speed
                      <a href="">15Mbps</a>
                    </p>
                  </div>
                  <div class="pricing text-center">
                    <span class="h4">
                      <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                      <span class="dollars">79</span>
                      <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
                  </div>
                  <hr>
                  <div class="specialOffer">
                    <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <div class="byoPackageSelect">
                      <div class="cta green select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta red deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove Offer</span>
                        </a>
                      </div>
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
                      <div class="vertical">
                        <ul>
                          <li>Includes:</li>
                          <li>
                            <a href="">Digital Adapter</a>
                          </li>
                          <li>
                            <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                          </li>
                          <li>
                            <a href="">TWC WiFi Hotspots</a>
                          </li>
                          <li>
                            <a href="">Home WiFi</a>
                          </li>
                          <li>
                            <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="package triple">
                <div class="packageHead">
                  <div class="packageTitle">
                    <div class="right">
                      <span>Internet</span>
                    </div>
                  </div>

                </div>
                <div class="packageBody">
                  <div class="packageInfo">
                    <p class="text-center">
                      <a href="">20+ Channels</a>
                    </p>
                    <p class="text-center">
                      Internet Speed
                      <a href="">15Mbps</a>
                    </p>
                  </div>
                  <div class="pricing text-center">
                    <span class="h4">
                      <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                      <span class="dollars">79</span>
                      <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
                  </div>
                  <hr>
                  <div class="specialOffer">
                    <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <div class="byoPackageSelect">
                      <div class="cta green select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta red deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove Offer</span>
                        </a>
                      </div>
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
                      <div class="vertical">
                        <ul>
                          <li>Includes:</li>
                          <li>
                            <a href="">Digital Adapter</a>
                          </li>
                          <li>
                            <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                          </li>
                          <li>
                            <a href="">TWC WiFi Hotspots</a>
                          </li>
                          <li>
                            <a href="">Home WiFi</a>
                          </li>
                          <li>
                            <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="buildYourOwn">
            <div class="byoHeader">
              <p class="h5">Phone</p>
              <span class="showLess">Show Less</span>
              <span class="showMore">Show More</span>
            </div>
            <div class="byoPackages">
              <div class="package triple">
                <div class="packageHead">
                  <div class="packageTitle">
                    <div class="right">
                      <span>Phone</span>
                    </div>
                  </div>
                </div>
                <div class="packageBody">
                  <div class="packageInfo">
                    <p class="text-center">
                      <a href="">20+ Channels</a>
                    </p>
                    <p class="text-center">
                      Internet Speed
                      <a href="">15Mbps</a>
                    </p>
                    <p class="text-center">Phone w/ Voicemail</p>
                  </div>
                  <div class="pricing text-center">
                    <span class="h4">
                      <sup class="pre-text">Add</sup>
                  <sup class="dollar-sign">$</sup>
                      <span class="dollars">79</span>
                      <sup class="cents">99</sup>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">Tooltip text</span></a></p>
                    </div>
                  </div>
                </span>
                  </div>
                  <hr>
                  <div class="specialOffer">
                    <h5 class="text-center">Online Only Price: <br>Save $5/mo when you order online</h5>
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
                    <div class="byoPackageSelect">
                      <div class="cta green select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta red deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove Offer</span>
                        </a>
                      </div>
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
                      <div class="vertical">
                        <ul>
                          <li>Includes:</li>
                          <li>
                            <a href="">Digital Adapter</a>
                          </li>
                          <li>
                            <a href="">TWC TV, </a><a href="">Look Back </a><span>and </span><a href="">Start Over</a>
                          </li>
                          <li>
                            <a href="">TWC WiFi Hotspots</a>
                          </li>
                          <li>
                            <a href="">Home WiFi</a>
                          </li>
                          <li>
                            <a href="">Unlimited Calling </a><span>and </span><a href="">Voicemail</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>