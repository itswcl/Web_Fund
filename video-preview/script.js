function videoOnAndOff(element) {
    if (element.paused) {
        element.play();
        element.muted = true;
    } else {
        element.pause();
        element.currentTime = 0;
    }
}