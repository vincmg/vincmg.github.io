const commission_list = [
    {
        "name": "Breaking News! Intro",
        "info": "written for a podcast series by <a href=\"https://octothorpic.com/\">octothorpic</a>",
        "link": "https://octothorpic-music.bandcamp.com/album/breaking-news"
    },
    {
      "name": "Gem Blenders Soundtrack",
      "info": "written for the <a href=\"https://www.kickstarter.com/projects/stevesekula/gem-blenders-the-card-game\">Gem Blenders Kickstarter Campaign</a>",
      "link": "https://vincekaichan.bandcamp.com/album/gem-blenders-soundtrack"
    }
];

// have to copy paste this from album_table.js because ES6 module imports are not supported???
(function make_commission_table(reverse) {
  let table_list = reverse ? commission_list.reverse() : commission_list;
  let table = document.getElementById("commissions");
  table.innerHTML += `
  <tr> 
    <th>name</th>
    <th>info</th>
    <th>link</th>
  </tr>`;

  for (let commission of table_list) {
    let formatted_info = commission.info.replace(/\n/g, '<br>')
    let link_name = "download";
    if (commission.link === "TODO") {
      link_name = "no download yet";
    } else if (commission.link.search(/soundcloud.com/g) != -1) {
      link_name = "soundcloud";
    }
    table.innerHTML += `
    <tr>
      <td>${commission.name}</td>
      <td>${formatted_info}</td>
      <td><a href="${commission.link}" download>${link_name}</a></td>
    </tr>`;
  }
})();

(function get_commission_count() {
    let commission_count = commission_list.length;
    let count = document.getElementById("commission-count");
    count.innerHTML = `(${commission_count})`;
})();
