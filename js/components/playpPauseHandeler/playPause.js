let isShown = true;
export function playPauseHandeler(btnSpan){
    btnSpan.addEventListener("click", () => {
        if (isShown) {
          audio.pause();
          btnSpan.innerHTML = `<svg id="play-icon" width="183" height="170"  viewBox="0 0 183 170" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M132.684 92.3876L60.0932 131.188C53.9327 134.478 46.0269 130.495 46.0269 123.863V46.262C46.0269 39.641 53.9213 35.6475 60.0932 38.9474L132.684 77.748C134.085 78.485 135.25 79.5503 136.06 80.8358C136.87 82.1213 137.297 83.5813 137.297 85.0678C137.297 86.5543 136.87 88.0144 136.06 89.2999C135.25 90.5854 134.085 91.6506 132.684 92.3876Z" fill="#F2F2F2" />                         
                        </svg>`;
          isShown = false;
        } else {
          audio.play();
          btnSpan.innerHTML = `<svg width="84" height="94" viewBox="0 0 84 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 0C19.9272 0 23.9332 1.65059 26.8869 4.58866C29.8406 7.52673 31.5 11.5116 31.5 15.6667V78.3333C31.5 82.4884 29.8406 86.4733 26.8869 89.4113C23.9332 92.3494 19.9272 94 15.75 94C11.5728 94 7.56676 92.3494 4.61307 89.4113C1.65937 86.4733 8.80271e-08 82.4884 0 78.3333V15.6667C0 11.5116 1.65937 7.52673 4.61307 4.58866C7.56676 1.65059 11.5728 0 15.75 0V0ZM68.25 0C72.4272 0 76.4332 1.65059 79.3869 4.58866C82.3406 7.52673 84 11.5116 84 15.6667V78.3333C84 82.4884 82.3406 86.4733 79.3869 89.4113C76.4332 92.3494 72.4272 94 68.25 94C64.0728 94 60.0668 92.3494 57.1131 89.4113C54.1594 86.4733 52.5 82.4884 52.5 78.3333V15.6667C52.5 11.5116 54.1594 7.52673 57.1131 4.58866C60.0668 1.65059 64.0728 0 68.25 0Z" fill="#F2F2F2"/>
                        </svg>`;
          isShown = true;
        }
      });
}
