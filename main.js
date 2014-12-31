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
    heightResize();
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
    $('.' + $('.sidebar-active').text().toLowerCase().replace(/ /g,'')).toggleClass('show hidden');

    heightResize();
    if($('.page-wrapper').hasClass('page-wrapper-static')){
        $("body.nano").nanoScroller({ scroll: 'top' });
        // $(".nano").nanoScroller({ scroll: 'bottom' });
    }
});


var heightResize = function(){
    var content = $('.content-col')
    content.css('height', '100%');
    var height1 = content.height()
    // 100vh is the whole viewport, so setting the content-col to 100vh is 70px too tall because
    // of the navbar. Depending on whether the navbar is sticky(fixed) or not(static), use the CSS3
    // calc property to properly set the height of the content-col such that it is as tall as it needs to
    // be to not have an overscroll.
    if($('.page-wrapper').hasClass('page-wrapper-fixed')){
        content.css('height', 'calc(100vh - 70px)');
    } else{
        content.css('height', '100vh');
    }
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
