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
                <li class="active"><a href="#">2. TV</a></li>
                <li>3. Internet</li>
                <li>4. Review</li>
            </ul>
            <div class="text-right">
                Service Selections:<br><b> TV & Internet.</b>
            </div>
        </div>
      
      <div class="super-h3 block text-center"><b>Step 2: </b>Select your TV plan and Equipment</div><br>

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
                  <a href="page3.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV</span>
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
                <p class="text-center fs-18">Preferred TV</p>
                   <div id="1" class="cta modal-button">
                      <a href="" analyticsname="test">
                        <span>200+ Channels</span>
                      </a>
                    </div>
                <p class="text-center">
                  <a class="tooltip below" href="#">Whole House Service<span class="tooltip-text">Watch a show in one room and move to a different room to finish it. To use this service, you need Whole House HD-DVR (Enhanced DVR, where available) or HD playback boxes.</span></a>
                </p>
              </div>
              <div class="pricing temp text-center">
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
                    <p><a class="tooltip below" href="">Months<span class="tooltip-text">After 12 months, retail rates apply. No contract required.</span></a></p>
                    </div>
                  </div>
                </span>
              </div>
              <hr>
              <div class="specialOffer text-center">
              <h5>HBO®, STARZ® & free trial of SHOWTIME® for 12 months</h5>
              </div>
              <hr>
                <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page5.php">
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
                    <p><b>TV Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-01" name="pack01-tv-equipment" type="radio" checked="checked">
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-01">
                                <a href="" class="tooltip above">Whole House Package with FREE Service
    <span class="tooltip-text">Includes HD-DVR box (or Enhanced DVR, where available) and HD box with FREE Whole House service - pay for boxes only.  Record and watch HD and digital programming.  Pause live TV, record 2 shows at once and store up to 75 hours of HD content, or over 200 hours of standard programming on your HD-DVR.  Watch shows recorded from any other rooms that have playback boxes connected with the multi-room network.</span>
</a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$23.50</span>
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
                          <td class="b price">$23.50</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$79.99</td>
                        </tr>                       
                      </table>
                      <hr class="spacer">
                      <hr>
                      <hr class="spacer">
                      <table class="table-total fs-15">
                      <tr>
                          <td><span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$103.49</span></td>
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
                        <a href="" class="tooltip above">Whole House Service <span class="tooltip-text">Watch a show in one room and move to a different room to finish it. To use this service, you need Whole House HD-DVR (Enhanced DVR, where available) or HD playback boxes.</span></a>
                      </li>
                      <li>
                      Choice of <a href="" class="tooltip above">Premiums<span class="tooltip-text">   Cinemax and Starz, plus your choice of HBO or Showtime</span></a> 
                    </li>
                      <li>
                       <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a> and <a href="" class="tooltip above">Start Over© <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <br>
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
                  <a href="page3.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV</span>
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
                <p class="text-center fs-18">Preferred TV</p>
                   <div id="1" class="cta modal-button">
                      <a href="" analyticsname="test">
                        <span>200+ Channels</span>
                      </a>
                    </div>
                <p class="text-center">
                  <a class="tooltip below" href="#">HD-DVR Service<span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming.</span></a>
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
              <h5>Includes HBO&reg; with HBO GO&reg; and SHOWTIME&reg;</h5>
              </div>
              <hr>
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page5.php">
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
                    <p><b>TV Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-11" name="pack1-tv-equipment-11" type="radio" checked>
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-11">
                                <a href="" class="tooltip above">HD-DVR Box with FREE  Service
    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming. Includes FREE DVR Service - pay for box only.</span>
</a>

                              </label>
                            </td>
                            <td class="price">
                              <span>$11.75</span>
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
                          <td class="b price">$11.75</td>
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
                          <td ><span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$76.74</span></td>
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
                        <a href="" class="tooltip above">HD-DVR Service <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming.</span></a>
                      </li>
                      <li>HBO®, SHOWTIME® and STARZ®</li>
                      <li>
                       <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a> and <a href="" class="tooltip above">Start Over© <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
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
                  <a href="page3.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV</span>
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
                <p class="text-center fs-18">Preferred TV</p>
                   <div id="1" class="cta modal-button">
                      <a href="" analyticsname="test">
                        <span>200+ Channels</span>
                      </a>
                    </div>
                <hr class="spacer">
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">49</span>
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
              <h5></h5>
              </div>
              <hr>
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page5.php">
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
                    <p><b>TV Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-12" name="pack1-tv-equipment-12" type="radio" checked>
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-12">
                                <a href="" class="tooltip above">HD Box
    <span class="tooltip-text">Watch programming in high definition and digital programming with amazing picture quality and digital sound.</span>
