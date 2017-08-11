
function toggle_visibility(userInput) {
   var e = document.getElementById(userInput);
   if(e.style.display == 'block')
      e.style.display = 'none';
   else
      e.style.display = 'block';
}
