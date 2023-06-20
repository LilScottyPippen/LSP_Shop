const openButton = document.getElementById('openButton');
const closeButton = document.getElementById('closeButton');
const fullscreenOverlay = document.getElementById('fullscreenOverlay');

openButton.addEventListener('click', function() {
    fullscreenOverlay.classList.remove('fullscreen-inactive');
    fullscreenOverlay.classList.toggle('fullscreen-active');
});

closeButton.addEventListener('click', function(){
    fullscreenOverlay.classList.remove('fullscreen-active');
    fullscreenOverlay.classList.toggle('fullscreen-inactive');
})