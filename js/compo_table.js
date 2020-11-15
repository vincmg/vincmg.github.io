const compo_list = [
  {
    date: "2012 Apr 21",
    name: "Chip for Cancer vol. 1",
    info: "Vince Kaichan - Neolectrical. made in LSDJ",
    art: "img/chip_for_cancer_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px; display: block; margin: auto;" src="https://bandcamp.com/EmbeddedPlayer/album=3520397300/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=289297633/transparent=true/" seamless><a href="http://chipforcancer.bandcamp.com/album/chip-for-cancer-vol-i">Chip for Cancer [vol. I] by Chip for Cancer</a></iframe>`
  },
  {
    date: "2012 Dec 10",
    name: "chipWINter",
    info: "Vince Kaichan - Midnight Snowflake. made in SunVox",
    art: "img/chipwinter_200px.jpg",
    link: "mp3/vince_kaichan_-_midnight_snowflake.mp3"
  },
  {
    date: "2013 Jan 4",
    name: "Weekly Treats 2013",
    info: "Vince Kaichan - Dog Days. made in LSDJ",
    art: "img/dog_days_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px; display: block; margin: auto;" src="https://bandcamp.com/EmbeddedPlayer/album=4081551513/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=287675554/transparent=true/" seamless><a href="http://weeklytreats.bandcamp.com/album/2013">2013 by Vince Kaichan</a></iframe>`
  },
  {
    date: "2013 Jul 15",
    name: "Chiptunes = WIN: Volume 2",
    info: "Vince Kaichan - Iskloo Dandruff/Morningstar Express. made in LSDJ",
    art: "img/chipwin_vol2_200px.jpg",
    link: "mp3/vince_kaichan_-_iskloo_dandruff_morningstar_express.mp3",
  },
  {
    date: "2014 Sep 1",
    name: "Chiptunes = WIN: Volume 3",
    info: "Vince Kaichan - In The Stars",
    art: "img/chipwin_vol3_200px.jpg",
    link: "mp3/vince_kaichan_-_in_the_stars.mp3",
  },
  {
    date: "2015 Aug 13",
    name: "STAFFcirc vol. 1",
    info: "Vince Kaichan - Pond Scunk",
    art: "img/staffcirc_vol1_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px; display: block; margin: auto;" src="https://bandcamp.com/EmbeddedPlayer/album=3165216901/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://ubiktune.bandcamp.com/album/staffcirc-vol-1">STAFFcirc vol. 1 by Ubiktune</a></iframe>`
  },
  {
    date: "2015 Dec 17",
    name: "DESKTAPE",
    info: "Vince Kaichan - Sunset Riders",
    art: "img/desktape_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px; display: block; margin: auto;" src="https://bandcamp.com/EmbeddedPlayer/album=1522277511/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=4008406192/transparent=true/" seamless><a href="http://deskpopmusic.bandcamp.com/album/desktape">DESKTAPE by Vince Kaichan</a></iframe>`
  },
  {
    date: "2015 Dec 22",
    name: "Bundle of WIN",
    info: "Vince Kaichan - Rollerdisco Rumble",
    art: "img/bundle_of_win_200px.jpg",
    link: "mp3/vince_kaichan_-_rollerdisco_rumble.mp3"
  },
  {
    date: "2016 Jun 6",
    name: "STAFFCIRC vol. 2 - AI BOMB VARIATIONS",
    info: "Vince Kaichan - Bomba da Mente Mecanica",
    art: "img/staffcirc_vol2_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px; display: block; margin: auto;" src="https://bandcamp.com/EmbeddedPlayer/album=2373902463/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=3054873907/transparent=true/" seamless><a href="http://sexytoadsandfrogsfriendcircle.bandcamp.com/album/staffcirc-vol-2-ai-bomb-variations">STAFFcirc vol. 2 - AI BOMB VARIATIONS by Vince Kaichan</a></iframe>`
  },
  {
    date: "2017 Feb 22",
    name: "Balearic Beats vol 43 - Chipmusic sounds of summer",
    info: "Vince Kaichan - Unconditional",
    art: "img/balearic_beats_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px; display: block; margin: auto;" src="https://bandcamp.com/EmbeddedPlayer/album=1289924032/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=2895950747/transparent=true/" seamless><a href="http://chippanze.bandcamp.com/album/kr075-cp077-balearic-beats-vol-43-chipmusic-sounds-of-summer">[KR075][CP077] Balearic Beats vol 43 - Chipmusic sounds of summer by Vince Kaichan</a></iframe>`
  },
  {
    date: "2017 Jul 26",
    name: "~ fleeting moments ~",
    info: "Vince Kaichan - birb",
    art: "img/fleeting_moments_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px; display: block; margin: auto;" src="https://bandcamp.com/EmbeddedPlayer/album=2281353016/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=1735097333/transparent=true/" seamless><a href="http://deskpopmusic.bandcamp.com/album/fleeting-moments">~ fleeting moments ~ by Vince Kaichan</a></iframe>`
  },
  {
    date: "2017 Aug 1",
    name: "STAFFcirc vol. 3⇋: TERMINAL VICE",
    info: "Vince Kaichan - Roll Those Dice!",
    art: "img/staffcirc_vol3_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px; display: block; margin: auto;" src="https://bandcamp.com/EmbeddedPlayer/album=1307777530/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=3041313973/transparent=true/" seamless><a href="http://sexytoadsandfrogsfriendcircle.bandcamp.com/album/staffcirc-vol-3-terminal-vice">STAFFcirc vol. 3⇋: TERMINAL VICE by Vince Kaichan</a></iframe>`
  },
  {
    date: "2017 Aug 11",
    name: "Chiptunes = WIN: Volume 6",
    info: "Vince Kaichan - Mistral",
    art: "img/chipwin_vol6_200px.jpg",
    link: "mp3/vince_kaichan_-_mistral.mp3"
  },
  {
    date: "2018 Dec 7",
    name: "ChipWINter Madness",
    info: "Vince Kaichan - Carriage Ride",
    art: "img/chipwinter_madness_200px.png",
    link: "mp3/vince_kaichan_-_carriage_ride_mastered.mp3"
  },
];

function load_bandcamp_embed(element, compo_embed) {
    let td_parent = element.parentElement;
    td_parent.innerHTML = compo_embed;
}

(function make_compo_table(reverse) {
  let table_list = reverse ? compo_list.reverse() : compo_list;
  let table = document.getElementById("compilations");
  let table_html = `
  <tr> 
    <th>date</th>
    <th>compilation name</th>
    <th>track title</th>
    <th>art <br> (click to play)</th>
  </tr>`;

  for (let [index, compo] of table_list.entries()) {
    let formatted_info = compo.info.replace(/\n/g, '<br>')
    table_html += `
    <tr>
      <td>${compo.date}</td>
      <td>${compo.name}</td>
      <td>${formatted_info}</td>
      <td>
        <img class="album-art" id="compo_${index}" src="${compo.art}" alt="${compo.name}">
      </td>
    </tr>`;
  }
  table.innerHTML = table_html;

  for (let [index, compo] of table_list.entries()) {
    let img = document.getElementById("compo_" + index);
    img.addEventListener("click", () => {
      if (compo.embed === undefined)
      {
        embed_html = img.parentElement.innerHTML + `<br><audio controls src="${compo.link}" preload="none"></audio>`;
      }
      else 
      {
        embed_html = compo.embed;
      }
      load_bandcamp_embed(img, embed_html);
    });
  }
})(true);

(function get_compo_count() {
    let compo_count = compo_list.length;
    let count = document.getElementById("compo-count");
    count.innerHTML = `(${compo_count})`;
})();
