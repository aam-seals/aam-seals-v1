(function () {
  const SELECTOR_SCREEN = '.screen';
  const SELECTOR_CONTENT_INNER = '.content_inner';
  const SELECTOR_VIDEO = '.video-wrap video';

  let timeline;

  function buildTimeline() {
    timeline = new TimelineMax({
      paused: true,
    });

    timeline
      .to(SELECTOR_SCREEN, 0.2, {
        width: '100vw',
        height: '2px',
        background: '#ffffff',
        ease: Power2.easeOut,
      })
      .to(SELECTOR_SCREEN, 0.2, {
        width: '0',
        height: '0',
        background: '#ffffff',
      });
  }

  function startTVEffect() {
    timeline.restart();
  }

  function hideLoaderAndShowContent() {
    document.querySelector(SELECTOR_SCREEN).style.display = 'none';
    document.querySelector(SELECTOR_CONTENT_INNER).style.display = 'block';
  }

  function initializeVideoLoader() {
    const videoElement = document.querySelector(SELECTOR_VIDEO);

    if (videoElement) {
      videoElement.addEventListener('canplaythrough', () => {
        // Hide loader and show video content when the video is ready
        hideLoaderAndShowContent();
      });

      videoElement.addEventListener('error', () => {
        console.error('Error loading video.');
        hideLoaderAndShowContent(); // Fallback to hide loader if video fails to load
      });
    } else {
      console.warn('Video element not found.');
      hideLoaderAndShowContent(); // Fallback for missing video
    }
  }

  // Automatically start the TV effect and handle video loading
  document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.screen');
  const content = document.querySelector('.content_inner');
  const video = document.querySelector('.video-container video');

  // Listen for the video to be ready to play
  video.addEventListener('canplay', () => {
    // Hide the loader and show the content
    loader.style.display = 'none';
    content.style.display = 'block';
  });

  // Optional: Start playing the video if it's muted and autoplay is enabled
  video.play();
});

  document.addEventListener('DOMContentLoaded', () => {
    buildTimeline();
    startTVEffect();
    initializeVideoLoader();
  });
})();