</a>

                              </label>
                            </td>
                            <td class="price">
                              <span>$11.75</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-2" name="pack1-tv-equipment-12" type="radio">
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-2">
                                <a href="" class="tooltip above">HD-DVR Box and Service
    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming.</span>
</a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$24.20</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-4" name="pack1-tv-equipment-12" type="radio">
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
                    <hr class="spacer">
                    <hr>
                    <hr class="spacer">
                    <div class="clear"></div>
                    <div class="priceTally">
                      <table>
                        <tr>
                          <td class="b">Charges added</td>
                          <td class="b">Equipment</td>
                          <td class="b price">$11.75</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$49.99</td>
                        </tr>                       
                      </table>
                      <hr class="spacer">
                      <hr>
                      <hr class="spacer">
                      <table class="table-total fs-15">
                      <tr>
                          <td ><span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$61.24</span></td>
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
                       <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a> and <a href="" class="tooltip above">Start Over© <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
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
                  <a href="page3.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV</span>
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
                <p class="text-center fs-18">Variety Lite Español</p>
                   <div id="1" class="cta modal-button">
                      <a href="" analyticsname="test">
                        <span>200+ Channels</span>
                      </a>
                    </div>
                <p class="text-center">&nbsp; </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">49</span>
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
              <h5>Spanish channels & a free trial of SHOWTIME® for 12 months</h5>
              </div>
              <hr>
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page5.php">
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
                    <p><b>TV Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-13" name="pack1-tv-equipment-13" type="radio" checked>
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-13">
                                <a href="" class="tooltip above">HD Box
    <span class="tooltip-text">Watch programming in high definition and digital programming with amazing picture quality and digital sound.</span>
</a>

                              </label>
                            </td>
                            <td class="price">
                              <span>$11.75</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-2" name="pack1-tv-equipment-13" type="radio">
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-2">
                                <a href="" class="tooltip above">HD-DVR Box and Service
    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming. </span>
</a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$24.20</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-4" name="pack1-tv-equipment-13" type="radio">
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
                    <hr class="spacer">
                    <hr>
                    <hr class="spacer">
                    <div class="clear"></div>
                    <div class="priceTally">
                      <table>
                        <tr>
                          <td class="b">Charges added</td>
                          <td class="b">Equipment</td>
                          <td class="b price">$11.75</td>
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
                          <td class="b price"><span class="fs-15">$61.24</span></td>
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
                       <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a> and <a href="" class="tooltip above">Start Over© <span class="tooltip-text">Restart a show that’s already in progress.</span></a>
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
                  <a href="page3.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV</span>
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
                <p class="text-center fs-18">Standard TV</p>
                   <div id="1" class="cta modal-button">
                      <a href="" analyticsname="test">
                        <span>70+ Channels</span>
                      </a>
                    </div>
                <p class="text-center">&nbsp; </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">39</span>
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
              <h5>Includes a free trial of SHOWTIME® for 12 months</h5>
              </div>
              <hr>
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page5.php">
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
                    <p><b>TV Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-14" name="pack1-tv-equipment-14" type="radio" checked>
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-14">
<a href="" class="tooltip above">HD Box
    <span class="tooltip-text">Watch programming in high definition and digital programming with amazing picture quality and digital sound.</span>
</a>

                              </label>
                            </td>
                            <td class="price">
                              <span>$11.75</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-2" name="pack1-tv-equipment-14" type="radio">
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-2">
                                <a href="" class="tooltip above">HD-DVR Box and Service
    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming. </span>
