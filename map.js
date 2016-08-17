
var map=L.map('map').setView([37.5235,22.3575],11);

L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
maxZoom: 19,attribution:'&copy; OpenStreetMap'}).addTo(map);