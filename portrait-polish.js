/* Photo frame guard for both SPA routes: home carousel and team profiles.
   Does not modify source photographs or a person's facial features. */
(function () {
  'use strict';
  const app = document.getElementById('app');
  if (!app) return;
  const selector = '.clinicians-home .clinician-card > img, .team-page .team-profile > img';
  function keepPortraitsWhole() {
    app.querySelectorAll(selector).forEach(img => {
      if (img.parentElement && img.parentElement.classList.contains('portrait-frame')) return;
      const frame = document.createElement('span');
      frame.className = 'portrait-frame';
      const photo = img.getAttribute('src') || '';
      // The page controls these paths. Avoid embedding unexpected CSS characters.
      if (/^\/images\/clinicians\/[\w-]+\.webp(?:\?[^"'\\]*)?$/.test(photo)) {
        frame.style.setProperty('--portrait-src', 'url("' + photo.replace(/["\\\\]/g, '') + '")');
      }
      img.parentNode.insertBefore(frame, img);
      frame.appendChild(img);
    });
  }
  const observer = new MutationObserver(keepPortraitsWhole);
  observer.observe(app, {childList:true,subtree:true});
  keepPortraitsWhole();
})();
