$('#time-control .total-time').text( totalTime );
  });


  $('button#previous').on('click', function() {
     if (player.playState !== 'playing') { return; }

const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
const nextSongIndex = currentSongIndex - 1;
  if (currentSongIndex >= album.songs.length) { return; }

         const nextSong = album.songs[nextSongIndex];
         player.playPause(nextSong);

});

  $('button#next').on('click', function() {
     if (player.playState !== 'playing') { return; }

      const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
const nextSongIndex = currentSongIndex + 1;
if (nextSongIndex >= album.songs.length) { return; }

         const nextSong = album.songs[nextSongIndex];
         player.playPause(nextSong);
         $('#time-control .total-time').text( player.prettyTime(newSong.duration));

  });

  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });
  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);

  });

$('#time-control input').on('input', function (event){
  player.skipTo(event.target.value);
});

$('#volume-control input').on('input', function (event){
  player.setVolume(event.target.value);
});


  setInterval (  () =>  {
     if (player.playState !== 'playing'){ return; }
    const currentTime = player.getTime();
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control input').val(percent);
}, 1000);
});
