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
          <!--PACKAGE BEGIN-->
          <div class="package triple">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-1a" type="checkbox">
                <label class="compare-label" for="compare-1a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
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
                   <div id="1" class="cta modal-button">
                      <a href=""   analyticsname="test">
                        <span>200+ Channels</span>
                      </a>
                    </div>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">15/1Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">89</span>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer text-center">
              </div>
              <hr>
              <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">

                  <div class="cta quickCheckoutBtn green icon-after icon-angle-down mobile-full">
                    <a href="#">
                      <span>Start Your Order</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent">
                    <hr class="spacer">
                    <div class="h5">
                      <div class="text-center">To Begin Choose Your Equipment:</div>
                    </div>
                    <div class="box">
                      <div class="right closeAccordion fs14 icon-after icon-remove">
                        <span>Close</span>
                      </div>
                      <div class="clear"></div>
                      <p>TV Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-1" name="pack1-tv-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-1">
                                  <a href="" class="tooltip above">HD Box
                                    <span class="tooltip-text">Watch programming in high definition and digital programming with amazing picture quality and digital sound.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$10.25</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-2" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-2">
                                  <a href="" class="tooltip above">HD-DVR Box and Service
                                    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$23.20</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-4" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-4">
                                  <a href="" class="tooltip above">CableCARD
                                    <span class="tooltip-text">CableCARDs are only compatible with CableCARD-equipped televisions or other Unidirectional Digital Cable Products (UDCPs), like TiVos or cable-ready digital TVs.  If you do not own a UDCP, CableCARDs cannot be used with your equipment.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$2.50</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <p>Internet Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-1" name="pack1-internet-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-1">
                                  <a href="" class="tooltip above">Internet Modem
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection. </span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$8.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-2" name="pack1-internet-equipment" type="radio" >
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-2">
                                  <a href="" class="tooltip above">Home WiFi and Wireless Gateway
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$12.99</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-4" name="pack1-internet-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-4">
                                  <b>I'll use my own modem</b>
                                </label>
                              </td>
                              <td class="price">
                                <span>No charge</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <div class="clear"></div>
                      <div class="priceTally">
                        <table>
                          <tr>
                            <td>Equipment Charges added</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Equipment</td>
                            <td class="b price">$8.00</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Package</td>
                            <td class="b price">$64.99</td>
                          </tr>
                          <tr>
                            <td colspan="3"><hr></td>
                          </tr>
                          <tr class="totals">
                            <td>Charges reflected in your cart*</td>
                            <td class="b text-right">Total</td>
                            <td class="b price total">$108.24</td>
                          </tr>
                        </table>
                      </div>
                      <hr class="spacer">
                      <p class="disclaimer-text text-center">*One time charges, taxes, fees and surcharges are not included</p>
                    </div>
                    <div class="text-center">
                        <hr class="spacer">
                        <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                        <div class="cta green icon-after icon-angle-right">
                          <a href="#">
                            <span>Continue Order</span>
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <div class="packageFooter side-by-side">
              <div class="buttonWrapper">
                <div class="cta whiteCTA expandDetails icon-after icon-angle-down">
                  <a href="">
                    <span>Package Details</span>
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
                        <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a>
                        and
                        <a href="" class="tooltip above">Start Over&copy; <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
                      </li>
                      <li>
                       <a href="" class="tooltip above">TWC WiFi&copy; Hotspots <span class="tooltip-text">Get fast and reliable wireless Internet access when you’re on-the-go at any TWC WiFi Hotspot.</span></a>
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
                <label class="compare-label" for="compare-1a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
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
                   <div id="1" class="cta modal-button">
                      <a href=""   analyticsname="test">
                        <span>Unlimited Calling</span>
                      </a>
                    </div>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">19</span>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer text-center">
              </div>
              <hr>
              <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">

                  <div class="cta quickCheckoutBtn green icon-after icon-angle-down mobile-full">
                    <a href="#">
                      <span>Start Your Order</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent">
