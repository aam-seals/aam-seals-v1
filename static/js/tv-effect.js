(function () {
  const SELECTOR_SCREEN = '.screen_tv';
  const SELECTOR_CONTENT_INNER = '.content_tv';

  let timeline;

  // Build the animation timeline
  function buildTimeline() {
    timeline = new TimelineMax({
      paused: true,
    });

    timeline
      .to(SELECTOR_SCREEN, 0.2, {
        width: '300vw',
        height: '6px',
        background: '#ffffff',
        ease: Power2.easeOut,
      })
      .to(SELECTOR_SCREEN, 0.2, {
        width: '0',
        height: '0',
        background: '#ffffff',
      });
  }

  // Start the TV effect animation
  function startTVEffect() {
    // Ensure the timeline starts at the end before reversing
    timeline.progress(1); // Set timeline to its end state
    timeline.reverse(); // Play the animation in reverse (TV "switched on")
  }

  // Hide the loader and show the content
  function hideLoaderAndShowContent() {
    const loader = document.querySelector(SELECTOR_SCREEN);
    const content = document.querySelector(SELECTOR_CONTENT_INNER);

    if (loader) loader.style.display = 'none';
    if (content) content.style.display = 'block';
  }

  // Automatically start the TV effect and transition to GIF
  document.addEventListener('DOMContentLoaded', () => {
    buildTimeline();
    startTVEffect();
  });
})();
