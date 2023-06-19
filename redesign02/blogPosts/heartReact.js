function toggleHeartReact() {
    var heart = document.getElementById("heart");
    if (heart.style.display === "inline-block") {
        heart.style.display = "none";
        var red = document.getElementById("heart-red");
        red.style.display = "inline-block";
    } else {
        heart.style.display = "inline-block";
        var red = document.getElementById("heart-red");
        red.style.display = "none";
    }
}

function setReact() {
    heart = document.getElementById("heart");
    heart.style.display = "inline-block";
}

  