var firebaseConfig = {
    apiKey: "AIzaSyDtKsQH8eBRxMB_MgRRxo6g8PRjwrxB9lo",
    authDomain: "kwitter01-9b7da.firebaseapp.com",
    databaseURL: "https://kwitter01-9b7da-default-rtdb.firebaseio.com",
    projectId: "kwitter01-9b7da",
    storageBucket: "kwitter01-9b7da.appspot.com",
    messagingSenderId: "671642016052",
    appId: "1:671642016052:web:9792dacaac776b3a142d61"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = " Welcome " + user_name + "!!";

  function addRoom()
  {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose : "adding room name"});
      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
  }

  function getData()
  {
      firebase.database().ref("/").on('value' , function (snapshot)
      {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot)
        {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #"+Room_names+" </div><hr><hr>";
            document.getElementById("output").innerHTML = row;
        });
      });
  }

getData();


function redirectToRoomName(name)
{
    console.log(name);

    localStorage.setItem("room_name" , name);


    window.location = "kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name")

    window.location = "index.html";
}