const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const iconURLs = {
	hotels: 'url(http://i.imgur.com/D9574Cu.png)',
	restaurants: 'url(http://i.imgur.com/cqR6pUI.png)',
	activities: 'url(http://i.imgur.com/WbMOfMl.png)'
};

const buildMarker = (type, coords) => {
	let mapMarkerDOM = document.createElement('div');
	mapMarkerDOM.className = ' mapMarker';

	if (type === 'hotel') {
		mapMarkerDOM.style.backgroundImage = iconURLs.hotels;
	} else if (type === 'restaurant') {
		mapMarkerDOM.style.backgroundImage = iconURLs.restaurants;
	} else {
		mapMarkerDOM.style.backgroundImage = iconURLs.activities;
	}
	return new mapboxgl.Marker(mapMarkerDOM).setLngLat(coords);
};

module.exports = buildMarker;
