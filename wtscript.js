
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        // make it new york  
        center: {lat: 40.712784, lng: -74.005941},
        zoom: 12
    });
}

function setFocus() {
    document.getElementById("search-text").focus();
}