$(document).ready(function(){ 
  
  var personBlockAnimations = function() {
    
    // Vars
    var img1        = $('.animationPersonImg1');
    var img2        = $('.animationPersonImg2');
    var img3        = $('.animationPersonImg3');
    var img4        = $('.animationPersonImg4');
    var titleTop    = $('.editing-persons__info-head--top .editing__title');
    var titleBottom = $('.editing-persons__info-head--bottom .editing__title');
    var text        = $('.editing-persons__info-body');
    var personTitle = $('.editing-persons__person-title');
    
    //----- Animations
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
  
  var sportBlockAnimations = function() {
    
    // Vars
    var imgGolf1        = $('.editing-sport--golf__img1');
    var imgGolf2        = $('.editing-sport--golf__img2');
    var imgTennis1      = $('.editing-sport--tennis__img1');
    var imgTennis2      = $('.editing-sport--tennis__img2');
    var pointLeft       = $('.editing-sport__point-animation--left');
    var pointRight      = $('.editing-sport__point-animation--right');
    var num             = $('.editing-sport .editing__num');
    var title           = $('.editing-sport .editing__title');
    var info            = $('.editing-sport .editing__info-body');
    
    //----- Animations
    // Golf image 1
    TweenMax.from(imgGolf1, .8, {
      x: '-100%',
      y: '-100%',
      opacity: .5,
      ease: Power0.easeNone
    })
    // Golf image 2
    TweenMax.from(imgGolf2, .8, {
      x: '100%',
      y: '-100%',
      opacity: 0,
      delay: .2,
      ease: Power0.easeNone
    })
    // Point Left
    TweenMax.from(pointLeft, .5, {
      x: '-300%',
      opacity: 0,
      delay: .5,
      ease: Power0.easeNone
    })
    // Point Right
    TweenMax.from(pointRight, .5, {
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
    TweenMax.from([title, info], .5, {
      y: '100%',
      opacity: 0,
      delay: .5,
      ease: Power0.easeNone
    })
    // Tennis racket 1
    TweenMax.from(imgTennis1, .6, {
      position: 'relative',
      left: '-12%',
      top: -150,
      rotation: -90,
      opacity: 0,
      ease: Power0.easeNone
    })
    // Tennis racket 2
    TweenMax.from(imgTennis2, .6, {
      position: 'relative',
      left: '5%',
      top: 100,
      rotation: -150,
      opacity: 0,
      ease: Power0.easeNone
    })
    
  }

  // personBlockAnimations();
  // sportBlockAnimations();

});
