console.log('heyeyeyeyeyeyeyeyeyye');

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken =
	'pk.eyJ1IjoidmVyeXNwcnkiLCJhIjoiY2ppbTN2c3dnMDAzbTNxbzJqN2xlOTlmcCJ9.La_7vHSyG2W6g0etA5YqXQ';
var map = new mapboxgl.Map({
	container: document.getElementById('map'),
	style: 'mapbox://styles/mapbox/streets-v10',
	center: [-87.641, 41.895],
	zoom: 12
});

const mapMarkerDOM = document.createElement('div');
mapMarkerDOM.className = ' mapMarker';

new mapboxgl.Marker(mapMarkerDOM).setLngLat([-87.641, 41.895]).addTo(map);
