'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Guard clauses
  if (!wall || !spider) {
    console.warn('Wall or spider element not found');
    return;
  }

  // Ensure wall is a positioning context
  if (getComputedStyle(wall).position === 'static') {
    wall.style.position = 'relative';
  }

  const centerSpider = () => {
    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const centerX = (wall.clientWidth - spider.offsetWidth) / 2;
    const centerY = (wall.clientHeight - spider.offsetHeight) / 2;

    spider.style.position = 'absolute';
    spider.style.left = centerX + 'px';
    spider.style.top = centerY + 'px';
  };

  // Initial centering
  centerSpider();

  // Recalculate on window resize for responsiveness
  window.addEventListener('resize', centerSpider);
});
