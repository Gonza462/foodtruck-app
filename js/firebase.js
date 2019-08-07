/**
 * Created by LGonzalez on 7/28/19.
 */

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAu5I5Q2RluSyZIx82QT4cWaDvcKAws_CE",
    authDomain: "foodtruckmke.firebaseapp.com",
    databaseURL: "https://foodtruckmke.firebaseio.com",
    projectId: "foodtruckmke",
    storageBucket: "",
    messagingSenderId: "564773849232",
    appId: "1:564773849232:web:e7e44d987bd3394b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function updateStores(){

    //get from database
    var fire = firebase.database().ref().child("Users").push().key;
    //var fire = firebase.database().ref().child("Users");
    console.log(fire);
   // fire.push().set("69.2222,333.22222");

   // var ref = firebase.database();
    // ref = database.ref().child("Users");
   // ref.on('Value',gotData,errData);
    //console.log(stores.features[0]);


}
function gotData(data) {
    var drawings = data.val();
    var keys = Object.keys(drawings);
    for(var i = 0; i<keys.length; i++){
        var key = key[i];
        console.log(key);
    }
}
function errData(err){
    console.log(err);
}