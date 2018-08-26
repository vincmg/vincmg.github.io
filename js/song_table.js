const song_list = [
  {
    name: "adirondack",
    info: "song from Midsummer Days that i ended up not including",
    link: "TODO"
  },
  {
    name: "Afterhours",
    info: "first successfully completed song on the C64. made in SIDWizard",
    link: "TODO"
  },
  {
    name: "angelwings",
    info: "harmonic experiment with diatonic cluster chords",
    link: "TODO"
  },
  {
    name: "Celestial Bodies",
    info: "a rock-style song. made in sunvox",
    link: "TODO"
  },
  {
    name: "Coast Starlight",
    info: "song about the time i took the amtrak sleeper car from los angeles to seattle with my family",
    link: "TODO"
  },
  {
    name: "Cool Juice",
    info: "i was inspired from reading the Jazz Theory Book by Mark Levine",
    link: "TODO"
  },
  {
    name: "Cortex",
    info: "i listened to Violin Phase by Steve Reich for the first time and loved it so much i had to sample it and make a short jam",
    link: "TODO"
  },
  {
    name: "crammin jammin [3HB]",
    info: "written during the 3-hour 'demoscene music competition at MAGWest 2017'. won 1st place",
    link: "TODO"
  },
  {
    name: "cruiser [OHB]",
    info: "my entry for a 1-hour battle on the #modulez irc channel. won 1st place",
    link: "TODO"
  },
  {
    name: "crystal ice caves",
    info: "made for an unfinished video game development club project in 2014",
    link: "TODO"
  },
  {
    name: "cyberwinter",
    info: "messing around with the classic Amiga ST-xx sample packs",
    link: "TODO"
  },
  {
    name: "Dakstre",
    info: "written on a high school europe trip. was supposed to segue into PQM. made in LSDJ",
    link: "TODO"
  },
  {
    name: "Darkedge Overworld Theme",
    info: "overworld bgm for a highschool game project",
    link: "TODO"
  }, 
  {
    name: "Days of Future Past",
    info: "made in 1h30m for an informal competition. made with LSDJ",
    link: "TODO"
  },
  {
    name: "Drifting to Dreamland",
    info: "a song made in a very inspired day. made in sunvox",
    link: "TODO"
  },
  {
    name: "EDGELORD main bgm",
    info: "in-game bgm loop for a gamedev club game jam in 2016",
    link: "TODO"
  },
  {
    name: "EDGELORD menu bgm",
    info: "main menu bgm loop for a gamedev club game jam in 2016",
    link: "TODO"
  },
  {
    name: "electric mountain",
    info: "my entry for round 1 of s3xmoditmania V. came in 2nd place",
    link: "TODO"
  },
  {
    name: "electroblight",
    info: "my first song with openmpt ever back in 2012. it's not very good sorry",
    link: "TODO"
  },
  {
    name: "fingerpainting",
    info: "first song with renoise ever, using mostly builtin sounds",
    link: "TODO"
  },
  {
    name: "geoconstruct 1998",
    info: "my entry for round 4 of s3xmoditmania V. came in 1st place",
    link: "TODO"
  },
  {
    name: "Interplanetary Pigeon main bgm",
    info: "main bgm loop for Global Game Jam 2018",
    link: "TODO"
  },
  {
    name: "Going Home",
    info: "a song about homesickness written while i was studying abroad in japan inspired by undertale",
    link: "TODO"
  },
  {
    name: "Golden Lonely",
    info: "an old song about bittersweet sunsets",
    link: "TODO"
  },
  {
    name: "Gotanda Lights",
    info: "a song about drinking alone in a tiny backalley bar in tokyo",
    link: "TODO"
  },
  {
    name: "Hazy Evening",
    info: "my second song with openmpt ever. it's not very good either",
    link: "TODO"
  },
  {
    name: "Hometown Dreams",
    info: "another song about being homesick that i wrote while in japan. i didn't feel homesick at all the entire time i was there btw i was just imagining what it might feel like",
    link: "TODO"
  },
  {
    name: "Horizon",
    info: "a song with an uninspired title",
    link: "TODO"
  },
  {
    name: "instruMENTAL main bgm",
    info: "in-game bgm loop for Global Game Jam 2017",
    link: "TODO"
  },
  {
    name: "Interplanetary Pidgeon main bgm",
    info: "in-game bgm loop for Global Game Jam 2018",
    link: "TODO"
  },
  {
    name: "Jasper Overworld Theme",
    info: "bgm loop for some friends' gamedev club project",
    link: "TODO"
  },
  {
    name: "Jellyfish Floaters",
    info: "a song for an abandoned music game idea i had about being a jellyfish drifting through the sea",
    link: "TODO"
  },
  {
    name: "julaaeeaaee [OHB]",
    info: "a 1-hour battle entry where we had to use samples from the infamous hhgregg commercial",
    link: "TODO"
  },
  {
    name: "Junkstep",
    info: "tried to make fun of the glut of LSDJ dubstep that was everwhere in 2012 but i dunno if the joke is apparent at all. made in LSDJ",
    link: "TODO"
  },
  {
    name: "Kinetic Synthetic",
    info: "written as part of an unfinished 5-song live set with PQM and Dakstre. made in LSDJ",
    link: "TODO"
  },
  {
    name: "Loungy Thing",
    info: "a failed attempt at a dance song",
    link: "TODO"
  },
  {
    name: "Lumine",
    info: "written right after i came back to the US from japan as a goodbye to that chapter of my life",
    link: "TODO"
  },
  {
    name: "Mambo Jambo",
    info: "an outtake from Yolanda. made in LSDJ",
    link: "TODO"
  },
  {
    name: "Metropolis",
    info: "inspired by the dense undulating waves of low-rise and high-rise buildings in tokyo",
    link: "TODO"
  },
  {
    name: "Milky Way",
    info: "performed live at freq.fest.v.5.0 in los angeles and also heard in the joystiq farewell podcast",
    link: "TODO"
  },
  {
    name: "Nomu",
    info: "inspired by the winter/early summer morning fog in southern california",
    link: "TODO"
  },
  {
    name: "oldskoolchip",
    info: "a little sketch imitating the classic amiga/demoscene era chiptune style",
    link: "TODO"
  },
  {
    name: "One Last Dance",
    info: "entry for the Spring Tracks VI competition on Battle of the Bits",
    link: "TODO"
  },
  {
    name: "Orbital",
    info: "a failed attempt at a breakbeat track",
    link: "TODO"
  },
  {
    name: "park bench with little mushroom",
    info: "a song about a park bench with a little mushroom on a warm summer day",
    link: "TODO"
  },
  {
    name: "pog",
    info: "2nd song using renoise, more of a study than a full song",
    link: "TODO"
  },
  {
    name: "PQM",
    info: "a dance song i wrote at 15 years old to be played live but i never did perform it live. made in LSDJ",
    link: "TODO"
  },
  {
    name: "Raydancer",
    info: "a song for an abandoned music game idea i had. this is for a level where you play as a fast and sleek stingray",
    link: "TODO"
  },
  {
    name: "Romanian Winter",
    info: "an experiment in non-A440 tunings (the song is tuned to A460). partly inspired by a romanian drum n bass track that i liked a lot",
    link: "TODO"
  },
  {
    name: "Shakeshack Galaxy",
    info: "a song about burgers in space",
    link: "TODO"
  },
  {
    name: "Solar System Smash bgm",
    info: "in-game bgm loop for a gamedev club game jam in 2015",
    link: "TODO"
  },
  {
    name: "Solitude",
    info: "a song about feeling lonely in a foreign country",
    link: "TODO"
  },
  {
    name: "songbirds' playground",
    info: "i wrote this one afternoon after watching some birds in the local park",
    link: "TODO"
  },
  {
    name: "Suntory",
    info: "made for a C64 demoscene competition but never submitted. made in SIDWizard",
    link: "TODO"
  },
  {
    name: "Swashbuckler Saga",
    info: "my entry for the Wildchip != WIN competition at Battle of the Bits. came in 2nd place",
    link: "TODO"
  },
  {
    name: "The Func",
    info: "written to celebrate going to therapy and successfully climbing out of a mild depression in fall 2016",
    link: "TODO"
  },
  {
    name: "The Jungle",
    info: "musing about living in a crowded, sweaty, shitty city that you can't help but love because of its humanity",
    link: "TODO"
  },
  {
    name: "The VGDC Lounge",
    info: "a re-arrangement of UCI VGDC Theme Song in a latin bossa nova lounge setting",
    link: "TODO"
  },
  {
    name: "The VGDC Rap",
    info: "a re-arrangement of UCI VGDC Theme Song for an pop/trap setting",
    link: "TODO"
  },
  {
    name: "The Wind and The Rain",
    info: "written for Weeklybeats 2014. i didn't last very long before i dropped out",
    link: "TODO"
  },
  {
    name: "trancepiano",
    info: "failed attempt at writing some elwood 90s fasttracker 2 style trance",
    link: "TODO"
  },
  {
    name: "treds vbk",
    info: "a sampling experiment inspired by OK Ikumi. made in sunvox",
    link: "TODO"
  },
  {
    name: "UCI VGDC Theme Song",
    info: "written for gamedev club to use in promotional materials and branding",
    link: "TODO"
  },
  {
    name: "Ultraviolet",
    info: "a re-arrangement of a very old gameboy song from 2011",
    link: "TODO"
  },
  {
    name: "untitled gameboy song",
    info: "written specifically for performing at Square Sounds Tokyo 2015 pre-party",
    link: "TODO"
  },
  {
    name: "Vectorspace Rebel",
    info: "my entry for round 2 of s3xmoditmania V. tied for 3rd place",
    link: "TODO"
  },
  {
    name: "Vengeance Stage 1 Boss bgm",
    info: "in-game boss bgm for a gamedev club game in 2017",
    link: "TODO"
  },
  {
    name: "Vengeance Stage 1 Lava bgm",
    info: "in-game bgm for a gamedev club game in 2017",
    link: "TODO"
  },
  {
    name: "Visions of a Near Future",
    info: "appears in openmpt as a demo track to show off the capabilities of the .mptm format",
    link: "TODO"
  },
  {
    name: "Yesterday Rain",
    info: "a short mood sketch",
    link: "TODO"
  },
  {
    name: "Yosemite Valley",
    info: "thinking about grand nature",
    link: "TODO"
  },
  {
    name: "the Zubmarine Zone",
    info: "inspired by golgi's monkeyball music",
    link: "TODO"
  }
];

// have to copy paste this from album_table.js because ES6 module imports are not supported???
(function make_album_table(reverse) {
  let table_list = reverse ? song_list.reverse() : song_list;
  let table = document.getElementById("misc-songs");
  table.innerHTML += `
  <tr> 
    <th>name</th>
    <th>info</th>
    <th>link</th>
  </tr>`;

  for (let i = 0; i < table_list.length; i++) {
    let song = table_list[i];
    let formatted_info = song.info.replace(/\n/g, '<br>')
    table.innerHTML += `
    <tr>
      <td>${song.name}</td>
      <td>${formatted_info}</td>
      <td><a href="${song.link}">download coming soon</a></td>
    </tr>`;
  }
})(false); // do alphabetical order