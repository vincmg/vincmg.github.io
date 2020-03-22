const commission_list = [
    {
        "name": "Breaking News! Intro",
        "info": "written for a podcast series by <a href=\"https://octothorpic.com/\">octothorpic</a>",
        "art": "img/octothorpe_200px.jpg",
        "embed": `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=2293678488/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://octothorpic-music.bandcamp.com/album/breaking-news">Breaking News! by Octothorpic</a></iframe>`
    },
    {
      "name": "Gem Blenders Soundtrack",
      "info": "written for the <a href=\"https://www.kickstarter.com/projects/stevesekula/gem-blenders-the-card-game\">Gem Blenders Kickstarter Campaign</a>",
      "art": "img/gem_blenders_200px.jpg",
      "embed": `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=1560225786/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://vincekaichan.bandcamp.com/album/gem-blenders-soundtrack">Gem Blenders Soundtrack by Vince Kaichan</a></iframe>`
    }
];

// have to copy paste this from album_table.js because ES6 module imports are not supported???
function load_bandcamp_embed(element, commission_embed) {
  let td_parent = element.parentElement;
  td_parent.innerHTML = commission_embed;
}

// have to copy paste this from album_table.js because ES6 module imports are not supported???
(function make_commission_table(reverse) {
  let table_list = reverse ? commission_list.reverse() : commission_list;
  let table = document.getElementById("commissions");
  table.innerHTML += `
  <tr> 
    <th>name</th>
    <th>info</th>
    <th>art <br> (click to play)</th>
  </tr>`;

  for (let [index, commission] of table_list.entries()) {
    let formatted_info = commission.info.replace(/\n/g, '<br>')
    table.innerHTML += `
    <tr>
      <td>${commission.name}</td>
      <td>${formatted_info}</td>
      <td>
        <img class="album-art" id="commission_${index}" src="${commission.art}" alt="${commission.name}">
      </td
    </tr>`;
  }
  for (let [index, commission] of table_list.entries()) {
    let img = document.getElementById("commission_" + index);
    img.addEventListener("click", () => {
      load_bandcamp_embed(img, commission.embed);
    });
  }
})();

(function get_commission_count() {
    let commission_count = commission_list.length;
    let count = document.getElementById("commission-count");
    count.innerHTML = `(${commission_count})`;
})();
