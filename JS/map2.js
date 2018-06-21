var markersData = [
{
        lat: 49.828254,      // Широта
        lng: 23.994680,     // Долгота
        name: "Lviv",       // Произвольное название, которое будем выводить в информационном окне
        address:"м. Львів, вул.Антоновича 102"    // Адрес, который также будем выводить в информационном окне
    }, 
    {
        lat: 48.620800,
        lng: 22.287883,
        name: "Uzhgorod",
        address:" м. Ужгород, пл. Ш.Петефі, 28"
    },
    
    ];


    var map, infoWindow;
    function initMap() {
        var centerLatLng = new google.maps.LatLng(49.828254, 23.994680);
        var mapOptions = {
            center: centerLatLng,
            zoom: 7
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // Создаем объект информационного окна и помещаем его в переменную infoWindow
    // Так как у каждого информационного окна свое содержимое, то создаем пустой объект, без передачи ему параметра content
    infoWindow = new google.maps.InfoWindow();
    // Отслеживаем клик в любом месте карты
    google.maps.event.addListener(map, "click", function() {
        // infoWindow.close - закрываем информационное окно.
        infoWindow.close();
    });
    // Перебираем в цикле все координата хранящиеся в markersData
    for (var i = 0; i < markersData.length; i++){
        var latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
        var name = markersData[i].name;
        var address = markersData[i].address;
        // Добавляем маркер с информационным окном
        addMarker(latLng, name, address);
    }
}
google.maps.event.addDomListener(window, "load", initMap);
// Функция добавления маркера с информационным окном
function addMarker(latLng, name, address) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: name
    });
    // Отслеживаем клик по нашему маркеру
    google.maps.event.addListener(marker, "click", function() {
        // contentString - это переменная в которой хранится содержимое информационного окна.
        var contentString = '<div class="infowindow">' +
        '<h3>' + name + '</h3>' +
        '<p>' + address + '</p>' +
        '</div>';
        // Меняем содержимое информационного окна
        infoWindow.setContent(contentString);
        // Показываем информационное окно
        infoWindow.open(map, marker);
    });
}