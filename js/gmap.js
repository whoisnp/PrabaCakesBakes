var myCenter = new google.maps.LatLng(51.508742, -0.120850);

function initialize() {
    var mapProp = {
        center: myCenter,
        scrollwheel: false,
        zoom:6,
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{ "featureType": "landscape", "stylers": [{ "color": "#f0ede5" }, { "visibility": "on" }] }, { "featureType": "poi", "stylers": [{ "saturation": -100 }, { "lightness": 51 }, { "visibility": "simplified" }] }, { "featureType": "road.highway", "stylers": [{ "color": "#f0ede5" }, { "visibility": "on" }] }, { "featureType": "road.arterial", "stylers": [{ "color": "#f0ede5" }, { "visibility": "on" }] }, { "featureType": "road.local", "stylers": [{ "color": "#14adf4" }, { "visibility": "off" }] }, { "featureType": "transit", "stylers": [{ "saturation": -100 }, { "visibility": "simplified" }] }, { "featureType": "administrative.province", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "on" }, { "color": "#ed734e" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#cbe6a3" }, { "visibility": "on" }] }]
    };

    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var image = 'https://4.bp.blogspot.com/-LWyEooHT8_4/WFQaXE0UN4I/AAAAAAAAAEw/ZLdvF75NFQElEcxsH5JBIOMhJEOyAhV5QCLcB/s1600/pointer.png';

    var marker = new google.maps.Marker({
        position: myCenter,
        icon:image
    });

    marker.setMap(map);


}

google.maps.event.addDomListener(window, 'load', initialize);