</a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$24.20</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-4" name="pack1-tv-equipment-14" type="radio">
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
                    <hr class="spacer">
                    <hr>
                    <hr class="spacer">
                    <div class="clear"></div>
                    <div class="priceTally">
                      <table>
                        <tr>
                          <td class="b">Charges added</td>
                          <td class="b">Equipment</td>
                          <td class="b price">$11.75</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$39.99</td>
                        </tr>                       
                      </table>
                      <hr class="spacer">
                      <hr>
                      <hr class="spacer">
                      <table class="table-total fs-15">
                      <tr>
                          <td ><span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$51.24</span></td>
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
                       <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a>
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
                  <a href="page3.php">
                    <span>Compare</span>
                  </a>
                </div>
              </fieldset>
              <div class="packageTitle">
                <div class="right">
                  <span>TV</span>
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
                <p class="text-center fs-18">Starter TV</p>
                   <div id="1" class="cta modal-button">
                      <a href="" analyticsname="test">
                        <span>20+ Channels</span>
                      </a>
                    </div>
                <p class="text-center"><a class="tooltip below" href="">Digital Adapter<span class="tooltip-text">A small device that allows digital signals to be displayed on your analog TV.</span></a> </p>
              </div>
              <div class="pricing temp text-center">
                <span class="h4">
                  <sup class="dollar-sign">$</sup>
                  <span class="dollars">10</span>
                  <sup class="cents">00</sup>
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
                  <span class="dollars">19</span>
                  <sup class="cents">99</sup>
                </span>
                </div>Our best deal of the year!</h5>
              </div>
              <hr>
              <div class="overlayButton">
                    <div class="icon-only iconRemove icon-remove">
                       Remove <span></span>
                    </div>
              </div>
              <div class="overlayContinue">
                <div class="cta whiteCTA fs-22 mobile-full">
                        <a href="page5.php">
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
                    <p><b>TV Equipment</b></p>
                    <div class="productSelect">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-1" name="pack1-tv-equipment-15" type="radio">
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-1">
                                <a href="" class="tooltip above">HD Box
    <span class="tooltip-text">Watch programming in high definition and digital programming with amazing picture quality and digital sound.</span>
</a>

                              </label>
                            </td>
                            <td class="price">
                              <span>$11.75</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-2" name="pack1-tv-equipment-15" type="radio">
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-2">
                                <a href="" class="tooltip above">HD-DVR Box and Service
    <span class="tooltip-text">Record and watch HD and digital programming. Pause live TV, record 2 shows at once and record 30+ hours of programming. </span>
</a>
                              </label>
                            </td>
                            <td class="price">
                              <span>$24.20</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-4" name="pack1-tv-equipment-15" type="radio">
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
                          <tr>
                            <td>
                              <input id="pack1-tv-equipment-4" name="pack1-tv-equipment-15" type="radio" checked>
                            </td>
                            <td>
                              <label for="pack1-tv-equipment-4">
                               <a class="tooltip above" href="">Digital Adapter<span class="tooltip-text">A small device that allows digital signals to be displayed on your analog TV.</span></a>
                              </label>
                            </td>
                            <td class="price">
                              <span>Included</span>
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
                          <td class="b price">$0.00</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$10.00</td>
                        </tr>                       
                      </table>
                      <hr class="spacer">
                      <hr>
                      <hr class="spacer">
                      <table class="table-total fs-15">
                      <tr>
                          <td ><span class="fs-15">Charges reflected in your cart*</span></td>
                          <td class="b"><span class="fs-15">Total</span></td>
                          <td class="b price"><span class="fs-15">$10.00</span></td>
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
                       <a href="" class="tooltip above">Digital Adapter <span class="tooltip-text">A small device that allows digital signals to be displayed on your analog TV.</span></a>
                      </li>
                      <li>
                       <a href="" class="tooltip above">TWC TV&copy; <span class="tooltip-text">Watch live TV on your tablet, computer or smartphone from any room in your home.</span></a>
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
                <a href="page5.php">
                  <span>Continue To Next Step</span>
                </a>
              </div>

        </div>
      </div>


    </div>
  </div>
</div>
<div class="modal">
    <div id="modal1" class="modal-container" style="margin-top: -156.5px; display: none;">
            <div class="modal-close"></div>
    <div class="modal_content">

<div class="par parsys"><div class="richtext section">

<div id="6b5c2d69-df9f-48c4-a7bd-da4d3aca60d1">
    
       <p class="h1">Channels by Plans and Packages</p>
<p>This chart shows a sample of programming by TV plan. All services may not be available in all areas. <a href="/en/tv/channels-lineup.html" target="_blank" data-window-height="800" data-window-width="1080">See channels by package in your area.</a></p>


