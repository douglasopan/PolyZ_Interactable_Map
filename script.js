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


// MAP MARKERS

// City Marker
const CityMarker = L.marker([812, 1600]).addTo(map).bindPopup('City');

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



// Track the cursor movement
document.addEventListener('mousemove', function(e) {
  const cursorCloud = document.getElementById('cursorCloud');
  const x = e.clientX;
  const y = e.clientY;

  // Move the cloud element to the mouse position
  cursorCloud.style.left = `${x}px`;
  cursorCloud.style.top = `${y}px`;
});

//STEAM CURRENT PLAYERS IMPLEMENTATION

// GET player count
async function GetPlayerCount()
{
   
    const url = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=2735220`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        // is valid
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

// Get player count
GetPlayerCount();
setInterval(GetPlayerCount, 1000);

