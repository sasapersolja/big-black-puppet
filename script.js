const watchButton = document.getElementById('watchButton');
const heroVideo = document.querySelector('.hero-video');

if (watchButton) {
  watchButton.addEventListener('click', () => {
    if (heroVideo) {
      heroVideo.muted = false;
      heroVideo.volume = 1;
      heroVideo.play().catch(() => {});
    }

    const videoSection = document.getElementById('video');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
