/*
 * Website Javascript
 * @Author:ZouYuan
 * @Date:2017-09-15
 */

'use strict';

$(function() {
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $('#jiudu_ad > .carousel-inner > .item').each(function (i, item) {
            var $item = $(item);
            // var imgSrc = $item.data(isSmallScreen ? 'img-xs' : 'img-lg');
            var imgSrc =
                isSmallScreen ? $item.data('img-xs') : $item.data('img-lg');
            $item.css('backgroundImage', 'url("' + imgSrc + '")');
            if (isSmallScreen) {
                $item.html('<img src="' + imgSrc + '" alt="" />');
            } else {
                $item.empty();
            }
        });
    }
    $(window).on('resize', resize).trigger('resize');

    var $carousels=$('.carousel');
    var startX,endX;
    var offset=50;
    $carousels.on('touchstart',function(e){
        startX=e.originalEvent.touches[0].clientX;
        console.log(startX);
    });
    $carousels.on('touchmove',function(e){
        endX=e.originalEvent.touches[0].clientX;
        console.log(endX);
    });
    $carousels.on('touchend',function(e){
        console.log(endX);
        var distance=Math.abs(startX-endX);
        if(distance>offset){
            $(this).carousel(startX > endX ? 'next' : 'prev');
        }
    });

    $(".btnSh").click(function(){
        $(".shCtn").fadeToggle();
    })
});


/*LOADING PAGEHEADER AND PAGEFOOTER*/
$('#header').load('header.html');
$('#footer').load('footer.html');
$('#copyright').load('copyright.html');

/*CLICK ADS OPEN channelPrice PAGE*/
$("#jiudu_ad > .carousel-inner > .item ").click(function(){
    window.open('channelPrice.html');
});



