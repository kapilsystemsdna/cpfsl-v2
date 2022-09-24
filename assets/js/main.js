
(function () {
    'use strict';
    
    // :: Loading
    $(window).on('load', function () {
        $('.loading').fadeOut();
    });
    
    // :: Scroll Smooth To Go Section
    $('.move-section').on('click', function (e) {
        e.preventDefault();
        var anchorLink = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchorLink.attr('href')).offset().top + 1
        }, 1000);
    });
    
    // :: Add Class Active For ('.nav-bar')
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 350) {
            $('.nav-bar').addClass('active');
        } else {
            $('.nav-bar').removeClass('active');
        }
    });
    
    // :: Varables Navbar
    /*var headerBar = $('.nav-bar'),
        $navbarMenu = $('#open-nav-bar-menu'),
        $menuLink = $('.open-nav-bar'),
        $menuTriggerLink = $('.has-menu > a');*/
    // :: Add Class Active For $menuLink And $navbarMenu
    /*$($menuLink).on('click', function (e) {
        e.preventDefault();
        $menuLink.toggleClass('active');
        $navbarMenu.toggleClass('active');
    });*/
    $(function(){
        $("#nav-placeholder").load("nav.html");
        $("#footer-placeholder").load("footer.html");
    });
    $( document ).ready(function() {        
        $(document).on('click','.open-nav-bar', function (e) {
            var $navbarMenu = $('#open-nav-bar-menu');
            var $menuLink = $('.open-nav-bar');            
            e.preventDefault();
            $($menuLink).toggleClass('active');
            $($navbarMenu).toggleClass('active');
        });
        // :: Add Class Active For $menuTriggerLink
        $(document).on('click','.has-menu > .toggle-btn', function (e) {
            //var $menuTriggerLink = $('.has-menu > .toggle-btn');
            e.preventDefault();
            var $this = $(this);
            $this.toggleClass('active').next('ul').toggleClass('active');
        });
    });
    
    // :: Add Class Active For $menuTriggerLink
    /*$menuTriggerLink.on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.toggleClass('active').next('ul').toggleClass('active');
    });*/
    
    
    // $(function() {
    //     $('nav li a[href^="/' + location.pathname.split("/")[1] + '.html"]').addClass('active');
    //   });
    
    
    // :: Add Class Active On Go To Header
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $('.scroll-up').addClass('active');
        } else {
            $('.scroll-up').removeClass('active');
        }
    });
    
    // :: OWL Carousel Js Header Hero
    $('.header-owl').owlCarousel({
        loop: true,
        nav:true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });
    
    // :: OWL Carousel Js Case Study
    $('.owl-case-study').owlCarousel({
        loop: true,
        margin: 30,
        smartSpeed: 1000,
        autoplay: 2000,
        nav: true,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });
    
    // :: OWL Carousel Js Testimonial
    $('.owl-testimonial').owlCarousel({
        loop: true,
        nav:true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        mouseDrag: true,
        touchDrag: true,
        navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-right-arrow"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            991: {
                items: 1
            }
        }
    });
    
    // :: Add Class Active To Navbar (.gallery .list-name-gallery li)
    $('.case-study-list .list-name-case li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
}());