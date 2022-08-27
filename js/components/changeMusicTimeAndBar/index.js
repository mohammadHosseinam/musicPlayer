import {cleanTime} from "../../utilities/cleenTime/cleanTime.js"
const momentTimeNumber = document.querySelector(".moment-time-number");
const nowTimleLine = document.querySelector(".now-timle-line");
const audio = document.querySelector("#audio");
export function changeMusicBarAndTimeHandeler() {
    setInterval(() => {
        momentTimeNumber.innerHTML = cleanTime(audio.currentTime);
        const persentOfSong = (audio.currentTime / audio.duration) * 100;
        nowTimleLine.style.width = persentOfSong + "%";
      }, 1000);
}
