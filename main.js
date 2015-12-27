// var navArrowDeg = true
// $('.nav-no-fix').click(function(){
//     $('.navbar').toggleClass('navbar-fixed-top navbar-static-top');
//     $('.page-wrapper').toggleClass('page-wrapper-fixed page-wrapper-static');
//     if(navArrowDeg){
//         // $('.nav-no-fix').animateRotate(360, 225);
//         $('.nav-no-fix').animate({color: '#f2f2f2'});
//     } else {
//         $('.nav-no-fix').animate({color: '#232323'});
//         // $('.nav-no-fix').animateRotate(180, 45);
//     }
//     navArrowDeg = !navArrowDeg
//     heightResize(false);
// });

$('.sidebar-list>li').click(function(){
    // Swap sidebar colors
    $('.sidebar-active').toggleClass('sidebar-active');
    $(this).toggleClass('sidebar-active');
    // set url hash param to contain currently clicked subpage
    location.hash = $(this).attr('id').slice(8);

});

$('#sidebar-rants').click(function(){
    $('.show').addClass('hidden').removeClass('show');
    $('.rants').addClass('show').removeClass('hidden');
    $('.home-hi').removeClass('slide-from-bottom-long').addClass('slide-from-bottom-short');
    heightResize(true);
});

$('#sidebar-resume').click(function(){
    $('.show').addClass('hidden').removeClass('show');
    $('.resume').addClass('show').removeClass('hidden');

    $('.home').addClass('show').removeClass('hidden').css('padding-top', '10px');
    $('.about, .about-work').addClass('show').removeClass('hidden');
    $('.about-misc').addClass('hidden').removeClass('show');
    $('.content').removeClass('image-background').addClass('blank-background');
    // Switch slide up animation to play immediately instead of with delay (delay used at first load because 
    // background image has delay in loading)
    heightResize(true);
});

$('#sidebar-about').click(function(){
    $('.show').addClass('hidden').removeClass('show');
    $('.home').addClass('show').removeClass('hidden').css('padding-top', '40px')
    $('.content').addClass('image-background').removeClass('blank-background');
    $('.about, .about-work, .about-misc').addClass('show').removeClass('hidden').fadeIn(500);
    heightResize(true);
});

$('#sidebar-home').click(function(){
    $('.show').addClass('hidden').removeClass('show');
    $('.home').addClass('show').removeClass('hidden').css('padding-top', '220px');
    $('.content').addClass('image-background').removeClass('blank-background');
    $('.about').fadeOut(500);
    heightResize(true);
});

var heightResize = function(adjust){
    var content = $('.content-col')
    content.css('height', '100%');
    var height1 = content.height()
    // 100vh is the whole viewport, so setting the content-col to 100vh is 70px too tall because
    // of the navbar. 
    content.css('height', 'calc(100vh - 70px)');
    var height2 = content.height()
    if(height1 > height2){
        content.css('height', '100%');
    }
    $(".nano").nanoScroller();
    if(adjust){
        $("body.nano").nanoScroller({ scrollTop: 0 });
    }
}

$(window).resize(function(){
    heightResize(false);
});

$(function(){
    heightResize(false);
    // get hash parameter from URL and go there
    console.log("Here")
    $('#sidebar-' + document.URL.split('#')[1]).trigger("click");
});

