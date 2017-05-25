$(document).ready(function() {
    $('#navigatie-opener').click(function() {
        $('body').toggleClass('geopend');
        $('header').toggleClass('geopend');
        $('#portfolio').toggleClass('geopend');
        $('#sidenav').toggleClass('geopend');
});
    $('#navigatie-dicht').click(function() {
         $('body').removeClass('geopend');
        $('header').removeClass('geopend');
        $('#portfolio').removeClass('geopend');
        $('#sidenav').removeClass('geopend');
    });
});

// voor google maps
 function initMap() {
        var uluru = {lat: 51.0673017, lng: 3.7004048};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }