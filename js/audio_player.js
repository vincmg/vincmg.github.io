function onplay_callback(event) {
  let current_track_id = event.target.id; 
  let players = document.querySelectorAll("audio");
  for (player of players) {
    if (player.id === current_track_id) {
      continue;
    }
    player.pause();
  }
}

let players = document.querySelectorAll("audio");
for (player of players) {
  player.onplay = onplay_callback;
}
