const currentTimeRange = document.querySelector("#current-time-range");
const audio = document.querySelector("#audio");
export function musicProgressBarHandeler() {
  currentTimeRange.max = audio.duration;
  currentTimeRange.addEventListener("click", (e) => {
    audio.currentTime = e.target.value;
    const persentOfSong = (audio.currentTime / audio.duration) * 100;
    nowTimleLine.style.width = persentOfSong + "%";
  });
}
