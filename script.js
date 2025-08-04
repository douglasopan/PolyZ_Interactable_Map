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

// ICONS (custom markers)
const iconCity = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/235/235861.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -30]
});

// MARKERS
const CityMarker = L.marker([812, 1600], { icon: iconCity }).addTo(map).bindPopup('City');

const AirfieldMarker = L.marker([692, 1200]).addTo(map).bindPopup('Airfield');
const AirfieldMarker2 = L.marker([612, 1220]).addTo(map).bindPopup('Faction Establishment');
const ResidentialArea01Marker = L.marker([1025, 1220]).addTo(map).bindPopup('Residential Area');
const ShoppingMallMarker = L.marker([1215, 1410]).addTo(map).bindPopup('Shopping Mall');
const BunkerMarker = L.marker([1300, 1710]).addTo(map).bindPopup('Bunker');
const FactionFarmMarker = L.marker([1500, 1710]).addTo(map).bindPopup('Faction Establishment');
const FactionFarmMarker2 = L.marker([1160, 2140]).addTo(map).bindPopup('Faction Establishment');
const AbandonedFarmMarker = L.marker([1425, 2000]).addTo(map).bindPopup('Abandoned Farm');
const AbandonedFarmMarker2 = L.marker([1425, 1865]).addTo(map).bindPopup('Abandoned Farm');
const SmallTownMarker = L.marker([1425, 1285]).addTo(map).bindPopup('Small Town');
const SmallTownMarker2 = L.marker([930, 2050]).addTo(map).bindPopup('Small Town');
const junkyardmarker = L.marker([660, 2090]).addTo(map).bindPopup('Junkyard');

// Track cursor movement
document.addEventListener('mousemove', function (e) {
  const cursorCloud = document.getElementById('cursorCloud');
  const x = e.clientX;
  const y = e.clientY;

  cursorCloud.style.left = `${x}px`;
  cursorCloud.style.top = `${y}px`;
});

// Go to City Button
document.getElementById('goto-city').addEventListener('click', () => {
  map.setView([812, 1600], 2); // Adjust zoom as needed
});

// Sidebar buttons: center map on button click
const sidebarButtons = document.querySelectorAll('#sidebar-buttons button');
sidebarButtons.forEach(button => {
  button.addEventListener('click', () => {
    const coords = button.getAttribute('data-coords').split(',').map(Number);
    // Set view with zoom 2 (adjust zoom if needed)
    map.setView(coords, 2);
  });
});

/* STEAM API (commented, ready for future use)
async function GetPlayerCount() {
  const url = `https://corsproxy.io/?https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=2735220`;
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.response && data.response.result === 1) {
      const playerCount = data.response.player_count;
      document.getElementById("player-count-widget").innerText =
        `Players Online: ${playerCount}`;
    } else {
      document.getElementById("player-count-widget").innerText =
        "Unable to fetch player count.";
    }
  } catch (error) {
    document.getElementById("player-count-widget").innerText =
      "Error fetching player count.";
  }
}

// GetPlayerCount();
// setInterval(GetPlayerCount, 1000);
*/
