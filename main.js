var navArrowDeg = true
$('.nav-no-fix').click(function(){
    $('.navbar').toggleClass('navbar-fixed-top navbar-static-top');
    $('.page-wrapper').toggleClass('page-wrapper-fixed page-wrapper-static');
    if(navArrowDeg){
        // $('.nav-no-fix').animateRotate(360, 225);
        $('.nav-no-fix').animate({color: '#f2f2f2'});
    } else {
        $('.nav-no-fix').animate({color: '#232323'});
        // $('.nav-no-fix').animateRotate(180, 45);
    }
    navArrowDeg = !navArrowDeg
});

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
    // Swap sidebar colors
    $('.sidebar-active').toggleClass('sidebar-active');
    $(this).toggleClass('sidebar-active');

    // Swap content text
    $('.show').toggleClass('show hidden')
    $('.' + $('.sidebar-active').text().toLowerCase()).toggleClass('show hidden');

    heightResize();
});

// I think the scrollbars make 100vh not work properly when the content is longer
// than 100vh, so this will figure out whether the height should be 100% or 100vh,
// where 100vh will entirely fill up the entire contect column with the proper background
var heightResize = function(){
    var content = $('.content-col')
    content.css('height', '100%');
    var height1 = content.height()
    content.css('height', '100vh');
    var height2 = content.height()
    if(height1 > height2){
        content.css('height', '100%');
    }
    $(".nano").nanoScroller();
}

$( window ).resize(function(){
    heightResize();
});

$(heightResize);
