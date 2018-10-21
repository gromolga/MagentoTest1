/**
 * @author Grom Olga <GromOlga.work@gmail.com>
 */

define(["jquery"], function ($) {
    var onResize = function() {
        var $body = $("body");
        var $header = $(".header.content");
        var headerHeight = $header.outerHeight();
        if($(window).width() < 768){
            $header.addClass("sticky-header");
            $body.css({"padding-top": headerHeight + "px"})
        } else {
            $header.removeClass("sticky-header");
            $body.css({"padding-top": "0px"});
        }
    };
    onResize();
    $(window).resize(onResize);
});
