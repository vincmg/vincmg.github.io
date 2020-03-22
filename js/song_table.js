let song_list;

(function load_table() {

  let song_table_req = new XMLHttpRequest();
  song_table_req.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      song_list = JSON.parse(this.responseText);
      make_song_table(false); // alphabetical order
      get_misc_count();
    }
  }
  song_table_req.open('GET', 'js/song_list.json', true);
  song_table_req.send();
})();

// have to copy paste this from album_table.js because ES6 module imports are not supported???
function make_song_table(reverse) {
  let table_list = reverse ? song_list.reverse() : song_list;
  let table = document.getElementById("misc-songs");
  table.innerHTML += `
  <tr> 
    <th>name</th>
    <th>info</th>
    <th>link</th>
  </tr>`;

  for (let song of table_list) {
    let formatted_info = song.info.replace(/\n/g, '<br>')
    let link_name = "download";
    if (song.link === undefined) {
      link_name = "no download yet";
    }
    else if (song.link.search(/soundcloud.com/g) != -1) {
      // TODO TODO put soundcloud embed here instead of just a link
      link_name = "soundcloud";
    }
    else {
      // TODO TODO put html5 audio player here
    }

    let link_html = `<a href="${song.link}" download>${link_name}</a>`;
    if (link_name === "no download yet") {
      link_html = "no download yet";
    }

    table.innerHTML += `
    <tr>
      <td>${song.name}</td>
      <td>${formatted_info}</td>
      <td>${link_html}</td>
    </tr>`;
  }
}

function get_misc_count() {
    let misc_count = song_list.length;
    let count = document.getElementById("misc-count");
    count.innerHTML = `(${misc_count})`;
}
