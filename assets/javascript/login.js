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


$("#loginbutton").on("click", function(event){
    event.preventDefault();
    loginGoogle(event);
  }); 

$('#logout-Button').on("click", function(){
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
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});


}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
})
 var user = firebase.auth().result.user;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}


