// Initialize Firebase
var config = {
  apiKey: "AIzaSyCRSaq9IDjSHw50sM_9fMbgD2jR74DarUA",
  authDomain: "cliptrip-24402.firebaseapp.com",
  databaseURL: "https://cliptrip-24402.firebaseio.com",
  projectId: "cliptrip-24402",
  storageBucket: "cliptrip-24402.appspot.com",
  messagingSenderId: "401198821400"
};

  firebase.initializeApp(config);

  var database = firebase.database();

  var provider = new firebase.auth.GoogleAuthProvider();
  var userId = "";
  var name = "";
  var email = "";
  var categories = ["Belgium", "China", "Czech Republic", "France", "Germany", "Greece", "Italy", "Japan", "The Netherlands", "The Philippines", "The United Kingdom", "The United States"]
  var user = firebase.auth().currentUser;



$("#upload-Button").on("click", function(event) {
  event.preventDefault();

  
  var city = $("#city-Input").val().trim();
  var state = $("#state-Input").val().trim();
  var country = $("#country-Input").val().trim();
  var title = $("#title-Input").val().trim();
  var file = {
    "city": city,
    "state": state,
    "country": country,
    "title": title,
    
  };
    // console.log(file);

    // var uploadTask = storageRef.child(city + state + country + title).put(file);

    // uploadTask.on('state_changed', function(snapshot) {

    //   var progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
    //   console.log('Upload is ' + progress + '% done');
    //   switch (snapshot.state) {
    //     case firebase.storage.TaskState.PAUSED:
    //       console.log('Upload is Paused');
    //       break;
    //     case firebase.storage.TaskState.RUNNING:
    //       console.log('Upload is Running');
    //       break;
    //   }
    // }, function(error) {

    // }, function() {

    //   var downloadURL = uploadTask.snapshot.downloadURL;
    //   console.log(downloadUrl);
    // });
  
   
  var storage = firebase.storage();


  // // Get a reference to the upload location from Firebase storage bucket //
  var locationInformation = Number(new Date());

  //  // Create a storage reference from our storage service
  var storageRef = firebase.storage().ref();

  var photoRef = storageRef.child(title + "_" + city + "_" + country);

  // // Grab button ID and adds content to file_data //
  var file_data = $("#photo-Upload").prop('files')[0];

  //storageRef.put(file_data);

  photoRef.put(file_data);

  console.log(file_data);

  

  // Log these to the console //
  console.log(city);
  console.log(state);
  console.log(country);
  console.log(title);
  // console.log(photoLocation);
  
  database.ref().on("child_added", function(childSnapshot) {

    photoRef.getDownloadURL().then(function(url) {
      console.log('downloadUrl=', url);
      
      console.log(addPhoto);

  database.ref().push({
    city: city,
    state: state,
    country: country,
    title: title,   
    dateAdded: firebase.database.ServerValue.TIMESTAMP,

  });


      var img = $('<img>');
      $(img).attr('src', url);

      $(".germanPhotos").append("<img src=" + img + ">");

    
    // console.log(childSnapshot);

    console.log(childSnapshot.val().city);
    console.log(childSnapshot.val().state);
    console.log(childSnapshot.val().country);
    console.log(childSnapshot.val().title);

    var cityName = (childSnapshot.val().city);
    var stateName = (childSnapshot.val().state);
    var countryName = (childSnapshot.val().country);
    var titleName = (childSnapshot.val().title);

  $(".germanPhotos").append("<img src=" + url + ">" + "<p>" + cityName + "</p>"); 
});
   
  })
 




  });


    $("#loginbutton").on("click", function(event){
    event.preventDefault();
    loginGoogle();
  }); 

    $('#logout-Button').on("click", function(event){
      event.preventDefault();
      window.location = "index.html"
      logout();
  });

  // Logout Function //
  function logout() {
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
  alert("You Are Now Logged Out");
  }).catch(function(error) {
  // An error happened.
  alert("Ooops, Shit Happens & You Didn't Get Logged Out");
  });
  // Redirect back to landing page //
  window.location = 'index.html';

}

  //Login for Google
  function loginGoogle(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);

    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log("Error - " + errorCode + "  " + errorMessage + "  " + email + "  " + credential);
    });

}
 


// function showImage(origin, image) {
  var storageRef = firebase.storage().ref();
  var spaceRef = storageRef.child("Germany/BautzenBunt.jpg");
  spaceRef.getDownloadURL().then(function(url) {
    // var className = origin.toLowerCase();
    $(".germanPhotos").append("<img src= " + url + " >");
    
    // document.querySelector('img').src = url;
  }).catch(function(error) {

    console.error(error);

  });
// };

  function clear() {
    $("#city-Input").val("");
    $("#country-Input").val("");
    $("#title-Input").val("");


  }

 $(".Greece").click(function() {
    window.location.href = "greece.html";
    return false;

})
  $(".Germany").click(function() {
    window.location.href = "germany.html";
    return false;

})
  $(".CzechRep").click(function() {
    window.location.href = "czechrepublic.html";
    return false;

})
    $(".China").click(function() {
    window.location.href = "china.html";
    return false;

})
    $(".France").click(function() {
    window.location.href = "france.html";
    return false;

})
    $(".Italy").click(function() {
    window.location.href = "italy.html";
    return false;

})
    $(".Japan").click(function() {
    window.location.href = "japan.html";
    return false;

})
    $(".Belgium").click(function() {
    window.location.href = "belgium.html";
    return false;

})
    $(".Philippines").click(function() {
    window.location.href = "philippines.html";
    return false;

})
    $(".TheNetherlands").click(function() {
    window.location.href = "netherlands.html";
    return false;

})
    $(".USA").click(function() {
    window.location.href = "usa.html";
    return false;

})
    $(".TheUnitedKingdom").click(function() {
    window.location.href = "uk.html";
    return false;

})


var createImage = function(src, title) {
  var img = new Image();
  img.src = src;
  img.alt = title;
  img.title = title;
  return img;
};

// var greeceImages = ['AthensAcropolisSepia.jpg'];

// greeceImages.push(createImage('../images/Greece/AthensAcropolisSepia.jpg', 'Athens Acropolis'));

// console.log(greeceImages);
// $("div.Greece").append(greeceImages);

$("#upload-Button-Initial").on("click", function(event) {
  $("#userInput").show();
  event.preventDefault();
})


