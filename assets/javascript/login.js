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

<<<<<<< HEAD



//
// function signout(){
//       firebase.auth().signOut().then(function() {
//       // Sign-out successful.
//       console.log("Bye");
//       $('html').removeClass('logged-in');
//       sessionStorage.removeItem("userKey");
//       sessionStorage.clear();
//
//       // $("#signInWithGithub").css('visibility', 'visible');
//       // $("#signInWithGithub").show();
//       // $("#signOut").hide();
//       // $(".save-wrap").css('visibility', 'hidden');
//       // $("#displayJobs").css('visibility', 'hidden');
//
//     }).catch(function(error) {
//       // An error happened.
//     });
// }
//
// function initApp() {
//   // Listening for auth state changes.
//   // [START authstatelistener]
//   firebase.auth().onAuthStateChanged(function(user) {
//     // [START_EXCLUDE silent]
//     // [END_EXCLUDE]
//     console.log("Attempted Sign in");
//     console.log(user);
//     if (user) {
//       // User is signed in.
//
//       var uid = user.uid;
//       // window.location = '/saved-jobs.html';
//       console.log(uid);
//     }
//   });
//   // [END authstatelistener]
//
// } // [END initApp()]
//
// window.onload = function() {
//   initApp();
// };
=======
>>>>>>> 9a6027df484715dbb5730a9f6323588b78feebd3
