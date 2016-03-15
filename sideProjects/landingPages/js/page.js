if (document.documentElement) {
  var middleBreakPoint = 768,
  smallBreakPoint = 640,
  carouselSpeed = 6000;

    $(function() {

      $(window).bind("load", function() {
        $(".heroCarousel").show();
        heroHeight();
        iconSize();

        $('.heroWrapper').hover(function(ev) {
            clearInterval(timer);
        }, function(ev) {
            timer = setInterval(triggerCarousel, carouselSpeed);
        });
        timer = setInterval(triggerCarousel, carouselSpeed);
      });

      $(window).resize(function() {
        heroHeight();
        iconSize();
      });

      $("[id^='heroCarouselIcon-']").click(function() {
          // reset autoscroll interval
        clearInterval(timer);
        timer = setInterval(triggerCarousel, carouselSpeed);

        $("[id^='heroCarouselIcon-']").removeClass("active");
        $(this).addClass("active");

        var iconNumber = $(this).attr('id').match(/\d+/);
        $("[id^='heroCarousel-']").removeClass("active");
        $("#heroCarousel-"+iconNumber).addClass("active");
      });

      $('.heroCarousel #heroCarouselPreview').click(function(){carouselControl('prev')});
      $('.heroCarousel #heroCarouselNext').click(function(){carouselControl('next')});

      function iconSize() {
          var iconNumber;
          if ($(window).width() <= smallBreakPoint) {
              $iconActive = $(".carouselIcons.active").attr('id');
              iconNumber = $iconActive.match(/\d+/);
              // hide icons according to active
              if(iconNumber <= 3) {
                  $('.carouselIcons:nth-child(n+5)').css('display', 'none');
              } else {
                  $('.carouselIcons:nth-child(-n+4)').css('display', 'none');
              }
          } else {
              $('.carouselIcons').css('display', '');
          }
      };

      function heroHeight() {
          var heroHeight = 0;
          $(".heroCarouselSlide").each(function() {
             if ($(this).height() > heroHeight) { heroHeight = $(this).height(); }
          });
          $(".heroWrapper").height(heroHeight);
      };

      function runHero() {
          var heroHeight = 0;
          $(".heroCarouselSlide").each(function(){
              if ($(this).height() > heroHeight) {
                  heroHeight = $(this).height();
              }
          });
          $(".heroWrapper").height(heroHeight);
      };

      function triggerCarousel() {
          var iconNumber,
              conActive,
              maxTriggering = $(".carouselIcons").length;
          $iconActive = $(".carouselIcons.active").attr('id');
          iconNumber = $iconActive.match(/\d+/);
          iconActive = parseInt(iconNumber[0]);

          if (iconActive >= maxTriggering) {
              iconActive = 0;
          }
          $("#heroCarouselIcon-" + (iconActive + 1)).trigger('click');
           if ($(window).width() <= smallBreakPoint) {
           //TODO: fix this, scroll mode rough
              if (iconActive == 3) {
                  $('.carouselIcons:nth-child(-n+4)').css('display', 'none');
                  $('.carouselIcons:nth-child(n+5)').css('display', '');
              }
              if (iconActive == 0) {
                  $('.carouselIcons:nth-child(-n+4)').css('display', '');
                  $('.carouselIcons:nth-child(n+5)').css('display', 'none');
              }
          }
      };

      function carouselControl(mode) {
        var next,
            iconNumber,
            active;
        $iconActive = $(".carouselIcons.active").attr('id');
        iconNumber = $iconActive.match(/\d+/);
        active = parseInt(iconNumber[0]);
        // reset autoscroll interval
        clearInterval(timer);
        timer = setInterval(triggerCarousel, carouselSpeed);
        //TODO: fix this, scroll mode rough
        if (active < 3) {
            $('.carouselIcons:nth-child(-n+4)').css('display', 'none');
            $('.carouselIcons:nth-child(n+5)').css('display', '');
            if (mode == 'prev') {
                next = 6;
            } else {
                next = 4;
            }
            $("#heroCarouselIcon-4").trigger('click');
        } else {
            $('.carouselIcons:nth-child(-n+4)').css('display', '');
            $('.carouselIcons:nth-child(n+5)').css('display', 'none');
            if (mode == 'prev') {
                next = 3;
            } else {
                next = 1;
            }
        }
        $("#heroCarouselIcon-" + next).trigger('click');
      }
    });

    }