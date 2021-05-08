
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyC0A-FdLOGcYeb4Ok1-W6dXPgf1FBVp6i0",
      authDomain: "kwitter-9aa3b.firebaseapp.com",
      databaseURL: "https://kwitter-9aa3b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9aa3b",
      storageBucket: "kwitter-9aa3b.appspot.com",
      messagingSenderId: "691459726427",
      appId: "1:691459726427:web:eafeb6db0b1e980a8bb37e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !! ";

    function addRoom() {
          room_name = document.getElementById("add_room").value;
          firebase.database().ref("/").child(room_name).update({
          Purpose : "Adding Room Name" 
          }) ;
          localStorage.setItem("room_name" , room_name);
          window.location = "kwitter_page.html";
          }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room Name : " + Room_names);
    row = "<div class='room_name' id = " + Room_names + " onclick='redirectToRoomName(this.id)'> # " + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
});
}
getData();
 
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
