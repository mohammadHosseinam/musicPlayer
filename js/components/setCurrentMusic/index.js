import musics from "../../../data/musics.js";
import { playIcone } from "../playIcone/index.js";
import { musicProgressBarHandeler } from "../musicProgressBARhandeler/index.js";
import {cleanTime} from "../../utilities/cleenTime/cleanTime.js"
import {changeMusicBarAndTimeHandeler} from "../changeMusicTimeAndBar/index.js";
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
const shuffleMusics = document.querySelector("#shuffle-musics");
const repeatMusic = document.querySelector("#repeat-music");
const volumeInput = document.querySelector("#volume-input");
const volumeProgressBar = document.querySelector(".volume-progress-bar");


let indexOfCurrentMusic = 0;
let repeatMusicState = false
function updateCrrentMusicUi(song) {
  currentMusicCover.style.backgroundImage = `url(${song.cover})`;
  currentSingerName.innerHTML = song.artist;
  currentSongName.innerHTML = song.name;
  audio.src = song.audio;
  audio.play().then(() => {
    setInterval(() => {
      const min = ("0" + Math.round(audio.currentTime / 60)).slice(-2);
      const sec = ("0" + Math.round(audio.currentTime % 60)).slice(-2);
      momentTimeNumber.innerHTML = `${min} : ${sec}`;
      const persentOfSong = (audio.currentTime / audio.duration) * 100;
      nowTimleLine.style.width = persentOfSong + "%";
    }, 1000);
    currentTimeRange.max = audio.duration;
    currentTimeRange.addEventListener("click", (e) => {
      audio.currentTime = e.target.value;
      const persentOfSong = (audio.currentTime / audio.duration) * 100;
      nowTimleLine.style.width = persentOfSong + "%";
    });
    const min = ("0" + Math.round(audio.duration / 60)).slice(-2);
    const sec = ("0" + Math.round(audio.duration % 60)).slice(-2);
    fullTimeNumber.innerHTML = `${min} : ${sec}`;
  });
  coverPlayButton.innerHTML = "";
  const btnSpan = document.createElement("span");
  btnSpan.innerHTML = `<svg width="84" height="94" viewBox="0 0 84 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.75 0C19.9272 0 23.9332 1.65059 26.8869 4.58866C29.8406 7.52673 31.5 11.5116 31.5 15.6667V78.3333C31.5 82.4884 29.8406 86.4733 26.8869 89.4113C23.9332 92.3494 19.9272 94 15.75 94C11.5728 94 7.56676 92.3494 4.61307 89.4113C1.65937 86.4733 8.80271e-08 82.4884 0 78.3333V15.6667C0 11.5116 1.65937 7.52673 4.61307 4.58866C7.56676 1.65059 11.5728 0 15.75 0V0ZM68.25 0C72.4272 0 76.4332 1.65059 79.3869 4.58866C82.3406 7.52673 84 11.5116 84 15.6667V78.3333C84 82.4884 82.3406 86.4733 79.3869 89.4113C76.4332 92.3494 72.4272 94 68.25 94C64.0728 94 60.0668 92.3494 57.1131 89.4113C54.1594 86.4733 52.5 82.4884 52.5 78.3333V15.6667C52.5 11.5116 54.1594 7.52673 57.1131 4.58866C60.0668 1.65059 64.0728 0 68.25 0Z" fill="#F2F2F2"/>
                  </svg>
                  `;
  coverPlayButton.appendChild(btnSpan);
  btnSpan.style.display = "inline";
  btnSpan.addEventListener("click", () => {
    if (btnSpan.style.display === "inline") {
      audio.pause();
      btnSpan.innerHTML = `<svg id="play-icon" width="183" height="170"  viewBox="0 0 183 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M132.684 92.3876L60.0932 131.188C53.9327 134.478 46.0269 130.495 46.0269 123.863V46.262C46.0269 39.641 53.9213 35.6475 60.0932 38.9474L132.684 77.748C134.085 78.485 135.25 79.5503 136.06 80.8358C136.87 82.1213 137.297 83.5813 137.297 85.0678C137.297 86.5543 136.87 88.0144 136.06 89.2999C135.25 90.5854 134.085 91.6506 132.684 92.3876Z" fill="#F2F2F2" />                         
                          </svg>`;
      btnSpan.style.display = "inline-block";
    } else {
      audio.play();
      btnSpan.innerHTML = `<svg width="84" height="94" viewBox="0 0 84 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.75 0C19.9272 0 23.9332 1.65059 26.8869 4.58866C29.8406 7.52673 31.5 11.5116 31.5 15.6667V78.3333C31.5 82.4884 29.8406 86.4733 26.8869 89.4113C23.9332 92.3494 19.9272 94 15.75 94C11.5728 94 7.56676 92.3494 4.61307 89.4113C1.65937 86.4733 8.80271e-08 82.4884 0 78.3333V15.6667C0 11.5116 1.65937 7.52673 4.61307 4.58866C7.56676 1.65059 11.5728 0 15.75 0V0ZM68.25 0C72.4272 0 76.4332 1.65059 79.3869 4.58866C82.3406 7.52673 84 11.5116 84 15.6667V78.3333C84 82.4884 82.3406 86.4733 79.3869 89.4113C76.4332 92.3494 72.4272 94 68.25 94C64.0728 94 60.0668 92.3494 57.1131 89.4113C54.1594 86.4733 52.5 82.4884 52.5 78.3333V15.6667C52.5 11.5116 54.1594 7.52673 57.1131 4.58866C60.0668 1.65059 64.0728 0 68.25 0Z" fill="#F2F2F2"/>
                          </svg>`;
      btnSpan.style.display = "inline";
    }
  });
}
const handelNextMusic = function () {
  if(repeatMusicState ) return updateCrrentMusicUi(musics()[indexOfCurrentMusic]);
  if(indexOfCurrentMusic === (musics().length - 1)){
    indexOfCurrentMusic = 0
    updateCrrentMusicUi(musics()[indexOfCurrentMusic]);
  }else{
    indexOfCurrentMusic++;
    updateCrrentMusicUi(musics()[indexOfCurrentMusic]);
  }
}
audio.onended = handelNextMusic
repeatMusic.onclick = function () {
  repeatMusicState = !repeatMusicState
}
nextTrackPlayer.addEventListener("click", () => {
  handelNextMusic()
});
previousTrackPlayer.addEventListener("click", () => {
  if(indexOfCurrentMusic ===  0){
    indexOfCurrentMusic = (musics().length - 1)
    updateCrrentMusicUi(musics()[indexOfCurrentMusic]);
  }else{
    indexOfCurrentMusic--;
    updateCrrentMusicUi(musics()[indexOfCurrentMusic]);
  }
});
shuffleMusics.onclick = function () {
  let randomMusic = Math.floor(Math.random() * musics().length)
  updateCrrentMusicUi(musics()[randomMusic]);
}
audio.volume = 0.6
volumeInput.onchange = function () {
  audio.volume = volumeInput.value/10
  volumeProgressBar.style.width = ""+ volumeInput.value*10 +"%"
  console.log(volumeProgressBar.style.width);
}
export function setCurrentMusic() {
  const songs = [...musicsContainer.children].forEach((songElemment) => {
    songElemment.addEventListener("click", () => {
      indexOfCurrentMusic = musics().findIndex(
        (item) => item.id === parseInt(songElemment.dataset.id)
      );
      const CurrentMusic = musics().filter(
        (item) => item.id === parseInt(songElemment.dataset.id)
      )[0];
      currentMusicCover.style.backgroundImage = `url(${CurrentMusic.cover})`;
      currentSingerName.innerHTML = CurrentMusic.artist;
      currentSongName.innerHTML = CurrentMusic.name;
      audio.src = CurrentMusic.audio;
      audio.play().then(() => {
        changeMusicBarAndTimeHandeler()
        musicProgressBarHandeler();
        fullTimeNumber.innerHTML = cleanTime(audio.duration);
      });
      playIcone();
    });
  });
}
