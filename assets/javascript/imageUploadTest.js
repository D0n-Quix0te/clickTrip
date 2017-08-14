var config = {
  apiKey: "AIzaSyCRSaq9IDjSHw50sM_9fMbgD2jR74DarUA",
  authDomain: "cliptrip-24402.firebaseapp.com",
  databaseURL: "https://cliptrip-24402.firebaseio.com",
  projectId: "cliptrip-24402",
  storageBucket: "cliptrip-24402.appspot.com",
  messagingSenderId: "401198821400"
};
firebase.initializeApp(config);

  // Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
var imagesRef = storageRef.child('images');
// imagesRef now points to 'images'
var provider= new firebase.auth.GoogleAuthProvider();
var user;
var selectedFile;


$("#file").on("change", function(event) {
  selectedFile = event.target.files[0];
  $("#uploadButton").show();
});

function uploadFile() {
  // Create a root reference
  var filename = selectedFile.name;
  var storageRef = firebase.storage().ref('/userImages/' + filename);
  var uploadTask = storageRef.put(selectedFile);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on('state_changed', function(snapshot){
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded

  }, function(error) {
    // Handle unsuccessful uploads
  }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...

    console.log(downloadURL);
  });

}
