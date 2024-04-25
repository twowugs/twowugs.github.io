
function orbFest() {
    var orbs = document.getElementsByClassName('orb');

    for (var i = 0; i < orbs.length; i++) {
        var orb = orbs[i];
        var randomNumberX = Math.floor(Math.random() * (window.innerWidth - orb.offsetWidth)); // Generate random X-coordinate
        var randomNumberY = Math.floor(Math.random() * (window.innerHeight - orb.offsetHeight)); // Generate random Y-coordinate

        // Apply the random coordinates to the orb
        orb.style.left = randomNumberX + 'px';
        orb.style.top = randomNumberY + 'px';
    }
}

function setRandomInterval() {
    var delay = Math.floor(Math.random() * (5000 - 2000)) + 2000; // Generate random delay between 2 and 5 seconds
    setInterval(orbFest, delay);
}

setRandomInterval();