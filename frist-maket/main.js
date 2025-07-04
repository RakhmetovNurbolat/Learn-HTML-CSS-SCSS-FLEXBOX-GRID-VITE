"use strict"

const award = document.querySelector(".award__images");

award.addEventListener("click", () => {
    document.querySelector(".award").remove();
});

const btnClickVideo = document.getElementById("content__btn2");

const video = document.getElementById("content__videos");

function openVideo(){
    video.play();
}

btnClickVideo.addEventListener("click", () => {
    openVideo();
});