<hr class="spacer"><div class="h5">
                      <div class="text-center">To Begin Choose Your Equipment:</div>
                    </div>
                    <div class="box">
                      <div class="right closeAccordion fs14 icon-after icon-remove">
                        <span>Close</span>
                      </div>
                      <div class="clear"></div>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <span class="fs16">No equipment required</span>
                                <hr class="spacer">
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="clear"></div>
                      <div class="priceTally">
                        <table>
                          <tr class="totals">
                            <td>Charges reflected in your cart*</td>
                            <td class="b text-right">Total</td>
                            <td class="b price total">$19.99</td>
                          </tr>
                        </table>
                      </div>
                      <hr class="spacer">
                      <p class="disclaimer-text text-center">*One time charges, taxes, fees and surcharges are not included</p>
                    </div>
                    <div class="text-center">
                        <hr class="spacer">
                        <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                        <div class="cta green icon-after icon-angle-right">
                          <a href="#">
                            <span>Continue Order</span>
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <div class="packageFooter side-by-side">
              <div class="buttonWrapper">
                <div class="cta whiteCTA expandDetails icon-after icon-angle-down">
                  <a href="">
                    <span>Package Details</span>
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
                        <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a>
                        and
                        <a href="" class="tooltip above">Start Over&copy; <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
                      </li>
                      <li>
                       <a href="" class="tooltip above">TWC WiFi&copy; Hotspots <span class="tooltip-text">Get fast and reliable wireless Internet access when you’re on-the-go at any TWC WiFi Hotspot.</span></a>
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
                <label class="compare-label" for="compare-1a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
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
                   <div id="1" class="cta modal-button">
                      <a href=""   analyticsname="test">
                        <span>200+ Channels</span>
                      </a>
                    </div>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">15/1Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">89</span>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer text-center">
              </div>
              <hr>
              <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">

                  <div class="cta quickCheckoutBtn green icon-after icon-angle-down mobile-full">
                    <a href="#">
                      <span>Start Your Order</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent">
<hr class="spacer"><div class="h5">
                      <div class="text-center">To Begin Choose Your Equipment:</div>
                    </div>
                    <div class="box">
                      <div class="right closeAccordion fs14 icon-after icon-remove">
                        <span>Close</span>
                      </div>
                      <div class="clear"></div>
                      <p>TV Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-1" name="pack1-tv-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-1">
                                  <a href="" class="tooltip above">HD Box
                                    <span class="tooltip-text">Watch programming in high definition and digital programming with amazing picture quality and digital sound.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$10.25</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-2" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-2">
                                  <a href="" class="tooltip above">HD-DVR Box and Service
                                    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$23.20</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-4" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-4">
                                  <a href="" class="tooltip above">CableCARD
                                    <span class="tooltip-text">CableCARDs are only compatible with CableCARD-equipped televisions or other Unidirectional Digital Cable Products (UDCPs), like TiVos or cable-ready digital TVs.  If you do not own a UDCP, CableCARDs cannot be used with your equipment.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$2.50</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <p>Internet Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-1" name="pack1-internet-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-1">
                                  <a href="" class="tooltip above">Internet Modem
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection. </span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$8.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-2" name="pack1-internet-equipment" type="radio" >
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-2">
                                  <a href="" class="tooltip above">Home WiFi and Wireless Gateway
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$12.99</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-4" name="pack1-internet-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-4">
                                  <b>I'll use my own modem</b>
                                </label>
                              </td>
                              <td class="price">
                                <span>No charge</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <div class="clear"></div>
                      <div class="priceTally">
                        <table>
                          <tr>
                            <td>Equipment Charges added</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Equipment</td>
                            <td class="b price">$8.00</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Package</td>
                            <td class="b price">$64.99</td>
                          </tr>
                          <tr>
                            <td colspan="3"><hr></td>
                          </tr>
                          <tr class="totals">
                            <td>Charges reflected in your cart*</td>
                            <td class="b text-right">Total</td>
                            <td class="b price total">$108.24</td>
                          </tr>
                        </table>
                      </div>
                      <hr class="spacer">
                      <p class="disclaimer-text text-center">*One time charges, taxes, fees and surcharges are not included</p>
                    </div>
                    <div class="text-center">
                        <hr class="spacer">
                        <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                        <div class="cta green icon-after icon-angle-right">
                          <a href="#">
                            <span>Continue Order</span>
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <div class="packageFooter side-by-side">
              <div class="buttonWrapper">
                <div class="cta whiteCTA expandDetails icon-after icon-angle-down">
                  <a href="">
                    <span>Package Details</span>
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
                        <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a>
                        and
                        <a href="" class="tooltip above">Start Over&copy; <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
                      </li>
                      <li>
                       <a href="" class="tooltip above">TWC WiFi&copy; Hotspots <span class="tooltip-text">Get fast and reliable wireless Internet access when you’re on-the-go at any TWC WiFi Hotspot.</span></a>
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
                <label class="compare-label" for="compare-1a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
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
                   <div id="1" class="cta modal-button">
                      <a href=""   analyticsname="test">
                        <span>200+ Channels</span>
                      </a>
                    </div>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">15/1Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">89</span>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer text-center">
              </div>
              <hr>
              <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">

                  <div class="cta quickCheckoutBtn green icon-after icon-angle-down mobile-full">
                    <a href="#">
                      <span>Start Your Order</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent">
