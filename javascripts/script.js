document.addEventListener('DOMContentLoaded', function() {
  const clickableElements = document.querySelectorAll('.album, .videos-img, .merch');

  clickableElements.forEach(element => {
    element.addEventListener('click', function() {
      const link = this.querySelector('a');
      if (link) {
        window.location.href = link.href;
      }
    });

    element.addEventListener('touchstart', function() {
      const link = this.querySelector('a');
      if (link) {
        window.location.href = link.href;
      }
    });
  });
});