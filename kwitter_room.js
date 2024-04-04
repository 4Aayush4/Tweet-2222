
var firebaseConfig = {
  apiKey: "AIzaSyDGnfx0GqBzaxd3PzbM_5MWQiA7J1alN7U",
  authDomain: "tweet-51deb.firebaseapp.com",
  databaseURL: "https://tweet-51deb-default-rtdb.firebaseio.com",
  projectId: "tweet-51deb",
  storageBucket: "tweet-51deb.appspot.com",
  messagingSenderId: "190811055160",
  appId: "1:190811055160:web:a57c536f646129a1f832cd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name =localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome" + " " + user_name  + "" + "!";

function addroom()
{
    room_name= document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Room Name"
    });
    localStorage.setItem("room_name",room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
    
}