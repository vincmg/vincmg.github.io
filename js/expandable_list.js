function toggle_list(id) {
  let element = document.getElementById(id);
  if (!element.style.display || element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// set table display to none here instead of CSS because ???
//document.getElementById("releases").style.display = 'none';
//document.getElementById("compilations").style.display = 'none';

document.getElementById("releases-toggle").onclick = () => { toggle_list("releases") };
document.getElementById("compos-toggle").onclick = () => { toggle_list("compilations") };
document.getElementById("misc-toggle").onclick = () => { toggle_list("misc-songs") };
