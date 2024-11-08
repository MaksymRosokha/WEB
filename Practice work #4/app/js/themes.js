"use strict";

let checkBox = document.querySelector(".checkbox-night-theme");

checkBox.onclick = function () {
    let cssFile = document.getElementById("css");
    if (checkBox.checked == true) {
        cssFile.href = "css/nightApp.min.css";
    } else {
        cssFile.href = "css/app.min.css";
    }
}
