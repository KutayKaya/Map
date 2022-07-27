var map = L.map('map').setView([0, 0], 1);

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
        maxZoom: 19,
	    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
     }).addTo(map);
     
L.marker([39.00149, 35.69959]).addTo(map);

var popup = L.popup()
            .setLatLng([39.00149, 35.69959])
            .setContent('Popup')
            .openOn(map);

function onMapClick(e) 
    {
        popup.setLatLng(e.latlng)
        .setContent('' + e.latlng.toString())
        .openOn(map);
    };

map.on('click', onMapClick);
document.getElementById('lat').textContent = latitude;
document.getElementById('lng').textContent = longitude;
document.getElementById('datetime').textContent = datetime;
getmap();