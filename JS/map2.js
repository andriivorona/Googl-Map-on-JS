let markersData = [
{
        lat: 49.828254,      // Latitude
        lng: 23.994680,     // Longitude
        name: "Lviv",       //An arbitrary name that will be displayed in the information window
        address:"м. Львів, вул.Антоновича 102"    //The address, which will also be displayed in the information window
    }, 
    {
        lat: 48.620800,
        lng: 22.287883,
        name: "Uzhgorod",
        address:" м. Ужгород, пл. Ш.Петефі, 28"
    },
    
    ];


    let map, infoWindow;
    function initMap() {
        let centerLatLng = new google.maps.LatLng(49.828254, 23.994680);
        let mapOptions = {
            center: centerLatLng,
            zoom: 7
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // Create an info window object and place it in the infoWindow variable
    // Since each information window has its own content, we create an empty object without passing it the content parameter
    infoWindow = new google.maps.InfoWindow();
    //We track the click anywhere on the map
    google.maps.event.addListener(map, "click", function() {
        // infoWindow.close - close the information window.
        infoWindow.close();
    });
    // Loop through all the coordinates stored in markersData
    for (let i = 0; i < markersData.length; i++){
        let latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        let name = markersData[i].name;
        let address = markersData[i].address;
        // Adding a marker with an information window
        addMarker(latLng, name, address);
    }
}
google.maps.event.addDomListener(window, "load", initMap);
// Add marker function with info window
function addMarker(latLng, name, address) {
    let marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name
    });
    // Tracking a click on our marker
    google.maps.event.addListener(marker, "click", function() {
        // contentString - it is a variable that stores the content of the info window.
        let contentString = '<div class="infowindow">' +
        '<h3>' + name + '</h3>' +
        '<p>' + address + '</p>' +
        '</div>';
        //Changing the content of the information window
        infoWindow.setContent(contentString);
        // Show the information window
        infoWindow.open(map, marker);
    });
}
