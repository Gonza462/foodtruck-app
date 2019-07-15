


// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

mapboxgl.accessToken = 'pk.eyJ1IjoiYW5uYS1wIiwiYSI6ImNqb2V1Y29vYjIxMm0zcGxlZ2EyOGR6bzYifQ.dxEq0anALJ7E_Z7RoHH5XQ';


// This adds the map to the page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/streets-v11',
  // initial position in [lon, lat] format
  center: [-87.919848, 43.036623],
  // initial zoom
  zoom: 12
});

map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
//map.addControl(new mapboxgl.FullscreenControl());

 //Add geolocate control to the map.

map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
}),'top-right');








var stores =
  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -87.909416,
            43.041069
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
            -87.903379,
            43.052681
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
            -77.043929,
            38.910525
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
            -87.866890,
            43.072681
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
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -87.946490,
            43.036707
          ]
        },
        "properties": {
          "name": "Taco truck",
          "phoneFormatted": "(202) 547-9338",
          "phone": "2025479338",
          "address": "221 Pennsylvania Ave SE",
          "city": "Washington DC",
          "country": "United States",
          "crossStreet": "btwn 2nd & 3rd Sts. SE",
          "postalCode": "20003",
          "state": "D.C."
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -87.911955,
            43.039634
          ]
        },
        "properties": {
          "name": "Taco truck",
          "address": "8204 Baltimore Ave",
          "city": "College Park",
          "country": "United States",
          "postalCode": "20740",
          "state": "MD"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -87.940095,
            43.067230
          ]
        },
        "properties": {
          "name": "Taco truck",
          "phoneFormatted": "(301) 654-7336",
          "phone": "3016547336",
          "address": "4831 Bethesda Ave",
          "cc": "US",
          "city": "Bethesda",
          "country": "United States",
          "postalCode": "20814",
          "state": "MD"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -77.359425054188,
            43.061963
          ]
        },
        "properties": {
          "name": "Taco truck",
          "phoneFormatted": "(571) 203-0082",
          "phone": "5712030082",
          "address": "11935 Democracy Dr",
          "city": "Reston",
          "country": "United States",
          "crossStreet": "btw Explorer & Library",
          "postalCode": "20190",
          "state": "VA"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -87.909896,
            38.880100922392
          ]
        },
        "properties": {
          "name": "Taco truck",
          "phoneFormatted": "(703) 522-2016",
          "phone": "7035222016",
          "address": "4075 Wilson Blvd",
          "city": "Arlington",
          "country": "United States",
          "crossStreet": "at N Randolph St.",
          "postalCode": "22203",
          "state": "VA"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -75.28784,
            40.008008
          ]
        },
        "properties": {
          "name": "Taco truck",
          "phoneFormatted": "(610) 642-9400",
          "phone": "6106429400",
          "address": "68 Coulter Ave",
          "city": "Ardmore",
          "country": "United States",
          "postalCode": "19003",
          "state": "PA"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -75.20121216774,
            39.954030175164
          ]
        },
        "properties": {
          "name": "Taco truck",
          "phoneFormatted": "(215) 386-1365",
          "phone": "2153861365",
          "address": "3925 Walnut St",
          "city": "Philadelphia",
          "country": "United States",
          "postalCode": "19104",
          "state": "PA"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -7.043959498405,
            38.903883387232
          ]
        },
        "properties": {
          "name": "Taco truck",
          "phoneFormatted": "(202) 331-3355",
          "phone": "2023313355",
          "address": "1201 L St. NW",
          "city": "Washington DC",
          "country": "United States",
          "crossStreet": "at 19th St",
          "postalCode": "20036",
          "state": "D.C."
        }
      }
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
  // Check if there is already a popup on the map and if so, remove it
  if(popUps[0]) popUps[0].remove();

  var popup = new mapboxgl.Popup({closeOnClick: true})
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML('<div className="container">'+

        '<div className="card" style="width:200px">'+
          '<img className="card-img-top" src="IndulgeIndiaTruck.jpg" alt="Card image" style="width:100%">'+
            '<div className="card-body">'+
              '<h4 className="card-title">'+'Taco Truck'+'</h4>'+
              '<p className="card-text">'+'</p>'+
              '<a href=http://maps.google.com/maps?saddr=43.077457,-87.882252&daddr=43.090138,-87.976349 className="btn btn-primary stretched-link">'+'directions'+'</a>'+
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
