// Initialize the map
const map = L.map('map', {
  crs: L.CRS.Simple, // Use simple coordinates for image maps
  minZoom: 0, // Adjust zoom levels as needed
  maxZoom: 5,
  attributionControl: false
});

// Set map bounds
const mapBounds = [[0, 0], [1813, 3224]]; // Example map size
L.imageOverlay('assets/map.jpg', mapBounds).addTo(map);
map.setMaxBounds(mapBounds);
map.fitBounds(mapBounds);


// Add markers
const CityMarker = L.marker([812, 1600]).addTo(map).bindPopup('City');
