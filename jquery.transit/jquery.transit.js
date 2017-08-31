$(document).ready(function () {
    checkTransit();

    $(window).on('scroll resize', function () {
        checkTransit();
    });

});

function checkTransit() {
    var viewTop = $(window).scrollTop();
    var viewBottom = viewTop + window.innerHeight;
    $('.transit').each(function () {
        var top = $(this).offset().top;
        var bottom = top + this.clientHeight;
        var topOnscreen = (top > viewTop) && (top < viewBottom);
        var botOnscreen = (bottom > viewTop) && (bottom < viewBottom);
        var middleOnScreen = (top <= viewTop) && (bottom >= viewBottom);
        if (topOnscreen || middleOnScreen || botOnscreen) {
            $(this).addClass('transitted');
        }
    });
}