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

  var storageRef = firebase.storage().ref();
  var spaceRef = storageRef.child('Germany/BautzenBunt.jpg');
  spaceRef.getDownloadURL().then(function(url) {
    document.querySelector('.images').src = url;
  }).catch(function(error) {

    console.error(error);
  })