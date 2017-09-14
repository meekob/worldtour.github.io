
var map;
var geocoder;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        // make it new york  
        center: {lat: 40.712784, lng: -74.005941},
        zoom: 12
    });

    geocoder = new google.maps.Geocoder();
}

function getcodeAddress(geocoder, map) {
    var address = document.getElementById('search-text').value;
    console.log(address);

    if (address.length == 0) { return false; }

    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            // var marker = new google.maps.Marker({
            //     map: map,
            //     position: results[0].geometry.location
            // });
        } else {
            console.log('Geocode was not successful for the following reason: ' + status);
        }
    });    
}

document.getElementById('find-button').addEventListener('click', function() {
    console.log('find clicked.');
    getcodeAddress(geocoder, map);
});  

document.querySelector('#search-text').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        console.log('enter hit.');
        getcodeAddress(geocoder, map);
    }
});

function setFocus() {
    document.getElementById("search-text").focus();
}


document.onload = setFocus();

