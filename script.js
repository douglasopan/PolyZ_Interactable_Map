// Initialize the map
const map = L.map('map', {
  crs: L.CRS.Simple,
  minZoom: 0,
  maxZoom: 5,
  attributionControl: false
});

// Set map bounds
const mapBounds = [[0, 0], [1813, 3224]];
L.imageOverlay('https://polyzmap.vercel.app/assets/map.jpg', mapBounds).addTo(map);
map.setMaxBounds(mapBounds);
map.fitBounds(mapBounds);

// Marker icons
const iconCity = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/235/235861.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30]
});

// Create markers and add to map with popups
const markers = {
  city: L.marker([812, 1600], { icon: iconCity }).addTo(map).bindPopup('City'),
  airfield: L.marker([692, 1200]).addTo(map).bindPopup('Airfield'),
  faction1: L.marker([612, 1220]).addTo(map).bindPopup('Faction Establishment'),
  residential: L.marker([1025, 1220]).addTo(map).bindPopup('Residential Area'),
  shoppingMall: L.marker([1215, 1410]).addTo(map).bindPopup('Shopping Mall'),
  bunker: L.marker([1300, 1710]).addTo(map).bindPopup('Bunker'),
  faction2: L.marker([1500, 1710]).addTo(map).bindPopup('Faction Establishment'),
  faction3: L.marker([1160, 2140]).addTo(map).bindPopup('Faction Establishment'),
  abandonedFarmN: L.marker([1425, 2000]).addTo(map).bindPopup('Abandoned Farm North'),
  abandonedFarmS: L.marker([1425, 1865]).addTo(map).bindPopup('Abandoned Farm South'),
  smallTownE: L.marker([1425, 1285]).addTo(map).bindPopup('Small Town East'),
  smallTownW: L.marker([930, 2050]).addTo(map).bindPopup('Small Town West'),
  junkyard: L.marker([660, 2090]).addTo(map).bindPopup('Junkyard')
};

// Track cursor movement for cursorCloud effect
document.addEventListener('mousemove', e => {
  const cursorCloud = document.getElementById('cursorCloud');
  cursorCloud.style.left = `${e.clientX}px`;
  cursorCloud.style.top = `${e.clientY}px`;
});

// Toggle menu show/hide
const toggleBtn = document.getElementById('toggle-menu-btn');
const sidebarButtons = document.getElementById('sidebar-buttons');

toggleBtn.addEventListener('click', () => {
  sidebarButtons.classList.toggle('open');
  const isOpen = sidebarButtons.classList.contains('open');
  sidebarButtons.setAttribute('aria-hidden', !isOpen);
  toggleBtn.setAttribute('aria-expanded', isOpen);
});

// Close menu if clicking outside (optional)
document.addEventListener('click', (e) => {
  if (
    !sidebarButtons.contains(e.target) &&
    !toggleBtn.contains(e.target) &&
    sidebarButtons.classList.contains('open')
  ) {
    sidebarButtons.classList.remove('open');
    sidebarButtons.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
});

// Center map on sidebar button click & close menu
document.querySelectorAll('#sidebar-buttons button').forEach(button => {
  button.addEventListener('click', () => {
    const coords = button.getAttribute('data-coords').split(',').map(Number);
    map.setView(coords, 2);
    sidebarButtons.classList.remove('open');
    sidebarButtons.setAttribute('aria-hidden', 'true');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });
});