<hr class="spacer"><div class="h5">
                      <div class="text-center">To Begin Choose Your Equipment:</div>
                    </div>
                    <div class="box">
                      <div class="right closeAccordion fs14 icon-after icon-remove">
                        <span>Close</span>
                      </div>
                      <div class="clear"></div>
                      <p>TV Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-1" name="pack1-tv-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-1">
                                  <a href="" class="tooltip above">HD Box
                                    <span class="tooltip-text">Watch programming in high definition and digital programming with amazing picture quality and digital sound.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$10.25</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-2" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-2">
                                  <a href="" class="tooltip above">HD-DVR Box and Service
                                    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$23.20</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-4" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-4">
                                  <a href="" class="tooltip above">CableCARD
                                    <span class="tooltip-text">CableCARDs are only compatible with CableCARD-equipped televisions or other Unidirectional Digital Cable Products (UDCPs), like TiVos or cable-ready digital TVs.  If you do not own a UDCP, CableCARDs cannot be used with your equipment.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$2.50</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <p>Internet Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-1" name="pack1-internet-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-1">
                                  <a href="" class="tooltip above">Internet Modem
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection. </span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$8.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-2" name="pack1-internet-equipment" type="radio" >
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-2">
                                  <a href="" class="tooltip above">Home WiFi and Wireless Gateway
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$12.99</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-4" name="pack1-internet-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-4">
                                  <b>I'll use my own modem</b>
                                </label>
                              </td>
                              <td class="price">
                                <span>No charge</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <div class="clear"></div>
                      <div class="priceTally">
                        <table>
                          <tr>
                            <td>Equipment Charges added</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Equipment</td>
                            <td class="b price">$8.00</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Package</td>
                            <td class="b price">$64.99</td>
                          </tr>
                          <tr>
                            <td colspan="3"><hr></td>
                          </tr>
                          <tr class="totals">
                            <td>Charges reflected in your cart*</td>
                            <td class="b text-right">Total</td>
                            <td class="b price total">$108.24</td>
                          </tr>
                        </table>
                      </div>
                      <hr class="spacer">
                      <p class="disclaimer-text text-center">*One time charges, taxes, fees and surcharges are not included</p>
                    </div>
                    <div class="text-center">
                        <hr class="spacer">
                        <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                        <div class="cta green icon-after icon-angle-right">
                          <a href="#">
                            <span>Continue Order</span>
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <div class="packageFooter side-by-side">
              <div class="buttonWrapper">
                <div class="cta whiteCTA expandDetails icon-after icon-angle-down">
                  <a href="">
                    <span>Package Details</span>
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
                        <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a>
                        and
                        <a href="" class="tooltip above">Start Over&copy; <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
                      </li>
                      <li>
                       <a href="" class="tooltip above">TWC WiFi&copy; Hotspots <span class="tooltip-text">Get fast and reliable wireless Internet access when you’re on-the-go at any TWC WiFi Hotspot.</span></a>
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
                <label class="compare-label" for="compare-1a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
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
                   <div id="1" class="cta modal-button">
                      <a href=""   analyticsname="test">
                        <span>200+ Channels</span>
                      </a>
                    </div>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">15/1Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">89</span>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer text-center">
              </div>
              <hr>
              <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">

                  <div class="cta quickCheckoutBtn green icon-after icon-angle-down mobile-full">
                    <a href="#">
                      <span>Start Your Order</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent">
