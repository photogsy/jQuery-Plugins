; (function ($) {
    $.fn.smoothScroll = function () {
        var $mooth = this;
        var lastPosition = window.pageYOffset;
        var lastHeight = $mooth.height();
        var lastWidth = $mooth.width();
        var duration = $mooth.data('duration') || 1;
        var timingfunc = $mooth.data('timing-function') || 'cubic-bezier(0.25, 0.85, 0.5, 1)';

        var $wrap = $('<div></div>').insertAfter($mooth)
        $wrap.css('height', $mooth.height() + 'px');
        $mooth.appendTo($wrap);


        $mooth.css('position', 'fixed');
        $mooth.css('top', 0);
        $mooth.css('right', 0);
        $mooth.css('left', 0);
        $mooth.css('transition', 'transform ' + duration + 's ' + timingfunc);
        $mooth.css('transform-origin', '0 0');


        var tick = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60)
            };

        $(document).on('touchstart', function () {
            $mooth.css('transition', 'none');
        });

        function update() {
            var curheight = $mooth.height();
            var curWidth = $mooth.width();
            if (lastPosition == window.pageYOffset && lastHeight == curheight && lastWidth == curWidth) {
                tick(update);
                return false;
            }

            if (lastHeight != curheight || lastWidth != curWidth) {
                $wrap.css('height', curheight + 'px');
                lastHeight = curheight;
                lastWidth = curWidth;
            }
            lastPosition = window.pageYOffset;
            var transform = 'translate3d(0px, -' + lastPosition + 'px, 0px)';
            $mooth[0].style.webkitTransform = transform;
            $mooth[0].style.mozTransform = transform;
            $mooth[0].style.transform = transform;

            tick(update)
        }

        update();
    }
})(jQuery);
