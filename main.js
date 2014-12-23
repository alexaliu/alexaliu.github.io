var navArrowDeg = true
$('.nav-no-fix').click(function(){
    $('.navbar').toggleClass('navbar-fixed-top navbar-static-top');
    $('.page-wrapper').toggleClass('page-wrapper-fixed page-wrapper-static');
    // $('.nav-no-fix').toggleClass('glyphicon-chevron-up glyphicon-chevron-down')
    if(navArrowDeg){
        $('.nav-no-fix').animateRotate(360, 180);
    } else {
        $('.nav-no-fix').animateRotate(180, 0);
    }
    navArrowDeg = !navArrowDeg

})

// http://stackoverflow.com/questions/15191058/css-rotation-cross-browser-with-jquery-animate
$.fn.animateRotate = function(startAngle, endAngle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotate(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: startAngle}).animate({deg: endAngle}, args);
  });
};

$('.sidebar-list>li').click(function(){
    $('.sidebar-list').children().each(function(){
        $(this).removeClass('sidebar-active')
    })
    $(this).toggleClass('sidebar-active')
})