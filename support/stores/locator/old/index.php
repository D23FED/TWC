<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php'); ?>

<div class="locate-stores">
  <form action="searchPage">

    <div class="33-67 section columnControl">
      <div class="parsys_column twc-col2_3367">

        <div class="parsys parsys0 twc-col2_3367-c0 parsys_column">
          <div class="parbase section">

            <!-- locate-stores input -->
            <div class="stores-find-me">
              <div class="twc-module">
                <fieldset class="twc-search">
                  <div class="twc-search-input-wrap">
                    <h5>
                      Locate a Store
                    </h5>
                    <input id="" type="search" placeholder="Placeholder Text" name="">
                    <div class="cta omega twc-icon-only icon-search">
                      <a href="#">
                        <span></span>
                      </a>
                    </div>
                    <small>
                      Enter ZIP Codes, or Street Address, City, State
                    </small>
                  </div>
                  <div class="stores_details_map_info_distance twc-left">
                    <span>
                      WITHIN:
                    </span>
                    <select name="distance">
                      <option>
                        5 Miles
                      </option>
                      <option>
                        10 Miles
                      </option>
                      <option>
                        25 Miles
                      </option>
                    </select>
                  </div>
                </fieldset>
              </div>
            </div>
            <!-- .locate-stores input -->
          </div>
        </div>

        <div class="parsys parsys1 twc-col2_3367-c1 parsys_column">
          <div class="parbase section">

            <!-- locate stores filters -->
            <div class="locate-stores-filters">
              <fieldset>
                <legend class="light">
                  <span class="fs-17">
                    Refine Your TWC Store Details
                  </span>
                </legend>
                <div class="filter-section">
                  <div class="mobile-filters-options">
                    <div class="btn blue twc-left">
                      <button type="submit">
                        Apply Filters
                      </button>
                    </div>
                    <div class="btn blue twc-right">
                      <button type="clear">
                        Reset Filters
                      </button>
                    </div>
                  </div>

                  <div class="50-50 section columnControl">
                    <div class="parsys_column twc-col2_5050">
                      <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                        <div class="parbase section filter-section-payment">
                          <ul class="filter-checkbox">
                            <li>
                              <input id="icon-money" type="checkbox" checked name="" id="">
                              <label>
                                Demo Center
                                <label></li>
                                <li>
                                  <input id="icon-list-alt" type="checkbox" checked name="" id="">
                                  <label>
                                    Exchange Equipment
                                  </label>
                                </li>
                                <li>
                                  <input id="icon-credit-card" type="checkbox" checked name="" id="">
                                  <label>
                                    24-Hour Payment Drop
                                  </label>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                            <div class="parbase section filter-section-services">
                              <ul class="filter-checkbox">
                                <li>
                                  <input id="icon-money" type="checkbox" checked name="" id="">
                                  <label>
                                    Full Service TWC Stores
                                    <label></li>
                                    <li>
                                      <input id="icon-list-alt" type="checkbox" checked name="" id="">
                                      <label>
                                        Payment Only Locations
                                      </label>
                                    </li>
                                    <li>
                                      <input id="icon-credit-card" type="checkbox" checked name="" id="">
                                      <label>
                                        Sales Only Kiosk
                                      </label>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      <div class="btn blue twc-right submit">
                        <button type="submit">
                          GO
                        </button>
                      </div>
                    </div>
                    <!-- .locate stores filters -->
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="pickup-exchange">

          <div class="33-67 section columnControl">
            <div class="parsys_column twc-col2_3367">
              <div class="parsys parsys0 twc-col2_3367-c0 parsys_column">
                <div class="parbase section">
                  <div class="banner">
                    <h4>
                      Find Stores that will Pick up or Exchange Equipment
                    </h4>
                  </div>
                </div>
              </div>

              <div class="parsys parsys1 twc-col2_3367-c1 parsys_column">
                <div class="parbase section">
                  <div class="find-location">
                    <ul>
                      <li>
                        <label class="p">
                          Enter account or phone number to find locations:
                        </label>
                      </li>
                      <li>
                        <input id="" type="search" placeholder="Account or Phone Number" name="">
                        <div class="btn blue mobile-full">
                          <button type="submit">
                            FIND LOCATION
                          </button>
                        </li>
                      </div>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="map-stores twc-box-column">

            <header class="page-header">
              <div class="tabs">
                <ul>
                  <li class="h5 stores_list_tab">
                    <a href="#stores_map_details">
                      List
                    </a>
                  </li>
                  <li class="h5 stores_map_tab">
                    <a href="#stores_map_map">
                      Map
                    </a>
                  </li>
                </ul>
              </div>
            </header>

            <div class="stores_details_map_container">
              <div class="stores_details_map_info">
                <h5>
                  Currently showing (4) locations near Birmingham, AL
                </h5>
              </div>

              <div class="parsys_column twc-col2_3367-c0 stores_location_details" id="stores_map_details">

                <div class="stores_locations_details_legend">
                  <div class="legend_icons">
                    <div class="50-50 section columnControl">
                      <div class="parsys_column twc-col2_5050">
                        <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                          <div class="parbase section">
                            <ul>
                              <li class="twc-icon-before icon-money">
                                <span>Cash</span>
                              </li>
                              <li class="twc-icon-before icon-list-alt">
                                <span>Check</span>
                              </li>
                              <li class="twc-icon-before icon-credit-card">
                                <span>Credit Card</span>
                              </li>
                              <li class="twc-icon-before icon-eye-open">
                                <span>Demo Center</span>
                              </li>
                              <li class="twc-icon-before icon-wrench">
                                <span>Self Install</span>
                              </li>
                              <li class="twc-icon-before icon-dollar">
                                <span>Payment Center</span>
                              </li>
                            </ul>
                          </div>
                          <div class="new section"></div>
                        </div>
                        <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                          <div class="parbase section">
                            <ul>
                              <li class="twc-icon-before icon-time">
                                <span>24-Hour Payment</span>
                              </li>
                              <li class="twc-icon-before icon-download">
                                <span>Return Equipment</span>
                              </li>
                              <li class="muted twc-icon-before icon-exchange">
                                <span>Exchange Equipment</span>
                              </li>
                              <li class="twc-icon-before icon-building">
                                <span>TWC Office Only</span>
                              </li>
                              <li class="twc-icon-before icon-shopping-cart">
                                <span>Retail Stores</span>
                              </li>
                            </ul>
                          </div>
                          <div class="new section"></div>
                        </div>
                      </div>
                      <div class="columnClear"></div>
                    </div>
                  </div>
                  <div class="legend_note">
                    <span> <b>NOTE:</b>
                      Full Service TWC locations accept cash, check, credit card payments and provide equipment demos, exchanges, returns and self install.
                    </span>
                  </div>
                </div>

                <div class="location_listing">
                  <ul id="paymentcenterresults">
                    <li id="outputDiv0" class="outputdiv 2666">

                      <div class="50-50 section columnControl">
                        <div class="parsys_column twc-col2_5050">
                          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                            <div class="parbase section">
                              <a href="#">
                                S. Manhattan
                              </a>
                              <address>
                                46A East 23rd Street
                                <br>
                                New York, NY 10010
                              </address>
                              <br>
                              <br> <b>Hours</b>
                              <br>
                              Mon-Fri 8am - 7pm
                              <br>
                              Sat 8am - 5pm
                              <br>
                              <br>
                              <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                                Directions
                              </a>
                              |
                              <b>
                                Distance:
                              </b>
                              1.2 mi
                            </div>
                            <div class="new section"></div>
                          </div>
                          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                            <div class="parbase section">
                              <div class="pType twc-icon-only icon-money"><span></span></div>
                              <div class="pType twc-icon-only icon-list-alt"><span></span></div>
                              <div class="pType twc-icon-only icon-credit-card"><span></span></div>
                              <div class="pType twc-icon-only icon-wrench"><span></span></div>
                              <div class="pType twc-icon-only icon-time"><span></span></div>
                              <div class="pType twc-icon-only icon-eye-open"><span></span></div>
                              <div class="pType twc-icon-only icon-exchange"><span></span></div>
                              <br><br>
                              <b>
                                Location Options
                              </b>
                              <div class="service_selfinstall">
                                Self Install
                              </div>
                              <div class="service_alldaypayment">
                                24-Hour Payment
                              </div>
                              <div class="service_democenter">
                                Demo Center
                              </div>
                              <div class="service_newequipment">
                                New Equipment
                              </div>
                              <div class="service_boxswap">
                                Box Swap
                              </div>
                              <div class="service_setup">
                                Setup
                              </div>
                            </div>
                            <div class="new section"></div>
                          </div>
                        </div>
                        <div class="columnClear"></div>
                      </div>

                    </li>
                    <li id="outputDiv2" class="outputdiv 6277">
                      <div class="50-50 section columnControl">
                        <div class="parsys_column twc-col2_5050">
                          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                            <div class="parbase section">
                              <a href="#">
                                S. Manhattan
                              </a>
                              <address>
                                46A East 23rd Street
                                <br>
                                New York, NY 10010
                              </address>
                              <br>

                              <br>
                              <b>
                                Hours
                              </b>
                              <br>
                              Mon-Fri 8am - 7pm
                              <br>
                              Sat 8am - 5pm
                              <br>
                              <br>
                              <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                                Directions
                              </a>
                              |
                              <b>
                                Distance:
                              </b>
                              1.2 mi
                            </div>
                            <div class="new section"></div>
                          </div>
                          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                            <div class="parbase section">
                              <div class="pType twc-icon-only icon-money"><span></span></div>
                              <div class="pType twc-icon-only icon-list-alt"><span></span></div>
                              <div class="pType twc-icon-only icon-credit-card"><span></span></div>
                              <div class="pType twc-icon-only icon-wrench"><span></span></div>
                              <div class="pType twc-icon-only icon-time"><span></span></div>
                              <div class="pType twc-icon-only icon-eye-open"><span></span></div>
                              <div class="pType twc-icon-only icon-exchange"><span></span></div>
                              <br><br>
                              <b>
                                Location Options
                              </b>
                              <div class="service_selfinstall">
                                Self Install
                              </div>
                              <div class="service_alldaypayment">
                                24-Hour Payment
                              </div>
                              <div class="service_democenter">
                                Demo Center
                              </div>
                              <div class="service_newequipment">
                                New Equipment
                              </div>
                              <div class="service_boxswap">
                                Box Swap
                              </div>
                              <div class="service_setup">
                                Setup
                              </div>
                            </div>
                            <div class="new section"></div>
                          </div>
                        </div>
                        <div class="columnClear"></div>
                      </div>
                    </li>
                    <li id="outputDiv1" class="outputdiv 12068">
                      <div class="50-50 section columnControl">
                        <div class="parsys_column twc-col2_5050">
                          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                            <div class="parbase section">
                              <a href="#">
                                S. Manhattan
                              </a>
                              <address>
                                46A East 23rd Street
                                <br>
                                New York, NY 10010
                              </address>
                              <br>

                              <br>
                              <b>
                                Hours
                              </b>
                              <br>
                              Mon-Fri 8am - 7pm
                              <br>
                              Sat 8am - 5pm
                              <br>
                              <br>
                              <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                                Directions
                              </a>
                              |
                              <b>
                                Distance:
                              </b>
                              1.2 mi
                            </div>
                            <div class="new section"></div>
                          </div>
                          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                            <div class="parbase section">
                              <div class="pType twc-icon-only icon-money"><span></span></div>
                              <div class="pType twc-icon-only icon-list-alt"><span></span></div>
                              <div class="pType twc-icon-only icon-credit-card"><span></span></div>
                              <div class="pType twc-icon-only icon-wrench"><span></span></div>
                              <div class="pType twc-icon-only icon-time"><span></span></div>
                              <div class="pType twc-icon-only icon-eye-open"><span></span></div>
                              <div class="pType twc-icon-only icon-exchange"><span></span></div>
                              <br><br>
                              <b>
                                Location Options
                              </b>
                              <div class="service_selfinstall">
                                Self Install
                              </div>
                              <div class="service_alldaypayment">
                                24-Hour Payment
                              </div>
                              <div class="service_democenter">
                                Demo Center
                              </div>
                              <div class="service_newequipment">
                                New Equipment
                              </div>
                              <div class="service_boxswap">
                                Box Swap
                              </div>
                              <div class="service_setup">
                                Setup
                              </div>
                            </div>
                            <div class="new section"></div>
                          </div>
                        </div>
                        <div class="columnClear"></div>
                      </div>
                    </li>
                    <li id="outputDiv0" class="outputdiv 2666">
                      <div class="50-50 section columnControl">
                        <div class="parsys_column twc-col2_5050">
                          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                            <div class="parbase section">
                              <a href="#">
                                S. Manhattan
                              </a>
                              <address>
                                46A East 23rd Street
                                <br>
                                New York, NY 10010
                              </address>
                              <br>

                              <br>
                              <b>
                                Hours
                              </b>
                              <br>
                              Mon-Fri 8am - 7pm
                              <br>
                              Sat 8am - 5pm
                              <br>
                              <br>
                              <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                                Directions
                              </a>
                              |
                              <b>
                                Distance:
                              </b>
                              1.2 mi
                            </div>
                            <div class="new section"></div>
                          </div>
                          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                            <div class="parbase section">
                              <div class="pType twc-icon-only icon-money"><span></span></div>
                              <div class="pType twc-icon-only icon-list-alt"><span></span></div>
                              <div class="pType twc-icon-only icon-credit-card"><span></span></div>
                              <div class="pType twc-icon-only icon-wrench"><span></span></div>
                              <div class="pType twc-icon-only icon-time"><span></span></div>
                              <div class="pType twc-icon-only icon-eye-open"><span></span></div>
                              <div class="pType twc-icon-only icon-exchange"><span></span></div>
                              <br><br>
                              <b>
                                Location Options
                              </b>
                              <div class="service_selfinstall">
                                Self Install
                              </div>
                              <div class="service_alldaypayment">
                                24-Hour Payment
                              </div>
                              <div class="service_democenter">
                                Demo Center
                              </div>
                              <div class="service_newequipment">
                                New Equipment
                              </div>
                              <div class="service_boxswap">
                                Box Swap
                              </div>
                              <div class="service_setup">
                                Setup
                              </div>
                            </div>
                            <div class="new section"></div>
                          </div>
                        </div>
                        <div class="columnClear"></div>
                      </div>
                    </li>
                    <li id="outputDiv2" class="outputdiv 6277">
                      <div class="50-50 section columnControl">
                        <div class="parsys_column twc-col2_5050">
                          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                            <div class="parbase section">
                              <a href="#">
                                S. Manhattan
                              </a>
                              <address>
                                46A East 23rd Street
                                <br>
                                New York, NY 10010
                              </address>
                              <br>

                              <br>
                              <b>
                                Hours
                              </b>
                              <br>
                              Mon-Fri 8am - 7pm
                              <br>
                              Sat 8am - 5pm
                              <br>
                              <br>
                              <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                                Directions
                              </a>
                              |
                              <b>
                                Distance:
                              </b>
                              1.2 mi
                            </div>
                            <div class="new section"></div>
                          </div>
                          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                            <div class="parbase section">
                              <div class="pType twc-icon-only icon-money"><span></span></div>
                              <div class="pType twc-icon-only icon-list-alt"><span></span></div>
                              <div class="pType twc-icon-only icon-credit-card"><span></span></div>
                              <div class="pType twc-icon-only icon-wrench"><span></span></div>
                              <div class="pType twc-icon-only icon-time"><span></span></div>
                              <div class="pType twc-icon-only icon-eye-open"><span></span></div>
                              <div class="pType twc-icon-only icon-exchange"><span></span></div>
                              <br><br>
                              <b>
                                Location Options
                              </b>
                              <div class="service_selfinstall">
                                Self Install
                              </div>
                              <div class="service_alldaypayment">
                                24-Hour Payment
                              </div>
                              <div class="service_democenter">
                                Demo Center
                              </div>
                              <div class="service_newequipment">
                                New Equipment
                              </div>
                              <div class="service_boxswap">
                                Box Swap
                              </div>
                              <div class="service_setup">
                                Setup
                              </div>
                            </div>
                            <div class="new section"></div>
                          </div>
                        </div>
                        <div class="columnClear"></div>
                      </div>
                    </li>
                    <li id="outputDiv1" class="outputdiv 12068">
                      <div class="50-50 section columnControl">
                        <div class="parsys_column twc-col2_5050">
                          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                            <div class="parbase section">
                              <a href="#">
                                S. Manhattan
                              </a>
                              <address>
                                46A East 23rd Street
                                <br>
                                New York, NY 10010
                              </address>
                              <br>

                              <br>
                              <b>
                                Hours
                              </b>
                              <br>
                              Mon-Fri 8am - 7pm
                              <br>
                              Sat 8am - 5pm
                              <br>
                              <br>
                              <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                                Directions
                              </a>
                              |
                              <b>
                                Distance:
                              </b>
                              1.2 mi
                            </div>
                            <div class="new section"></div>
                          </div>
                          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                            <div class="parbase section">
                              <div class="pType twc-icon-only icon-money"><span></span></div>
                              <div class="pType twc-icon-only icon-list-alt"><span></span></div>
                              <div class="pType twc-icon-only icon-credit-card"><span></span></div>
                              <div class="pType twc-icon-only icon-wrench"><span></span></div>
                              <div class="pType twc-icon-only icon-time"><span></span></div>
                              <div class="pType twc-icon-only icon-eye-open"><span></span></div>
                              <div class="pType twc-icon-only icon-exchange"><span></span></div>
                              <br><br>
                              <b>
                                Location Options
                              </b>
                              <div class="service_selfinstall">
                                Self Install
                              </div>
                              <div class="service_alldaypayment">
                                24-Hour Payment
                              </div>
                              <div class="service_democenter">
                                Demo Center
                              </div>
                              <div class="service_newequipment">
                                New Equipment
                              </div>
                              <div class="service_boxswap">
                                Box Swap
                              </div>
                              <div class="service_setup">
                                Setup
                              </div>
                            </div>
                            <div class="new section"></div>
                          </div>
                        </div>
                        <div class="columnClear"></div>
                      </div>
                    </li>
                    <li id="outputDiv0" class="outputdiv 2666">
                      <div class="50-50 section columnControl">
                        <div class="parsys_column twc-col2_5050">
                          <div class="parsys parsys0 twc-col2_5050-c0 parsys_column">
                            <div class="parbase section">
                              <a href="#">
                                S. Manhattan
                              </a>
                              <address>
                                46A East 23rd Street
                                <br>
                                New York, NY 10010
                              </address>
                              <br>

                              <br>
                              <b>
                                Hours
                              </b>
                              <br>
                              Mon-Fri 8am - 7pm
                              <br>
                              Sat 8am - 5pm
                              <br>
                              <br>
                              <a target="_blank" href="http://maps.google.com/maps?z=12&t=m&q=46A%20East%2023rd%20Street%20New%20York,%20NY%2010010">
                                Directions
                              </a>
                              |
                              <b>
                                Distance:
                              </b>
                              1.2 mi
                            </div>
                            <div class="new section"></div>
                          </div>
                          <div class="parsys parsys1 twc-col2_5050-c1 parsys_column">
                            <div class="parbase section">
                              <div class="pType twc-icon-only icon-money"><span></span></div>
                              <div class="pType twc-icon-only icon-list-alt"><span></span></div>
                              <div class="pType twc-icon-only icon-credit-card"><span></span></div>
                              <div class="pType twc-icon-only icon-wrench"><span></span></div>
                              <div class="pType twc-icon-only icon-time"><span></span></div>
                              <div class="pType twc-icon-only icon-eye-open"><span></span></div>
                              <div class="pType twc-icon-only icon-exchange"><span></span></div>
                              <br><br>
                              <b>
                                Location Options
                              </b>
                              <div class="service_selfinstall">
                                Self Install
                              </div>
                              <div class="service_alldaypayment">
                                24-Hour Payment
                              </div>
                              <div class="service_democenter">
                                Demo Center
                              </div>
                              <div class="service_newequipment">
                                New Equipment
                              </div>
                              <div class="service_boxswap">
                                Box Swap
                              </div>
                              <div class="service_setup">
                                Setup
                              </div>
                            </div>
                            <div class="new section"></div>
                          </div>
                        </div>
                        <div class="columnClear"></div>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>

              <div class="twc-col2_3367-c1 stores_map" id="stores_map_map">
                <div id="map-canvas"></div>
              </div>
            </div>

          </div>
        </div>

        <?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php'); ?>