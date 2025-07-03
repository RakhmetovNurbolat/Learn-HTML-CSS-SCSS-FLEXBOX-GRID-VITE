"use strict"

const award = document.querySelector(".award__images");

award.addEventListener("click", () => {
    document.querySelector(".award").remove();
});