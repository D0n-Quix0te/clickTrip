
firebase.auth().onAuthStateChanged(user => {
  if(user) {
    window.location = 'index2.html'; //After successful login, user will be redirected to home.html
  }
});

