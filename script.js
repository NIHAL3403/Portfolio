$(document).ready(function(){
    // Parallax effect
    $('.parallax').each(function(){
        var $this = $(this);
        $(window).scroll(function() {
            var yPos = -($(window).scrollTop() / $this.data('speed')); 
            var coords = '50% ' + yPos + 'px';
            $this.css({ backgroundPosition: coords });
        });
    });

    // Smooth Scrolling
    $('nav ul li a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
    });

    // Scroll-triggered animations
    $(window).on('scroll', function() {
        $('.scroll-trigger').each(function() {
            var triggerPoint = $(this).offset().top - $(window).height() / 1.3;
            if ($(window).scrollTop() > triggerPoint) {
                $(this).addClass('visible');
            }
        });
    });

    // Contact section image links
    $('#contact img').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 70
        }, 500);
    });
});
