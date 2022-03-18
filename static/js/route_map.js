
  console.log("route_map js ready")
  // Initialize and add the map
  let poly;
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.525983, lng: -7.340221 },
    zoom: 9,
  });
  poly = new google.maps.Polyline({
    strokeColor: "#000000",
    strokeOpacity: 1.0,
    strokeWeight: 3,
  });
  poly.setMap(map);
  // Add a listener for the click event
  map.addListener("click", addLatLng);

  //const iconBase = 'http://maps.google.com/mapfiles/kml/pal3/'
  const icons = {
    lock: {
      icon: 'http://maps.google.com/mapfiles/kml/paddle/grn-blank-lv.png'
    },
    fuel: {
      icon: 'http://http://maps.google.com/mapfiles/kml/shapes/gas_stations.png'
    },
  }
  const features = [
    {
      position: new google.maps.LatLng(53.732655, -7.904649),
      type: "lock",
    }, 
    {
      position: new google.maps.LatLng(53.724534, -7.905810),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.686965, -7.876356),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.683896, -7.868685),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.651205, -7.847877),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.631413, -7.835907),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.577605, -7.808811),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.581852, -7.676935),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.580104, -7.584278),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.580693, -7.578618),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.580383, -7.561170),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.581682, -7.538080),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.570141, -7.517184),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.562450, -7.504516),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.558451, -7.500372),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.560714, -7.492080),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.559338, -7.488533),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.557904, -7.484824),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.540828, -7.474632),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.537308, -7.472928),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.534702, -7.468046),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.495391, -7.172192),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.495286, -7.167612),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.494350, -7.161583),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.494577, -7.156235),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.495407, -7.150121),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.495041, -7.142572),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.494486, -7.135356),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.495858, -7.127830),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.420270, -6.712443),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.399665, -6.669510),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.391583, -6.647773),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.381133, -6.621494),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.373971, -6.529499),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.382360, -6.366710),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.380699, -6.352137),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.375464, -6.333665),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.375537, -6.316264),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.374775, -6.308784),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.371380, -6.291539),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.365587, -6.276426),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.364573, -6.272586),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.363392, -6.267708),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.362611, -6.264398),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.361622, -6.260115),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.356702, -6.244555),
      type: "lock",
    },
    {
      position: new google.maps.LatLng(53.347982, -6.240508),
      type: "lock",
    }
  ]
  // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      label: "" + (46 - i),
      map: map,
    });
  }
}
// Handles click events on a map, and adds a new point to the Polyline.
function addLatLng(event) {
  const path = poly.getPath();

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(event.latLng);
  // Add a new marker at the new plotted point on the polyline.
  new google.maps.Marker({
    position: event.latLng,
    title: "#" + path.getLength(),
    map: map,
  });
  console.log("Path length = " + path.getLength());
}
