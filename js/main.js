var WM = (function($) {
  'use strict';


  /**
   * Mixins
   */
   // var mediumImageSmall = function(mediumImage, top, width){
   //     var tl = new TimelineMax();
   //     tl.to(mediumImage , 1, {top: top, width: width, ease:Strong.easeInOut})
   // };
  //Big Diaporama

  var mixinBigDiaporama = function(button, parent, left, right, height) {
      var $parent = $(parent);
      var $slide = $('.js-slide');
      var $popup = $('.articlePopup');
        $parent.find(button).on('click touch', function(){
            var $this = $(this);
            var popup = $('.show');
            $(this).addClass('hideButton')
            setTimeout(function(){$this.closest($parent).find(button).addClass('displayNone')},500);
            setTimeout(function(){$this.closest($parent).find($slide).removeClass('js-slideShowBack').addClass('js-slideShow')},2000);
            $this.closest($parent).find('h2, .info').addClass('fadeOut');
            setTimeout(function(){$this.closest($parent).find('h2, .info').addClass('displayNone')},500);
            $this.parent().addClass('show');
            setTimeout(function(){$this.closest($parent).find($popup).addClass('visible')}, 1000);
            var tl = new TimelineMax();
            var popup = $this.closest($parent).find('.article__popup');
            tl.to(popup , 0.5, {height: height, ease:Strong.easeInOut})
              .to(popup , 0.5, {left: left, right: right, ease:Strong.easeInOut});
        });
    };
  var mixinBigDiaporamaClose = function(button, parent, left, right, height){
      var $parent = $(parent);
      var $slide = $('.js-slide');
      var $popup = $('.articlePopup');
      var openButton = $('.js-showArticle');
      $parent.find(button).on('click touch', function(){
          var $this = $(this);
          setTimeout(function(){$this.closest($parent).find(openButton).removeClass('displayNone');},1000);
          if ($this.closest($parent).find(openButton).removeClass('hideButton')) {
            setTimeout(function(){$this.closest($parent).find($popup).removeClass('hideButton');},500);
          };
          setTimeout(function(){$parent.find($slide).removeClass('js-slideShow').addClass('js-slideShowBack');},500);
          $this.closest($parent).find('h2, .info').removeClass('displayNone');
          setTimeout(function(){$this.closest($parent).find('h2, .info').removeClass('fadeOut');},1000);
          $this.closest($parent).removeClass('show');
          if ($this.closest($parent).find($popup).hasClass('visible')) {
            $this.closest($parent).find($popup).removeClass('visible');
          }
          var tl = new TimelineMax();
         var popup = $this.closest($parent).find('.article__popup');
          tl.to(popup , 0.5, {left: left, right: right, ease:Strong.easeInOut})
            .to(popup , 0.5, {height: height,ease:Strong.easeInOut});
      });
  }
  var mixinMediumDiaporama = function(button, parent, top, width, left, popupLeft, popupTop, popupBottom, popupRight, popupIndex, popupHeight){
        var $parent = $(parent);
        var $popup = $('.articlePopup');
        var $image = $('.article__popup--secondPositionImage');
        $parent.find(button).on('click touch', function(){
            var $this = $(this);
            $this.closest($parent).find('h2, .info').addClass('fadeOut');
            $this.closest($parent).find($image).removeClass('animated fadeInDown').addClass('animated fadeInUp');
            setTimeout(function(){$this.closest($parent).find('h2, .info').addClass('displayNone')},500);
            $this.parent().addClass('show');
            setTimeout(function(){$this.closest($parent).find($popup).addClass('visible')}, 1000);
            $(this).addClass('hideButton')
            setTimeout(function(){$this.closest($parent).find(button).addClass('displayNone')},500);
            var time = new TimelineMax();
            var mediumImage = $this.closest($parent).find('.article__mediumItem img');
            time.to(mediumImage , 1, {top: top, width: width, 'margin-left': left, ease:Strong.easeInOut})
            var tl = new TimelineMax();
            var popupMedium = $this.closest($parent).find('.article__popup');
            tl.to(popupMedium , 0.3, {left: popupLeft, right: popupRight, 'z-index': popupIndex, height: popupHeight, ease:Strong.easeInOut})
              .to(popupMedium , 0.5, {top: popupTop, bottom: popupBottom, ease:Strong.easeInOut});
        });
  }
  var mixinMediumDiaporamaClose = function(button, parent, top, width, left, popupLeft, popupTop, popupBottom, popupRight, popupIndex, popupHeight){
        var $parent = $(parent);
        var $popup = $('.articlePopup');
        var $image = $('.article__popup--secondPositionImage');
        var openButton = $('.js-showArticle');
        $parent.find(button).on('click touch', function(){
            var $this = $(this);
            setTimeout(function(){$this.closest($parent).find(openButton).removeClass('displayNone');},1000);
            if ($this.closest($parent).find(openButton).removeClass('hideButton')) {
              setTimeout(function(){$this.closest($parent).find($popup).removeClass('hideButton');},500);
            };
            $this.closest($parent).find($image).removeClass('animated fadeInUp').addClass('animated fadeInDown');
            $this.closest($parent).find('h2, .info').removeClass('displayNone');
            setTimeout(function(){$this.closest($parent).find('h2, .info').removeClass('fadeOut');},1000);
            $this.closest($parent).removeClass('show');
            if ($this.closest($parent).find($popup).hasClass('visible')) {
              $this.closest($parent).find($popup).removeClass('visible');
            }
            var tl = new TimelineMax();
            var popupMedium = $this.closest($parent).find('.article__popup');
            tl.to(popupMedium , 0.5, {top: popupTop, bottom: popupBottom, 'z-index': popupIndex, height: popupHeight, ease:Strong.easeInOut})
              .to(popupMedium, 0.3, {left: popupLeft, right: popupRight, ease:Strong.easeInOut});
              var time = new TimelineMax();
              var mediumImage = $this.closest($parent).find('.article__mediumItem img');
              time.to(mediumImage , 0.001,  {transition: '0.001s all linear'});
              time.to(mediumImage , 1, {top: top, width: width, 'margin-left': left, ease:Strong.easeInOut})
              time.to(mediumImage , 0.001,  {transition: 'none'});
        });
  }

  var mixinSmallDiaporama = function(button, parent, left, right, top, bottom, index, imageLeft) {
      var $parent = $(parent);
      var $popup = $('.articlePopup');
        $parent.find(button).on('click touch', function(){
            var $this = $(this);
            var popup = $('.show');
            $(this).addClass('hideButton')
            setTimeout(function(){$this.closest($parent).find(button).addClass('displayNone')},500);
            $this.closest($parent).find('h2, .info').addClass('fadeOut');
            setTimeout(function(){$this.closest($parent).find('h2, .info').addClass('displayNone')},500);
            $this.parent().addClass('show');
            setTimeout(function(){$this.closest($parent).find($popup).addClass('visible')}, 1000);
            var tl = new TimelineMax();
            var popup = $this.closest($parent).find('.article__popup');
             tl.to(popup , 0.001,{'z-index': index});
             tl.to(popup , 0.999, {left: left, right: right, top: top, bottom: bottom, ease:Strong.easeInOut});
              var time = new TimelineMax();
              var smallImage = $this.closest($parent).find('.article__smallItem');
              time.to(smallImage , 1, {'margin-left': imageLeft, ease:Strong.easeInOut})
        });
    };
  var mixinSmallDiaporamaClose = function(button, parent,left, right, top, bottom, index, imageLeft){
      var $parent = $(parent);
      var $popup = $('.articlePopup');
      var openButton = $('.js-showArticle');
      $parent.find(button).on('click touch', function(){
          var $this = $(this);
          setTimeout(function(){$this.closest($parent).find(openButton).removeClass('displayNone');},1000);
          if ($this.closest($parent).find(openButton).removeClass('hideButton')) {
            setTimeout(function(){$this.closest($parent).find($popup).removeClass('hideButton');},500);
          };
          $this.closest($parent).find('h2, .info').removeClass('displayNone');
          setTimeout(function(){$this.closest($parent).find('h2, .info').removeClass('fadeOut');},1000);
          $this.closest($parent).removeClass('show');
          if ($this.closest($parent).find($popup).hasClass('visible')) {
            $this.closest($parent).find($popup).removeClass('visible');
          }
          var tl = new TimelineMax();
         var popup = $this.closest($parent).find('.article__popup');
            tl.to(popup , 0.001,{'z-index': index});
            tl.to(popup , 0.001,  {transition: '0.001s all linear'});
            tl.to(popup , 0.999,  {left: left, right: right, top: top, bottom: bottom, 'z-index': index, ease:Strong.easeInOut});
            tl.to(popup , 0.001,  {transition: 'none'});
            var time = new TimelineMax();
            var smallImage = $this.closest($parent).find('.article__smallItem');
            time.to(smallImage , 1, {'margin-left': imageLeft, ease:Strong.easeInOut})
      });
  }

  // #####################################
	// PARALLAX
	// #####################################

	var parallax = function () {
        if ($(window).width() > 1024) {
            var lastScrollTop = 0;
    		$(window).scroll(function(){
                var st = $(this).scrollTop();
                var paralaxLayerOne = $('.prlx_layer_1');
                var paralaxLayerSecond = $('.prlx_layer_2');
                var paralaxLayerThird = $('.prlx_layer_3');
                if (st > lastScrollTop){
                    var parallaxTime = new TimelineMax();
                    parallaxTime.to(paralaxLayerOne , 0.5, {"transform" : "translate3d(0,  -" + st/10 + "px" + ",0", "-webkit-transform" : "translate3d(0,  -" + st/10 + "px" + ",0", ease:Power1.easeOut})
                    var parallaxTimeSecond = new TimelineMax();
                    parallaxTimeSecond.to(paralaxLayerSecond , 0.5, {"transform" : "translate3d(0,  -" + st/7 + "px" + ",0", "-webkit-transform" : "translate3d(0,  -" + st/10 + "px" + ",0", ease:Power1.easeOut})
                    var parallaxTimeThird = new TimelineMax();
                    parallaxTimeThird.to(paralaxLayerThird , 0.5, {"transform" : "translate3d(0,  -" + st/3 + "px" + ",0", "-webkit-transform" : "translate3d(0,  -" + st/10 + "px" + ",0", ease:Power1.easeOut})
                } else {
                  // upscroll code
                  var parallaxTime = new TimelineMax();
                  parallaxTime.to(paralaxLayerOne , 0.5, {"transform" : "translate3d(0,  -" + st/10 + "px" + ",0", "-webkit-transform" : "translate3d(0,  -" + st/10 + "px" + ",0", ease:Power1.easeOut})
                  var parallaxTimeSecond = new TimelineMax();
                  parallaxTimeSecond.to(paralaxLayerSecond , 0.5, {"transform" : "translate3d(0,  -" + st/7 + "px" + ",0", "-webkit-transform" : "translate3d(0,  -" + st/10 + "px" + ",0", ease:Power1.easeOut})
                  var parallaxTimeThird = new TimelineMax();
                  parallaxTimeThird.to(paralaxLayerThird , 0.5, {"transform" : "translate3d(0,  -" + st/3 + "px" + ",0", "-webkit-transform" : "translate3d(0,  -" + st/10 + "px" + ",0", ease:Power1.easeOut})

                }
                // lastScrollTop = st;
    		});
        }
	};

    //Diaporama Parametres
    //button, parent, left, right, height
    var bigDiaporama = function(){
        mixinBigDiaporama('.js-showArticle','.diaporama__big','50.3%','5.5%','65rem');
        mixinBigDiaporamaClose('.articlePopup-close','.diaporama__big','60.3%','15.142%','20.5rem');
    }
    var bigDiaporamaFouqets = function(){
        mixinBigDiaporama('.js-showArticle','.fouqets','5.5%','50.3%','65rem');
        mixinBigDiaporamaClose('.articlePopup-close','.fouqets','15%','63%','18.5rem');
    }
    var bigDiaporamaCasinoHuge = function(){
        mixinBigDiaporama('.js-showArticle','.casinoHuge','50.3%','5.5%','65rem');
        mixinBigDiaporamaClose('.articlePopup-close','.casinoHuge','60.3%','15.142%','20.5rem');
    }
    var bigDiaporamaCourche = function(){
        mixinBigDiaporama('.js-showArticle','.courche','5.5%','50.3%','65rem');
        mixinBigDiaporamaClose('.articlePopup-close','.courche','15%','63%','18.5rem');
    }
    //button, parent, top, width, left, popupLeft, popupTop, popupBottom, popupRight, popupIndex, popupHeight
    var mediumDiaporama = function(){
        mixinMediumDiaporama('.js-showArticle','.article__medium', '-60%', '35%', '', '54.5%', '-18%', '3%', '', '', '');
        mixinMediumDiaporamaClose('.articlePopup-close','.article__medium', '19%', '50%', '', '70.5%', '31rem', '15.2%', '', '', '');
    }
    var mediumDiaporamaSecond = function(){
        mixinMediumDiaporama('.js-showArticle','.hotelGulfDiaporama', '-40%', '49%', '28%', '54.5%', '-7rem', '12.2%', '0', '', '');
        mixinMediumDiaporamaClose('.articlePopup-close','.hotelGulfDiaporama', '0%', '83%', '0%', '70.5%', '-9%', '74.2%', '5%', '', '');
    }
    var mediumDiaporamaSociete = function(){
        mixinMediumDiaporama('.js-showArticle','.societeHoteliare', '74%', '35%', '7%', '19%', '-5%', '-11%', '46%', '4', '');
        mixinMediumDiaporamaClose('.articlePopup-close','.societeHoteliare', '0', '50%', '0', '19%', '75%', '-13%', '57%', '3', '');
    }
    var mediumDiaporamaFondation = function(){
        mixinMediumDiaporama('.js-showArticle','.fondation', '-42%', '35%', '10%', '54.5%', '35%', '-20.8%', '5%', '', '');
        mixinMediumDiaporamaClose('.articlePopup-close','.fondation', '0', '50%', '7%', '70.5%', '35%', '33.2%', '5%', '', '');
    }
    var mediumDiaporamaHotelLater = function(){
        mixinMediumDiaporama('.js-showArticle','.hotel-later', '-50%', '35%', '10%', '46.5%', '15%', '0%', '8%', '', '');
        mixinMediumDiaporamaClose('.articlePopup-close','.hotel-later', '19%', '50%', '-19%', '46.5%', '59%', '8.2%', '29%', '', '');
    }
    var mediumDiaporamaToulouse = function(){
        mixinMediumDiaporama('.js-showArticle','.toulouse', '92%', '25%', '10%', '54.5%', '15%', '0%', '5%', '', '');
        mixinMediumDiaporamaClose('.articlePopup-close','.toulouse', '19%', '50%', '0%', '70.5%', '27%', '41.2%', '5%', '', '');
    }
    var mediumDiaporamaNaoura = function(){
        mixinMediumDiaporama('.js-showArticle','.naoura', '92%', '35%', '10%', '5%', '-1%', '0%', '57%', '', '');
        mixinMediumDiaporamaClose('.articlePopup-close','.naoura', '19%', '83%', '0%', '5%', '-1%', '67.2%', '70%', '', '');
    }
    var mediumDiaporamaLille = function(){
        mixinMediumDiaporama('.js-showArticle','.lille', '-20%', '25%', '20%', '53%', '20%', '-15%', '5%', '', '');
        mixinMediumDiaporamaClose('.articlePopup-close','.lille', '0%', '40%', '30%', '58%', '80%', '-15%', '18%', '', '');
    }
    //button, parent, top, width, left, popupLeft, popupTop, popupBottom, popupRight, popupIndex, popupHeight
    var mediumDiaporamaResort = function(){
        mixinMediumDiaporama('.js-showArticle','.resort', '62%', '25%', '0%', '10%', '-31%', '33%', '47%', '', '');
        mixinMediumDiaporamaClose('.articlePopup-close','.resort', '0%', '40%', '-20%', '27%', '-31%', '90%', '53%', '', '');
    }
    var mediumDiaporamaMoma = function(){
      mixinMediumDiaporama('.js-showArticle','.moma', '-12%', '74%', '-15%', '54.5%', '-3%', '3%', '5%', '', '');
      mixinMediumDiaporamaClose('.articlePopup-close','.moma', '0', '74%', '-20%', '70.5%', '32%', '32.2%', '5%', '', '');
    }
    var mediumDiaporamaWestminster = function(){
      mixinMediumDiaporama('.js-showArticle','.westminster', '4%', '25%', '22.5%', '20%', '25%', '-5%', '48%', '', '');
      mixinMediumDiaporamaClose('.articlePopup-close','.westminster', '20%', '40%', '20%', '25%', '25%', '40%', '53%', '', '');
    }
    //button, parent,left, right, top, bottom, index, imageLeft
    var smallDiaporama = function(){
        mixinSmallDiaporama('.js-showArticle','.article__small','', '60%', '-3rem','','', '34%');
        mixinSmallDiaporamaClose('.articlePopup-close','.article__small','', '73%', '14rem','6.2%','', '20%');
    }
    var smallDiaporamaRight = function(){
        mixinSmallDiaporama('.js-showArticle','.article__small--right', '61%', '0%', '-10rem','5.2%','', '50%');
        mixinSmallDiaporamaClose('.articlePopup-close','.article__small--right', '75%', '5%', '14rem','5.2%','', '63%');
    }
    var smallDiaporamaCinema = function(){
        mixinSmallDiaporama('.js-showArticle','.cinemaFestival', '9%', '29%', '2rem','17.2%','11', '');
        mixinSmallDiaporamaClose('.articlePopup-close','.cinemaFestival', '9%', '68%', '41rem','10.2%','3', '');
    }
    var smallDiaporamaSlot = function(){
        mixinSmallDiaporama('.js-showArticle','.slot-machine', '56%', '11.5%', '27rem','-25%','', '44%');
        mixinSmallDiaporamaClose('.articlePopup-close','.slot-machine', '67%', '11.5%', '80%','-14%','', '55%');
    }
      //button, parent,left, right, top, bottom, index, imageLeft
    var smallDiaporamaDiane = function(){
        mixinSmallDiaporama('.js-showArticle','.diane','', '56%', '55%','-33.8%','', '38%');
        mixinSmallDiaporamaClose('.articlePopup-close','.diane','', '69%', '82%','-20.8%','', '27%');
    }
    var smallDiaporamaDominique = function(){
        mixinSmallDiaporama('.js-showArticle','.dominique', '60%', '5%', '33%','-33%','', '44%');
        mixinSmallDiaporamaClose('.articlePopup-close','.dominique', '73%', '5%', '59%','0%','', '57%');
    }
    var smallDiaporamaDominiquePerson = function(){
      mixinSmallDiaporama('.js-showArticle','.dominique-person','5%', '53%', '0','-40%','', '41%');
      mixinSmallDiaporamaClose('.articlePopup-close','.dominique-person','5%', '67%', '30rem','-4%','', '25%');
    }
    var smallDiaporamaPierre = function(){
      mixinSmallDiaporama('.js-showArticle','.pierre','5%', '58%', '7%','25.2%','3', '41%');
      mixinSmallDiaporamaClose('.articlePopup-close','.pierre','5%', '73%', '7%','57.2%','3', '20%');
    }
    var getHeight = function(mediumArticle){

        var $mediumArticle = $(mediumArticle);
        var $year = $('.year').outerHeight();
        $mediumArticle.each(function() {
        var $content = $(this).find('.article__mediumImage').outerHeight();
        $(this).css('height', $content + $year + 'px');
        });
    }
    var scrollHeight = function(){
        var $divider = $('.divider');
        $(document).scroll(function() {
            var scrollSize = $(document).scrollTop();
            var scroll = new TimelineMax();
            scroll.to($divider , 0.3, {height: scrollSize + 400, ease:Strong.easeInOut})
        })
    }
    var anchor = function(button, section){
        var $button = $(button);
        var $tooltip = $('.tooltip');
        $button.on('click touch', function(){
          TweenLite.to(window, 2, {scrollTo:{y: section, autoKill: true, offsetY:70}, ease:Strong.easeInOut});
          $('.anchor a').parent().find('a').removeClass('activeButton');
          $(this).addClass('activeButton');
          $tooltip.parent().find('.active').removeClass('active');
          $(this).parent().find($tooltip).addClass('active');
        });
    }
    var anchorFunction = function(){
        anchor('.menu1','.diaporama__bigFirst h3');
        anchor('.menu2','.francaise h3');
        anchor('.menu3','.andre h3');
        anchor('.menu4','.hotelGulfDiaporama h3');
        anchor('.menu5','.lucien h3');
        anchor('.menu6','.cinemaFestival h3');
        anchor('.menu7','.societeHoteliare h3' );
        anchor('.menu8','.slot-machine h3');
        anchor('.menu9','.diane h3');
        anchor('.menu10','.dominique h3');
        anchor('.menu11','.fouqets h3');
        anchor('.menu12','.fondation h3');
        anchor('.menu13','.dominique-person h3');
        anchor('.menu14','.casinoHuge h3');
        anchor('.menu15','.hotel-later h3');
        anchor('.menu16','.toulouse h3');
        anchor('.menu17','.naoura h3');
        anchor('.menu18','.lille h3');
        anchor('.menu19','.resort h3');
        anchor('.menu20','.diaporama__bigSecond h3');
        anchor('.menu21','.pierre h3');
        anchor('.menu22','.moma h3');
        anchor('.menu23','.westminster h3');
        anchor('.menu24','.courche h3' );
    }
    $(window).on('load',function() {
         getHeight('.article__medium');
    });
  /**
   * Fire events on document ready, and bind other events.
   */
  var ready = function() {
      bigDiaporama();
      mediumDiaporama();
      mediumDiaporamaSecond();
      smallDiaporama();
      smallDiaporamaRight();
      smallDiaporamaCinema();
      mediumDiaporamaSociete();
      smallDiaporamaSlot();
      smallDiaporamaDiane();
      smallDiaporamaDominique();
      bigDiaporamaFouqets();
      mediumDiaporamaFondation();
      smallDiaporamaDominiquePerson();
      bigDiaporamaCasinoHuge();
      mediumDiaporamaHotelLater();
      mediumDiaporamaToulouse();
      mediumDiaporamaNaoura();
      mediumDiaporamaLille();
      mediumDiaporamaResort();
      smallDiaporamaPierre();
      mediumDiaporamaMoma();
      mediumDiaporamaWestminster();
      bigDiaporamaCourche();
      scrollHeight();
      anchorFunction();
      parallax();
      load();
  };

  // Only expose the ready function to the world
  return {
      ready: ready
  };
})(jQuery);

jQuery(WM.ready);
