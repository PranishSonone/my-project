$(document).ready(function(){
    $('.hamburger').on('click', function(){
        $('.navigation').toggleClass('menu__open');
        $('.hamburger').toggleClass('menu__close');
        $('docment').toggleClass('menu__page')
    });
});