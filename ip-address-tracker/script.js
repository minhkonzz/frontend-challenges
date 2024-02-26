document.addEventListener("DOMContentLoaded", function (event) {
   const map = L.map('map').setView([51.505, -0.09], 13);
   const layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
   map.addLayer(layer);
});