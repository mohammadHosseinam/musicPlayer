import musics from "./data/musics.js";
import {creactMusicCart} from "./js/components/creatMusicsCarts/index.js"
import {setCurrentMusic} from "./js/components/setCurrentMusic/index.js";
const musicsContainer = document.querySelector(".musics-container");
const currentMusicCover = document.querySelector(".current-music-cover");
const currentSingerName = document.querySelector(".current-singer-name");
const currentSongName = document.querySelector(".current-song-name");
const audio = document.querySelector("#audio");
const momentTimeNumber = document.querySelector(".moment-time-number");
const fullTimeNumber = document.querySelector(".full-time-number");
const coverPlayButton = document.querySelector(".cover-play-button");
const currentTimeRange = document.querySelector("#current-time-range");
const nowTimleLine = document.querySelector(".now-timle-line");
const previousTrackPlayer = document.querySelector("#previous-track-player");
const nextTrackPlayer = document.querySelector("#next-track-player");
// previousTrackPlayer.addEventListener("click",)



musics().forEach((items) => {
  creactMusicCart(items)
  setCurrentMusic();
});
