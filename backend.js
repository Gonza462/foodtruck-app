window.lat = 37.7850;
window.lng = -122.4383;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updatePosition);
    }

    return null;
};

function updatePosition(position) {
    if (position) {
        window.lat = position.coords.latitude;
        window.lng = position.coords.longitude;
    }
}

setInterval(function(){updatePosition(getLocation());}, 10000);

function currentLocation() {
    console.log(window.lng);
    console.log(window.lat);
    return {lat:window.lat, lng:window.lng};
};

var map;
var mark;

var initialize = function() {
    map  = new google.maps.Map(document.getElementById('map-canvas'), {center:{lat:lat,lng:lng},zoom:12});
    mark = new google.maps.Marker({position:{lat:lat, lng:lng}, map:map});
};

window.initialize = initialize;

var redraw = function(payload) {
    lat = payload.message.lat;
    lng = payload.message.lng;

    map.setCenter({lat:lat, lng:lng, alt:0});
    mark.setPosition({lat:lat, lng:lng, alt:0});
};

var pnChannel = "map2-channel";

var pubnub = new PubNub({
    publishKey : "pub-c-74cd6cd5-08af-4a0d-8fd6-09b974c9f4f7",
    subscribeKey : "sub-c-5ecccf6a-ac8a-11e9-b39e-aa7241355c4e"
});

pubnub.subscribe({channels: [pnChannel]});
pubnub.addListener({message:redraw});

setInterval(function() {
    pubnub.publish({channel:pnChannel, message:currentLocation()});
}, 500);