// typing Effect
const txtElement = ['Daftar Makanan Khas Makassar'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function ngetik() {
    if (count == txtElement.lenght) {
        count = 0;
    }
    currentTxt = txtElement[count];
    words = currentTxt.slice(0, txtIndex++);
    document.querySelector('.efek-ngetik').textContent = words;
    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }
    setTimeout(ngetik, 350);
})();


// dropdown
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
