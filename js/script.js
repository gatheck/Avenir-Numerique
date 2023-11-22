function overlay() {
  el = document.getElementById("popup");
  el.style.display = el.style.display == "block" ? "none" : "block";
}

function close() {
  document.getElementById("popup").style.display = "none";
}
