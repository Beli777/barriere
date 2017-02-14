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
            setTimeout(function(){$this.closest($parent).find($slide).removeClass('js-slideShowBack').addClass('js-slideShow')},3000);
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
  var mixinMediumDiaporama = function(button, parent, top, width, left, popupTop, popupBottom){
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
            time.to(mediumImage , 1, {top: top, width: width, ease:Strong.easeInOut})
            var tl = new TimelineMax();
            var popupMedium = $this.closest($parent).find('.article__popup');
            tl.to(popupMedium , 0.3, {left: left, ease:Strong.easeInOut})
              .to(popupMedium , 0.5, {top: popupTop, bottom: popupBottom, ease:Strong.easeInOut});
        });
  }
  var mixinMediumDiaporamaClose = function(button, parent, top, width, left, popupTop, popupBottom){
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
            tl.to(popupMedium , 0.5, {top: popupTop, bottom: popupBottom, ease:Strong.easeInOut})
              .to(popupMedium, 0.3, {left: left, ease:Strong.easeInOut});
              var time = new TimelineMax();
              var mediumImage = $this.closest($parent).find('.article__mediumItem img');
              time.to(mediumImage , 1, {top: top, width: width, ease:Strong.easeInOut})
        });
  }

  var mixinSmallDiaporama = function(button, parent, right, top, imageLeft) {
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
             tl.to(popup , 1, {right: right, top: top, ease:Strong.easeInOut});
              var time = new TimelineMax();
              var smallImage = $this.closest($parent).find('.article__smallItem');
              time.to(smallImage , 1, {'margin-left': imageLeft, ease:Strong.easeInOut})
        });
    };
  var mixinSmallDiaporamaClose = function(button, parent, right, top, imageLeft){
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
            tl.to(popup , 1, {right: right, top: top, ease:Strong.easeInOut});
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
                if (st > lastScrollTop){
                   // downscroll code
                    $('.prlx_layer_1').css({
                    "transform" : "translate3d(0,  -" + st/10 + "px" + ",0"
                    });
                    $('.prlx_layer_2').css({
                    "transform" : "translate3d(0,  -" + st/7.5 + "px" + ",0"
                    });
                    $('.prlx_layer_3').css({
                    "transform" : "translate3d(0,  -" + st/5 + "px" + ",0"
                    });

                } else {
                  // upscroll code
                    $('.prlx_layer_1').css({
                    "transform" : "translate3d(0,  " + st/10 + "px" + ",0"
                    });
                    $('.prlx_layer_2').css({
                    "transform" : "translate3d(0,  " + st/7.5 + "px" + ",0"
                    });
                    $('.prlx_layer_3').css({
                    "transform" : "translate3d(0,  " + st/5 + "px" + ",0"
                    });

                }
                // lastScrollTop = st;
    		});
        }
	};

    //Diaporama Parametres
    var bigDiaporama = function(){
        mixinBigDiaporama('.js-showArticle','.diaporama__big','50.3%','5.5%','65rem');
        mixinBigDiaporamaClose('.articlePopup-close','.diaporama__big','60.3%','15.142%','20.5rem');
    }
    var mediumDiaporama = function(){
        mixinMediumDiaporama('.js-showArticle','.article__medium', '-50%', '35%', '54.5%', '-18%', '3%');
        mixinMediumDiaporamaClose('.articlePopup-close','.article__medium', '19%', '50%', '70.5%', '17rem', '28.2%');
    }
    var smallDiaporama = function(){
        mixinSmallDiaporama('.js-showArticle','.article__small', '60%', '-3rem', '34%');
        mixinSmallDiaporamaClose('.articlePopup-close','.article__small', '73%', '19rem', '20%');
    }
    var getHeight = function(mediumArticle){
        var $mediumArticle = $(mediumArticle);
        $mediumArticle.each(function() {
        var $content = $(this).find('.article__mediumImage').outerHeight();
        $(this).css('height', $content + 'px');
        });
    }
  /**
   * Fire events on document ready, and bind other events.
   */
  var ready = function() {
      getHeight('.article__medium');
      bigDiaporama();
      mediumDiaporama();
      smallDiaporama();
      parallax();
  };

  // Only expose the ready function to the world
  return {
      ready: ready
  };

})(jQuery);

jQuery(WM.ready);
