const mutedBtn = document.querySelector(".mutedBtn");
const audio = new Audio("img/sound.mp3");

function audioPlay(event){
    if(mutedBtn.classList.contains("playing")){
        audio.pause();
        mutedBtn.style.backgroundImage = "url(../img/mute.png)";
        mutedBtn.classList.remove("playing");
    }else{
        audio.play();
        mutedBtn.style.backgroundImage = "url(../img/volume.png)";
        mutedBtn.classList.add("playing");
    }
}

mutedBtn.addEventListener("click", audioPlay);