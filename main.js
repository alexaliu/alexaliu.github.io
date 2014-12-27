console.log($('.sidebar').width())

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
    // Swap sidebar colors
    $('.sidebar-list').children().each(function(){
        $(this).removeClass('sidebar-active');
    })
    $(this).toggleClass('sidebar-active');

    // Swap content text
    selected = $('.sidebar-active').text();
    $('.content').each(function(){
        $(this).addClass('nodisplay');
    })
    $('.' + selected.toLowerCase()).removeClass('nodisplay');
})

$( window ).resize(function(){
    $('.scroll-pane').jScrollPane({showArrows: true, contentWidth: '500px'});
});


$(function(){
    var win = $(window);
    // Full body scroll
    var isResizing = false;
    win.bind(
        'resize',
        function(){
            if (!isResizing) {
                isResizing = true;
                var container = $('#full-page-container');
                // Temporarily make the container tiny so it doesn't influence the
                // calculation of the size of the document
                container.css({'width': 1, 'height': 1});
                // Now make it the size of the window...
                container.css({'width': win.width(), 'height': win.height()});
                isResizing = false;
                container.jScrollPane({'showArrows': true});
            }
        }
    ).trigger('resize');

    // Workaround for known Opera issue which breaks demo (see
    // http://jscrollpane.kelvinluck.com/known_issues.html#opera-scrollbar )
    $('body').css('overflow', 'hidden');

    // IE calculates the width incorrectly first time round (it
    // doesn't count the space used by the native scrollbar) so
    // we re-trigger if necessary.
    if ($('#full-page-container').width() != win.width()) {
        win.trigger('resize');
    }

    // Internal scrollpanes
    $('.scroll-pane').jScrollPane({showArrows: true, contentWidth: '500px'});
});