<hr class="spacer"><div class="h5">
                      <div class="text-center">To Begin Choose Your Equipment:</div>
                    </div>
                    <div class="box">
                      <div class="right closeAccordion fs14 icon-after icon-remove">
                        <span>Close</span>
                      </div>
                      <div class="clear"></div>
                      <p>TV Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-1" name="pack1-tv-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-1">
                                  <a href="" class="tooltip above">HD Box
                                    <span class="tooltip-text">Watch programming in high definition and digital programming with amazing picture quality and digital sound.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$10.25</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-2" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-2">
                                  <a href="" class="tooltip above">HD-DVR Box and Service
                                    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$23.20</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-4" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-4">
                                  <a href="" class="tooltip above">CableCARD
                                    <span class="tooltip-text">CableCARDs are only compatible with CableCARD-equipped televisions or other Unidirectional Digital Cable Products (UDCPs), like TiVos or cable-ready digital TVs.  If you do not own a UDCP, CableCARDs cannot be used with your equipment.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$2.50</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <p>Internet Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-1" name="pack1-internet-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-1">
                                  <a href="" class="tooltip above">Internet Modem
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection. </span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$8.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-2" name="pack1-internet-equipment" type="radio" >
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-2">
                                  <a href="" class="tooltip above">Home WiFi and Wireless Gateway
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$12.99</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-4" name="pack1-internet-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-4">
                                  <b>I'll use my own modem</b>
                                </label>
                              </td>
                              <td class="price">
                                <span>No charge</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <div class="clear"></div>
                      <div class="priceTally">
                        <table>
                          <tr>
                            <td>Equipment Charges added</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Equipment</td>
                            <td class="b price">$8.00</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Package</td>
                            <td class="b price">$64.99</td>
                          </tr>
                          <tr>
                            <td colspan="3"><hr></td>
                          </tr>
                          <tr class="totals">
                            <td>Charges reflected in your cart*</td>
                            <td class="b text-right">Total</td>
                            <td class="b price total">$108.24</td>
                          </tr>
                        </table>
                      </div>
                      <hr class="spacer">
                      <p class="disclaimer-text text-center">*One time charges, taxes, fees and surcharges are not included</p>
                    </div>
                    <div class="text-center">
                        <hr class="spacer">
                        <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                        <div class="cta green icon-after icon-angle-right">
                          <a href="#">
                            <span>Continue Order</span>
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <div class="packageFooter side-by-side">
              <div class="buttonWrapper">
                <div class="cta whiteCTA expandDetails icon-after icon-angle-down">
                  <a href="">
                    <span>Package Details</span>
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
                        <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a>
                        and
                        <a href="" class="tooltip above">Start Over&copy; <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
                      </li>
                      <li>
                       <a href="" class="tooltip above">TWC WiFi&copy; Hotspots <span class="tooltip-text">Get fast and reliable wireless Internet access when you’re on-the-go at any TWC WiFi Hotspot.</span></a>
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
                <label class="compare-label" for="compare-1a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
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
                   <div id="1" class="cta modal-button">
                      <a href=""   analyticsname="test">
                        <span>200+ Channels</span>
                      </a>
                    </div>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">15/1Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">89</span>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer text-center">
              </div>
              <hr>
              <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">

                  <div class="cta quickCheckoutBtn green icon-after icon-angle-down mobile-full">
                    <a href="#">
                      <span>Start Your Order</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent">
