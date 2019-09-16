"use strict";

var pictures = ["try.jpg", "wut.jpg", "muffin.jpg", "thumbsUp.jpg"];

for (var pic of pictures) {
    var img = document.createElement("img");
    img.src = pic;
    img.onclick = function() { document.getElementById('mainPic').src = this.src; };
    img.className = "picture"
    document.getElementById('thumbnail').appendChild(img);
}