</div>
</div>
<div class="modal-body">
<div class="richtext section">
<div id="f1d4b1d8-e715-41a9-95eb-73ff0a6f2425">
    
       <table class="channels-list" frame="box" rules="all">
<tbody><tr><td class="td-no-border td-network table-header">Network</td>
<td class="td-no-border td-package text-center"><span class="table-header">Preferred</span><br>
200+ Channels</td>
<td class="td-no-border td-package text-center"><span class="table-header">Standard</span><br>
70+ Channels</td>
<td class="td-no-border td-package text-center"><span class="table-header">Starter</span><br>
20+ Channels</td>
</tr><tr><td class="td-network">A &amp; E*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">ABC*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">ABC Family*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Al Jazeera America</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">AMC*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">American Heroes Channel</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Animal Planet*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Aspire</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Azteca*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">BBC America*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">BBC World News</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">BET*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Big Ten Network*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Bloomberg*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Bravo*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Cartoon Network*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">CBS*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">CCTV News</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Centric</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Chiller</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">CLOO</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">CMT*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">CNBC*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">CNBC World</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">CNN*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Comedy Central*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Cooking Channel*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">C-SPAN*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">C-SPAN 2*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">C-SPAN 3*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">CW*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">Daystar</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Destination America*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Discovery*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Discovery - Fit &amp; Health*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Disney*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Disney Junior*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Disney XD*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">DIY*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">E!*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Educational Access</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">ESPN*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">ESPN 2*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">ESPN Deportes*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">ESPN News*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">ESPNU*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">EVINE Live</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">EWTN*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Food Network*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Fox*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">Fox Business Network*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Fox Deportes*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Fox Movie Channel*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Fox News Channel*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Fox Sports 1*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">FUSE*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">FX*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">FXX*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">FYI*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Galavision</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Golf*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Government Access</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">GSN*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Hallmark*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Hallmark Movies &amp; Mysteries*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">HGTV*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">History*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">HLN*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">HSN*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">IFC</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">INSP</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Investigation Discovery*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">ION</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">Jewelry Television*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Leased Access</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">Lifetime*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Lifetime Real Women*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Logo</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">MLB Network*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">MSNBC*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">MTV*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">MTV 2*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">MTV Hits</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">MTV Jams</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Music Choice^</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">National Geographic*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">National Geographic Wild*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">NBA TV*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">NBC*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">NBC Sports Network*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">NFL Network*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Nick Jr*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Nick Toons*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Nickelodeon*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">On Demand Channels*†^</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Outdoor Channel*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Ovation</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">OWN*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Oxygen*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">PAC 12</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Palladia*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">PBS*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">Public Access</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">QVC*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">Reelz*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Science*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Shop Zeal</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Smithsonian</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">SoapNet*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Speed*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Spike TV*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Sprout</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Style*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Sundance*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">SyFy*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TBN</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TBS*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TCM*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Teen Nick</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Telemundo*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">Telemundo 2</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">The Weather Channel*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TLC*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TNT*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Travel Channel*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">truTV*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TV Guide Network*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TV Land*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TV One*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TWC Deportes*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TWC News*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr><tr><td class="td-network">TWC SportsNet*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">TWC SportsNet LA*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Univision*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">UP*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">USA*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">Velocity*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">VH1*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network">VH1 Classic*</td>
<td class="td-package"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-package">&nbsp;</td>
<td class="td-border-last td-package">&nbsp;</td>
</tr><tr><td class="td-network td-border-bottom">WGN America*</td>
<td class="td-package td-border-bottom"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-highlight td-package td-border-bottom"><img src="tv-plans-chart-checkmark-green.png"></td>
<td class="td-border-last td-package td-border-bottom"><img src="tv-plans-chart-checkmark-green.png"></td>
</tr></tbody></table>

    

</div>



</div>
<div class="richtext section">

<div id="a945ca24-f5d8-4bb1-8e7e-16a210c7363b">

    
    
       <p>*Also available in HD.</p>
								<p>†On Demand may require purchase or subscription.</p>
								<p>^Lease of a Set-Top Box is required.<br></p>
    

</div>
</div>
</div>
</div>


    </div>
    
</div>
<div class="modal-overlay" style="display: none;"></div>
</div>
<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>
<hr class="spacer">
<div class="icon-before icon-angle-left">
  <a href="../../index.php">
    <span>Start Over</span>
  </a>
</div>