const mapboxgl = require('mapbox-gl');
const buildMarker = require("./marker");

mapboxgl.accessToken = 'pk.eyJ1IjoiY2FsdmluaG8xMjE0IiwiYSI6ImNqb2c4ajFhcDBjazgzcXBmMmp5cnpjcmsifQ.gelbUq9yn-cETfzi7fW4vw';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v10',
center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
zoom: 12, // starting zoom
});

// const markerDOM = document.createElement("div");
// markerDOM.style.width = "32px";
// markerDOM.style.height = "39px";
// markerDOM.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

const marker = buildMarker("hotels", [-74.009, 40.705]);    // or [-87.6354, 41.8885]
marker.addTo(map);

// new mapboxgl.Marker(markerDOM).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago
