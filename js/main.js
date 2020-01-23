

function myFunction() {
  var popup = document.getElementById("myPopup");
  var pop = document.getElementById("circtruck");
  //pop.classList.toggle("show");
  // popup.classList.toggle("show");
}   // When the user clicks on div, open the popup



// This will let you use the .remove() function later on
if (!('remove' in Element.prototype)) {
  Element.prototype.remove = function() {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}


mapboxgl.accessToken = 'pk.eyJ1IjoiZ29uemE0NjIiLCJhIjoiY2ppZmRieXk2MGxodDNxb2N2ZzVzbWFvZCJ9.1htrThMOpVkVcrWlHg2Bbg';
var maplook =  'mapbox://styles/mapbox/light-v9';
var nighton = false;
// This adds the map to the page
var map = new mapboxgl.Map({
  // container id specified in the HTML
  container: 'map',
  // style URL
  style: maplook,
  // initial position in [lon, lat] format
  center: [-87.919848, 43.036623],
  // initial zoom
  zoom: 11
});
/*
 var geolocate = new mapboxgl.GeolocateControl();

 map.addControl(geolocate);

 geolocate.on('geolocate', function(e) {
 var lon = e.coords.longitude;
 var lat = e.coords.latitude
 var position = [lon, lat];

 });

 */


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



//map.addControl(new mapboxgl.NavigationControl());
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












var ss =
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Taco",
        "coordinates": [
          -87.857736,
          43.057447
        ]
      },
      "properties": {
        "name":"Taqueria Buena Vista",
        "phoneFormatted": "(202) 234-7336",
        "phone": "2022347336",
        "address": "1471 P St NW",
        "city": "Washington DC",
        "country": "United States",
        "lat": "-87.907058",
        "long": "43.089016",
        "crossStreet": "at 15th St NW",
        "postalCode": "20005",
        "state": "D.C."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Taco",
        "coordinates": [
          -87.9363832,
          43.0896164
        ]
      },
      "properties": {
        "name": "Leon Tacos",
        "phoneFormatted": "(202) 507-8357",
        "phone": "2025078357",
        "address": "2221 I St NW",
        "lat": "-87.9363832",
        "long": "43.0896164",
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
        "type": "Neutral",
        "coordinates": [
          -87.9135968,
          43.0712009
        ]
      },
      "properties": {
        "name": "Jamaican Maican",
        "phoneFormatted": "(202) 387-9338",
        "phone": "2023879338",
        "address": "1512 Connecticut Ave NW",
        "city": "Washington DC",
        "lat": "-87.9135968",
        "long": "43.0712009",
        "country": "United States",
        "crossStreet": "at Dupont Circle",
        "postalCode": "20036",
        "state": "D.C."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Zocalo",
        "coordinates": [
          -87.9177079,
          43.0243749
        ]
      },
      "properties": {
        "name": "Zocalo Food Park",
        "phoneFormatted": "(202) 337-9338",
        "phone": "2023379338",
        "address": "3333 M St NW",
        "city": "Washington DC",
        "lat": "-87.9177079",
        "long": "43.0243749",
        "country": "United States",
        "crossStreet": "at 34th St NW",
        "postalCode": "20007",
        "state": "D.C."
      }
    },



  ]
};




  console.log("here"+ ss.features[0]);







map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addSource('places', {
    type: 'geojson',
    data: ss
  });

  buildLocationList(ss);

});

map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addSource("places", {
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
      console.log("HERE" + clickedListing);
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

//get user coordinates
function createPopUp(currentFeature) {
  console.log(currentFeature);
  navigator.geolocation.getCurrentPosition(function (position) {
    var ln = position.coords.longitude;
    var lt = position.coords.latitude;

//Function to display popup features
    var popUps = document.getElementsByClassName('mapboxgl-popup');

    popUps.onclick = myFunction();

    var ts = currentFeature.geometry.coordinates;


    // Check if there is already a popup on the map and if so, remove it
    if (popUps[0]) popUps[0].remove();


    var popup = new mapboxgl.Popup({closeOnClick: true})
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML('<div onclick = "myFunction()" className="container">' +

            '<div className="card" style="width:140px">' +


            '<div className="card-body">' +
            '<h7 className="card-title">' + currentFeature.properties.name +
            '<h9>' + ' online' + '</h9>' + '</h7>' +
            '<p className="card-text">' + '</p>' +
            '</div>' +
            '</div>' +
            '</div>' + '<div className="popup">' + '<span className="popuptext" id="myPopup">' +
            '<a id = "mapholder" href= http://maps.google.com/maps?saddr=' + lt+ ","+ ln + '&daddr=' + currentFeature.properties.long + ',' + currentFeature.properties.lat + '>' +
            '<button style = "background-color: #4CAF50;  border: none; color: white; padding: 5px 18px; border-radius: 16px; text-align: center;display: inline-block;" className="button">' + 'Go' + '</button>' + '</a>' + '</span>' +
            '<div id="circtruck">' + '<img src="images/Webp.net-resizeimage.png">' + '</div>' +
            '</div>'
        ).addTo(map);
  });



}

/*
  // Create a div element for the markerc
  var el = document.createElement('div');
  // Add a class called 'marker' to each div
  el.className = 'marker';
  // By default the image for your custom marker will be anchored
  // by its center. Adjust the position accordingly
  // Create the custom markers, set their position, and add to map
  var tlong = currentLocation().lng;
  var tlat = currentLocation().lat;
  new mapboxgl.Marker(el, {offset: [0, -23]})
      .setLngLat([tlong, tlat])
      .addTo(map);

*/

//// Add an event listener for when a user clicks on the map
ss.features.forEach(function (marker) {
  var d = new Date();
  var status = document.getElementById("status");

  if(d.getHours() >=24){

    status.innerText = 'offline';
    status.style.color = 'red';
    return;
  }


  var ob = [];
  ob.push(window.lng, window.lat);
  //console.log(ob);
  // Create a div element for the markerc
  var el = document.createElement('div');
  // Add a class called 'marker' to each div
  el.className = 'marker';


  // By default the image for your custom marker will be anchored
  // by its center. Adjust the position accordingly
  // Create the custom markers, set their position, and add to map


  if(marker.geometry.type=="Taco"){
    el.style.backgroundImage =  "url('images/taco-truck_42x42.png')";
  }else if(marker.geometry.type=="Burger"){
    el.style.backgroundImage = "url('images/burgertruck_42x42.png')";
  }else if(marker.geometry.type=="Eastern"){
    el.style.backgroundImage = "url('images/falafel.png')";
  }else if(marker.geometry.type=="Zocalo"){
    el.style.backgroundImage = "url('images/food-truck_zo_42x42.png')";
  } else{
    el.style.backgroundImage = "url('images/food-trucks_42x42.png')";
  }

  // console.log(ob);
  new mapboxgl.Marker(el, {offset: [0, -23]})
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  el.addEventListener('click', function (e) {
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

//// Add an event listener for when a user clicks on the map
stores.features.forEach(function (marker) {
  var d = new Date();
  var status = document.getElementById("status");

  if(d.getHours() >=24){

    status.innerText = 'offline';
    status.style.color = 'red';
    return;
  }


  var ob = [];
  ob.push(window.lng, window.lat);
  //console.log(ob);
  // Create a div element for the markerc
  var el = document.createElement('div');
  // Add a class called 'marker' to each div
  el.className = 'marker';


  // By default the image for your custom marker will be anchored
  // by its center. Adjust the position accordingly
  // Create the custom markers, set their position, and add to map


  if(marker.geometry.type=="Taco"){
    el.style.backgroundImage =  "url('images/taco-truck_42x42.png')";
  }else if(marker.geometry.type=="Burger"){
    el.style.backgroundImage = "url('images/burgertruck_42x42.png')";
  }else if(marker.geometry.type=="Eastern"){
    el.style.backgroundImage = "url('images/falafel.png')";
  }else if(marker.geometry.type=="Zocalo"){
    el.style.backgroundImage = "url('images/food-truck_zo_42x42.png')";
  } else{
    el.style.backgroundImage = "url('images/food-trucks_42x42.png')";
  }

  // console.log(ob);
  new mapboxgl.Marker(el, {offset: [0, -23]})
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);
  el.addEventListener('click', function (e) {
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


function burger(){
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');
  var by = document.getElementById('by');

  // burger.style.padding = '1px 0px 0vw 0vw';
  links.style.display = 'flex';
  quit.style.display = 'inline';
}

function quit(){
  var burger = document.getElementById('burger');
  var links = document.getElementById('links');
  var quit = document.getElementById('quit');


  //burger.style.padding = '2px 0px 0px 0px';
  links.style.display = 'none';
  quit.style.display = 'none';
}

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-46156385-1', 'cssscript.com');
ga('send', 'pageview');

