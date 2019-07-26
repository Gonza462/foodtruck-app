/**
 * Created by LGonzalez on 7/26/19.
 */

function nightMode(){
    //maplook = 'mapbox://styles/mapbox/lightv9';
    nighton = !nighton;
    if(nighton) {
        map.setStyle('mapbox://styles/mapbox/dark-v9');

    }else {
        map.setStyle('mapbox://styles/mapbox/light-v9');

    }

}