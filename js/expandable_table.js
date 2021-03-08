function toggle_table(id) {
  let element = document.getElementById(id);
  if (!element.style.display || element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// for anchor links to table entries
function unhide_table_then_jump() {
  if (!location.hash) return;

  let elem = document.querySelector(location.hash);
  // element -> tbody -> table
  let parent_table = elem.parentNode.parentNode;
  if (!parent_table) return;

  if (!parent_table.style.display || parent_table.style.display === "none") {
    parent_table.style.display = "block";
  }

  elem.scrollIntoView();
}

unhide_table_then_jump(); // handle hash on document load
window.onhashchange = unhide_table_then_jump;

// set table display to none here instead of CSS because ???
//document.getElementById("releases").style.display = 'none';
//document.getElementById("compilations").style.display = 'none';

document.getElementById("releases-toggle").onclick = () => { toggle_table("releases") };
document.getElementById("compos-toggle").onclick = () => { toggle_table("compilations") };
document.getElementById("misc-toggle").onclick = () => { toggle_table("misc-songs") };
document.getElementById("commissions-toggle").onclick = () => { toggle_table("commissions") };
