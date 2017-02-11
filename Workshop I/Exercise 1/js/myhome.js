// myhome.js: Actions should be taken when the webpage is loaded.
// Copyleft 2017 Minyong LI <l630003027@mail.uic.edu.hk>.

/* Adjust the size of the background image. */
var divBgImg = document.getElementById('divBgImg')
if (divBgImg) {
  // "My child asked me whether 20 plus 20 equals to 2020.
  // I think he may be a JavaScript programmer in the future."
  divBgImg.style.width = screen.availWidth + "px";
  divBgImg.style.height = screen.availHeight + "px";
} else {
  alert ("Failed to set size of background image...");
}
