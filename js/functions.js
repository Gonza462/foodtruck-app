/**
 * Created by LGonzalez on 7/26/19.
 */

function nightMode(){
    var temp = document.getElementById("burger");
    nighton = !nighton;
    if(nighton) {
        map.setStyle('mapbox://styles/mapbox/dark-v9');
        temp.style.color ="white";
    }else {
        map.setStyle('mapbox://styles/mapbox/light-v9');
        temp.style.color ="black";
    }
}