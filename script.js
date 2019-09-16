"use strict";

var pictures = ["try.jpg", "wut.jpg", "muffin.jpg", "thumbsUp.jpg"];

for (var pic of pictures) {
    var img = document.createElement("img");
    img.src = pic;
    img.onclick = function() { document.getElementById('mainPic').src = this.src; };
    img.className = "w-25 p-3";
    img.style.width = "25%";
    img.style.padding = "5px";
    document.getElementById('thumbnail').appendChild(img);
}
