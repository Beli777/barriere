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
            tl.to(popupMedium , 0.3, {left: popupLeft, right: popupRight, 'z-index': popupIndex, ease:Strong.easeInOut})
              .to(popupMedium , 0.5, {top: popupTop, bottom: popupBottom, height: popupHeight, ease:Strong.easeInOut});
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

  var mixinSmallDiaporama = function(button, parent, left, right, top, bottom, index, height, imageLeft) {
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
             tl.to(popup , 0.999, {left: left, right: right, top: top, bottom: bottom, height: height, ease:Strong.easeInOut});
              var time = new TimelineMax();
              var smallImage = $this.closest($parent).find('.article__smallItem');
              time.to(smallImage , 1, {'margin-left': imageLeft, ease:Strong.easeInOut})
        });
    };
  var mixinSmallDiaporamaClose = function(button, parent,left, right, top, bottom, index, height, imageLeft){
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
            tl.to(popup , 0.999,  {left: left, right: right, top: top, bottom: bottom, height: height, 'z-index': index, ease:Strong.easeInOut});
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
    		$(window).scroll( $.throttle (200, function(){
                var st = $(this).scrollTop();
                var paralaxLayerOne = $('.prlx_layer_1');
                var paralaxLayerSecond = $('.prlx_layer_2');
                var paralaxLayerThird = $('.prlx_layer_3');
                var layerOneMove = "translate3d(0,  -" + st/10 + "px" + ",0";
                var layerTwoMove = "translate3d(0,  -" + st/5 + "px" + ",0";
                var layerThreeMove = "translate3d(0,  -" + st/3 + "px" + ",0";
                var parallaxTime = new TimelineMax();
                var parallaxTimeSecond = new TimelineMax();
                var parallaxTimeThird = new TimelineMax();
                if (st > lastScrollTop){
                    parallaxTime.to(paralaxLayerOne , 1, {transform : layerOneMove, ease:Power1.easeOut})
                    parallaxTimeSecond.to(paralaxLayerSecond , 1, {transform : layerTwoMove, ease:Power1.easeOut})
                    parallaxTimeThird.to(paralaxLayerThird , 1, {transform : layerThreeMove, ease:Power1.easeOut})
                } else {
                  parallaxTime.to(paralaxLayerOne , 1, {transform : layerOneMove, ease:Power1.easeOut})
                  parallaxTimeSecond.to(paralaxLayerSecond , 1, {transform : layerTwoMove, ease:Power1.easeOut})
                  parallaxTimeThird.to(paralaxLayerThird , 1, {transform : layerThreeMove, ease:Power1.easeOut})

                }
    		}
        ));

        }
	};

    //Diaporama Parametres
    //button, parent, left, right, height
    var bigDiaporama = function(){
        if ($(window).width() > 1024) {
            mixinBigDiaporama('.js-showArticle','.diaporama__big','49.99%','5.5%','65rem');
            mixinBigDiaporamaClose('.articlePopup-close','.diaporama__big','60.3%','15.142%','20.5rem');
          }
          if ($(window).width() < 1023) {
              mixinBigDiaporama('.js-showArticle','.diaporama__big','0%','0%','54rem');
              mixinBigDiaporamaClose('.articlePopup-close','.diaporama__big','55.3%','1.142%','16.5rem');
            }
    }
    var bigDiaporamaFouqets = function(){
        if ($(window).width() > 1024) {
            mixinBigDiaporama('.js-showArticle','.fouqets','5.5%','50.3%','65rem');
            mixinBigDiaporamaClose('.articlePopup-close','.fouqets','15%','63%','18.5rem');
        }
        if ($(window).width() < 1023) {
            mixinBigDiaporama('.js-showArticle','.fouqets','0','0','60rem');
            mixinBigDiaporamaClose('.articlePopup-close','.fouqets','2%','57%','16.5rem');
        }
    }
    var bigDiaporamaCasinoHuge = function(){
        if ($(window).width() > 1024) {
            mixinBigDiaporama('.js-showArticle','.casinoHuge','53%','5%','70rem');
            mixinBigDiaporamaClose('.articlePopup-close','.casinoHuge','70%','5%','20.5rem');
        }
        if ($(window).width() < 1023) {
            mixinBigDiaporama('.js-showArticle','.casinoHuge','0%','0%','65rem');
            mixinBigDiaporamaClose('.articlePopup-close','.casinoHuge','55.3%','1.142%','20.5rem');
        }
    }
    var bigDiaporamaCourche = function(){
        if ($(window).width() > 1024) {
            mixinBigDiaporama('.js-showArticle','.courche','5.5%','50.3%','65rem');
            mixinBigDiaporamaClose('.articlePopup-close','.courche','15%','63%','18.5rem');
        }
        if ($(window).width() < 1023) {
            mixinBigDiaporama('.js-showArticle','.courche','0','0','65rem');
            mixinBigDiaporamaClose('.articlePopup-close','.courche','55%','3','20.5rem');
        }
    }
    //button, parent, top, width, left, popupLeft, popupTop, popupBottom, popupRight, popupIndex, popupHeight
    var mediumDiaporama = function(){
        if ($(window).width() > 1024) {
            mixinMediumDiaporama('.js-showArticle','.article__medium', '-60%', '35%', '', '54.5%', '-2%', '3%', '', '', '50rem');
            mixinMediumDiaporamaClose('.articlePopup-close','.article__medium', '0%', '50%', '', '70.5%', '51%', '15.2%', '', '', '');
          }
          if ($(window).width() < 1023) {
              mixinMediumDiaporama('.js-showArticle','.article__medium', '0%', '60%', '', '17.5%', '-10%', '3%', '5%', '', '38rem');
              mixinMediumDiaporamaClose('.articlePopup-close','.article__medium', '0%', '60%', '-13rem', '54.5%', '31%', '15.2%', '', '', '17rem');
            }
    }
    var mediumDiaporamaSecond = function(){
        if ($(window).width() > 1024) {
            mixinMediumDiaporama('.js-showArticle','.hotelGulfDiaporama', '-40%', '49%', '28%', '54.5%', '-7rem', '12.2%', '0', '', '');
            mixinMediumDiaporamaClose('.articlePopup-close','.hotelGulfDiaporama', '0%', '83%', '0%', '70.5%', '-9%', '74.2%', '5%', '', '');
        }
        if ($(window).width() < 1023) {
            mixinMediumDiaporama('.js-showArticle','.hotelGulfDiaporama', '', '', '', '26.5%', '-74%', '17.2%', '2%', '4', '');
            mixinMediumDiaporamaClose('.articlePopup-close','.hotelGulfDiaporama', '', '', '', '55.5%', '-36%', '77.2%', '2%', '', '');
        }
    }
    var mediumDiaporamaSociete = function(){
        if ($(window).width() > 1024) {
            mixinMediumDiaporama('.js-showArticle','.societeHoteliare', '65%', '35%', '7%', '14%', '34%', '-48%', '46%', '3', '65rem');
            mixinMediumDiaporamaClose('.articlePopup-close','.societeHoteliare', '0', '50%', '0', '19%', '113%', '-48%', '57%', '3', '');
        }
        if ($(window).width() < 1023) {
            mixinMediumDiaporama('.js-showArticle','.societeHoteliare', '', '', '', '5%', '-45%', '15', '15%', '4', '');
            mixinMediumDiaporamaClose('.articlePopup-close','.societeHoteliare', '', '', '', '5%', '7%', '39%', '50%', '3', '');
        }
    }
    var mediumDiaporamaFondation = function(){
        if ($(window).width() > 1024) {
            mixinMediumDiaporama('.js-showArticle','.fondation', '-42%', '35%', '10%', '54.5%', '104%', '-91.8%', '5%', '', '');
            mixinMediumDiaporamaClose('.articlePopup-close','.fondation', '0', '50%', '7%', '70.5%', '104%', '-37.8%', '5%', '', '');
        }
        if ($(window).width() < 1023) {
            mixinMediumDiaporama('.js-showArticle','.fondation', '', '', '', '18.5%', '-76%', '14.2%', '2%', '', '');
            mixinMediumDiaporamaClose('.articlePopup-close','.fondation', '', '', '', '56.5%', '-12%', '67.2%', '2%', '', '');
        }
    }
    var mediumDiaporamaHotelLater = function(){
        if ($(window).width() > 1024) {
            mixinMediumDiaporama('.js-showArticle','.hotel-later', '-37%', '35%', '10%', '46.5%', '186%', '-164.8%', '8%', '2', '');
            mixinMediumDiaporamaClose('.articlePopup-close','.hotel-later', '19%', '50%', '-19%', '46.5%', '207%', '-146.8%', '29%', '', '');
        }
        if ($(window).width() < 1023) {
            mixinMediumDiaporama('.js-showArticle','.hotel-later', '', '', '', '30.5%', '-4%', '', '2%', '2%', '41rem');
            mixinMediumDiaporamaClose('.articlePopup-close','.hotel-later', '', '', '', '58.5%', '33%', '', '2%', '', '17rem');
        }
    }
    var mediumDiaporamaToulouse = function(){
        if ($(window).width() > 1024) {
            mixinMediumDiaporama('.js-showArticle','.toulouse', '65%', '25%', '20%', '54.5%', '146%', '-139.8%', '5%', '', '');
            mixinMediumDiaporamaClose('.articlePopup-close','.toulouse', '0%', '50%', '0%', '60.5%', '146%', '-81.8%', '15%', '', '');
        }
        if ($(window).width() < 1023) {
            mixinMediumDiaporama('.js-showArticle','.toulouse', '', '', '', '3%', '-55%', '', '27%', '', '44rem');
            mixinMediumDiaporamaClose('.articlePopup-close','.toulouse', '', '', '', '3%', '-26%', '', '57%', '', '19rem');
        }
    }
    var mediumDiaporamaNaoura = function(){
        if ($(window).width() > 1024) {
            mixinMediumDiaporama('.js-showArticle','.naoura', '75%', '35%', '10%', '5%', '169%', '-183.8%', '57%', '', '');
            mixinMediumDiaporamaClose('.articlePopup-close','.naoura', '0', '83%', '0%', '5%', '169%', '-101.8%', '70%', '', '');
        }
        if ($(window).width() < 1023) {
            mixinMediumDiaporama('.js-showArticle','.naoura', '', '', '', '27%', '-65%', '', '3%', '', '50rem');
            mixinMediumDiaporamaClose('.articlePopup-close','.naoura', '', '', '', '57%', '-25%', '', '3%', '', '18rem');
        }
    }
    var mediumDiaporamaLille = function(){
        if ($(window).width() > 1024) {
            mixinMediumDiaporama('.js-showArticle','.lille', '-20%', '25%', '20%', '53%', '277%', '-15%', '5%', '', '52rem');
            mixinMediumDiaporamaClose('.articlePopup-close','.lille', '0%', '40%', '30%', '58%', '330%', '-15%', '18%', '', '20rem');
        }
        if ($(window).width() < 1023) {
            mixinMediumDiaporama('.js-showArticle','.lille', '', '', '', '20%', '20%', '-15%', '', '', '43rem');
            mixinMediumDiaporamaClose('.articlePopup-close','.lille', '', '', '', '45%', '62%', '', '15%', '', '15rem');
        }
    }
    //button, parent, top, width, left, popupLeft, popupTop, popupBottom, popupRight, popupIndex, popupHeight
    var mediumDiaporamaResort = function(){
        if ($(window).width() > 1024) {
            mixinMediumDiaporama('.js-showArticle','.resort', '62%', '25%', '0%', '10%', '210%', '33%', '47%', '', '49rem');
            mixinMediumDiaporamaClose('.articlePopup-close','.resort', '0%', '40%', '-20%', '23%', '210%', '90%', '53%', '', '');
        }
        if ($(window).width() < 1023) {
            mixinMediumDiaporama('.js-showArticle','.resort', '', '', '', '5%', '-59%', '', '27%', '5', '54.3rem');
            mixinMediumDiaporamaClose('.articlePopup-close','.resort', '', '', '', '5%', '-13%', '', '53%', '', '20rem');
        }
    }
    var mediumDiaporamaMoma = function(){
        if ($(window).width() > 1024) {
          mixinMediumDiaporama('.js-showArticle','.moma', '0%', '74%', '-15%', '54.5%', '296%', '', '5%', '', '47.5rem');
          mixinMediumDiaporamaClose('.articlePopup-close','.moma', '-12%', '74%', '-20%', '70.5%', '296%', '', '5%', '', '20.5rem');
        }
        if ($(window).width() < 1023) {
          mixinMediumDiaporama('.js-showArticle','.moma', '', '', '', '24.5%', '-64%', '', '2%', '10', '40.5rem');
          mixinMediumDiaporamaClose('.articlePopup-close','.moma', '', '', '', '56.5%', '-30%', '', '2%', '', '17.5rem');
        }
    }
    var mediumDiaporamaWestminster = function(){
            if ($(window).width() > 1024) {
              mixinMediumDiaporama('.js-showArticle','.westminster', '-22%', '25%', '22.5%', '20%', '298%', '', '48%', '4', '49rem');
              mixinMediumDiaporamaClose('.articlePopup-close','.westminster', '20%', '40%', '20%', '25%', '298%', '', '53%', '3', '20rem');
          }
          if ($(window).width() < 1023) {
            mixinMediumDiaporama('.js-showArticle','.westminster', '', '', '', '2%', '-38%', '', '19%', '4', '49rem');
            mixinMediumDiaporamaClose('.articlePopup-close','.westminster', '', '', '', '2%', '10%', '', '56%', '3', '17rem');
        }
    }
    //button, parent,left, right, top, bottom, index, height, imageLeft
    var smallDiaporama = function(){
        if ($(window).width() > 1024) {
            mixinSmallDiaporama('.js-showArticle','.article__small','', '60%', '15%','0','', '45rem', '34%');
            mixinSmallDiaporamaClose('.articlePopup-close','.article__small','', '70%', '70%','6.2%','', '25rem', '20%');
        }
        if ($(window).width() < 1023) {
            mixinSmallDiaporama('.js-showArticle','.article__small','', '30%', '-20%','0','', '25.5rem', '68.5%');
            mixinSmallDiaporamaClose('.articlePopup-close','.article__small','5%', '45%', '9%','6.2%','', '19rem', '43.5%');
        }
    }
    var smallDiaporamaRight = function(){
        mixinSmallDiaporama('.js-showArticle','.article__small--right', '61%', '0%', '0%','','', '44rem', '50%');
        mixinSmallDiaporamaClose('.articlePopup-close','.article__small--right', '75%', '5%', '75%','5.2%','', '63%');
    }
    var smallDiaporamaLucien = function(){
        if ($(window).width() > 1024) {
            mixinSmallDiaporama('.js-showArticle','.lucien', '61%', '0%', '24%','','', '54rem', '50%');
            mixinSmallDiaporamaClose('.articlePopup-close','.lucien', '72%', '5%', '85%','','','19rem', '60%');
        }
        if ($(window).width() < 1023) {
            mixinSmallDiaporama('.js-showArticle','.lucien', '7%', '29%', '-40%','','10', '35rem', '68%');
            mixinSmallDiaporamaClose('.articlePopup-close','.lucien', '30%', '35%', '6%','','','15rem', '58%');
        }
    }
    var smallDiaporamaCinema = function(){
        if ($(window).width() > 1024) {
            mixinSmallDiaporama('.js-showArticle','.cinemaFestival', '9%', '29%', '46%','','11', '48rem','');
            mixinSmallDiaporamaClose('.articlePopup-close','.cinemaFestival', '9%', '68%', '83%','','3','22rem', '');
        }
        if ($(window).width() < 1023) {
            mixinSmallDiaporama('.js-showArticle','.cinemaFestival', '0', '0', '8%','','11', '44rem','');
            mixinSmallDiaporamaClose('.articlePopup-close','.cinemaFestival', '32%', '30%', '20%','','3','18rem', '');
        }
    }
    var smallDiaporamaSlot = function(){
        if ($(window).width() > 1024) {
            mixinSmallDiaporama('.js-showArticle','.slot-machine', '52%', '11.5%', '90%','-25%','', '45rem', '41%');
            mixinSmallDiaporamaClose('.articlePopup-close','.slot-machine', '67%', '11.5%', '125%','-14%','', '19rem', '55%');
        }
        if ($(window).width() < 1023) {
            mixinSmallDiaporama('.js-showArticle','.slot-machine', '17%', '11.5%', '-2%','-25%','', '45rem', '5%');
            mixinSmallDiaporamaClose('.articlePopup-close','.slot-machine', '46%', '11.5%', '37%','','', '18rem', '27%');
        }
    }
      //button, parent,left, right, top, bottom, index, height, imageLeft
    var smallDiaporamaDiane = function(){
        if ($(window).width() > 1024) {
            mixinSmallDiaporama('.js-showArticle','.diane','', '56%', '105%','','','45rem', '38%');
            mixinSmallDiaporamaClose('.articlePopup-close','.diane','', '69%', '139%','-20.8%','', '21rem' ,'27%');
        }
        if ($(window).width() < 1023) {
            mixinSmallDiaporama('.js-showArticle','.diane','2%', '38%', '-25%','','','50rem', '57%');
            mixinSmallDiaporamaClose('.articlePopup-close','.diane','2%', '59%', '13%','','', '18rem' ,'33%');
        }
    }
    var smallDiaporamaDominique = function(){
        if ($(window).width() > 1024) {
            mixinSmallDiaporama('.js-showArticle','.dominique', '54%', '5%', '93%','','', '52rem','39%');
            mixinSmallDiaporamaClose('.articlePopup-close','.dominique', '73%', '5%', '122%','','','20rem', '57%');
        }
        if ($(window).width() < 1023) {
            mixinSmallDiaporama('.js-showArticle','.dominique', '29%', '5%', '-25%','','', '52rem','5%');
            mixinSmallDiaporamaClose('.articlePopup-close','.dominique', '41%', '10%', '10%','','','17rem', '21%');
        }
    }
    var smallDiaporamaDominiquePerson = function(){
      if ($(window).width() > 1024) {
          mixinSmallDiaporama('.js-showArticle','.dominique-person','5%', '53%', '111%','','','62rem', '41%');
          mixinSmallDiaporamaClose('.articlePopup-close','.dominique-person','5%', '67%', '151%','','','21rem', '25%');
      }
      if ($(window).width() < 1023) {
          mixinSmallDiaporama('.js-showArticle','.dominique-person','19%', '20%', '-44%','','','37rem', '70%');
          mixinSmallDiaporamaClose('.articlePopup-close','.dominique-person','19%', '37%', '-17%','','','19rem', '51%');
      }
    }
    var smallDiaporamaPierre = function(){
        if ($(window).width() > 1024) {
          mixinSmallDiaporama('.js-showArticle','.pierre','5%', '58%', '226%','-70.8%','3', '45rem', '41%');
          mixinSmallDiaporamaClose('.articlePopup-close','.pierre','5%', '73%', '226%','-25.8%','3', '20rem', '20%');
        }
        if ($(window).width() < 1023) {
          mixinSmallDiaporama('.js-showArticle','.pierre','2%', '25%', '-23%','','3', '46rem', '65.5%');
          mixinSmallDiaporamaClose('.articlePopup-close','.pierre','20%', '39%', '8%','','3', '17rem', '51.5%');
        }
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
            scroll.to($divider , 0.1, {height: scrollSize + 400, ease:Strong.easeInOut})
        })
    }
    var anchor = function(button, section){
        var $button = $(button);
        var $tooltip = $('.tooltip');
        $button.on('click touch', function(){
          TweenLite.to(window, 2, {scrollTo:{y: section, offsetY:200}, ease:Strong.easeInOut});
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
      smallDiaporamaLucien();
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
  };

  // Only expose the ready function to the world
  return {
      ready: ready
  };
})(jQuery);

jQuery(WM.ready);
