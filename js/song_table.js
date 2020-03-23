let song_list;

(function load_table() {

  let song_table_req = new XMLHttpRequest();
  song_table_req.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      song_list = JSON.parse(this.responseText);
      make_song_table(); // alphabetical order
      get_misc_count();
    }
  }
  song_table_req.open('GET', 'js/song_list.json', true);
  song_table_req.send();
})();

function song_date_comp(a, b) {
  if (a.date === b.date) {
    return 0;
  }
  // TODO TODO will this play nice with "unknown" and questionmark dates
  if (a.date > b.date) {
    return -1;
  }
  if (a.date < b.date) {
    return 1;
  }
}
// have to copy paste this from album_table.js because ES6 module imports are not supported???
function make_song_table() {
  let table_list = song_list.sort(song_date_comp);
  let table = document.getElementById("misc-songs");
  let table_html = `
  <tr> 
    <th>year</th>
    <th>name</th>
    <th>info</th>
    <th>link</th>
  </tr>`;

  for (let song of table_list) {
    let formatted_info = song.info.replace(/\n/g, '<br>')
    let link_name = "download";
    let link_html = `error`;

    if (song.link === undefined) {
      link_html = "no download yet";
    }
    else if (song.link.search(/soundcloud.com/g) != -1) {
      // TODO TODO put soundcloud embed here instead of just a link
      link_html = `<a href="${song.link}" download>soundcloud</a>`;
    }
    else {
      link_html = `<audio controls src="${song.link}" preload="none"></audio>`;
    }

    table_html += `
    <tr>
      <td>${song.date}</td>
      <td>${song.name}</td>
      <td>${formatted_info}</td>
      <td>${link_html}</td>
    </tr>`;
  }

  table.innerHTML = table_html;
}

function get_misc_count() {
    let misc_count = song_list.length;
    let count = document.getElementById("misc-count");
    count.innerHTML = `(${misc_count})`;
}
