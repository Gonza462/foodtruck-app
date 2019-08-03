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
    //var fire = firebase.database().ref().child("Users").child("Location");
    var fire = firebase.database().ref().child("Users").child("Buena Vista");
    console.log(fire);
    fire.push().set("69.2222,333.22222");


}