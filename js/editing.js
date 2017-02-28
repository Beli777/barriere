$(document).ready(function(){

  //----- Persons animation
  function personBlockAnimations() {
    
    // Vars
    var el          = '.editing-persons';
    var body        = $('.editing-persons__body');
    var img1        = $('.animationPersonImg1');
    var img2        = $('.animationPersonImg2');
    var img3        = $('.animationPersonImg3');
    var img4        = $('.animationPersonImg4');
    var titleTop    = $('.editing-persons__info-head--top .editing__title');
    var titleBottom = $('.editing-persons__info-head--bottom .editing__title');
    var text        = $('.editing-persons__info-body');
    var personTitle = $('.editing-persons__person-title');
    
    if ($(window).width() > 640) {
      
      // init controller
      var controller = new ScrollMagic.Controller();
      var tlPersons = new TimelineLite()
      
      //----- Animations
      // Body
      .to(body, .1, {
        opacity: 1,
        ease: Power0.easeNone
      }, '0')
      // First image
      .from(img1, .8, {
        x: '-100%',
        opacity: 0,
        ease: Power0.easeNone
      }, '0')
      // Second image && Top title
      .from([img2, titleTop], .8, {
        y: '-100%',
        opacity: 0,
        ease: Power0.easeNone
      }, '0')
      // Third image && paragraph text
      .from([img3, text], .8, {
        y: '100%',
        opacity: 0,
        ease: Power0.easeNone
      }, '0')
      // Fourth image && Bottom title
      .from([img4, titleBottom], .8, {
        x: '100%',
        opacity: 0,
        ease: Power0.easeNone
      }, '0')
      // Names of people
      .to(personTitle, 1, {
        opacity: 1
      }, '0+=0.5')
      
      // build a scene
      var scene = new ScrollMagic.Scene ({
        triggerElement: el,
        triggerHook: 0.5,
        reverse: false
      })
      
      .setTween(tlPersons) // trigger a TweenMax tween
      .addTo(controller);

    }
    
  }
  
  //----- Sport animation
  function sportBlockAnimations () {
    
    // Vars
    var el              = '.editing-sport';
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
    
    if ($(window).width() > 640) {
      
      // init controller
      var controller = new ScrollMagic.Controller();
      var tlSport = new TimelineLite()
      
      //----- Animations
      // Body
      tlSport.to(body, .1, {
        opacity: 1,
        ease: Power0.easeNone
      }, '0')
      // Golf image 1
      tlSport.from(imgGolf1, .5, {
        x: '-100%',
        y: '-100%',
        opacity: .5,
        ease: Power0.easeNone
      }, '0')
      // Golf image 2
      tlSport.from(imgGolf2, .5, {
        x: '100%',
        y: '-100%',
        opacity: 0,
        ease: Power0.easeNone
      }, '0+=0.2')
      // Point Left
      tlSport.from(pointLeft, .3, {
        x: '-300%',
        opacity: 0,
        ease: Power0.easeNone
      }, '0+=0.5')
      // Point Right
      tlSport.from(pointRight, .3, {
        x: '300%',
        opacity: 0,
        ease: Power0.easeNone
      }, '0+=0.5')
      // Num
      tlSport.from(num, .5, {
        opacity: 0,
        ease: Power0.easeNone
      }, '0+=0.5')
      // Info & title
      tlSport.from([title, info], .3, {
        y: '100%',
        opacity: 0,
        ease: Power0.easeNone
      }, '0+=0.5')
      // Tennis racket 1
      tlSport.from(imgTennis1, .5, {
        position: 'relative',
        left: '-12%',
        top: -150,
        rotation: -90,
        opacity: 0,
        ease: Power0.easeNone
      }, '0')
      // Tennis racket 2
      tlSport.from(imgTennis2, .5, {
        position: 'relative',
        left: '5%',
        top: 100,
        rotation: -150,
        opacity: 0,
        ease: Power0.easeNone
      }, '0')
    
      // build a scene
      var scene = new ScrollMagic.Scene ({
        triggerElement: el,
        triggerHook: 0.7,
        reverse: false
      })
      
      .setTween(tlSport) // trigger a TweenMax tween
      .addTo(controller);
    
    }
      
  }
  
  //----- Fade text
  // New Version
  function fadeText(el) {
    
    var $el = el;
    
    // init controller
    var controller = new ScrollMagic.Controller();
    
    if ($(window).width() > 640) {
      // loop trough all elements with a class added in invoked function
      $($el).each(function() {
        
        // build a tween
        var tween = TweenMax.from(this, 1, {opacity: '0.1', ease: Linear.easeNone});

        // build a scene
        var scene = new ScrollMagic.Scene ({
          triggerElement: this,
          duration: 500,
          triggerHook: 'onEnter'
        })
        
        .setTween(tween) // trigger a TweenMax tween
        .addTo(controller);

      });
    }
    
  };
  
  //----- Block animation
  function blockSlide() {
    
    var fromLeft = $('.slide-from--left');
    var fromRight = $('.slide-from--right');
    
    // init controller
    var controller = new ScrollMagic.Controller();
    
    if ($(window).width() > 640) {
      
      //----- Left to Right
      // loop trough all elements with a class fromLeft = $('.slide-from--left');
      $(fromLeft).each(function() {
        
        // build a tween
        var tween = TweenMax.from(this, .7, {x: '-110%', ease: Linear.easeNone});
  
        // build a scene
        var scene = new ScrollMagic.Scene ({
          triggerElement: this,
          // triggerHook: 'onEnter'
          triggerHook: 0.7,
          reverse: false
        })
        
        .setTween(tween) // trigger a TweenMax tween
        .addTo(controller);
  
      });
      
      //----- Right to left
      // loop trough all elements with a class fromRight = $('.slide-from--right');
      $(fromRight).each(function() {
        
        // build a tween
        var tween = TweenMax.from(this, .7, {x: '110%', ease: Linear.easeNone});
  
        // build a scene
        var scene = new ScrollMagic.Scene ({
          triggerElement: this,
          // triggerHook: 'onEnter'
          triggerHook: 0.7,
          reverse: false
        })
        
        .setTween(tween) // trigger a TweenMax tween
        .addTo(controller);
  
      });
    }
    
  };

  //----- Run functions
  fadeText('.editing__p');
  personBlockAnimations();
  sportBlockAnimations();
  blockSlide();
  
});
