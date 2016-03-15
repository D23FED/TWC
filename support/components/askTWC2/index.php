<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/header.php');
}
?>
<div class="askAmy">
    <div class="amyRow">
        <div class="amy mobile-hidden" rowspan="2">
            <figure>
                <img src="includes/amy.png" alt="">
            </figure>
        </div>
        <label for="askTWC" class="round text-link">
            Ask TWC - Virtual Assistant
        </label>
    </div>
    <div class="amyRow">
        <div class="inputWrapper">
            <input id="askTWC" name="askTWC" type="text" placeholder="Type your question here...">
            <div class="cta omega twc-icon-after icon-andgle-right">
                <a href="#" name="">
                    <span>Go</span>
                </a>
            </div>
        </div>
        <div class="suggestionBox">
            <div class="suggestionBoxContent">
                <p class="closeSuggestion"></p>
                <p class="b">
                    Find the answers to questions our customers ask most often, such as:
                </p>
                <ul class="bulleted">
                    <li>
                        <a href="#">Can I purchase my own internet modem?</a>
                    </li>
                    <li>
                        <a href="#">How do I get a new remote control?</a>
                    </li>
                    <li>
                        <a href="#">How do I make a payment?</a>
                    </li>
                    <li>
                        <a href="#">What if I have problems logging in?</a>
                    </li>
                    <li>
                        <a href="#">Where can I replace or return my TWC Internet hardware?</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="clear"></div>

<?php include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/tileList.php'); ?>
<p>Filler text - Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, perspiciatis aut illum voluptate! Totam cupiditate exercitationem quia sequi quo quod explicabo. Nulla veniam animi, repellendus officiis provident labore sapiente nihil hic quos sed, vitae. Facere odit quae corporis officiis possimus architecto! Sequi eum modi quam temporibus accusantium consectetur fugit, velit facilis tempore totam est reprehenderit maxime vero labore corrupti debitis, necessitatibus eos. Explicabo distinctio consequuntur nam ad reprehenderit enim suscipit, non eligendi rerum? Quos a odio minus debitis architecto quia ad praesentium, corporis placeat facilis iure. Nam magni enim optio dolorum, ut sapiente voluptate? Ratione, saepe, consequatur. Molestiae fuga laboriosam a, amet veniam quia similique soluta labore unde dolore at architecto cumque veritatis temporibus odit quisquam, et. Laudantium perspiciatis aspernatur repellendus sequi nemo laborum, ducimus, atque maxime ipsa ipsam doloribus quis autem unde corporis necessitatibus provident doloremque quaerat aut impedit animi, minima. Quas atque earum cum. Quas tenetur sapiente possimus.</p>

<?
if($_SERVER['REQUEST_URI'] !== '/TWC/styleguide/') {
  include($_SERVER['DOCUMENT_ROOT']. '/TWC/core/includes/footer.php');
}
?>