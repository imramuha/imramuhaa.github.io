$(document).ready(function() {
    $('#navigatie-opener').click(function() {
        $('body').toggleClass('geopend');
        $('header').toggleClass('geopend');
        $('#sidenav').toggleClass('geopend');
});
    $('#navigatie-dicht').click(function() {
         $('body').removeClass('geopend');
        $('header').removeClass('geopend');
        $('#sidenav').removeClass('geopend');
    });
});



// momenteel rond vid 5 17 mins about to make scrollable navigatie