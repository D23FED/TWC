<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>
<h1>Compare TV Plans</h1>
<div class="backLink">
  <div class="cta icon-before icon-angle-left">
    <a href="#">
      <span>All TV Plans</span>
    </a>
  </div>
</div>
<!--CONTENT-->

<div class="sbsCompare packageSelect">
        <!--PACKAGE BEGIN-->
          <div class="package double ">
            <div class="packageHead sticky">
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
            
            <div class="packageBody stickyElement">
            <div class="stickySpacing"></div>
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
                  <h6 class="b">To Start:</h6>
                  <div class="cta quickCheckoutBtn icon-after icon-angle-down mobile-full">
                    <a href="#">
                      <span>View & Price Equipment</span>
                    </a>
                  </div>
                  <div class="quickCheckoutContent box">
                    <p class="disclaimer-text text-center b">Disclaimer: One time charges, taxes, fees and surcharges are not included</p>
                    <hr class="spacer">
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
                          <td class="b">Charges added</td>
                          <td class="b">Equipment</td>
                          <td class="b price">$18.25</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td class="b">Package</td>
                          <td class="b price">$89.99</td>
                        </tr>
                        <tr>
                          <td class="b">Charges reflected in your cart</td>
                          <td class="b">Total</td>
                          <td class="b price total">$108.24</td> 
                        </tr>
                      </table>
                    </div>
                    <div class="text-center">
                      <p class="text-center">
                        <a href="" class="tooltip above">Have everything you need?
                          <span class="tooltip-text">Before you finalize your order, you'll be able to review your selections to ensure you're happy with them.</span>
                        </a>
                      </p>
                      <hr class="spacer">
                      <div class="cta whiteCTA icon-after icon-angle-right">
                        <a href="https://www.timewarnercable.com/residential/order?qso=TESTDP8999">
                          <span>Quick Checkout</span>
                        </a>
                      </div>
                      <hr class="spacer">
                      <p class="text-center">
                        <a href="" class="tooltip above">Need more equipment or channels?
                          <span class="tooltip-text">Add additional set-top boxes, channels and more.</span>
                        </a>
                      </p>
                      <hr class="spacer"> 
                      <div class="cta flatOmega icon-after icon-angle-right">
                        <a href="https://www.timewarnercable.com/residential/order?qso=1-XB27P">
                          <span>Continue Shopping</span>
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
                <div class="cta whiteCTA expandDetails icon-after icon-angle-up">
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




<!--CONTENT END-->
<div class="text-center">
  <div class="cta fs-20 icon-after icon-angle-up scrollTop mobile-full">
    <a href="#">
      <span>Back to Top</span>
    </a>
  </div>
</div>

<hr class="spacer">
<p>Disclaimer Text - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque optio, eligendi rem illo, nostrum eos, aliquid atque doloribus sequi provident reprehenderit. Eius eaque eum illo, sit blanditiis tenetur doloribus harum similique nisi reiciendis perspiciatis aliquid nam modi pariatur autem tempore ab velit mollitia facere. Ad porro impedit non nemo, eligendi neque, dolorum cum maiores excepturi perferendis. Possimus, esse. Delectus corporis dicta eius excepturi quam expedita, odio, distinctio, officia perferendis facilis cum dolorem repellat magni aut consequatur fugit necessitatibus sapiente incidunt. Itaque dolorum impedit vero nesciunt magni cupiditate praesentium harum reiciendis, vitae nisi consequatur ratione sit, ipsam deleniti recusandae aliquam perspiciatis. Iste non aperiam in maxime quia odio rerum praesentium, perspiciatis amet consequatur eius voluptatem nesciunt ipsam similique neque cupiditate animi nisi, delectus odit minima autem totam! Magnam accusantium impedit tempora eveniet deserunt vitae dolorum blanditiis et repellat! Culpa veritatis quae quas accusamus quasi, tempore molestias maxime dolores doloribus perspiciatis, iste eaque neque natus dignissimos at eveniet corporis optio labore, esse ratione magnam necessitatibus reiciendis, quos nostrum. Sed ex provident possimus iure dolores quidem doloremque voluptatem porro eveniet nulla sit impedit inventore, numquam cupiditate, quod praesentium officia modi placeat quasi assumenda labore delectus accusamus. Iste rerum eveniet blanditiis minima vero repudiandae suscipit nihil cupiditate dolores nam accusantium eligendi voluptatem consectetur natus fugiat quae veritatis mollitia facilis magnam facere, culpa officiis, at nisi perspiciatis! Dolore harum eum possimus odio laudantium repellat quibusdam quas ratione quia amet, neque ad modi accusantium corporis sed sint similique aliquid voluptatibus ipsa, dolor veniam. Labore dignissimos, cupiditate!</p>


<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>