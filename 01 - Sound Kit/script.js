function playSound(keyCode){
    let audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e){
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(k => {
    k.addEventListener("transitionend", removeTransition);
    k.addEventListener("click", e => playSound(k.getAttribute('data-key')));
});

window.addEventListener('keydown', e => playSound(e.keyCode));