<hr class="spacer"><div class="h5">
                      <div class="text-center">To Begin Choose Your Equipment:</div>
                    </div>
                    <div class="box">
                      <div class="right closeAccordion fs14 icon-after icon-remove">
                        <span>Close</span>
                      </div>
                      <div class="clear"></div>
                      <p>TV Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-1" name="pack1-tv-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-1">
                                  <a href="" class="tooltip above">HD Box
                                    <span class="tooltip-text">Watch programming in high definition and digital programming with amazing picture quality and digital sound.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$10.25</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-2" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-2">
                                  <a href="" class="tooltip above">HD-DVR Box and Service
                                    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$23.20</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-4" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-4">
                                  <a href="" class="tooltip above">CableCARD
                                    <span class="tooltip-text">CableCARDs are only compatible with CableCARD-equipped televisions or other Unidirectional Digital Cable Products (UDCPs), like TiVos or cable-ready digital TVs.  If you do not own a UDCP, CableCARDs cannot be used with your equipment.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$2.50</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <p>Internet Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-1" name="pack1-internet-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-1">
                                  <a href="" class="tooltip above">Internet Modem
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection. </span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$8.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-2" name="pack1-internet-equipment" type="radio" >
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-2">
                                  <a href="" class="tooltip above">Home WiFi and Wireless Gateway
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$12.99</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-4" name="pack1-internet-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-4">
                                  <b>I'll use my own modem</b>
                                </label>
                              </td>
                              <td class="price">
                                <span>No charge</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <div class="clear"></div>
                      <div class="priceTally">
                        <table>
                          <tr>
                            <td>Equipment Charges added</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Equipment</td>
                            <td class="b price">$8.00</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Package</td>
                            <td class="b price">$64.99</td>
                          </tr>
                          <tr>
                            <td colspan="3"><hr></td>
                          </tr>
                          <tr class="totals">
                            <td>Charges reflected in your cart*</td>
                            <td class="b text-right">Total</td>
                            <td class="b price total">$108.24</td>
                          </tr>
                        </table>
                      </div>
                      <hr class="spacer">
                      <p class="disclaimer-text text-center">*One time charges, taxes, fees and surcharges are not included</p>
                    </div>
                    <div class="text-center">
                        <hr class="spacer">
                        <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                        <div class="cta green icon-after icon-angle-right">
                          <a href="#">
                            <span>Continue Order</span>
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <div class="packageFooter side-by-side">
              <div class="buttonWrapper">
                <div class="cta whiteCTA expandDetails icon-after icon-angle-down">
                  <a href="">
                    <span>Package Details</span>
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
                        <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a>
                        and
                        <a href="" class="tooltip above">Start Over&copy; <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
                      </li>
                      <li>
                       <a href="" class="tooltip above">TWC WiFi&copy; Hotspots <span class="tooltip-text">Get fast and reliable wireless Internet access when you’re on-the-go at any TWC WiFi Hotspot.</span></a>
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
                <label class="compare-label" for="compare-1a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
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
                   <div id="1" class="cta modal-button">
                      <a href=""   analyticsname="test">
                        <span>200+ Channels</span>
                      </a>
                    </div>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">15/1Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">89</span>
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer text-center">
              </div>
              <hr>
              <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">

                  <div class="cta quickCheckoutBtn green icon-after icon-angle-down mobile-full">
                    <a href="#">
                      <span>Start Your Order</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent">
