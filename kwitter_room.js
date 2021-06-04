var firebaseConfig = {
    apiKey: "AIzaSyBn0StmP8t7K56C86fAWqvX2MkKBShIGhA",
    authDomain: "quit-twitter-5eb6e.firebaseapp.com",
    databaseURL: "https://quit-twitter-5eb6e-default-rtdb.firebaseio.com",
    projectId: "quit-twitter-5eb6e",
    storageBucket: "quit-twitter-5eb6e.appspot.com",
    messagingSenderId: "981572635217",
    appId: "1:981572635217:web:ea3f3eb4bb3dc0de828670"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}