// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCRSaq9IDjSHw50sM_9fMbgD2jR74DarUA",
//   authDomain: "cliptrip-24402.firebaseapp.com",
//   databaseURL: "https://cliptrip-24402.firebaseio.com",
//   projectId: "cliptrip-24402",
//   storageBucket: "cliptrip-24402.appspot.com",
//   messagingSenderId: "401198821400"
// };

// firebase.initializeApp(config);



var database = firebase.database();

  var userId = "";
  var name = "";
  var email = "";

  database.ref().on("value",function(snapshot) {
  console.log(snapshot.val().userId);
  console.log(snapshot.val().name);
  console.log(snapshot.val().email);

  })

  var user = firebase.auth().currentUser;

if (user != null) {
  user.providerData.forEach(function (profile) {
    console.log("Sign-in provider: " + profile.providerId);
    console.log("  Provider-specific UID: " + profile.uid);
    console.log("  Name: " + profile.displayName);
    console.log("  Email: " + profile.email);
    console.log("  Photo URL: " + profile.photoURL);
  });
}



$("#upload-Button").on("click", function(event) {
  event.preventDefault();

    // Get a reference to the storage service, which is used to create references in your storage bucket
  var storage = firebase.storage();

  // Get a reference to the upload location from Firebase storage bucket //
  var timestamp = Number(new Date());

  // Create a storage reference from our storage service
  var storageRef = firebase.storage().ref(timestamp.toString());

  // Grab button ID and adds content to file_data //
  var file_data = $("#photo-Upload").prop('files')[0];

  storageRef.put(file_data);
})
// Gets current username ///
// var user = firebase.auth().currentUser;

// Create a storage ref w/ username //
// var storageRef = firebase.storage().ref(user + '/profilePicture/' + file.name);

// Upload file //
// var task = storageRef.put(file);

// service firebase.storage {
//   match /b/<your-firebase-storage-bucket>/o {
//     match /{userId}/profilePicture/{fileName} {
//       // Anyone can read
//       allow read;
//       // Only the user can upload their own profile picture
//       // Profile picture must be of content-type "image/*"
//       allow write: if request.auth.uid == userId
//                    && request.resource.contentType.matches('image/.+');
//     }
//   }
// }
// })