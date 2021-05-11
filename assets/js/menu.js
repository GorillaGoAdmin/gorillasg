$(document).ready(function() {
    $('body').on('click', '#close_menu', function() {
        $("#collapsibleNavbar").hide();
    });
    $('body').on('click', '#open_menu', function() {
        $("#collapsibleNavbar").show();
    });

    $('body').on('click', '#what_is_gorilla_link', function() {
        $('html, body').animate({
            scrollTop: $("#telecommunication").offset().top
        }, 1000);
    });

    $('body').on('click', '#the_tech_link', function() {
        $('html, body').animate({
            scrollTop: $("#the_tech").offset().top
        }, 2000);
    });

    $('body').on('click', '#gorilla_features_link', function() {
        $('html, body').animate({
            scrollTop: $("#gorillago_features").offset().top
        }, 2000);
    });

    $('body').on('click', '#join_merchant_link', function() {
        $('html, body').animate({
            scrollTop: $("#next_gen").offset().top
        }, 2000);
    });
});