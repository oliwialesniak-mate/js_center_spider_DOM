'use strict';

// Select elements
const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// Calculate centered position
const centerX = (wall.clientWidth - spider.clientWidth) / 2;
const centerY = (wall.clientHeight - spider.clientHeight) / 2;

// Apply positioning
spider.style.position = 'absolute';
spider.style.left = centerX + 'px';
spider.style.top = centerY + 'px';
