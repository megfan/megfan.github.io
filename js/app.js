//cursor_______
$(window).mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.pageX,
          top: e.pageY
        });
    }, 100);
});

$(window).on('load', function() {
    $(document).scrollTop(0);
    console.log($('.menu_item:nth-child(1)'));
    console.log($('.sec_2'));
    setTimeout(
        function() {
            console.log("sdsdsdsdsdth");
            $("#loader_sec").addClass("fade-up");
            $(document).scrollTop(0);
        }, 2000);
});

//scrolllll_______________

$('.menu_item:nth-child(1)').on('click', function(event) {
    console.log($(".menu_item:nth-child(1)"));
    var target = $('.sec_2');
    console.log($('.sec_2'));
    event.preventDefault();
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});
$('.menu_item:nth-child(2)').on('click', function(event) {
    console.log('click');
    var target = $('.sec_3');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});
$('.menu_item:nth-child(3)').on('click', function(event) {
    var target = $('.sec_5');
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) {(delta = event.wheelDelta / 120);}
    else if (event.detail) {(delta = -event.detail / 3);}

    handle(delta);
    if (event.preventDefault) {(event.preventDefault());}
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
    var distance = 800;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}

if (window.addEventListener) {window.addEventListener('DOMMouseScroll', wheel, false);}
  window.onmousewheel = document.onmousewheel = wheel;

