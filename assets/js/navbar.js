$(function () {

    const nav = $('nav');
    const header = $('#header');

  
    if (window.location.pathname === '/' ) {
        
        $(document).ready(function () {
            checkHeaderStatus()
            $(window).scroll(function () {
                checkHeaderStatus()
            });
        });


        function checkHeaderStatus() {
            
            if ($(document).scrollTop() > header.height()) {
                nav.removeClass('transparent');
            } 
            else {
                nav.addClass('transparent');
            }
        }       

    }   else {
            nav.removeClass('transparent');
        }
    
});

