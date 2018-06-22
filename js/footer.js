(function make_footer() {
  let footer_div = document.getElementById("footer");
  footer_div.innerHTML = "last updated " + document.lastModified.substring(0, 10);
})();