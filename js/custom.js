$(function(){
    'use strict';

    var myHeader = $('.header')

    myHeader.height($(window).height());

    $(window).resize(function () {
        myHeader.height($(window).height());
    });

    $('.links li a').on('click', function () {
        $('.links li').addClass('active').siblings().removeClass('active');
    });


    $('.slider').each(function () {

        $(this).css('paddingTop', ($(window).height() - $('.slider li').height()) / 2 );
    });

    // Tragger Slider
    $('.slider').bxSlider({
        pager: false
    });

    // Smooth Scroll
    $('.links li a').on ('click', function(){

        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 2000);
    });

    // Our Auto Slider Code
    (function autoSliderr() {
        $('.sliderr .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(1000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    
                    autoSliderr();
                });
            } else {
                $(this).delay(1000).fadeOut(1000, function (){
                    $(this).removeClass('active');
                    $('.sliderr div').eq(0).addClass('active').fadeIn();
                    autoSliderr();
                });
            }
        });

    }());
    var mixer = mixitup('.mywork');

    $('.shufle li').on('click', function() {

        $(this).addClass('selected').siblings().removeClass('selected');
    });

    // Trigger niceScroll
    $("body").niceScroll({
        cursorcolor: '#17bc9c',
        cursorborder: '5px solid #17bc9c',
        cursorborderradius: 0,
        zindex: [8]
    });

})