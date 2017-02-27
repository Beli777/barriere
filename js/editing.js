$(document).ready(function(){

  //----- Persons animation
  function personBlockAnimations() {
    
    // Vars
    var el          = $('.editing-persons');
    var body        = $('.editing-persons__body');
    var img1        = $('.animationPersonImg1');
    var img2        = $('.animationPersonImg2');
    var img3        = $('.animationPersonImg3');
    var img4        = $('.animationPersonImg4');
    var titleTop    = $('.editing-persons__info-head--top .editing__title');
    var titleBottom = $('.editing-persons__info-head--bottom .editing__title');
    var text        = $('.editing-persons__info-body');
    var personTitle = $('.editing-persons__person-title');
    
    el.one('inview', function(event, isInView) {
      if (isInView && $(window).width() > 640) {
        
        //----- Animations
        // Body
        TweenMax.to(body, .1, {
          opacity: 1,
          ease: Power0.easeNone
        })
        // First image
        TweenMax.from(img1, .8, {
          x: '-100%',
          opacity: 0,
          ease: Power0.easeNone
        })
        // Second image && Top title
        TweenMax.from([img2, titleTop], .8, {
          y: '-100%',
          opacity: 0,
          ease: Power0.easeNone
        })
        // Third image && paragraph text
        TweenMax.from([img3, text], .8, {
          y: '100%',
          opacity: 0,
          ease: Power0.easeNone
        })
        // Fourth image && Bottom title
        TweenMax.from([img4, titleBottom], .8, {
          x: '100%',
          opacity: 0,
          ease: Power0.easeNone
        })
        // Names of people
        TweenMax.to(personTitle, 1, {
          delay: .5,
          opacity: 1
        })
      
      }
    });
    
  }
  
  //----- Sport animation
  function sportBlockAnimations () {
    
    // Vars
    var el              = $('.editing-sport');
    var body            = $('.editing-sport__body');
    var imgGolf1        = $('.editing-sport--golf__img1');
    var imgGolf2        = $('.editing-sport--golf__img2');
    var imgTennis1      = $('.editing-sport--tennis__img1');
    var imgTennis2      = $('.editing-sport--tennis__img2');
    var pointLeft       = $('.editing-sport__point-animation--left');
    var pointRight      = $('.editing-sport__point-animation--right');
    var num             = $('.editing-sport .editing__num');
    var title           = $('.editing-sport .editing__title');
    var info            = $('.editing-sport .editing__info-body');
    
    el.one('inview', function(event, isInView) {
      if (isInView && $(window).width() > 640) {
        
        //----- Animations
        // Body
        TweenMax.to(body, .1, {
          opacity: 1,
          ease: Power0.easeNone
        })
        // Golf image 1
        TweenMax.from(imgGolf1, .5, {
          x: '-100%',
          y: '-100%',
          opacity: .5,
          ease: Power0.easeNone
        })
        // Golf image 2
        TweenMax.from(imgGolf2, .5, {
          x: '100%',
          y: '-100%',
          opacity: 0,
          delay: .2,
          ease: Power0.easeNone
        })
        // Point Left
        TweenMax.from(pointLeft, .3, {
          x: '-300%',
          opacity: 0,
          delay: .5,
          ease: Power0.easeNone
        })
        // Point Right
        TweenMax.from(pointRight, .3, {
          x: '300%',
          opacity: 0,
          delay: .5,
          ease: Power0.easeNone
        })
        // Num
        TweenMax.from(num, .5, {
          opacity: 0,
          delay: .5,
          ease: Power0.easeNone
        })
        // Info & title
        TweenMax.from([title, info], .3, {
          y: '100%',
          opacity: 0,
          delay: .5,
          ease: Power0.easeNone
        })
        // Tennis racket 1
        TweenMax.from(imgTennis1, .5, {
          position: 'relative',
          left: '-12%',
          top: -150,
          rotation: -90,
          opacity: 0,
          ease: Power0.easeNone
        })
        // Tennis racket 2
        TweenMax.from(imgTennis2, .5, {
          position: 'relative',
          left: '5%',
          top: 100,
          rotation: -150,
          opacity: 0,
          ease: Power0.easeNone
        })
      
      }
    });
    
  }
  
  //----- Paragraph elements / adding class to .editing__p which are in viewport
  function paragraphEffect() {
    $('.editing__p').each(function() {
      $(this).on('inview', function(event, isInView) {
        if (isInView && $(window).width() > 640) {
          $(this).addClass('InView');
        } else {
          $(this).removeClass('InView');
        }
      });
    });
  }

  // // #####################################
	// // PARALLAX
	// // #####################################
	var parallax = function () {
    if ($(window).width() > 1024) {
      var lastScrollTop = 0;
  		$(window).scroll( $.throttle (200, function(){
        var st = $(this).scrollTop();
        var paralaxLayerOne = $('.prlx_layer_1');
        var paralaxLayerSecond = $('.prlx_layer_2');
        var paralaxLayerThird = $('.prlx_layer_3');
        if (st > lastScrollTop){
            var parallaxTime = new TimelineMax();
            parallaxTime.to(paralaxLayerOne , 1, {"transform" : "translate3d(0,  -" + st/10 + "px" + ",0", ease:Power1.easeOut})
            var parallaxTimeSecond = new TimelineMax();
            parallaxTimeSecond.to(paralaxLayerSecond , 1, {"transform" : "translate3d(0,  -" + st/7 + "px" + ",0", ease:Power1.easeOut})
            var parallaxTimeThird = new TimelineMax();
            parallaxTimeThird.to(paralaxLayerThird , 1, {"transform" : "translate3d(0,  -" + st/5 + "px" + ",0", ease:Power1.easeOut})
  
        } 
        else {
          // upscroll code
          var parallaxTime = new TimelineMax();
          parallaxTime.to(paralaxLayerOne , 1, {"transform" : "translate3d(0,  -" + st/10 + "px" + ",0", ease:Power1.easeOut})
          var parallaxTimeSecond = new TimelineMax();
          parallaxTimeSecond.to(paralaxLayerSecond , 1, {"transform" : "translate3d(0,  -" + st/7 + "px" + ",0", ease:Power1.easeOut})
          var parallaxTimeThird = new TimelineMax();
          parallaxTimeThird.to(paralaxLayerThird , 1, {"transform" : "translate3d(0,  -" + st/5 + "px" + ",0", ease:Power1.easeOut})
  
        }
        // lastScrollTop = st;
  		}));
    }
	};
  
  //----- InView option 
  // $('.editing-persons').one('inview', function(event, isInView) {
  //   if (isInView && $(window).width() > 640) {
  //     personBlockAnimations();
  //   }
  // });
  // $('.editing-sport').one('inview', function(event, isInView) {
  //   if (isInView && $(window).width() > 640) {
  //     sportBlockAnimations();
  //   }
  // });
  
  //----- InView Option with offset / Doesn't work
  // $('#editing-persons').bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
  //   if (isInView) {
  //     // element is now visible in the viewport
  //      console.log("visible");
  //     if (visiblePartY == 'top') {
  //       // top part of element is visible
  //       console.log("top-visible");
  //     } else if (visiblePartY == 'bottom') {
  //       // bottom part of element is visible
  //       console.log("bottom-visible");
  //     } else {
  //       // whole part of element is visible
  //       console.log("whole-part-visible");
  //     }
  //   } else {
  //     // element has gone out of viewport
  //     console.log("This div is not in viewport!");
  //   }
  // });
  // // Option two
  // $('#editing-persons').on('inview', function (event, visible, topOrBottomOrBoth) {
  //   if (visible == true) {
  //     console.log("visible");
  //     if (topOrBottomOrBoth == 'top') {
  //       // top part of element is visible
  //       console.log("top-visible");
  //     } else if (topOrBottomOrBoth == 'bottom') {
  //       // bottom part of element is visible
  //       console.log("bottom-visible");
  //     } else {
  //       console.log("whole-part-visible");
  //       // whole part of element is visible
  //     }
  //   } else {
  //     console.log("This div is not in viewport!");
  //     // element has gone out of viewport
  //   }
  // });
    
  //----- Waypoint Option with offset
  // var persons = new Waypoint({
  //   element: $('.editing-persons'),
  //   handler: function() {
  //     personBlockAnimations();  
  //     this.destroy()
  //   },
  //   offset: '40%' // Parallax disrupted real position
  // })
  // var sport = new Waypoint({
  //   element: $('.editing-sport'),
  //   handler: function() {
  //     sportBlockAnimations();  
  //     this.destroy()
  //   },
  //   offset: '100%' // Parallax disrupted real position
  // })

  //----- Run functions
  // parallax();
  paragraphEffect();
  personBlockAnimations();
  sportBlockAnimations();
  
});
