(function make_footer() {
  let footer_div = document.getElementById("footer");
  footer_div.innerHTML = `all songs are <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA 4.0</a> unless otherwise noted<br>`
    + "last updated " + document.lastModified.substring(0, 10);

})();