<hr class="spacer"><div class="h5">
                      <div class="text-center">To Begin Choose Your Equipment:</div>
                    </div>
                    <div class="box">
                      <div class="right closeAccordion fs14 icon-after icon-remove">
                        <span>Close</span>
                      </div>
                      <div class="clear"></div>
                      <p>TV Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-1" name="pack1-tv-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-1">
                                  <a href="" class="tooltip above">HD Box
                                    <span class="tooltip-text">Watch programming in high definition and digital programming with amazing picture quality and digital sound.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$10.25</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-2" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-2">
                                  <a href="" class="tooltip above">HD-DVR Box and Service
                                    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$23.20</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-tv-equipment-4" name="pack1-tv-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-tv-equipment-4">
                                  <a href="" class="tooltip above">CableCARD
                                    <span class="tooltip-text">CableCARDs are only compatible with CableCARD-equipped televisions or other Unidirectional Digital Cable Products (UDCPs), like TiVos or cable-ready digital TVs.  If you do not own a UDCP, CableCARDs cannot be used with your equipment.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$2.50</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <p>Internet Equipment</p>
                      <div class="productSelect">
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-1" name="pack1-internet-equipment" type="radio" checked>
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-1">
                                  <a href="" class="tooltip above">Internet Modem
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection. </span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$8.00</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-2" name="pack1-internet-equipment" type="radio" >
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-2">
                                  <a href="" class="tooltip above">Home WiFi and Wireless Gateway
                                    <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($8/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span>
                                  </a>
                                </label>
                              </td>
                              <td class="price">
                                <span>$12.99</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input id="pack1-internet-equipment-4" name="pack1-internet-equipment" type="radio">
                              </td>
                              <td>
                                <label for="pack1-internet-equipment-4">
                                  <b>I'll use my own modem</b>
                                </label>
                              </td>
                              <td class="price">
                                <span>No charge</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <hr>
                      <div class="clear"></div>
                      <div class="priceTally">
                        <table>
                          <tr>
                            <td>Equipment Charges added</td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Equipment</td>
                            <td class="b price">$8.00</td>
                          </tr>
                          <tr>
                            <td></td>
                            <td>Package</td>
                            <td class="b price">$64.99</td>
                          </tr>
                          <tr>
                            <td colspan="3"><hr></td>
                          </tr>
                          <tr class="totals">
                            <td>Charges reflected in your cart*</td>
                            <td class="b text-right">Total</td>
                            <td class="b price total">$108.24</td>
                          </tr>
                        </table>
                      </div>
                      <hr class="spacer">
                      <p class="disclaimer-text text-center">*One time charges, taxes, fees and surcharges are not included</p>
                    </div>
                    <div class="text-center">
                        <hr class="spacer">
                        <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                        <div class="cta green icon-after icon-angle-right">
                          <a href="#">
                            <span>Continue Order</span>
                          </a>
                        </div>
                      </div>
                  </div>
                </div>
                <hr>
              </div>
            </div>
            <div class="packageFooter side-by-side">
              <div class="buttonWrapper">
                <div class="cta whiteCTA expandDetails icon-after icon-angle-down">
                  <a href="">
                    <span>Package Details</span>
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
                        <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a>
                        and
                        <a href="" class="tooltip above">Start Over&copy; <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
                      </li>
                      <li>
                       <a href="" class="tooltip above">TWC WiFi&copy; Hotspots <span class="tooltip-text">Get fast and reliable wireless Internet access when you’re on-the-go at any TWC WiFi Hotspot.</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--PACKAGE END-->

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
                          <div class="cta flatOmega select icon-after icon-angle-right">
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
                      <div class="cta flatOmega select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta green deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove</span>
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
                      <div class="cta flatOmega select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta green deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove</span>
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
                      <div class="cta flatOmega select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta green deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove</span>
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
                      <div class="cta flatOmega select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta green deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove</span>
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
                      <div class="cta flatOmega select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta green deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove</span>
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
                      <div class="cta flatOmega select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta green deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove</span>
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
                      <div class="cta flatOmega select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta green deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove</span>
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
                      <div class="cta flatOmega select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta green deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove</span>
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
                      <div class="cta flatOmega select icon-after icon-angle-right">
                        <a href="">
                          <span>Select Offer</span>
                        </a>
                      </div>
                      <div class="cta green deSelect icon-after icon-angle-right">
                        <a href="">
                          <span>Remove</span>
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
<div class="modal">
    <div id="modal1" class="modal-container" style="margin-top: -156.5px; display: none;">
            <div class="modal-close"></div>
    <div id="modal-content">
      <a name="modalTop"></a>
      <div class="modal-header">
        <span class="h3">Preferred TV</div>

      <div class="modal-body">

<div class="xRef section"><div class="richtext one_column_text">
<div id="f036e7f4-5337-4495-85e3-0b1b3fec3e17">
       <p>These channels show a sample of programming by TV plan. All channels may not be available in all locations. <a href="/en/tv/channels-lineup.html">See channels by package in your area.</a></p>
</div>
</div>
</div>
<div class="xRef section"><div class="richtext three_column_text">
<div id="6fac7d03-40c4-4306-9652-c8ae7b535d5c">
       <p>A &amp; E*<br>
ABC*<br>
ABC Family*<br>
Al Jazeera America<br>
AMC*<br>
American Heroes Channel<br>
Animal Planet*<br>
Aspire<br>
Azteca*<br>
BBC America*<br>
BBC World News<br>
BET*<br>
Big Ten Network*<br>
Bloomberg*<br>
Bravo*<br>
Cartoon Network*<br>
CBS*<br>
CCTV News<br>
Centric<br>
Chiller<br>
CLOO<br>
CMT*<br>
CNBC*<br>
CNBC World<br>
CNN*<br>
Comedy Central*<br>
Cooking Channel*<br>
C-SPAN*<br>
C-SPAN 2*<br>
C-SPAN 3*<br>
CW*<br>
Daystar<br>
Destination America*<br>
Discovery*<br>
Discovery - Fit &amp; Health*<br>
Disney*<br>
Disney Junior*<br>
Disney XD*<br>
DIY*<br>
E!*<br>
Educational Access<br>
ESPN*<br>
ESPN Deportes*<br>
ESPN 2*<br>
ESPN News*<br>
ESPN University*<br>
EVINE Live<br>
EWTN*<br>
Food Network*<br>
Fox*<br>
Fox Business Network*<br>
Fox Deportes*<br>
Fox Movie Channel*<br>
Fox News Channel*<br>
Fox Sports*<br>
Fox Sports 2*<br>
FUSE*<br>
FX*<br>
FXX*<br>
FYI*<br>
Golf*<br>
Government Access<br>
GSN*<br>
Hallmark*<br>
Hallmark Movies &amp; Mysteries*<br>
HGTV*<br>
History*<br>
HLN*<br>
HSN*<br>
ID*<br>
IFC<br>
Independent Film Channel*<br>
INSP<br>
Investigation Discovery*<br>
ION<br>
Jewelry Television*<br>
Leased Access<br>
Lifetime*<br>
Lifetime Movie Network*<br>
Lifetime Real Women*<br>
LMN*<br>
Logo<br>
MLB*<br>
MSNBC*<br>
MTV*<br>
MTV 2*<br>
MTV Hits<br>
MTV Jams<br>
Music Choice^<br>
National Geographic*<br>
National Geographic Wild*<br>
NBA*<br>
NBC*<br>
NBC Sports Network*<br>
NFL NETWORK*<br>
Nick JR*<br>
Nick Toons*<br>
Nickelodeon*<br>
On Demand Channels*†<br>
Outdoor Channel*<br>
Ovation<br>
OWN*<br>
Oxygen*<br>
Palladia*<br>
Public Access<br>
PBS*<br>
QVC*<br>
REELZ*<br>
SCIENCE*<br>
Shop Zeal<br>
Smithsonian<br>
SoapNet*<br>
Speed*<br>
Spike TV*<br>
Sprout<br>
Style*<br>
Sundance*<br>
SyFy*<br>
TBN<br>
TBS*<br>
TCM*<br>
Teen Nick<br>
Telemundo*<br>
Telemundo 2<br>
The Weather Channel*<br>
TLC*<br>
TNT*<br>
Travel Channel*<br>
truTV*<br>
TV Guide Network*<br>
TV Land*<br>
TV One*<br>
TWC Deportes*<br>
TWC News*<br>
TWC SportsNet*<br>
TWC SportsNet LA*<br>
Univision*<br>
UP*<br>
USA*<br>
Velocity*<br>
VH 1*<br>
VH 1 Classic*<br>
WGN America*</p>
</div>
</div>
</div>
<div class="xRef section"><div class="richtext one_column_text">
<div id="95968c4f-5b77-4130-8c07-84cbb37028a0">
       <p>*Also available in HD.</p>
<p>†On Demand may require purchase or subscription.</p>
<p>^Lease of a Set-Top Box is required.<br>
</p>
</div>
</div>
</div>
    </div>
      <div class="modal-footer">
      </div>

    </div>
    </div>
    <div class="modal-overlay" style="display: none;"></div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>