const releases_list = [
  {
    date: "2011 Oct 31",
    name: "[PB053] Focal Point",
    info: `Made with LSDJ. Released on PxlBot.

    Tracklist:
      1. Introduction [2xLSDJ]
      2. Waking Up in the Perseids
      3. Surmounting the Highest of Peaks
      4. Warp Speed
      5. Focal Point
      6. New Beginnings Past Old Endings, or How I Learned to Love Life
      7. Stars and Skies Forever
      8. At Peace (Bonus Track)
    `,
    art: "img/focal_point_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=2179651411/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://vcmg.bandcamp.com/album/pb053-focal-point">[PB053] Focal Point by VCMG</a></iframe>`
  },
  {
    date: "2012 Mar 13",
    name: "Journey",
    info: `Made with LSDJ.

    Tracklist:
      1. Magma Mountain
      2. Dream Flight
      3. Escape!
      4. Island Breeze
      5. Victory Flower Fields
      6. Comms Relay
      7. Farewell`,
      art: "img/journey_200px.jpg",
      embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=1777657369/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://vincekaichan.bandcamp.com/album/journey">Journey by Vince Kaichan</a></iframe>`
  },
  {
    date: "2012 May 27",
    name: "Earthshine",
    info: `Made with Sunvox.

    Tracklist:
      1. Earthshine 1
      2. Earthshine 2
      3. Lune 1
      4. Lune 2`,
    art: "img/earthshine_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=2104456738/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://vincekaichan.bandcamp.com/album/earthshine">Earthshine by Vince Kaichan</a></iframe>`
  },
  {
    date: "2012 Aug 24",
    name: "On Thin Air",
    info: `Made with Sunvox.

    Tracklist:
      1. Northern Lights
      2. Summit
      3. Binary Lake
      4. Floating on Thin Air`,
    art: "img/on_thin_air_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=2904628331/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://vincekaichan.bandcamp.com/album/on-thin-air">On Thin Air by Vince Kaichan</a></iframe>`
  },
  {
    date: "2013 Mar 14",
    name: "Rising",
    info: `Made with LSDJ.

    Tracklist:
      1. Dusk
      2. Rising
      3. Latino Sango
      4. Rose-Tinted Glasses
      5. Walkie Talkie
      6. Restless
      7. Shadowdances
      8. Dawn
    `,
    art: "img/rising_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=3166464315/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://vincekaichan.bandcamp.com/album/rising">Rising by Vince Kaichan</a></iframe>`
  },
  {
    date: "2014 Jan 25",
    name: "Ilio",
    info: `Made with LSDJ.

    Tracklist:
      1. Iremia
      2. Kazan
      3. Saraday
      4. Dubpark
      5. Syntomodial
      6. By the Way
      7. Sailboat
      8. Iliova
      9. Shiosai
      10. Galaxies (Bonus Track)`,
    art: "img/ilio_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=508154942/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://vincekaichan.bandcamp.com/album/ilio">Ilio by Vince Kaichan</a></iframe>`
  },
  {
    date: "2014 Aug 11",
    name: "Yolanda",
    info: `Made with LSDJ. Released on The Waveform Generators.

    Tracklist:
      1. Yolanda
      2. Viverra
      3. Novaton
      4. Omiero`,
    art: "img/yolanda_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=829773174/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://vincekaichan.bandcamp.com/album/yolanda">Yolanda by Vince Kaichan</a></iframe>`
  },
  {
    date: "2015 Apr 30",
    name: "Sunday Groove",
    info: `Made with OpenMPT. Released on Cheapbeats.

    Tracklist:
      1. C Jones
      2. F Phunk
      3. Sideway Street
      4. Soul Trekker
      5. Hometown Dreams
      6. By The Fireplace`,
    art: "img/sunday_groove_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=3162550582/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://cheapbeatsmusic.bandcamp.com/album/sunday-groove">Sunday Groove by Vince Kaichan</a></iframe>`
  },
  {
    date: "2015 July 13",
    name: "Power Tricks",
    info: `Made with LSDJ. Released on Cheapbeats.

    Tracklist:
      1. Illjoy
      2. Core Corrupt
      3. Ignition 8
      4. Drag Strike
      5. Arc Electric
      6. Stormsong`,
    art: "img/power_tricks_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=3573188025/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://cheapbeatsmusic.bandcamp.com/album/power-tricks">Power Tricks by Vince Kaichan</a></iframe>`
  },
  {
    date: "2016 Nov 11",
    name: "Midsummer Days",
    info: `Made with OpenMPT. Released on DESKPOP.

    Tracklist:
      1. Shangri-La Dreaming
      2. Mirage
      3. Cruising Deep Pacifica
      4. Sunshower Meteorite
      5. Harvest Moon
      6. Hopscotch '97
      7. Ice Tea Lemonade (Bonus Track)`,
    art: "img/midsummer_days_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=550935571/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://vincekaichan.bandcamp.com/album/midsummer-days">Midsummer Days by Vince Kaichan</a></iframe>`
  },
  {
    date: "2018 Apr 30",
    name: "DOUBLE TAKE - 4MEN430",
    info: `4MEN430 is Vince Kaichan x golgi x j yoshi x Sinc-X. 
    Made with OpenMPT.

    Tracklist:
      1. Return to the Boneyard
      2. Overture to a Great Day
      3. The Earth is a Hecatonicosachoron
      4. Hello Goodbye
      5. Blast Me Off
      6. すべての欲望 / All Your Desire
      7. Hyperspace Vortex 17
      8. Multiversal Superhighway`,
    art: "img/double_take_200px.jpg",
    embed: `<iframe style="border: 0; width: 200px; height: 200px;" src="https://bandcamp.com/EmbeddedPlayer/album=720785494/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless><a href="http://iiiypad.bandcamp.com/album/double-take">DOUBLE TAKE by 4MEN430</a></iframe>`
  },
];

(function make_album_table(reverse) {
  let table_list = reverse ? releases_list.reverse() : releases_list;
  // TODO: make it so that clicking on art loads embedded player
  let table = document.getElementById("releases");
  let table_html = `
  <tr> 
    <th>date</th>
    <th>name</th>
    <th>info</th>
    <th>art</th>
  </tr>`;

  for (let release of table_list) {
    let formatted_info = release.info.replace(/\n/g, '<br>')
    table_html += `
    <tr>
      <td>${release.date}</td>
      <td>${release.name}</td>
      <td>${formatted_info}</td>
      <td><img src="${release.art}" alt="${releases.name}"></td>
    </tr>`;
  }

  table.innerHTML = table_html;
})(true);