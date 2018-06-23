const compo_list = [
  {
    date: "2012 Dec 10",
    name: "chipWINter",
    info: "Vince Kaichan - Midnight Snowflake. Made in SunVox",
    art: "img/chipwinter_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=1014498065/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=41518200/transparent=true/" seamless><a href="http://chiptuneswin.bandcamp.com/album/chipwinter">chipWINter by Vince Kaichan</a></iframe>`
  },
  {
    date: "2013 Jul 15",
    name: "Chiptunes = WIN: Volume 2",
    info: "Vince Kaichan - Iskloo Dandruff/Morningstar Express. Made in LSDJ",
    art: "img/chipwin_vol2_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=1124851379/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=3645337766/transparent=true/" seamless><a href="http://chiptuneswin.bandcamp.com/album/chiptunes-win-volume-2-2">Chiptunes = WIN: Volume 2 by Vince Kaichan</a></iframe>`
  },
  {
    date: "2014 Sep 1",
    name: "Chiptunes = WIN: Volume 3",
    info: "Vince Kaichan - In The Stars",
    art: "img/chipwin_vol3_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=2932817551/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=1123153428/transparent=true/" seamless><a href="http://chiptuneswin.bandcamp.com/album/chiptunes-win-volume-3">Chiptunes = WIN: Volume 3 by Vince Kaichan</a></iframe>`
  },
  {
    date: "2015 Aug 13",
    name: "STAFFcirc vol. 1",
    info: "Vince Kaichan - Pond Scunk",
    art: "img/staffcirc_vol1_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=3165216901/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://ubiktune.bandcamp.com/album/staffcirc-vol-1">STAFFcirc vol. 1 by Ubiktune</a></iframe>`
  },
  {
    date: "2015 Dec 17",
    name: "DESKTAPE",
    info: "Vince Kaichan - Sunset Riders",
    art: "img/desktape_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=1522277511/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=4008406192/transparent=true/" seamless><a href="http://deskpopmusic.bandcamp.com/album/desktape">DESKTAPE by Vince Kaichan</a></iframe>`
  },
  {
    date: "2015 Dec 22",
    name: "Bundle of WIN",
    info: "Vince Kaichan - Rollerdisco Rumble",
    art: "img/bundle_of_win_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=4073233613/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=2079466551/transparent=true/" seamless><a href="http://chiptuneswin.bandcamp.com/album/bundle-of-win">Bundle of WIN by Vince Kaichan</a></iframe>`
  },
  {
    date: "2016 Jun 6",
    name: "STAFFCIRC vol. 2 - AI BOMB VARIATIONS",
    info: "Vince Kaichan - Bomba da Mente Mecanica",
    art: "img/staffcirc_vol2_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=2373902463/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=3054873907/transparent=true/" seamless><a href="http://sexytoadsandfrogsfriendcircle.bandcamp.com/album/staffcirc-vol-2-ai-bomb-variations">STAFFcirc vol. 2 - AI BOMB VARIATIONS by Vince Kaichan</a></iframe>`
  },
  {
    date: "2017 Feb 22",
    name: "Balearic Beats vol 43 - Chipmusic sounds of summer",
    info: "Vince Kaichan - Unconditional",
    art: "img/balearic_beats_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=1289924032/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=2895950747/transparent=true/" seamless><a href="http://chippanze.bandcamp.com/album/kr075-cp077-balearic-beats-vol-43-chipmusic-sounds-of-summer">[KR075][CP077] Balearic Beats vol 43 - Chipmusic sounds of summer by Vince Kaichan</a></iframe>`
  },
  {
    date: "2017 Jul 26",
    name: "~ fleeting moments ~",
    info: "Vince Kaichan - birb",
    art: "img/fleeting_moments_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=2281353016/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=1735097333/transparent=true/" seamless><a href="http://deskpopmusic.bandcamp.com/album/fleeting-moments">~ fleeting moments ~ by Vince Kaichan</a></iframe>`
  },
  {
    date: "2017 Aug 1",
    name: "STAFFcirc vol. 3⇋: TERMINAL VICE",
    info: "Vince Kaichan - Roll Those Dice!",
    art: "img/staffcirc_vol3_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=1307777530/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/track=3041313973/transparent=true/" seamless><a href="http://sexytoadsandfrogsfriendcircle.bandcamp.com/album/staffcirc-vol-3-terminal-vice">STAFFcirc vol. 3⇋: TERMINAL VICE by Vince Kaichan</a></iframe>`
  },
  {
    date: "2017 Aug 11",
    name: "Chiptunes = WIN: Volume 6",
    info: "Vince Kaichan - Mistral",
    art: "img/chipwin_vol6_200px_.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=1677762460/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://chiptuneswin.bandcamp.com/album/chiptunes-win-volume-6">Chiptunes = WIN: Volume 6 by Chiptunes = WIN</a></iframe>`
  },
];

(function make_compo_table() {
  // TODO: make it so that clicking on art loads embedded player
  let table = document.getElementById("compilations");
  let table_html = `
  <tr> 
    <th>date</th>
    <th>name</th>
    <th>info</th>
    <th>art</th>
  </tr>`;

  for (let compo of compo_list) {
    let formatted_info = compo.info.replace(/\n/g, '<br>')
    table_html += `
    <tr>
      <td>${compo.date}</td>
      <td>${compo.name}</td>
      <td>${formatted_info}</td>
      <td><img src="${compo.art}" alt="${compo.name}"></td>
    </tr>`;
  }

  table.innerHTML = table_html;
})();