const mapbox = require("mapbox-gl")

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function(type, coords) {
  const markerDOM = document.createElement("div");
  markerDOM.style.width = "32px";
  markerDOM.style.height = "39px";
  if(type === 'hotels'){
    markerDOM.style.backgroundImage = iconURLs.hotels; 
  }
  if(type === 'restaurants'){
    markerDOM.style.backgroundImage = iconURLs.restaurants;
  }
  if(type === 'activities'){
    markerDOM.style.backgroundImage = iconURLs.activities;
  }
  return new mapbox.Marker(markerDOM).setLngLat(coords)
};

module.exports = buildMarker;
