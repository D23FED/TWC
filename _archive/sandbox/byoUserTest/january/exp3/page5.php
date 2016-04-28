<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<h1>View Plans</h1>
<div class="packageSelectTabs">
  <div class="psTabs">
    <ul class="tab-links">
      <li class="tabHead">
        <span href="#tab1" class="h4" data-tabs="1">Select A Package</span>
      </li>
      <li class="tabHead js-active">
        <span href="#tab2" class="h4" data-tabs="2">Build your own</span>
      </li>
    </ul>
    <div class="tab-content">
      <div id="tab1" class="tab">
      </div>
      <div id="tab2" class="tab js-active">

            <div class="step-nav horizontal text-center">
                <ul>
                    <li class="active" ><a href="index.php">1. Services</a></li>
                    <li class="active"><a href="page2.php">2. TV</a></li>
                    <li class="active"><a href="#">3. Internet</a></li>
                    <li>4. Review</li>
                </ul>
                <div class="text-right">
                    Service Selections:<br><b> TV & Internet.</b>
                </div>
            </div>
            <div class="super-h3 block text-center"><b>Step 3: </b>Select an Internet plan and Equipment</div><br>
        <div class="packageSelect stickyElement">
        

          <!--PACKAGE BEGIN-->
          <div class="package single">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-1a" type="checkbox">
                <label class="compare-label" for="compare-1a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
                  <a href="page6.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>Internet</span>
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
                    <b>Ultimate 300</b>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">300/30Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
                <p class="text-center">
                  Free <a class="tooltip below" href="#">Home WiFi<span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($10/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span></a>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">64</span>
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
                 <h5><div class="pricing" style="float: left;">
                <span class="fs-24 cross">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">69</span>
                  <sup class="cents">99</sup>
                </span>
                </div> Lowest Price Online</h5>
              </div>
              <hr>
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page7.php">
                          <span>Continue</span>
                        </a>
                    </div>
              </div>
            </div>
            <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">
                  
                  <div class="cta quickCheckoutBtn icon-after icon-angle-up mobile-full">
                    <a href="#">
                      <span>Choose Equipment</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent box js-active" style="display: block;">
                    
                    <p><b>Internet Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-2" name="pack1-internet-equipment-02" type="radio"checked>
                            </td>
                            <td>
                              <label for="pack1-internet-equipment-2">
                                <a href="" class="tooltip above">Wireless Gateway with FREE Home WiFi

                                  <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($10/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span>
                                </a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$10.00</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-4" name="pack1-internet-equipment-02" type="radio">
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
                    <hr class="spacer">
                    <hr>
                    <hr class="spacer">
                    <div class="clear"></div>
                    <div class="priceTally">
                      <table>
                        <tr>
                          <td class="b">Charges added</td>
                          <td class="b">Equipment</td>
                          <td class="b price">$10.00</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$64.99</td>
                        </tr>                       
                      </table>
                      <hr class="spacer">
                      <hr>
                      <hr class="spacer">
                      <table class="table-total fs-15">
                      <tr>
                          <td <span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$74.99</span></td>
                        </tr>
                      </table>
                    </div>
                    <div class="text-center">
                     
                     
                      <p class="disclaimer-text">
                        * One time charges, taxes, fees and surcharges are not included
                      </p>
                      
                      <hr>
                      
                  <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                      <div>
                      <div class="buttonWrapper selectOffer">
                            <div class="cta whiteCTA green icon-after icon-angle-right mobile-full">
                                <a href="#">
                                  <span>Select Offer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                     <div class="clear"></div>
                     <hr class="spacer">
                    </div>
                  </div>
                  
                </div>
                
                <hr class="spacer">
                <hr>
                <hr class="spacer">
              </div>
            <div class="packageFooter side-by-side">
               
                <div class="clear"></div>
                <hr class="spacer">
                <div>
                  <div class="buttonWrapper">
                    <div class="cta whiteCTA expandDetails icon-after icon-angle-up">
                      <a href="">
                        <span>View Details</span>
                      </a>
                    </div>
                  </div>
                </div>
              <div class="clear"></div>
                <hr class="spacer">
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
                        <a href="" class="tooltip above">Home WiFi <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($10/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span></a>
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
          <div class="package single">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-2a" type="checkbox">
                <label class="compare-label" for="compare-2a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
                  <a href="page6.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>Internet</span>
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
                    <b>Ultimate 200</b>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">200/20Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
                <p class="text-center">
                  Free <a class="tooltip below" href="#">Home WiFi<span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($10/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span></a>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">54</span>
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
                 <h5><div class="pricing" style="float: left;">
                <span class="fs-24 cross">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">59</span>
                  <sup class="cents">99</sup>
                </span>
                </div> Lowest Price Online</h5>
              </div>
              <hr>
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page7.php">
                          <span>Continue</span>
                        </a>
                    </div>
              </div>
            </div>
            <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">
                  
                  <div class="cta quickCheckoutBtn icon-after icon-angle-up mobile-full">
                    <a href="#">
                      <span>Choose Equipment</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent box js-active" style="display: block;">
                    
                    <p><b>Internet Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-2" name="pack1-internet-equipment-03" type="radio"checked>
                            </td>
                            <td>
                              <label for="pack1-internet-equipment-2">
                                <a href="" class="tooltip above">Wireless Gateway with FREE Home WiFi

                                  <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($10/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span>
                                </a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$10.00</span>
                            </td>
                          </tr>
                            <td>
                              <input id="pack1-internet-equipment-4" name="pack1-internet-equipment-03" type="radio">
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
                    <hr class="spacer">
                    <hr>
                    <hr class="spacer">
                    <div class="clear"></div>
                    <div class="priceTally">
                      <table>
                        <tr>
                          <td class="b">Charges added</td>
                          <td class="b">Equipment</td>
                          <td class="b price">$10.00</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$54.99</td>
                        </tr>                       
                      </table>
                      <hr class="spacer">
                      <hr>
                      <hr class="spacer">
                      <table class="table-total fs-15">
                      <tr>
                          <td ><span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$64.99</span></td>
                        </tr>
                      </table>
                    </div>
                    <div class="text-center">
                     
                    
                      <p class="disclaimer-text">
                        * One time charges, taxes, fees and surcharges are not included
                      </p>
                      
                      <hr>
                  <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                      <div>
                      <div class="buttonWrapper selectOffer">
                            <div class="cta whiteCTA green icon-after icon-angle-right mobile-full">
                                <a href="#">
                                  <span>Select Offer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                     <div class="clear"></div>
                     <hr class="spacer">
                    </div>
                  </div>
                  
                </div>
                
                <hr class="spacer">
                <hr>
                <hr class="spacer">
              </div>
            <div class="packageFooter side-by-side">
               
                <div class="clear"></div>
                <hr class="spacer">
                <div>
                  <div class="buttonWrapper">
                    <div class="cta whiteCTA expandDetails icon-after icon-angle-up">
                      <a href="">
                        <span>View Details</span>
                      </a>
                    </div>
                  </div>
                </div>

              <div class="clear"></div>
                <hr class="spacer">
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
                        <a href="" class="tooltip above">Home WiFi <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($10/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span></a>
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
          <div class="package single">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-3a" type="checkbox">
                <label class="compare-label" for="compare-3a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
                  <a href="page6.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>Internet</span>
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
                    <b>Ultimate 100</b>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">100/10Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
                <p class="text-center">
                  Free <a class="tooltip below" href="#">Home WiFi<span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($10/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span></a>
                </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">44</span>
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
                 <h5><div class="pricing" style="float: left;">
                <span class="fs-24 cross">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">49</span>
                  <sup class="cents">99</sup>
                </span>
                </div> Lowest Price Online</h5>
              </div>
              <hr>
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page7.php">
                          <span>Continue</span>
                        </a>
                    </div>
              </div>
            </div>
            <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">
                  
                  <div class="cta quickCheckoutBtn icon-after icon-angle-up mobile-full">
                    <a href="#">
                      <span>Choose Equipment</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent box js-active" style="display: block;">
                    
                    <p><b>Internet Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-2" name="pack1-internet-equipment-04" type="radio"checked>
                            </td>
                            <td>
                              <label for="pack1-internet-equipment-2">
                                <a href="" class="tooltip above">Wireless Gateway with FREE Home WiFi

                                  <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($10/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span>
                                </a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$10.00</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-4" name="pack1-internet-equipment-04" type="radio">
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
                    <hr class="spacer">
                    <hr>
                    <hr class="spacer">
                    <div class="clear"></div>
                    <div class="priceTally">
                      <table>
                        <tr>
                          <td class="b">Charges added</td>
                          <td class="b">Equipment</td>
                          <td class="b price">$10.00</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$44.99</td>
                        </tr>                       
                      </table>
                      <hr class="spacer">
                      <hr>
                      <hr class="spacer">
                      <table class="table-total fs-15">
                      <tr>
                          <td ><span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$54.99</span></td>
                        </tr>
                      </table>
                    </div>
                    <div class="text-center">
                     
                     
                      <p class="disclaimer-text">
                        * One time charges, taxes, fees and surcharges are not included
                      </p>
                      
                      <hr>
                  <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                      <div>
                      <div class="buttonWrapper selectOffer">
                            <div class="cta whiteCTA green icon-after icon-angle-right mobile-full">
                                <a href="#">
                                  <span>Select Offer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                     <div class="clear"></div>
                     <hr class="spacer">
                    </div>
                  </div>
                  
                </div>
                
                <hr class="spacer">
                <hr>
                <hr class="spacer">
              </div>
            <div class="packageFooter side-by-side">
                
                <div class="clear"></div>
                <hr class="spacer">
                <div>
                  <div class="buttonWrapper">
                    <div class="cta whiteCTA expandDetails icon-after icon-angle-up">
                      <a href="">
                        <span>View Details</span>
                      </a>
                    </div>
                  </div>
                </div>
              <div class="clear"></div>
                <hr class="spacer">
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
                        <a href="" class="tooltip above">Home WiFi <span class="tooltip-text">Includes Home WiFi - pay for Wireless Gateway only ($10/mo).  Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.</span></a>
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
          <div class="package single">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-4a" type="checkbox">
                <label class="compare-label" for="compare-4a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
                  <a href="page6.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>Internet</span>
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
                    <b>Extreme</b>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">50/5Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>

              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">34</span>
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
                 <h5><div class="pricing" style="float: left;">
                <span class="fs-24 cross">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">39</span>
                  <sup class="cents">99</sup>
                </span>
                </div> Lowest Price Online</h5>
              </div>
              <hr>
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page7.php">
                          <span>Continue</span>
                        </a>
                    </div>
              </div>
            </div>
            <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">
                  
                  <div class="cta quickCheckoutBtn icon-after icon-angle-up mobile-full">
                    <a href="#">
                      <span>Choose Equipment</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent box js-active" style="display: block;">
                    
                    <p><b>Internet Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-1" name="pack1-internet-equipment-01" type="radio" checked>
                            </td>
                            <td>
                              <label for="pack1-internet-equipment-1">
                                <a href="" class="tooltip above">Internet Modem
                                  <span class="tooltip-text">To connect to the internet you can lease a modem from TWC. We will provide the appropriate modem for your Internet service plan and speed tier. </span>
                                </a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$10.00</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-2" name="pack1-internet-equipment-01" type="radio" >
                            </td>
                            <td>
                              <label for="pack1-internet-equipment-2">
                                <a href="" class="tooltip above">Wireless Gateway with Home WiFi
                                  <span class="tooltip-text">Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.  </span>
                                </a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$14.99</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-4" name="pack1-internet-equipment-01" type="radio">
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
                    <hr class="spacer">
                    <hr>
                    <hr class="spacer">
                    <div class="clear"></div>
                    <div class="priceTally">
                      <table>
                        <tr>
                          <td class="b">Charges added</td>
                          <td class="b">Equipment</td>
                          <td class="b price">$10.00</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$34.99</td>
                        </tr>                       
                      </table>
                      <hr class="spacer">
                      <hr>
                      <hr class="spacer">
                      <table class="table-total fs-15">
                      <tr>
                          <td ><span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$44.99</span></td>
                        </tr>
                      </table>
                    </div>
                    <div class="text-center">
                     
                      
                      <p class="disclaimer-text">
                        * One time charges, taxes, fees and surcharges are not included
                      </p>
                      
                      <hr>
                      
                  <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                      <div>
                      <div class="buttonWrapper selectOffer">
                            <div class="cta whiteCTA green icon-after icon-angle-right mobile-full">
                                <a href="#">
                                  <span>Select Offer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                     <div class="clear"></div>
                     <hr class="spacer">
                    </div>
                  </div>
                  
                </div>
                
                <hr class="spacer">
                <hr>
                <hr class="spacer">
              </div>
            <div class="packageFooter side-by-side">
                
                <div class="clear"></div>
                <hr class="spacer">
                <div>
                  <div class="buttonWrapper">
                    <div class="cta whiteCTA expandDetails icon-after icon-angle-up">
                      <a href="">
                        <span>View Details</span>
                      </a>
                    </div>
                  </div>
                </div>

              <div class="clear"></div>
                <hr class="spacer">
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
          <div class="package single">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-5a" type="checkbox">
                <label class="compare-label" for="compare-5a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
                  <a href="page6.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>Internet</span>
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
                    <b>Basic</b>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">10/1Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
                
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">29</span>
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
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page7.php">
                          <span>Continue</span>
                        </a>
                    </div>
              </div>
            </div>
            <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">
                  
                  <div class="cta quickCheckoutBtn icon-after icon-angle-up mobile-full">
                    <a href="#">
                      <span>Choose Equipment</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent box js-active" style="display: block;">
                    
                    <p><b>Internet Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-1" name="pack1-internet-equipment-05" type="radio" checked>
                            </td>
                            <td>
                              <label for="pack1-internet-equipment-1">
                                <a href="" class="tooltip above">Internet Modem
                                  <span class="tooltip-text">To connect to the internet you can lease a modem from TWC. We will provide the appropriate modem for your Internet service plan and speed tier. </span>
                                </a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$10.00</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-2" name="pack1-internet-equipment-05" type="radio" >
                            </td>
                            <td>
                              <label for="pack1-internet-equipment-2">
                                <a href="" class="tooltip above">Wireless Gateway with Home WiFi
                                  <span class="tooltip-text">Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.  </span>
                                </a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$12.99</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-4" name="pack1-internet-equipment-05" type="radio">
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
                    <hr class="spacer">
                    <hr>
                    <hr class="spacer">
                    <div class="clear"></div>
                    <div class="priceTally">
                      <table>
                        <tr>
                          <td class="b">Charges added</td>
                          <td class="b">Equipment</td>
                          <td class="b price">$10.00</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$29.99</td>
                        </tr>                       
                      </table>
                      <hr class="spacer">
                      <hr>
                      <hr class="spacer">
                      <table class="table-total fs-15">
                      <tr>
                          <td ><span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$39.99</span></td>
                        </tr>
                      </table>
                    </div>
                    <div class="text-center">
                     
                     
                      <p class="disclaimer-text">
                        * One time charges, taxes, fees and surcharges are not included
                      </p>
                      
                      <hr>
                  <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                      <div>
                      <div class="buttonWrapper selectOffer">
                            <div class="cta whiteCTA green icon-after icon-angle-right mobile-full">
                                <a href="#">
                                  <span>Select Offer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                     <div class="clear"></div>
                     <hr class="spacer">
                    </div>
                  </div>
                  
                </div>
                
                <hr class="spacer">
                <hr>
                <hr class="spacer">
              </div>
            <div class="packageFooter side-by-side">
                
                <div class="clear"></div>
                <hr class="spacer">
                <div>
                  <div class="buttonWrapper">
                    <div class="cta whiteCTA expandDetails icon-after icon-angle-up">
                      <a href="">
                        <span>View Details</span>
                      </a>
                    </div>
                  </div>
                </div>

              <div class="clear"></div>
                <hr class="spacer">
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
                       A reliable connection for basic internet use
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--PACKAGE END-->
          <!--PACKAGE BEGIN-->
          <div class="package single">
            <div class="packageHead">
              <fieldset>
                <input class="comparePackage" id="compare-6a" type="checkbox">
                <label class="compare-label" for="compare-6a">Compare</label>
                <div class="alertTooltip">
                  <p>This is an alert</p>
                </div>
                <div class="compare-button cta">
                  <a href="page6.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>Internet</span>
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
                    <b>Everyday Low Price</b>
                </p>
                <p class="text-center">
                  Speeds up to <a class="tooltip below" href="#">3/1Mbps<span class="tooltip-text">Best for connecting 1-2 devices at the same time. Perfect for average internet usage such as emailing, browsing the web and social media.</span></a>
                </p>
                
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">24</span>
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
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page7.php">
                          <span>Continue</span>
                        </a>
                    </div>
              </div>
            </div>
            <div class="quickCheckoutWrapper">
                <div class="quickCheckoutAccordion">
                  
                  <div class="cta quickCheckoutBtn icon-after icon-angle-up mobile-full">
                    <a href="#">
                      <span>Choose Equipment</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent box js-active" style="display: block;">
                    
                    <p><b>Internet Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-1" name="pack1-internet-equipment-06" type="radio" checked>
                            </td>
                            <td>
                              <label for="pack1-internet-equipment-1">
                                <a href="" class="tooltip above">Internet Modem
                                  <span class="tooltip-text">To connect to the internet you can lease a modem from TWC. We will provide the appropriate modem for your Internet service plan and speed tier. </span>
                                </a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$10.00</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-2" name="pack1-internet-equipment-06" type="radio" >
                            </td>
                            <td>
                              <label for="pack1-internet-equipment-2">
                                <a href="" class="tooltip above">Wireless Gateway with Home WiFi
                                  <span class="tooltip-text">Set up a wireless home network and connect multiple WiFi-enabled devices to the Internet over one superfast wireless connection.  </span>
                                </a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$12.99</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-internet-equipment-4" name="pack1-internet-equipment-06" type="radio">
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
                    <hr class="spacer">
                    <hr>
                    <hr class="spacer">
                    <div class="clear"></div>
                    <div class="priceTally">
                      <table>
                        <tr>
                          <td class="b">Charges added</td>
                          <td class="b">Equipment</td>
                          <td class="b price">$10.00</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$24.99</td>
                        </tr>                       
                      </table>
                      <hr class="spacer">
                      <hr>
                      <hr class="spacer">
                      <table class="table-total fs-15">
                      <tr>
                          <td ><span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$34.99</span></td>
                        </tr>
                      </table>
                    </div>
                    <div class="text-center">
                     
                     
                      <p class="disclaimer-text">
                        * One time charges, taxes, fees and surcharges are not included
                      </p>
                     
                      <hr>
                  <p class="disclaimer-text">You will have an opportunity to review your selections before placing your order.</p>
                      <div>
                      <div class="buttonWrapper selectOffer">
                            <div class="cta whiteCTA green icon-after icon-angle-right mobile-full">
                                <a href="#">
                                  <span>Select Offer</span>
                                </a>
                            </div>
                        </div>
                    </div>
                     <div class="clear"></div>
                     <hr class="spacer">
                    </div>
                  </div>
                  
                </div>
                
                <hr class="spacer">
                <hr>
                <hr class="spacer">
              </div>
            <div class="packageFooter side-by-side">
               
                <div class="clear"></div>
                <hr class="spacer">
                <div>
                  <div class="buttonWrapper">
                    <div class="cta whiteCTA expandDetails icon-after icon-angle-up">
                      <a href="">
                        <span>View Details</span>
                      </a>
                    </div>
                  </div>
                </div>

              <div class="clear"></div>
                <hr class="spacer">
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
                      A reliable connection for everyday Internet use
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--PACKAGE END-->
        </div>
       <div style="width:49%; display: inline-block; text-align:right; margin:0 auto;">
            <div class="cta icon-before fs-30 icon-angle-left">
                <a href="index.php">
                  <span>Change Services</span>
                </a>
              </div>

        </div>
        <div style="width:49%; display: inline-block;text-align:left; margin:0 auto;">
            <div class="cta icon-after fs-30 icon-angle-right nextStep">
                <a href="page7.php">
                  <span>Continue To Next Step</span>
                </a>
              </div>
        </div>
      </div>


    </div>
  </div>
</div>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>
<hr class="spacer">
<div class="icon-before icon-angle-left">
  <a href="../../index.php">
    <span>Start Over</span>
  </a>
</div>