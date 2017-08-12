
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

  $("#loginbutton").on("click", function(event){
    event.preventDefault();
    loginGoogle();
  }); 


  $('#signOut').on("click", function(){
    signout();
  });



//Login for Google
function loginGoogle(){
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      user = result.user;


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



var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: "+profile.providerId);
    console.log("  Provider-specific UID: "+profile.uid);
    console.log("  Name: "+profile.displayName);
    console.log("  Email: "+profile.email);
    console.log("  Photo URL: "+profile.photoURL);
  });
}


// // Register the callback to be fired every time auth state changes
// ref.onAuth(function(authData) {
//   if (authData) {
//     console.log("User " + authData.uid + " is logged in with " + authData.provider);
//   } else {
//     console.log("User is logged out");
//   }
// });


