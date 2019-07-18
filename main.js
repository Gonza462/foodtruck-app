


// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}


mapboxgl.accessToken = 'pk.eyJ1IjoiZ29uemE0NjIiLCJhIjoiY2ppZmRieXk2MGxodDNxb2N2ZzVzbWFvZCJ9.1htrThMOpVkVcrWlHg2Bbg';


// This adds the map to the page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/gonza462/cjy5xxr440uvz1cn2wt9u4n8m',
  // initial position in [lon, lat] format
  center: [-87.919848, 43.036623],
  // initial zoom
  zoom: 11
});
var geolocate = new mapboxgl.GeolocateControl();

map.addControl(geolocate);

geolocate.on('geolocate', function(e) {
  var lon = e.coords.longitude;
  var lat = e.coords.latitude
  var position = [lon, lat];
  console.log(position);
});






map.on("load", function() {
  var heatmap = new HexgridHeatmap(map, "hexgrid-heatmap", "waterway-label");

  heatmap.setIntensity(15);
  heatmap.setSpread(0.3);
  heatmap.setData(sightseeingPOIs);
  heatmap.update();
  heatmap.setColorStops([
    [0, "rgba(0,185,243,0)"],
    [50, "rgba(0,185,243,0.5)"],
    [130, "rgba(255,223,0,0.6)"],
    [200, "rgba(255,105,0,0.6)"]
  ])
});



map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
//map.addControl(new mapboxgl.FullscreenControl());

//Add geolocate control to the map.

/*map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
}),'top-right');
*/







var stores =
    {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -87.907058,
              43.089016
            ]
          },
          "properties": {
            "name":"Taqueria Aranda's",
            "phoneFormatted": "(202) 234-7336",
            "phone": "2022347336",
            "address": "1471 P St NW",
            "city": "Washington DC",
            "country": "United States",
            "crossStreet": "at 15th St NW",
            "postalCode": "20005",
            "state": "D.C."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -87.9363832,
              43.0896164
            ]
          },
          "properties": {
            "name": "Taco truck",
            "phoneFormatted": "(202) 507-8357",
            "phone": "2025078357",
            "address": "2221 I St NW",
            "city": "Washington DC",
            "country": "United States",
            "crossStreet": "at 22nd St NW",
            "postalCode": "20037",
            "state": "D.C."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -87.9135968,
              43.0712009
            ]
          },
          "properties": {
            "name": "Taco truck",
            "phoneFormatted": "(202) 387-9338",
            "phone": "2023879338",
            "address": "1512 Connecticut Ave NW",
            "city": "Washington DC",
            "country": "United States",
            "crossStreet": "at Dupont Circle",
            "postalCode": "20036",
            "state": "D.C."
          }
        },
        {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [
              -87.9178313,
              43.0242337
            ]
          },
          "properties": {
            "name": "Taco truck",
            "phoneFormatted": "(202) 337-9338",
            "phone": "2023379338",
            "address": "3333 M St NW",
            "city": "Washington DC",
            "country": "United States",
            "crossStreet": "at 34th St NW",
            "postalCode": "20007",
            "state": "D.C."
          }
        },

      ]
    };

map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addSource('places', {
    type: 'geojson',
    data: stores
  });

  buildLocationList(stores);
});

function buildLocationList(data) {
  // Iterate through the list of stores
  for(i=0; i < data.features.length; i++) {
    var currentFeature = data.features[i];

    // Shorten data.feature.properties to just `prop` so we're not
    // writing this long form over and over again.
    var prop = currentFeature.properties;

    // Select the listing container in the HTML and append a div
    // with the class 'item' for each store
    var listings = document.getElementById('listings');
    var listing = listings.appendChild(document.createElement('div'));
    listing.className = 'item';
    listing.id = 'listing' + i;

    // Create a new link with the class 'title' for each store
    // and fill it with the store address
    var link = listing.appendChild(document.createElement('a'));
    link.href = '#';
    link.className = 'title';
    link.dataPosition = i;
    link.innerHTML = prop.address;
    // Add an event listener for the links in the sidebar listing
    link.addEventListener('click', function(e) {
      // Update the currentFeature to the store associated with the clicked link
      var clickedListing = data.features[this.dataPosition];
      // 1. Fly to the point associated with the clicked link
      flyToStore(clickedListing);
      // 2. Close all other popups and display popup for clicked store
      createPopUp(clickedListing);
      // 3. Highlight listing in sidebar (and remove highlight for all other listings)
      var activeItem = document.getElementsByClassName('active');
      if (activeItem[0]) {
        activeItem[0].classList.remove('active');
      }
      this.parentNode.classList.add('active');
    });

    // Create a new div with the class 'details' for each store
    // and fill it with the city and phone number
    var details =listing.appendChild(document.createElement('div'));
    details.innerHTML = prop.city;
    if(prop.phone) {
      details.innerHTML += ' &middot; ' + prop.phoneFormatted;
    }
  }
}



//Function to fly to the correct store
function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 15
  });
}

//Function to display popup features
function createPopUp(currentFeature) {
  var popUps = document.getElementsByClassName ('mapboxgl-popup');
  popUps.src = "foodmarker.png";
  popUps.onclick = myFunction();
  // Check if there is already a popup on the map and if so, remove it
  if(popUps[0]) popUps[0].remove();

  var popup = new mapboxgl.Popup({closeOnClick: true})
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<div onclick = "myFunction()" className="container">'+

          '<div onclick = "myFunction()" className="card" style="width:140px">'+


          '<div className="card-body">'+
          '<h7 className="card-title">'+'Taco Truck'+
          '<h9>' + '- online'+ '</h9>'+'</h7>'+
          '<p className="card-text">'+'</p>'+
          '</div>'+
          '</div>'+
          '</div>'


      )




      .addTo(map);


}

//// Add an event listener for when a user clicks on the map

stores.features.forEach(function(marker) {
  // Create a div element for the marker
  var el = document.createElement('div');
  // Add a class called 'marker' to each div
  el.className = 'marker';
  // By default the image for your custom marker will be anchored
  // by its center. Adjust the position accordingly
  // Create the custom markers, set their position, and add to map
  new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  el.addEventListener('click', function(e) {
    var activeItem = document.getElementsByClassName('active');
    // 1. Fly to the point
    flyToStore(marker);
    // 2. Close all other popups and display popup for clicked store
    createPopUp(marker);
    // 3. Highlight listing in sidebar (and remove highlight for all other listings)
    e.stopPropagation();
    if (activeItem[0]) {
      activeItem[0].classList.remove('active');
    }

    var listing = document.getElementById('listing-' + i);
    console.log(listing);
    listing.classList.add('active');
  });
});
