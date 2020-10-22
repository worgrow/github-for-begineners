
$(document).ready(function() {

    var vid = document.getElementById("video");

    vid.autoplay = true;
    vid.volume = 0;
    vid.loop = true;
    vid.load();


    $('.clickApp').on('click tap', function(){
        $('.playerVolume').find('polygon').addClass('polygon-volume')
        vid.volume = 1;
    })
    $('.clickMute').on('click tap', function(){

        vid.volume = 0;
    })



    $('.contentServices > .owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })

    $('.contentTopArhive').on('click tap', function(){
        $(this).toggleClass('contentTopArhiveActive')
        $(this).next('.tableArhive').toggleClass('tableArhiveActive')
    })
    $('.queryMenuClick').on('click tap', function(){
        $('.queryMenu').addClass('queryMenuActive')
        $('.closeMenu').addClass('queryMenuActive')
        $('body, html').addClass('overflowHidden')
    })
    $('.closeMenu').on('click tap', function(){
        $('.queryMenu').removeClass('queryMenuActive')
        $('.closeMenu').removeClass('queryMenuActive')
        $('body, html').removeClass('overflowHidden')
    })

    $('.selectOption').on('click tap', function(){
        $('.selectOption').removeClass('selectOptionAction')
        $(this).addClass('selectOptionAction')
    })
    $('.itmListSelect').on('click tap', function(){
        $('.itmListSelect').removeClass('itmListSelectActiv')
        $(this).addClass('itmListSelectActiv')
    })

    $('.checkedPost').on('click tap', function(){
        $(this).find('.checkedInput').toggleClass('checkedInputActive')
    })
    $('.closePop,.bgClose').on('click tap', function(){
        $('.popUp-singIn,.popUp-retryPassword,.popUp-info,.popUp-calculate,.popUp-newUser,.popUp-basket').removeClass('displayFlex')
        $('body, html').removeClass('overflowHidden')
        $('.retryBgClose').removeClass('displayFlex')
        $('.popUp-retryPassword').removeClass('displayFlex')
        $('.singIBgClose').removeClass('displayFlex')
        $('.newUserBgClose').removeClass('displayFlex')
        $('.calcBgClose').removeClass('displayFlex')
        $('.basketBgClose').removeClass('displayFlex')
    })

    $('.logInClick').on('click tap', function(){
        $('.popUp-singIn').addClass('displayFlex')
        $('.singIBgClose').addClass('displayFlex')
        $('body, html').addClass('overflowHidden')
    })
    $('.recoverPassword').on('click tap', function(){
        $('.popUp-singIn').removeClass('displayFlex')

        $('.popUp-retryPassword').addClass('displayFlex')
        $('.retryBgClose').addClass('displayFlex')
        $('body, html').addClass('overflowHidden')
    })
    $('.callBack').on('click tap', function(){
        $('.popUp-singIn').addClass('displayFlex')
        $('.popUp-retryPassword').removeClass('displayFlex')
        $('body, html').addClass('overflowHidden')
    })
    $('.acceptUser').on('click tap', function(){
        $('.popUp-info').addClass('displayFlex')
        $('body, html').addClass('overflowHidden')
    })
    $('.calcPop').on('click tap', function(){
        $('.popUp-calculate').addClass('displayFlex')
        $('.calcBgClose').addClass('displayFlex')
        $('body, html').addClass('overflowHidden')
    })
    $('.newUserClick').on('click tap', function(){
        $('.newUserBgClose').addClass('displayFlex')
        $('body, html').addClass('overflowHidden')
        $('.popUp-newUser').addClass('displayFlex')
    })
    $('.clickBasket').on('click tap', function(){
        $('.basketBgClose').addClass('displayFlex')
        $('body, html').addClass('overflowHidden')
        $('.popUp-basket').addClass('displayFlex')
    })
    $('.catalogListMobile').on('click tap', function(){
        $('.menuProject').find('.ulMenu').addClass('menuProjectActive')
        $('.closeCategoryMenu').addClass('displayFlex')
        $('body, html').addClass('overflowHidden')
    })
    $('.closeCategoryMenu').on('click tap', function(){
        $(this).removeClass('displayFlex')
        $('.menuProject').find('.ulMenu').removeClass('menuProjectActive')
        $('body, html').removeClass('overflowHidden')
    })

    //
    // $(window).bind('scroll', function () {
    //     if ($(window).scrollTop() > 50) {
    //         $('.menuPost').addClass('menuPostActive');
    //     } else {
    //         $('.menuPost').removeClass('menuPostActive');
    //     }
    // });
    // $('a[href="#"]').on('click tap', function(event){
    //     event.preventDefault();
    // })
    // $('.closeMenu').on('click tap', function(){
    //     $('.contentMenuPost').removeClass('contentMenuPostActive')
    //     $('html, body').removeClass('overflowHidden')
    // })
    // $('.clickMenu').on('click tap', function(){
    //     $('.contentMenuPost').addClass('contentMenuPostActive')
    //     $('html, body').addClass('overflowHidden')
    //
    // })
    // $(window).bind('scroll', function () {
    //     if ($(window).scrollTop() > 50) {
    //         $('.menuPost').addClass('menuPostActive');
    //     } else {
    //         $('.menuPost').removeClass('menuPostActive');
    //     }
    // });
    var width = $(window).width()
    console.log(width)
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.middleHead').addClass('headerActive');
            $('.contentTopLng').find('.cardPost').addClass('fixedCard');

            if(width < 992){
                $('.topHead').addClass('headerActive');
                $('.middleHead').addClass('headerActiveMiddle');
            }
        } else {
            $('.middleHead').removeClass('headerActive');
            $('.contentTopLng').find('.cardPost').removeClass('fixedCard');
            if(width < 992){

                $('.topHead').removeClass('headerActive');
                $('.middleHead').removeClass('headerActiveMiddle');
            }
        }
    });
});