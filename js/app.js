(function() {
    var dcd = window.dcd = {};
    dcd.com = angular.module('dcdcom', ['ngRoute']);

    dcd.com.config(function($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        })
        .when('/news', {
            templateUrl: 'views/news.html',
            controller: 'NewsCtrl'
        })
        .when('/shows', {
            templateUrl: 'views/shows.html',
            controller: 'ShowsCtrl'
        })
        .when('/bio', {
            templateUrl: 'views/bio.html',
            controller: 'BioCtrl'
        })
        .when('/photos', {
            templateUrl: 'views/photos.html',
            controller: 'PhotosCtrl'
        })
        .when('/download', {
            templateUrl: 'views/download.html',
            controller: 'DownloadCtrl'
        })
        .when('/lyrics', {
            templateUrl: 'views/lyrics.html',
            controller: 'LyricsCtrl'
        })
        .when('/merch', {
            templateUrl: 'views/merch.html',
            controller: 'MerchCtrl'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
        })
        .when('/404', {
            templateUrl: 'views/404.html'
        })
        .otherwise('/404')

    })

    var navbar = $("nav#mainNavBar");
    
    var setParallax = function() {
        var vh2 = window.innerHeight / 2;
        var scrollPoint = vh2 - 250; 
        if ($(window).scrollTop() >= scrollPoint)
            navbar.addClass("navbar-fixed parallax");
        else
            navbar.removeClass("navbar-fixed parallax");
            
        var parallax = document.getElementsByClassName('parallax');
        var param = {
            speed: 3
        }
        for (var i = 0; parallax.length > i; i++) {
            // Calculate the new background position
            var bgScroll = -((window.scrollY -parallax [i].offsetTop) / param.speed);
            // Save new background position to the variable
            var bgPosition = 'center '+ bgScroll + 'px';
            // Set new background position to the element
            parallax [i].style.backgroundPosition = bgPosition;
        }
    }
    $(window).scroll(setParallax);
    window.initCtrl = function() {
        setParallax();
        window.scrollTo(0, 0);
    }

    

}())