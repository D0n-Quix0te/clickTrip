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

var provider = new firebase.auth.GoogleAuthProvider();

$("#loginbutton").on("click", function() {

firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
});