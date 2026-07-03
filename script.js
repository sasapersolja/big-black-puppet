const platformButton = document.getElementById('platformButton');

function scrollToPlatformSection() {
  const listenSection = document.getElementById('listen');
  if (listenSection) {
    listenSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

if (platformButton) {
  platformButton.addEventListener('click', scrollToPlatformSection);
}
