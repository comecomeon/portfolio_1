
$(function(){
    //섹션1 배경 슬라이드

    $('.visual').slick({
    autoplay: true,
    fade:true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: false,
    swipe: false,
    dots: false
    });


    //스크롤

    $(".wrap_scroll").click(function(){
        var y=$('#section2').offset().top;
        $('body,html').animate({scrollTop: y},1000);
    });
    $(".wrap_scroll_1").click(function(){
        var y=$('#section3').offset().top;
        $('body,html').animate({scrollTop: y},1000);
    });
    $(".wrap_scroll_2").click(function () {
        var y=$('#section4').offset().top;
        $('body,html').animate({ scrollTop: y}, 1000);
    });
    $(".wrap_scroll_3").click(function () {
        var y=$('#section5').offset().top;
        $('body,html').animate({ scrollTop: y}, 1000);
    });

    //자동 스크롤
    $(".gnb li:nth-child(1) a").click(function () {
        var y = $('#section1').offset().top;
        $('body,html').animate({ scrollTop: y }, 1000);
    });
    $(".gnb li:nth-child(2) a").click(function () {
        var y = $('#section2').offset().top;
        $('body,html').animate({ scrollTop: y }, 1000);
    });
    $(".gnb li:nth-child(3) a").click(function () {
        var y = $('#section3').offset().top;
        $('body,html').animate({ scrollTop: y }, 1000);
    });
    $(".gnb li:nth-child(4) a").click(function () {
        var y = $('#section4').offset().top;
        $('body,html').animate({ scrollTop: y }, 1000);
    });
    $(".gnb li:nth-child(5) a").click(function () {
        var y = $('#section5').offset().top;
        $('body,html').animate({ scrollTop: y }, 1000);
    });



    $(".m_gnb li:nth-child(1) a").click(function () {
        var y = $('#section1').offset().top;
        $('body,html').animate({ scrollTop: y }, 1000);
    });
    $(".m_gnb li:nth-child(2) a").click(function () {
        var y = $('#section2').offset().top;
        $('body,html').animate({ scrollTop: y }, 1000);
    });
    $(".m_gnb li:nth-child(3) a").click(function () {
        var y = $('#section3').offset().top;
        $('body,html').animate({ scrollTop: y }, 1000);
    });
    $(".m_gnb li:nth-child(4) a").click(function () {
        var y = $('#section4').offset().top;
        $('body,html').animate({ scrollTop: y }, 1000);
    });
    $(".m_gnb li:nth-child(5) a").click(function () {
        var y = $('#section5').offset().top;
        $('body,html').animate({ scrollTop: y }, 1000);
    });






    //카운터

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });




    //my skill
    $('.chart').easyPieChart({
        size:150,
        lineWidth:15,
        scaleColor:false,
        barColor:'#c92629',
        trackColor:'black',
        lineCap:'round'
    });





    //섹션3 슬라이드


    //라이트박스
    $('.list li a').mouseenter(function () {
        $(this).find('.cover').stop().fadeIn();
    });
    $('.list li a').mouseleave(function () {
        $(this).find('.cover').stop().fadeOut();
    });

    $('.list li a').lightBox({
        overlayBgColor: '#000',
        overlayOpacity: 0.6,
        imageLoading: 'images/loading.gif',
        imageBtnClose: 'images/lightbox-btn-close.gif',
        imageBtnPrev: 'images/lightBox-btn-prev.gif',
        imageBtnNext: 'images/lightBox-btn-next.gif',
        containerResizeSpeed: 350,
        txtImage: '작품',
        txtOf: 'of'
    });


    //top버튼
    $(".btn_top").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000);
    });






    //mobile_cover
    $('.btn_menu').click(function (){
        $('.m_menu').animate({
            'right':'0%'
        })
    });
    $('.m_close').click(function (){
        $('.m_menu').animate({
            'right':'-100%'
        })
    });

    //섹션 4 슬라이드
    $('.css').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay:true,
        arrows:false,
        fade: true
    });
    $('.java').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        arrows: false,
        fade: true
    });
    $('.sub').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        arrows: false,
        fade: true
    });




































































});






















































































































































































































































