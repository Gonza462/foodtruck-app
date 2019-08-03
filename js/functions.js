/**
 * Created by LGonzalez on 7/26/19.
 */

function nightMode(){
    var temp = document.getElementById("burger");
    var temp2 = document.getElementById("user");
    nighton = !nighton;
    if(nighton) {
        map.setStyle('mapbox://styles/mapbox/dark-v9');
        temp.style.color ="white";
        temp2.style.backgroundColor = ""
    }else {
        map.setStyle('mapbox://styles/mapbox/light-v9');
        temp.style.color ="black";
    }
}



$(document).ready(function(){
    $('.menu span:last-child').click(function(){
        $('.menu span').not(':last-child').toggleClass('hidden show') ;
    })
})