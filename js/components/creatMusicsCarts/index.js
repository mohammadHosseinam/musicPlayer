const musicsContainer = document.querySelector(".musics-container");
import {musicCart} from "./musicCart.js";
export function creactMusicCart (items){
   
   musicsContainer.innerHTML += musicCart(items);
} 